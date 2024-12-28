"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { Provider } from "@supabase/supabase-js";
// import { getURL } from "@/utils/helper";

export async function login(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect(`/login?message=${error.message}`);
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function OAuthLogin(provider: Provider) {
  if (!provider) {
    return redirect("/login?message=No provider selected");
  }
  const supabase = await createClient();
  // const redirectURL = getURL("/auth/callback");
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: provider,
    options: {
      redirectTo: 'http://localhost:3000/auth/callback',
    },
  });
  if (error) {
    console.log(error);
    redirect(`/login?message=${error.message}`);
  }

  return redirect(data.url);
}

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/");
}
