import Link from "next/link";
import { signup } from "./actions";
import { OAuthSignInButtons } from "../login/oauthSignInButtons";

export default function SignUpPage({
    searchParams,
}: {
    searchParams: {
        message: string
}
}) {
  return (
    <div className="absolute  flex-row-reverse inset-0 h-screen w-full flex bg-black bg-[linear-gradient(to_right,#505050_1px,transparent_1px),linear-gradient(to_bottom,#505050_1px,transparent_1px)] bg-[size:24px_24px]">
      <div className="w-1/3 bg-blue-600 gap-3 rounded-l-[2.5rem] flex flex-col  justify-center items-center">
        <img src="../favicon.ico" alt="logo" className="w-1/2" />
        <strong className="text-white text-3xl md:text-5xl ">
        Join Pholio Today
        </strong>
        <p className="text-white text-lg md:text-2xl">Your story, your style, your Pholio</p>{" "}
      </div>
      <div className="w-2/3 h-10/12 flex flex-col p-10  gap-10 ">
        <strong className="text-white text-3xl md:text-5xl text-start">
          SignUp
        </strong>
        <div className="flex w-full h-full ">
          <div className="w-1/2 h-full flex flex-col justify-center items-center border-r border-white p-2">
            <form className="h-full w-full flex  flex-col gap-y-5 items-center justify-center">
              <div className="flex w-full flex-col items-center text-start gap-y-2">
              <label
                  className="text-white w-10/12 text-2xl font-bold"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-5/6 rounded-lg bg-black text-white border-2 border-white p-3 text-sm font-medium placeholder:text-zinc-400 focus:outline-0"
                  id="name"
                  placeholder="john Doe"
                  type="text"
                  name="name"
                />
                <label
                  className="text-white w-10/12 text-2xl font-bold"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-5/6 rounded-lg bg-black text-white border-2 border-white p-3 text-sm font-medium placeholder:text-zinc-400 focus:outline-0"
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
                  className="w-5/6 rounded-lg bg-black text-white border-2 border-white p-3 text-sm font-medium placeholder:text-zinc-400 focus:outline-0"
                  id="password"
                  placeholder="password"
                  type="password"
                  name="password"
                />
                {searchParams.message && <p className="text-start text-red-500">{searchParams.message}</p>}
              </div>
              <button
                formAction={signup}
                className="w-5/6 mt-5 rounded-lg bg-blue-600 text-white border-2 border-white p-2 text-sm font-medium placeholder:text-zinc-400 focus:outline-0"
                type="submit"
              >
                SignUp
              </button>
            </form>
          </div>

          <div className="w-1/2 h-full flex flex-col justify-center items-center border-l border-white p-2">
            
              <div className="flex w-full flex-col items-center text-start gap-y-6">
                <OAuthSignInButtons />
              </div>
            
          </div>
        </div>
        <div className="w-full h-2/12 flex justify-center items-center gap-x-2">
          <p className="text-white text-xl md:text-xl text-end">
           Already Registered?
          </p>
          <Link href={"/login"}>
            <strong className="text-blue-600 text-xl md:text-2xl">
              {" "}
              Log In
            </strong>
          </Link>
        </div>
      </div>
    </div>
  );
}
