import { RiLinkedinBoxLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";
import { RiDiscordLine } from "react-icons/ri";
import { RiYoutubeLine } from "react-icons/ri";

export const Info = () => {
  return (
    <div className="w-full flex gap-x-12 justify-center items-center p-24  text-white">
      <div className="1/3">
        <img
          src="https://avatars.githubusercontent.com/u/96346957?v=4"
          alt="logo"
          className="w-10/12 h-10/12 rounded-full"
        />
      </div>
      <div className="flex  gap-y-5 bg-slate-400s flex-col justify-center items-start">
        <div className="text-2xl">
          <strong className="text-4xl">Vinayak(CalC)</strong>{" "}
          <strong className="text-xl text-slate-300">19M (he/him)</strong>
        </div>
        <div className="text-2xl">
          Hobbyist Web Developer <br />
          into new technologies <br />
          currently learning Rust <br />
          Building{" "}
          <a
            href="https://pholio.batua.site"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong className="text-2xl underline">Pholio↗</strong>
          </a>
        </div>
        <div className="self-start text-xl flex flex-col">
          <a href="mailto:maheshwarivinayak90@gmail.com">
            <strong className="text-2xl underline">
              maheshwarivinayak90@gmail.com
            </strong>
            </a>
            <strong className="text-2xl"></strong>
            <a><strong className="underline cursor-pointer">Resume↗</strong></a>
          
          
        </div>
        <div className="self-start flex gap-x-5 ">
          <a href="https://www.linkedin.com/in/maheshwarivinayak" target="_blank">
            <RiLinkedinBoxLine className="text-5xl cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/_kysvin/" target="_blank">
            <RiInstagramLine className="text-5xl cursor-pointer" />
          </a>
          <a href="https://x.com/Not_CalC" target="_blank">
            <RiTwitterXLine className="text-5xl cursor-pointer" />
          </a>
          <a href="https://github.com/07CalC" target="_blank">
            <RiGithubFill className="text-5xl cursor-pointer" />
          </a>
          <a>
            <RiDiscordLine className="text-5xl cursor-pointer" />
          </a>
          <a>
            <RiYoutubeLine className="text-5xl cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};
