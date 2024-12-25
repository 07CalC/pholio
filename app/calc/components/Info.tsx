import Image from "next/image";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";
import { RiDiscordLine } from "react-icons/ri";
import { RiYoutubeLine } from "react-icons/ri";

export const Info = () => {
  return (
    <div className="w-full  lg:flex gap-y-6 lg:gap-y-0 gap-x-12 justify-center items-center p-8 px-4 lg:p-24 text-white">
      <div className="self-center flex items-center justify-center">
        <Image
          src="https://res.cloudinary.com/dkhymc3li/image/upload/v1734860474/96346957_qwbdu5.png"
          alt="logo"
          width={460}
          height={460}
          className="lg:10/12 lg:10/12 rounded-full"
        />
      </div>
      <div className="flex gap-y-5 flex-col justify-center my-4 lg:my-0 lg:items-start">
        <div className="text-xl flex lg:flex flex-col gap-x-2 gap-y-2 text-center lg:text-start">
          <div>
            <strong className="text-2xl lg:text-4xl ">Vinayak(CalC)</strong>{" "}
          </div>
          <div>
            <strong className="text-[1rem] lg:text-xl text-slate-300">
              {" "}
              19M (he/him)
            </strong>
          </div>
        </div>
        <div className="text-lg text-center lg:text-start lg:text-2xl ">
          Hobbyist Web Developer <br />
          into new technologies <br />
          currently learning Rust <br />
          Building{" "}
          <a
            href="https://pholio.batua.site"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong className="text-lg lg:text-2xl underline">Pholio↗</strong>
          </a>
        </div>
        <div className="self-start w-full text-lg flex text-center lg:text-start flex-col">
          <div className="text-[1rem] break-words lg:text-xl underline">
            <a href="mailto:maheshwarivinayak90@gmail.com">
              maheshwarivinayak90@gmail.com
            </a>
          </div>

          <strong className="text-lg lg:text-xl"></strong>
          <a>
            <strong className="underline cursor-pointer text-[1rem] lg:text-xl">
              Resume↗
            </strong>
          </a>
        </div>
        <div className="self-start flex gap-x-5 ">
          <a
            href="https://www.linkedin.com/in/maheshwarivinayak"
            target="_blank"
          >
            <RiLinkedinBoxLine className="text-3xl lg:text-5xl cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/_kysvin/" target="_blank">
            <RiInstagramLine className="text-3xl lg:text-5xl cursor-pointer" />
          </a>
          <a href="https://x.com/Not_CalC" target="_blank">
            <RiTwitterXLine className="text-3xl lg:text-5xl cursor-pointer" />
          </a>
          <a href="https://github.com/07CalC" target="_blank">
            <RiGithubFill className="text-3xl lg:text-5xl cursor-pointer" />
          </a>
          <a>
            <RiDiscordLine className="text-3xl hidden lg:text-5xl cursor-pointer" />
          </a>
          <a>
            <RiYoutubeLine className="text-3xl hidden lg:text-5xl cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};
