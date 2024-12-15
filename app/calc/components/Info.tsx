import { RiLinkedinBoxLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";
import { RiDiscordLine } from "react-icons/ri";
import { RiYoutubeLine } from "react-icons/ri";

export const Info = () => {
  return (
    <div className="w-full  md:flex gap-y-6 md:gap-y-0 gap-x-12 justify-center items-center p-8 px-4 md:p-24 text-white">
      <div className="self-center">
        <img
          src="https://avatars.githubusercontent.com/u/96346957?v=4"
          alt="logo"
          className="md:w-10/12 md:h-10/12 rounded-full"
        />
      </div>
      <div className="flex gap-y-5 flex-col justify-center my-4 md:my-0 md:items-start">
        <div className="text-xl block md:flex gap-x-2 gap-y-2 text-center md:text-start">
          <div>
            <strong className="text-2xl md:text-4xl ">Vinayak(CalC)</strong>{" "}
          </div>
          <div>
            <strong className="text-[1rem] md:text-xl text-slate-300">
              {" "}
              19M (he/him)
            </strong>
          </div>
        </div>
        <div className="text-lg text-center md:text-start md:text-2xl ">
          Hobbyist Web Developer <br />
          into new technologies <br />
          currently learning Rust <br />
          Building{" "}
          <a
            href="https://pholio.batua.site"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong className="text-lg md:text-2xl underline">Pholio↗</strong>
          </a>
        </div>
        <div className="self-start w-full text-lg flex text-center flex-col">
          <div className="text-[1rem] break-words md:text-xl underline">
            <a href="mailto:maheshwarivinayak90@gmail.com">
              maheshwarivinayak90@gmail.com
            </a>
          </div>

          <strong className="text-lg md:text-xl"></strong>
          <a>
            <strong className="underline cursor-pointer text-[1rem] md:text-xl">
              Resume↗
            </strong>
          </a>
        </div>
        <div className="self-start flex gap-x-5 ">
          <a
            href="https://www.linkedin.com/in/maheshwarivinayak"
            target="_blank"
          >
            <RiLinkedinBoxLine className="text-3xl md:text-5xl cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/_kysvin/" target="_blank">
            <RiInstagramLine className="text-3xl md:text-5xl cursor-pointer" />
          </a>
          <a href="https://x.com/Not_CalC" target="_blank">
            <RiTwitterXLine className="text-3xl md:text-5xl cursor-pointer" />
          </a>
          <a href="https://github.com/07CalC" target="_blank">
            <RiGithubFill className="text-3xl md:text-5xl cursor-pointer" />
          </a>
          <a>
            <RiDiscordLine className="text-3xl hidden md:text-5xl cursor-pointer" />
          </a>
          <a>
            <RiYoutubeLine className="text-3xl hidden md:text-5xl cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};
