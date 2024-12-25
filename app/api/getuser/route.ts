import { createClient } from "@/utils/supabase/server"
import { NextResponse } from "next/server"



export async function POST(req:Request){
    const body = await req.json()
    const userName = body.username
    const supabase = await createClient()

    // const { data: { id: userId } }: any = await supabase.from('user_profile').select('id').match({ username: userName as string }).single()
    // const { data: { id: portfolioId, template, sections } }: any = await supabase.from('portfolio').select('id, template, sections').match({ user_id: userId }).single()
    // const { data: { content: sectionContent } }: any = await supabase.from('section').select('content').match({ portfolio_id: portfolioId }).single()
    // console.log( sections )

    // return NextResponse.json({id: userId, template: template, content: sectionContent}, {status: 200})

    const { data } = await supabase
    .from('user_profile')
    .select(
        'username, portfolio(id, template, section(type, content))'
    )
    .eq('username', userName)
    .single()


    const structuredData = data?.portfolio?.[0]?.section?.reduce((acc: Record<string, any>, section) => {
        acc[section.type] = section.content
        return acc
    }, {})

    console.log(structuredData)

    return NextResponse.json({data: structuredData}, {status:200})
}