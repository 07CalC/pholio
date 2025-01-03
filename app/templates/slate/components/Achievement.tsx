import { mockDataSchema } from "@/app/preview/mockData";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const Achievement = ({
  content,
}: {
  content: mockDataSchema["achievement"];
}) => {
  return (
    <div className="w-full p-8 px-4 lg:px-24  flex flex-col gap-y-6 justify-center items-center">
      <strong className="text-3xl lg:text-5xl text-center self-center">
        Achievements
      </strong>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full lg:gap-y-8 lg:gap-x-8 gap-2 lg:p-5 p-1 lg:py-5 lg:px-5 justify-center items-center">
        {content?.map((item, key) => (
          <div
            key={key}
            className="flex flex-col gap-y-4 bg-[#3d3e42] p-4 lg:p-10 rounded-xl hover:bg-[#f0bf6c] items-center"
          >
            <div className="lg:text-2xl text-xl text-center text-white">
              {item.title}
            </div>
            <div className="text-[1rem] lg:text-xl hover:text-black text-center text-[#a9a9a9]">
              <Markdown remarkPlugins={[remarkGfm]}>
                {item.description}
              </Markdown>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
