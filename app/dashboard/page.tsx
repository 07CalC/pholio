import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";





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
        <div className="h-screen w-screen text-white text-5xl flex justify-center items-center">
            <h1>Under Construction</h1>
        </div>
    );
}