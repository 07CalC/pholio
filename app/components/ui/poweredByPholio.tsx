



export const PoweredByPholio = () => {
    return (
        <a
        className="self-start"
        href="https://pholio-pearl.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
            <div
          className={`fixed gap-x-1 flex font-semibold font-SpaceMono box-decoration-slice drop-shadow-xl self-start py-2 text-sm text-end text-black ml-5 bottom-0 mb-5 bg-gradient-to-br from-[#9df89f] to-[#4b67da] rounded-xl px-2 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_5px_#08f,0_0_10px_#08f] hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_25px_#08f]`}
        >
           <img 
            src="../favicon.ico"
            alt="logo"
            className="w-5 h-5"
            />
            <p>powered by Pholio</p>
          
          
        </div>
        </a>
    )
}