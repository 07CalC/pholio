import { recursive } from "@/app/fonts/Fonts";
import { Navbar } from "./components/Navbar";
import Intro from "./components/Intro";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { mockDataSchema } from "@/app/preview/mockData";
import { PoweredByPholio } from "@/app/components/ui/poweredByPholio";

export default function DarkMatter({ data }: { data: mockDataSchema }) {
  return (
    <div
      className={`bg-black min-h-screen h-full text-white text-3xl font-bold flex flex-col items-center align-center ${recursive.className}`}
    >
      <div className="w-full flex justify-center items-center">
        <Navbar content={data?.intro?.username} />
      </div>
      <div className="w-full h-20"></div>
      {data.intro && (
        <>
          <div className="w-full flex justify-center items-center">
            <Intro content={data.intro} />
          </div>

          <div className="my-8 h-[2px] w-1/2 px-16 bg-[#505050] inline-block"></div>
        </>
      )}
      {data.skills && (
        <>
          <div className="w-full flex justify-center items-center">
            <Skills content={data.skills} />
          </div>

          <div className="my-8 h-[2px] w-1/2 px-16 bg-[#505050] inline-block"></div>
        </>
      )}
      {data.experience && (
        <>
          <div className="w-full flex justify-center items-center">
            <Experience content={data.experience} />
          </div>

          <div className="my-8 h-[2px] w-1/2 px-16 bg-[#505050] inline-block"></div>
        </>
      )}
      {data.projects && (
        <>
          <div className="w-full flex justify-center items-center">
            <Projects content={data.projects} />
          </div>

          <div className="my-8 h-[2px] w-1/2 px-16 bg-[#505050] inline-block"></div>
        </>
      )}
      {data.education && (
        <div className="w-full flex justify-center items-center">
          <Education content={data.education} />
        </div>
      )}

      <div className="w-full h-20"></div>
      <PoweredByPholio />
    </div>
  );
}
