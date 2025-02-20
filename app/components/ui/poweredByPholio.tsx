import Image from "next/image";

export const PoweredByPholio = () => {
  return (
    
    
      <div
        className={`fixed gap-x-1 flex font-semibold jetbrains box-decoration-slice drop-shadow-xl self-center md:self-start py-2 text-sm text-end text-black md:ml-5 bottom-0 mb-5 bg-gradient-to-br from-[#9df89f] to-[#4b67da] rounded-xl px-2 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_5px_#08f,0_0_10px_#08f] hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_25px_#08f]`}
      >
        <a
      className="flex gap-x-1 md:self-start"
      href="https://pholio.online/"
      target="_blank"
      rel="noopener noreferrer"
    >
        <Image width={486} height={514} src="https://res.cloudinary.com/dkhymc3li/image/upload/v1735216898/t3irkgz3pa3e6iqb7l7y.png" alt="logo" className="w-5 h-5" />
        <p>powered by Pholio</p>
        </a>
      </div>
    
    
  );
};
