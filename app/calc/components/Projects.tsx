import { image } from "framer-motion/client";
import { title } from "process";
import { FiFigma } from "react-icons/fi";
import { RiGithubFill } from "react-icons/ri";

export const Projects = () => {
  const projects = [
    {
      title: "Pholio (under development)",
      description:
        "Pholio is a customizable portfolio website builder designed to help individuals showcase their skills, projects, and achievements in a professional and visually stunning way. With pre-built templates tailored for developers, designers, writers, and more, Pholio allows users to create unique portfolios effortlessly.",
      LiveLink: "https://beta.pholio.batua.site",
      GithubLink: "https://github.com/07CalC/Pholio",
      FigmaLink: "",
      imageLink:
        "https://res.cloudinary.com/dkhymc3li/image/upload/v1734266489/i2rhyfkrlnihngwmemme.png",
    },
    {
      title: "Batua",
      description:
        "Batua is a seamless personal finance web application designed to help users track their expenses and manage their budgets effortlessly. With an intuitive interface, real-time insights, and customizable categories, Batua helps users become smarter financial decision-makers.",
      LiveLink: "https://www.batua.site",
      GithubLink: "https://github.com/07CalC/batua",
      FigmaLink: "",
      imageLink:
        "https://res.cloudinary.com/dkhymc3li/image/upload/v1734267156/fomwfubs4t4werunbjfz.png",
    },
    {
        title: "JeeLore",
        description: 
        "JEE Lore is a comprehensive web application designed to help students prepare for JEE and NEET exams. It offers an interactive platform for solving doubts and practicing questions across various difficulty levels and topics. The app aims to provide a personalized learning experience, making exam preparation more effective and efficient.",
        LiveLink: "https://jeelore.site",
        GithubLink: "https://github.com/07CalC/jeelore",
        FigmaLink: "",
        imageLink: "https://res.cloudinary.com/dkhymc3li/image/upload/v1734267902/f4qbgiwkqj91up6gztce.png",
    },
    {
        title: "ORCR",
        description: "Discover a comprehensive platform designed for students to access the previous year’s opening and closing ranks of top colleges accepting JEE Advanced, JEE Mains, and BITSAT scores. Simplify your admission journey with precise and up-to-date rank data at your fingertips.",
        LiveLink: "https://orcr.jeelore.site",
        GithubLink: "https://github.com/07CalC/orcr",
        FigmaLink: "",
        imageLink: "https://res.cloudinary.com/dkhymc3li/image/upload/v1734268091/ol7ncm8jaljkwujgz5dt.png"
    }
  ];

  return (
    <div className="w-full  md:px-56 flex flex-col justify-center">
      <strong className="text-[1.3rem] px-5 md:px-0 self-start md:self-start md:text-3xl underline ">Projects</strong>
      <div className="flex flex-col py-6 md:py-16 gap-y-5">
        {projects.map((project, index) => (
          <div className={`${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex flex-col-reverse md:flex gap-y-4 gap-x-5 p-2 md:py-5 md:px-5 justify-center items-center bg-[#2d2d2d] rounded-xl`}>
            <div className="flex flex-col gap-y-5 w-full md:w-2/3 self-auto">
              <strong className="text-2xl md:text-3xl ">{project.title}</strong>
              <p className="text-lg font-mono">{project.description}</p>
              <div className="flex gap-x-2 md:sgap-x-5">
                {project.LiveLink && (
                    <a
                    href={project.LiveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-[#bf2020] text-sm md:text-xl text-white p-2 md:px-3 rounded-full">
                      Live
                    </button>
                  </a>
                )}
                
                {project.GithubLink && (
                    <a
                    href={project.GithubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-[#1e1e1e] text-white p-2 rounded-full">
                      <RiGithubFill />
                    </button>
                  </a>
                )}

                {project.FigmaLink && (
                    <a
                    href={project.FigmaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-[#1e1e1e] text-white p-2 rounded-full">
                      <FiFigma />
                    </button>
                  </a>
                )}
                
              </div>
            </div>
            {project.imageLink && (
                <div className="flex flex-col md:w-3/5">
                <img src={project.imageLink} alt="image" className="" />
              </div>
            )}
            
          </div>
        ))}
      </div>
    </div>
  );
};
