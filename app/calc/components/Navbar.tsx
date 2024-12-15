import Link from "next/link"

export const Navbar = () => {
    return (
        <div className="w-full gap-x-12 flex justify-between border bg-[#2d2d2d] bg-opacity-50 border-white backdrop-blur-lg p-2 px-3 rounded-full md:px-5">
            <Link href={"/calc"} className="text-[1rem] md:text-lg">
                CalC
            </Link>
            <div className=" text-[1rem] md:text-lg flex gap-x-3 md:gap-x-5">
                <button className="">Blogs</button>
                <button className="">Projects</button>
            </div>

        </div>
    )
}