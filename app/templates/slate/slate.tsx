import { encodeSans } from "@/app/fonts/Fonts";
// import { Navbar } from "./components/Navbar";
import { mockDataSchema } from "@/app/preview/mockData";
import { Intro } from "./components/Intro";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { PoweredByPholio } from "@/app/components/ui/poweredByPholio";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { About } from "./components/About";
import { Achievement } from "./components/Achievement";

export const Slate = ({ data }: { data: mockDataSchema }) => {
  return (
    <div
      className={`${encodeSans.className} bg-[#34353a] min-h-screen h-full text-white text-3xl font-bold flex flex-col items-center align-center`}
    >
      {/* <div className="w-full flex justify-center items-center">
        <Navbar content={data?.intro?.username} />
      </div>
      <div className="w-full h-20"></div> */}
      <div className="w-full flex justify-center items-center"></div>

      {data.intro && (
        <>
          <div className="w-full flex justify-center items-center">
            <Intro content={data.intro} />
          </div>
        </>
      )}
      {data.about && (
        <>
          <div className="w-full flex justify-center items-center">
            <About content={data.about} />
          </div>
        </>
      )}

      {data.skills && (
        <>
          <div className="w-full flex justify-center items-center">
            <Skills content={data.skills} />
          </div>
        </>
      )}
      {data.experience && (
        <>
          <div className="w-full flex bg-[#3d3e42] justify-center items-center">
            <Experience content={data.experience} />
          </div>
        </>
      )}
      {data.projects && (
        <>
          <div className="w-full flex justify-center items-center">
            <Projects content={data.projects} />
          </div>
        </>
      )}
      {data.education && (
        <>
          <div className="w-full flex justify-center items-center bg-[#3d3e42]">
            <Education content={data.education} />
          </div>
        </>
      )}
      {data.achievement && (
        <>
          <div className="w-full flex justify-center items-center">
            <Achievement content={data.achievement} />
          </div>
        </>
      )}

      <PoweredByPholio />
    </div>
  );
};
