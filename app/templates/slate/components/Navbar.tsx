import Link from "next/link";

export const Navbar = ({ content }: { content: string | undefined }) => {
  return (
    <div className="w-11/12 lg:w-1/2 gap-x-12 flex fixed justify-between top-5 bg-black bg-opacity-5 border border-[#e7c66a] backdrop-blur-lg p-2 px-3 rounded-full lg:px-5">
      <Link
        href={`/${content}`}
        className="text-[1rem] text-[#e7c66a] lg:text-2xl"
      >
        {content}
      </Link>
      <div className=" text-[1rem] lg:text-lg flex gap-x-3 lg:gap-x-5">
        <Link
          href={`/${content}/Blogs`}
          className="text-[1rem] text-[#bebfc1] lg:text-xl"
        >
          Blogs
        </Link>
        <Link
          href={`/${content}/Poems`}
          className="text-[1rem] text-[#bebfc1] lg:text-xl"
        >
          Poems
        </Link>
      </div>
    </div>
  );
};
