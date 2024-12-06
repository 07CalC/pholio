import Link from "next/link"



export const Navbar = () => {
    return (
        <div className="w-full flex justify-between bg-[#2e2d2d] p-2 rounded-full px-5">
            <Link href={"/calc"} className="text-xl">
                CalC
            </Link>
            <div className="text-xl gap-x-3">
                <button className="mx-2">Blogs</button>
                <button className="mx-2">Projects</button>
            </div>

        </div>
    )
}