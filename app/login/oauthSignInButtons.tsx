"use client";

import { Provider } from "@supabase/supabase-js";
import { FaGithub, FaGitlab, FaGoogle, FaLinkedin } from "react-icons/fa";
import { OAuthLogin } from "./actions";

type OauthProvider = {
  name: Provider;
  displayName: string;
  icon?: JSX.Element;
};

export function OAuthSignInButtons() {
  const oAuthProviders: OauthProvider[] = [
    {
      name: "github",
      displayName: "Github",
      icon: <FaGithub className="w-5 h-5" />,
    },
    {
      name: "google",
      displayName: "Google",
      icon: <FaGoogle className="w-5 h-5" />,
    },
    {
      name: "gitlab",
      displayName: "Gitlab",
      icon: <FaGitlab className="w-5 h-5" />,
    },
    {
      name: "linkedin",
      displayName: "Linkedin",
      icon: <FaLinkedin className="w-5 h-5" />,
    },
  ];
  return (
    <>
      {oAuthProviders.map((provider) => (
        <button
          key={provider.name}
          onClick={async () => {
            await OAuthLogin(provider.name);
          }}
          className="w-5/6 flex items-center justify-center text-white gap-x-3 py-2.5 active:scale-90 rounded-lg bg-[#6700ec] jetbrains hover:bg-[#6600ecb9]"
        >
          {provider.icon}
          Continue with {provider.displayName}
        </button>
      ))}
    </>
  );
}
