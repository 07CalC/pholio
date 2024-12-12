
import { Navbar } from "./components/Navbar";
import { Space_Mono } from "next/font/google";
import { PoweredByPholio } from "../components/ui/poweredByPholio";


const SpaceMono = Space_Mono({
  weight: "400",
  subsets: ["latin"],
});

export default function Calc() {
  return (
    <div
      className={`bg-[#1f1e1e] min-h-svh w-full text-white text-3xl font-bold flex flex-col items-center align-center h-svh ${SpaceMono.className}`}
    >
      
      <div className="w-1/3 fixed mt-5">
        <Navbar />
      </div>
      <div className="w-full h-full"></div>

      
        hehe
        <PoweredByPholio />
      
    </div>
  );
}
