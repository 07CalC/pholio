import Link from "next/link"

export const Navbar = () => {
    return (
        <div className="w-full flex justify-between bg-[#2d2e2d] p-2 rounded-full px-5">
            <Link href={"/calc"} className="text-xl">
                CalC
            </Link>
            <div className="text-xl flex gap-x-5">
                <button className="">Blogs</button>
                <button className="">Projects</button>
            </div>

        </div>
    )
}