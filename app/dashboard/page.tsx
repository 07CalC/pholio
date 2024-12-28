
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { inter } from "../fonts/Fonts";
import { MdDashboard } from "react-icons/md";


export default async function Dashboard() {
    const supabase = await createClient()
    const { data: { user }} = await supabase.auth.getUser()

    if(!user){
        return redirect('/login')
    }

    const { data } = await supabase.from('user_profile').select('onboarding').eq('id', user.id).single()
    if(!data?.onboarding){
        return redirect('/onboarding')
    }


    return (
        <div className={`h-screen bg-[#1b1b1b] w-screen flex flex-col ${inter.className}`}>
            <div className="h-full w-full flex">
                <div className="h-full w-[15%] p-10 fixed border-r-2 border-[#7a7a7a] gap-y-3 flex flex-col shadow-sm shadow-[#6A00F4]">
                    <p className="text-[#9c9c9c] flex items-center justify-between text-lg "><MdDashboard />Dashboard</p>
                    <p className="text-white  text-lg">portfolio</p>
                    <p className="text-white  text-lg">analytics</p>
                    <p className="text-white  text-lg">Blogs</p>
                    
                </div>
                <div className="h-full w-[15%]"></div>
                <div className="h-full w-[85%]  flex flex-col gap-y-2 items-center justify-center">
                    <h1 className="text-white text-3xl font-bold">Dashboard</h1>
                </div>
            </div>
        </div>
    );
}
