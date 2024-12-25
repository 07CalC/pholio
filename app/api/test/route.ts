import { NextResponse } from "next/server"



export async function POST(req: Request){
    const body = await req.json()
    console.log(body)
    return NextResponse.json({message: "ok"}, {status: 200})
}