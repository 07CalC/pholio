
const SkillList = [
  {
    name: "TypeScript",
    imgLink: "https://www.svgrepo.com/show/439022/typescript.svg",
  },
  {
    name: "ReactJs",
    imgLink: "https://www.svgrepo.com/show/452092/react.svg"
  },
  {
    name: "MongoDB",
    imgLink: "https://www.svgrepo.com/show/373845/mongo.svg"
  },
  {
    name: "tailwindCSS",
    imgLink: "https://www.svgrepo.com/show/374118/tailwind.svg"
  },
  {
    name: "NextJs",
    imgLink: "https://res.cloudinary.com/dkhymc3li/image/upload/v1735388059/fn7eauiypwssdrb5hevv.png",
  },
  {
    name: "Postgresql",
    imgLink: "https://www.svgrepo.com/show/354200/postgresql.svg",
  },
  {
    name: "Docker",
    imgLink: "https://res.cloudinary.com/dkhymc3li/image/upload/v1738153841/yzwcb1zjo6nfumplkooj.png"
  },
  {
    name: "Expo",
    imgLink: "https://res.cloudinary.com/dkhymc3li/image/upload/v1738154012/b8e7wha2fexjrthnchdz.png"
  }
]



export const Skills = () => {
  return (
    <div className="w-full lg:px-40 flex flex-col gap-y-6 justify-center">
      <strong className="text-2xl px-5 lg:text-5xl underline self-end">Skills</strong>
      <div className="grid grid-cols-2 lg:grid-cols-4  gap-y-4 gap-x-5 p-5 lg:p-2 lg:py-5 lg:px-5 justify-center items-center bg-[#2d2d2d] lg:rounded-xl">
        {SkillList.map((item, key) => (
          <div key={key} className="flex flex-col gap-y-4 hover:scale-110 items-center">
            <img src={item.imgLink} alt={item.name} className="lg:w-20 w-12 h-12 lg:h-20 " />
            <div className="lg:text-lg text-[1rem]">{item.name}</div>
          </div>
        ))}
       </div>

    </div>
  );
};
