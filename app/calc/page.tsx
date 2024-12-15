
import { Navbar } from "./components/Navbar";

import { PoweredByPholio } from "../components/ui/poweredByPholio";
import { Info } from "./components/Info";

import { Projects } from "./components/Projects";
import { Press_Start_2P } from "next/font/google";


const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
})

export default function Calc() {
  return (
    <div
      className={`bg-[#1f1e1e] min-h-svh h-full w-full text-white text-3xl font-bold flex flex-col items-center  align-center ${pressStart2P.className}`}
    >
      <div className="md:w-1/2 fixed mt-3 md:mt-5">
        <Navbar />
      </div>
      <div className="w-full h-20">
      </div>

      <div className="w-full ">
        <Info />
      </div>
      {/* <div className="w-full">
        <Skills />
      </div> */}
      <div className="w-full">
          < Projects />
        </div>

      
       
        <PoweredByPholio />
      
    </div>
  );
}
