import { mockDataSchema } from "@/app/preview/mockData";

export const Education = ({
  content = [],
}: {
  content: mockDataSchema["education"];
}) => {
  return (
    <div className="w-full p-5 lg:p-0 lg:w-1/2 flex flex-col gap-y-6 justify-center">
      <strong className="text-xl lg:text-3xl ">Education</strong>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-y-5  lg:rounded-xl">
        {content.map((item, key) => (
          <div
            key={key}
            className={` bg-[#141414b0] flex flex-col-reverse lg:flex lg:flex-col  gap-x-5 p-3 justify-center items-center `}
          >
            <div className="w-full flex justify-between items-center">
              <p className="text-lg text-white">{item.institute}</p>
              <p className="text-sm text-[#a9a9a9]">
                {item.from} - {item.to}
              </p>
            </div>
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col">
                <p className="text-[1rem] text-[#a9a9a9]">{item.degree}</p>
                <p className="text-sm text-[#a9a9a9]">{item.major}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-[1rem] text-[#a9a9a9]">GPA</p>
                <p className="text-lg text-white">{item.cgpa}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
