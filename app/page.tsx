
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/app/components/ui/lamp";
import { image } from "framer-motion/client";
import { createClient } from "@/utils/supabase/server";
import { logout } from "./login/actions";
import Link from "next/link";


 
export default async function Home() {
  const supabase = await createClient()
  const user = await supabase.auth.getUser()

  return (
    <div className="w-full h-screen flex flex-col gap-y-6 justify-center items-center bg-white">
        {user.data.user && <p>logged in as {user.data.user?.user_metadata.name}</p>}
        {user.data.user && <p>{user.data.user.email}</p>}
        {user.data.user && <form action={logout}> <button>Logout</button></form>}
        {user.data.user && <img src={user.data.user?.user_metadata.avatar_url} alt="avatar" className="w-1/4" />}
        {!user.data.user && <Link href={"/login"}>Login</Link>}
      </div>
  );
}
