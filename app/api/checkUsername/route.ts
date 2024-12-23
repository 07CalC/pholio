import { createClient } from "@/utils/supabase/server"
import { NextResponse } from "next/server"


export async function POST(req: Request){
    const body = await req.json()
    const username = body.username

    const supabase = await createClient()

    const { data }: any = await supabase.from('user_profile').select('id').eq('username', username).single()
    if(data?.id){
        return NextResponse.json(false, {status: 200})
    }
    return NextResponse.json(true, {status: 200})

}