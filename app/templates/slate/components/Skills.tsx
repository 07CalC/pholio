import { mockDataSchema } from "@/app/preview/mockData";

export const Skills = ({ content }: { content: mockDataSchema["skills"] }) => {
  return (
    <div className="w-full p-8 px-2 lg:px-24  flex flex-col gap-y-6 justify-center items-center">
      <strong className="text-3xl lg:text-5xl text-center self-center">
        Skills
      </strong>
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 w-full lg:gap-y-8 lg:gap-x-8 gap-2 lg:p-5 p-1 lg:py-5 lg:px-5 justify-center items-center">
        {content?.map((item, key) => (
          <div
            key={key}
            className="flex flex-col gap-y-4 bg-[#3d3e42] p-4 lg:p-10 rounded-xl hover:bg-[#f0bf6c] items-center"
          >
            {item.imgLink !=="" && item.imgLink && (
               <img
              src={item.imgLink}
              
              className="lg:w-16 w-12 h-12 lg:h-16"
            />
            )}
           
            <div className="lg:text-2xl text-xl text-center text-white">{item.name}</div>
            <div className="text-[1rem] lg:text-xl hover:text-black text-center text-[#a9a9a9]">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
