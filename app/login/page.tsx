import Link from "next/link";
import { login } from "./actions";
import { OAuthSignInButtons } from "./oauthSignInButtons";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Image from "next/image";


export default async function LoginPage() {


  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    redirect("/onboarding");
  }
  return (
    <div
      className={`absolute inset-0 h-screen w-full flex bg-[#1b1b1b] bg-[linear-gradient(to_right,#505050_1px,transparent_1px),linear-gradient(to_bottom,#505050_1px,transparent_1px)] bg-[size:60px_60px]`}
    >
      <div
        className={`w-1/3 bg-gradient-to-t from-[#6A00F4]  to-[#9C27B0] gap-3 rounded-r-[2.5rem] flex flex-col justify-center items-center `}
      >
        <Image
          src="https://res.cloudinary.com/dkhymc3li/image/upload/v1735216898/t3irkgz3pa3e6iqb7l7y.png"
          alt="logo"
          className="w-1/2"
          width={486}
          height={514}
        />
        <strong className="text-white inter text-3xl md:text-5xl ">
          Welcome Back
        </strong>
        <p className="text-white text-lg inter md:text-2xl">
          Login to continue
        </p>{" "}
      </div>
      <div className="w-2/3 h-10/12 flex flex-col p-10  gap-10 ">
        <strong className="text-white text-3xl jetbrains md:text-5xl text-end">
          Login
        </strong>
        <div className="flex w-full h-full ">
          <div className="w-1/2 h-full flex flex-col justify-center items-center border-r border-white p-2">
            <form className="h-full w-full flex jetbrains flex-col gap-y-5 items-center justify-center">
              <div className="flex w-full flex-col items-center text-start gap-y-2">
                <label
                  className="text-white w-10/12 text-2xl font-bold"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-5/6 bg-[#222222] border-[3px] rounded-xl border-[#6A00F4] text-white  p-3 text-lg font-medium placeholder:text-zinc-400 focus:outline-0"
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  name="email"
                />
              </div>
              <div className="flex w-full flex-col items-center text-start gap-y-2">
                <label
                  className="text-white w-10/12 text-2xl font-bold"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="w-5/6 bg-[#222222] border-[3px] rounded-xl border-[#6A00F4] text-white  p-3 text-lg font-medium placeholder:text-zinc-400 focus:outline-0"
                  id="password"
                  placeholder="password"
                  type="password"
                  name="password"
                />
                <Link
                  className="text-white text-sm font-semibold w-5/6 text-end"
                  href="/signup"
                >
                  Forgot password?
                </Link>
                {/* {params.message && (
                  <p className="text-red-600">{searchParams.message}</p>
                )} */}
              </div>
              <button
                formAction={login}
                className="w-5/6 mt-5 rounded-lg bg-[#6700ec] jetbrains hover:bg-[#6600ecb9] text-white active:scale-90 p-2 text-sm font-medium placeholder:text-zinc-400 focus:outline-0"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>

          <div className="w-1/2 h-full flex flex-col justify-center items-center border-l border-white p-2">
            <div className="h-full w-full flex  flex-col gap-y-5 items-center justify-center">
              <div className="flex w-full flex-col items-center text-start gap-y-6">
                <OAuthSignInButtons />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-2/12 poppins flex justify-center items-center gap-x-2">
          <p className="text-white text-xl md:text-xl text-end">
            Don&apos;t have an account?
          </p>
          <Link href={"/signup"}>
            <strong className="text-blue-600 text-xl md:text-2xl">
              Sign Up
            </strong>
          </Link>
        </div>
      </div>
    </div>
  );
}
