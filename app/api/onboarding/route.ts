import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    const body = await req.json()

    const contentToInsert = {
        displayname: body.displayname,
        age: body.age,
        gender: body.gender,
        displayimage: body.displayimage,
        professionaltitle: body.professionaltitle,
        description: body.description,
        contactemail: body.contactemail,
        contactphone: body.contactphone
    }

    console.log(body)
    
    
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if(!user){
        return NextResponse.json({message: "not logged in"}, {status: 401})
    }
   
    const userId = user.id

    const { error: insertUserNameError } = await supabase.from('user_profile').update({ username: body.username }).match({ id: userId })
    if(insertUserNameError){
        return NextResponse.json({message: "internal server error" + insertUserNameError}, {status: 401})
    }

    const { data } = await supabase.from('portfolio').select('id').match({ user_id: userId }).single()
    if(data?.id){
        const { error } = await supabase.from('user_profile').update({ onboarding: true }).match({ id: userId })
        console.log(error)
        return NextResponse.json({message: "user already has a portfolio"}, {status: 200})
    }

    const { error } = await supabase.from('portfolio').insert({ user_id: userId, template: body.template })

    if(!error){
        const { error } = await supabase.from('user_profile').update({ onboarding: true }).match({ id: userId })
        if(error){
            console.log(error)
        }
    }

    if(error){
        console.log(error)
    }

    const { data: { id } }: any = await supabase.from('portfolio').select('id').match({user_id: userId}).single()
    const { error: insertSectionError } = await supabase.from('section').insert({content: contentToInsert, portfolio_id: id, type: "intro"})
    if(insertSectionError){
        console.log(insertSectionError)
    }
    return NextResponse.json({message: "ok"}, {status: 200})
}