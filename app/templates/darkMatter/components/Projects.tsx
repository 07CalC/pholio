import React from "react";
import { FiFigma } from "react-icons/fi";
import { RiGithubFill } from "react-icons/ri";
import { FiGitlab } from "react-icons/fi";
import { mockDataSchema } from "@/app/preview/mockData";

export const Projects = ({
  content = [],
}: {
  content: mockDataSchema["projects"];
}) => {
  return (
    <div className="lg:w-1/2 w-full p-5 lg:p-0 flex flex-col gap-y-6 justify-center">
      <strong className="text-xl self-start lg:text-3xl">Projects</strong>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-y-5  lg:rounded-xl">
        {content.map((project, index) => (
          <div
            key={index}
            className={`${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } bg-[#141414b0] flex flex-col-reverse lg:flex lg:flex-col gap-y-4 gap-x-5 p-3 justify-center items-center `}
          >
            <div className="flex flex-col gap-y-2 w-full lg:w-full self-auto">
              <strong className="text-lg lg:text-xl ">{project.title}</strong>
              {project.techUsed && (
                <div className="grid grid-cols-8 gap-2 items-center">
                  {project.techUsed.map((item, key) => (
                    <img
                      key={key}
                      title={item.name}
                      src={item.imgLink}
                      alt={item.name}
                      className="w-6 h-6"
                    />
                  ))}
                </div>
              )}
              <p className="text-sm lg:text-lg text-[#a9a9a9] font-mono">
                {project.description}
              </p>
              <div className="flex gap-x-2 items-center ">
                {project.LiveLink && (
                  <a
                    href={project.LiveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-[#bf2020] text-sm lg:text-sm text-white p-2 lg:px-3 rounded-full">
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
                      <RiGithubFill className="text-[1.2rem]" />
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
          </div>
        ))}
      </div>
    </div>
  );
};
