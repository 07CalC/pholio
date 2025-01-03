import { mockDataSchema } from "@/app/preview/mockData";
import Image from "next/image";
import {
  RiGithubFill,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiTwitterXLine,
} from "react-icons/ri";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const Intro = ({ content }: { content: mockDataSchema["intro"] }) => {
  const sociallinks = content?.sociallinks;
  return (
    <div className="w-auto flex flex-col-reverse lg:flex-row gap-y-6 lg:gap-y-0 gap-x-12 justify-center items-center p-8 px-4 lg:p-24 text-white">
      <div className="lg:w-[10%] w-full flex lg:flex-col gap-x-2 gap-y-4 justify-center items-end">
        <div className="flex lg:flex-col gap-x-2 gap-y-4 justify-center items-center">
          <div className="lg:h-20 lg:w-1 h-1 w-20 bg-[#e7c66a]"></div>
          {sociallinks?.linkedin && (
            <a href={sociallinks?.linkedin} target="_blank">
              <RiLinkedinBoxLine className="text-3xl lg:text-4xl cursor-pointer text-[#efeeee]" />
            </a>
          )}
          {sociallinks?.instagram && (
            <a href={sociallinks?.instagram} target="_blank">
              <RiInstagramLine className="text-3xl lg:text-4xl cursor-pointer text-[#efeeee]" />
            </a>
          )}
          {sociallinks?.twitter && (
            <a href={sociallinks?.twitter} target="_blank">
              <RiTwitterXLine className="text-3xl lg:text-4xl cursor-pointer text-[#efeeee]" />
            </a>
          )}
          {sociallinks?.github && (
            <a href={sociallinks?.github} target="_blank">
              <RiGithubFill className="text-3xl lg:text-4xl cursor-pointer text-[#efeeee]" />
            </a>
          )}

          <div className="lg:h-20 lg:w-1 h-1 w-20 bg-[#e7c66a]"></div>
        </div>
      </div>
      <div className="flex w-full lg:w-2/4 gap-y-5 flex-col justify-center my-4 lg:my-0 lg:items-start">
        <div className="text-xl flex lg:flex flex-col gap-x-2 gap-y-2 text-center lg:text-start">
          <div className="lg:flex gap-x-4 justify-center items-center">
            <div className="flex text-center justify-center w-full lg:w-auto lg:text-start gap-x-2 items-center">
              <p className="text-4xl text-white">I'M</p>
              <strong className="text-4xl lg:text-6xl text-[#e7c66a]">
                {content?.displayname}
              </strong>
            </div>
            <p className="text-xl lg:text-2xl text-[#a9a9a9]">
              {content?.age}
              {content?.gender}

              {content?.gender &&
                (content?.gender === "M" ? "(he/him)" : "(she/her)")}
            </p>
          </div>

          <p className="text-lg lg:text-3xl text-[#e7c66a]">
            {content?.professionaltitle}
          </p>
        </div>
        <div className="text-lg text-center lg:text-start lg:text-2xl text-[#c4c4c4]">
          {content?.description} <br />
          <Markdown
            children={content?.extraDetails}
            remarkPlugins={[remarkGfm]}
          />
        </div>

        {content?.contactmail && (
          <div className="lg:self-start self-center flex gap-x-5 ">
            <a href={`mailto:${content?.contactmail}`}>
              <button className="flex border-4 text-xl lg:text-2xl hover:text-[#34353a] hover:bg-[#e7c66a] border-[#e7c66a] text-[#e7c66a] rounded-xl p-2 gap-x-2 items-center">
                Contact Me
              </button>
            </a>
          </div>
        )}
      </div>
      {content?.displayImage && (
        <div className="self-center lg:w-1/3 flex items-center justify-center">
          <Image
            src={content?.displayImage}
            alt="logo"
            width={460}
            height={460}
            className="lg:10/12 w-full h-full lg:10/12 border-2 border-[#e7c66a] rounded-full"
          />
        </div>
      )}
    </div>
  );
};
