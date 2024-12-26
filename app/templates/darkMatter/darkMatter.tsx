import { Navbar } from "./components/Navbar";



export default function DarkMatter() {
    return (
        <div className="bg-black min-h-svh text-white text-3xl font-bold flex flex-col items-center align-center h-svh">
            <div className="w-1/2">
               <Navbar />
            </div>
            
            
        </div>
    )
}