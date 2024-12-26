
import React from "react";
import { FiFigma } from "react-icons/fi";
import { RiGithubFill } from "react-icons/ri";
import { FiGitlab } from "react-icons/fi";

export const Projects = () => {
  const projects = [
    {
      title: "Pholio (under development)",
      description:
        "Pholio is a customizable portfolio website builder designed to help individuals showcase their skills, projects, and achievements in a professional and visually stunning way. With pre-built templates tailored for developers, designers, writers, and more, Pholio allows users to create unique portfolios effortlessly.",
      LiveLink: "https://pholio.online",
      GithubLink: "https://github.com/07CalC/Pholio",
      FigmaLink: "",
      imageLink:
        "https://res.cloudinary.com/dkhymc3li/image/upload/v1734266489/i2rhyfkrlnihngwmemme.png",
      techUsed : [
          {
            name: "Next.js",
            imgLink: "https://www.svgrepo.com/show/378440/nextjs-fill.svg" ,
          },
          {
            name: "TypeScript",
            imgLink: "https://www.svgrepo.com/show/439022/typescript.svg" ,
          },
          {
            name: "tailwindCSS",
            imgLink: "https://www.svgrepo.com/show/374118/tailwind.svg"
          },
          {
            name: "supabase",
            imgLink: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png"
          },
          {
            name: "cloudinary",
            imgLink: "https://www.svgrepo.com/show/353566/cloudinary.svg"
          },
          {
            name: "Postgresql",
            imgLink: "https://www.svgrepo.com/show/354200/postgresql.svg",
          }
        ],
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
      techUsed: [
        {
          name: "ReactJs",
          imgLink: "https://www.svgrepo.com/show/452092/react.svg"
        },
        {
          name: "NodeJs",
          imgLink: "https://www.svgrepo.com/show/452075/node-js.svg"
        },
        {
          name: "MongoDB",
          imgLink: "https://www.svgrepo.com/show/373845/mongo.svg"
        },
        {
          name: "tailwindCSS",
          imgLink: "https://www.svgrepo.com/show/374118/tailwind.svg"
        }
      ]
    },
    {
        title: "JeeLore",
        description: 
        "JEE Lore is a comprehensive web application designed to help students prepare for JEE and NEET exams. It offers an interactive platform for solving doubts and practicing questions across various difficulty levels and topics. The app aims to provide a personalized learning experience, making exam preparation more effective and efficient.",
        LiveLink: "https://jeelore.site",
        GithubLink: "https://github.com/07CalC/jeelore",
        FigmaLink: "",
        imageLink: "https://res.cloudinary.com/dkhymc3li/image/upload/v1734267902/f4qbgiwkqj91up6gztce.png",
        techUsed: [
          {
            name: "ReactJs",
            imgLink: "https://www.svgrepo.com/show/452092/react.svg"
          },
          {
            name: "NodeJs",
            imgLink: "https://www.svgrepo.com/show/452075/node-js.svg"
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
            name: "cloudinary",
            imgLink: "https://www.svgrepo.com/show/353566/cloudinary.svg"
          }
        ]
    },
    {
        title: "ORCR",
        description: "Discover a comprehensive platform designed for students to access the previous year’s opening and closing ranks of top colleges accepting JEE Advanced, JEE Mains, and BITSAT scores. Simplify your admission journey with precise and up-to-date rank data at your fingertips.",
        LiveLink: "https://orcr.jeelore.site",
        GithubLink: "https://github.com/07CalC/orcr",
        FigmaLink: "",
        imageLink: "https://res.cloudinary.com/dkhymc3li/image/upload/v1734268091/ol7ncm8jaljkwujgz5dt.png",
        techUsed: [
          {
            name: "ReactJs",
            imgLink: "https://www.svgrepo.com/show/452092/react.svg"
          },
        ],
        GitlabLink: ""
    }
  ];

  return (
    <div className="w-full lg:px-40  flex flex-col gap-y-6 justify-center">
       <strong className="text-2xl px-5 self-start lg:text-5xl underline">Projects</strong>
      <div className="flex flex-col py-5  gap-y-8 lg:gap-y-5 bg-[#2d2d2d] lg:rounded-xl">
        {projects.map((project, index) => (
          <div key={index} className={`${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} ${index === projects.length - 1 ? "border-b-0" : "border-b-2"} border-gray-400 flex flex-col-reverse lg:flex gap-y-4 gap-x-5 p-2 lg:py-5 lg:px-5 justify-center items-center `}>
            <div className="flex flex-col lg:gap-y-5 w-full lg:w-2/3 self-auto">
              <strong className="text-xl lg:text-3xl ">{project.title}</strong>
              <p className="text-lg lg:text-xl font-mono">{project.description}</p>
              <div className="flex gap-x-2 lg:sgap-x-5">
                {project.LiveLink && (
                    <a
                    href={project.LiveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-[#bf2020] text-sm lg:text-xl text-white p-2 lg:px-3 rounded-full">
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
                {project.GitlabLink && (
                  <a
                  href={project.GitlabLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-[#1e1e1e] text-white p-2 rounded-full">
                    <FiGitlab />
                  </button>
                </a>
                )}
                
              </div>
            </div>
            {project.imageLink && (
                <div className="flex rounded-xl flex-col h-full lg:w-3/5 gap-y-3">
                <img src={project.imageLink} alt="image" className="rounded-xl" />
                <div className="flex gap-x-2 items-center justify-start lg:justify-center">
                    {project.techUsed?.map((tech, index) => (
                      <img key={index} title={tech.name} src={tech.imgLink} alt="icon" className="lg:w-10 w-7 h-7 lg:h-10 hover:scale-105" />
                    ))}
                    
                  </div>
              </div>
            )}
            
          </div>
        ))}
      </div>
    </div>
  );
};
