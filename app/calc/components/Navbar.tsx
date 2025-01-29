import Link from "next/link"

export const Navbar = () => {
    return (
        <div className="w-full gap-x-12 flex justify-between border bg-[#2d2d2d] bg-opacity-50 border-white backdrop-blur-lg p-2 px-3 rounded-full lg:px-5">
            <Link href={"/calc"} className="text-[1rem] lg:text-lg">
                Vinayak
            </Link>
            <div className=" text-[1rem] lg:text-lg flex gap-x-3 lg:gap-x-5">
            <Link href={"/calc/blogs"} className="text-[1rem] lg:text-lg">
                Blogs
            </Link>
                
            </div>

        </div>
    )
}
