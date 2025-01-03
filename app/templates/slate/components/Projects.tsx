import { mockDataSchema } from "@/app/preview/mockData";
import { FiFigma, FiGitlab } from "react-icons/fi";
import { RiGithubFill } from "react-icons/ri";

export const Projects = ({
  content,
}: {
  content: mockDataSchema["projects"];
}) => {
  return (
    <div className="w-full p-8 px-4 lg:px-24  flex flex-col gap-y-6 justify-center items-center">
      <strong className="text-3xl lg:text-5xl text-center self-center">
        Projects
      </strong>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full lg:gap-y-5 lg:rounded-xl">
        {content?.map((project, key) => (
          <div
            key={key}
            className="flex flex-col gap-y-4 bg-[#3d3e42] p-10 rounded-xl"
          >
            {project.imageLink !== "" && project.imageLink && (
              <img
                src={project.imageLink}
                alt={project.title}
                className="w-full h-full rounded-xl"
              />
            )}

            <div className="lg:text-2xl text-xl text-white"></div>
            <strong className="lg:text-2xl text-xl text-white">
              {project.title}
            </strong>
            <p className="text-[1rem] lg:text-xl text-[#a9a9a9]">
              {project.description}
            </p>
            <div className="flex gap-x-2 items-center">
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
                    <RiGithubFill className="text-xl lg:text-2xl" />
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
                    <FiFigma className="text-xl lg:text-2xl" />
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
                    <FiGitlab className="text-xl lg:text-2xl" />
                  </button>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
