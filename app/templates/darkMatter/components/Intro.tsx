import Image from "next/image";
import Markdown from "react-markdown";
import gfm from "remark-gfm";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { mockDataSchema } from "@/app/preview/mockData";


export default function Intro({
  content,
}: {
  content: mockDataSchema["intro"];
}) {
  const sociallinks = content?.sociallinks;
  return (
    <div className="w-full lg:w-1/2 px-5 lg:px-0 py-10 flex flex-col gap-y-6">
      <div className="flex gap-x-4 lg:gap-x-8 items-center">
        {content?.displayImage && (
          <Image
            src={content.displayImage}
            width={460}
            height={460}
            alt="image"
            className="lg:h-16 h-12 w-12 lg:w-16 rounded-full border border-white"
          />
        )}

        <strong className="text-xl lg:text-3xl">{content?.displayname}</strong>
        <p className="text-lg lg:text-xl text-[#a9a9a9]">
          {content?.age}
          {content?.gender}
          {content?.gender === "M" ? "(he/him)" : "(she/her)"}
        </p>
      </div>
      <div className="">
        <p className="text-lg lg:text-xl text-[#c4c4c4]">
          {content?.professionaltitle}
        </p>
      </div>
      <div className="">
        <p className="text-lg lg:text-xl text-[#c4c4c4]">
          {content?.description}
        </p>
      </div>
      <div className="">
        <Markdown
          remarkPlugins={[gfm]}
          className="text-[#c4c4c4] text-lg lg:text-xl"
          
          >{content?.extraDetails}</Markdown>
      </div>
      <div className="flex gap-x-5">
        {content?.contactmail && (
          <a href={`mailto:${content?.contactmail}`}>
            <MdOutlineMailOutline className="text-3xl lg:text-4xl cursor-pointer text-[#efeeee]" />
          </a>
        )}
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
      </div>
    </div>
  );
}
