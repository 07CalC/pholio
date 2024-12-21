import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Nunito_Sans } from "next/font/google";
import { OnboardingForm } from "./Form";



const nunitoSans = Nunito_Sans({
    weight: "400",
    subsets: ["latin"],
});

export default async function Onboarding() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect("/");
  }
  const { data } = await supabase
    .from("user_profile")
    .select("onboarding")
    .match({ id: user?.id })
    .single();
  if (data?.onboarding) {
    redirect("/");
  }

//   const handleContinue = async (e: any) => {
//       const { error } = await supabase.from("user_profile").update({ onboarding: true, username:  }).match({ id: user?.id })
//   }

  return (
    <div className={` ${nunitoSans.className}`}>
      <OnboardingForm />
    </div>
  );
}
