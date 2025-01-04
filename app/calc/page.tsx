
import { Navbar } from "./components/Navbar";
import { PoweredByPholio } from "../components/ui/poweredByPholio";
import { Info } from "./components/Info";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { recursive } from "../fonts/Fonts";


export default async function Calc() {

  return (

    <div
      className={`${recursive.className} bg-[#1b1b1b] bg-[linear-gradient(to_right,#505050_1px,transparent_1px),linear-gradient(to_bottom,#505050_1px,transparent_1px)] bg-[size:60px_60px] pb-16 min-h-svh h-full w-full text-white text-3xl font-bold flex flex-col items-center  align-center`}
      className={`${recursive.className} bg-[#1b1b1b] bg-[linear-gradient(to_right,#505050_1px,transparent_1px),linear-gradient(to_bottom,#505050_1px,transparent_1px)] bg-[size:60px_60px] pb-16 min-h-svh h-full w-full text-white text-3xl font-bold flex flex-col items-center  align-center`}
    >
      <div className="lg:w-1/2 w-11/12 fixed mt-3 lg:mt-5">
      <div className="lg:w-1/2 w-11/12 fixed mt-3 lg:mt-5">
        <Navbar />
      </div>
      <div className="w-full h-20">
      </div>

      <div className="w-full ">
        <Info />
      </div>
      
      <div className="w-full">
          <Skills />
        </div>

      <div className="w-full mt-16">
        < Projects />
      </div>
      <div className="w-full h-20">
      </div>

      <div className="w-full ">
        <Info />
      </div>
      
      <div className="w-full">
          <Skills />
        </div>

      <div className="w-full mt-16">
        < Projects />
      </div>

      
       
       
        <PoweredByPholio />
      
    </div>
  );
}
