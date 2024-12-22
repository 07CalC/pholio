
import { Navbar } from "./components/Navbar";

import { PoweredByPholio } from "../components/ui/poweredByPholio";
import { Info } from "./components/Info";

import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";


export default function Calc() {
  return (
    <div
      className={`bg-[#1f1e1e] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:50px_50px] pb-16 min-h-svh h-full w-full text-white text-3xl font-bold flex flex-col items-center  align-center pressStart`}
    >
      <div className="lg:w-1/2 w-11/12 fixed mt-3 lg:mt-5">
        <Navbar />
      </div>
      <div className="w-full h-20">
      </div>

      <div className="w-full ">
        <Info />
      </div>
      
      <div className="w-full">
          < Projects />
        </div>

        <div className="w-full">
        <Skills />
      </div>

      
       
        <PoweredByPholio />
      
    </div>
  );
}
