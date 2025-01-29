import { NextResponse } from "next/server";




export async function POST(req:Request) {
   
    const data = (req.headers);
    console.log(req.headers.get('x-forwarded-host'))

    return NextResponse.json({message: "ok"}, {status: 200})
}