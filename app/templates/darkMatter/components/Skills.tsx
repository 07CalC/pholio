import { mockDataSchema } from "@/app/preview/mockData";

export const Skills = ({
  content = [],
}: {
  content: mockDataSchema["skills"];
}) => {
  return (
    <div className="w-full p-5 lg:p-0 lg:w-1/2 flex flex-col gap-y-6 justify-center">
      <strong className="text-xl lg:text-3xl ">Skills</strong>
      <div className="grid grid-cols-2 lg:grid-cols-8  gap-y-4 gap-x-8 p-5 lg:p-2 lg:py-5 lg:px-5 justify-center items-center ">
        {content.map((item, key) => (
          <div
            key={key}
            className="flex flex-col gap-y-4 hover:scale-110 items-center"
          >
            <img
              src={item.imgLink}
              alt={item.name}
              className="lg:w-12 w-8 h-8 lg:h-12 "
            />
            <div className="lg:text-sm text-[1rem] text-[#a9a9a9]">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
