'use client'
import { Montserrat } from "next/font/google";
import { useRouter } from "next/navigation";
const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

export default function NotFound() {
    const router = useRouter()
  return (
    <div
      className={`w-full h-screen gap-y-3 bg-[#1c1c1c] ${montserrat.className} flex flex-col justify-center items-center text-white`}
    >
        <p className="text-2xl md:text-4xl font-bold">Error: 404 | Not Found</p>
        <p className="text-xl md:text-3xl text-center font font-semibold">The page you are looking for does not exist</p>
        <p className="p-2 rounded-xl cursor-pointer text-2xl bg-blue-500" onClick={router.back}>Go Back</p>
    </div>
  );
}
