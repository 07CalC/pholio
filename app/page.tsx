
import React from "react";
import { createClient } from "@/utils/supabase/server";
import { logout } from "./login/actions";
import Link from "next/link";


 
export default async function Home() {
  const supabase = await createClient()
  const user = await supabase.auth.getUser()

  return (
    <div className="w-full h-screen flex flex-col gap-y-6 justify-center items-center bg-transparent">
        {user.data.user && <p>logged in as {user.data.user?.user_metadata.name}</p>}
        {user.data.user && <p>{user.data.user.email} {user.data.user.id}</p>}
        {user.data.user && <form action={logout}> <button>Logout</button></form>}
        {user.data.user && <img src={user.data.user?.user_metadata.avatar_url} alt="avatar" className="w-1/4" />}
        {!user.data.user && <Link className="text-white" href={"/login"}>Login</Link>}
      </div>
  );
}
