
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { IoIosNotifications } from "react-icons/io";


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
        <div className="h-screen bg-[#1b1b1b] w-screen flex flex-col">
            <div className="h-12 border-b-2 border-[#6A00F4] shadow-sm shadow-[#6A00F4] px-4 items-center justify-between flex  w-full">
                <h1 className="text-white text-2xl font-bold p-2">Welcome, {user.user_metadata.name}</h1>
                <div className="flex items-center gap-x-4">
                    <IoIosNotifications className="text-white cursor-pointer text-3xl" />
                    <img className="w-10 h-10 rounded-full cursor-pointer" src={user.user_metadata.avatar_url} alt="avatar" />
                </div>
            </div> 
            <div className="h-full w-full flex">
                <div className="h-full w-[15%] border-r-2 border-[#6A00F4] gap-y-3 flex flex-col shadow-sm shadow-[#6A00F4]">
                    <p className="text-white inter text-xl ">Dashboard</p>
                    <p className="text-white inter text-xl">portfolio</p>
                    <p className="text-white inter text-xl">analytics</p>
                    <p className="text-white inter text-xl">Blogs</p>
                    <p className="text-white inter text-xl">Subscription</p>
                </div>
                <div className="h-full w-[85%]  flex flex-col gap-y-2 items-center justify-center">
                    <h1 className="text-white text-3xl font-bold">Dashboard</h1>
                </div>
            </div>Dashboard
        </div>
    );
}