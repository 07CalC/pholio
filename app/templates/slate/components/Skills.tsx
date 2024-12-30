import { mockDataSchema } from "@/app/preview/mockData";

export const Skills = ({ content }: { content: mockDataSchema["skills"] }) => {
  return (
    <div className="w-full p-8 px-4 lg:px-24  flex flex-col gap-y-6 justify-center items-center">
      <strong className="text-3xl lg:text-5xl text-center self-center">
        Skills
      </strong>
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3  gap-y-8 gap-x-8 p-5 lg:p-2 lg:py-5 lg:px-5 justify-center items-center">
        {content?.map((item, key) => (
          <div
            key={key}
            className="flex flex-col gap-y-4 bg-[#3d3e42] p-10 rounded-xl hover:bg-[#f0bf6c] items-center"
          >
            <img
              src={item.imgLink}
              alt={item.name}
              className="lg:w-16 w-12 h-12 lg:h-16"
            />
            <div className="lg:text-2xl text-xl text-white">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
