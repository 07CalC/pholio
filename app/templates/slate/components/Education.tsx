import { mockDataSchema } from "@/app/preview/mockData";

export const Education = ({
  content,
}: {
  content: mockDataSchema["education"];
}) => {
  return (
    <div className="w-full p-8 px-4 lg:px-24  flex flex-col gap-y-6 justify-center items-center">
      <strong className="text-3xl lg:text-5xl text-center self-center">
        Education
      </strong>
      <div className="flex flex-col gap-5 w-full lg:gap-y-5 lg:rounded-xl">
        {content?.map((item, key) => (
          <div
            key={key}
            className={`lg:w-1/2 ${
              key % 2 === 0 ? "lg:self-start" : "lg:self-end"
            } bg-[#34353a] rounded-xl flex flex-col-reverse lg:flex lg:flex-col  gap-x-5 p-8 justify-center items-center `}
          >
            <div className="w-full flex gap-x-10 justify-between items-center">
              <div className="flex flex-col">
                <p className="text-lg lg:text-2xl  t141414b0ext-white">
                  {item.institute}
                </p>
                <p className="text-[1rem] lg:text-xl text-[#e7c66a]">
                  {item.degree}
                </p>
                <p className="text-[1rem] lg:text-xl text-[#e7c66a]">
                  {item.major}
                </p>
              </div>
              <div className="flex flex-col">
              <p className="text-[1rem] lg:text-xl text-[#a9a9a9]">{item.from? item.from+ " -" : ""}  {item.to? item.to : ""}</p>
                <p className="text-[1rem] lg:text-xl text-[#a9a9a9]">
                  {item.cgpa ? "GPA: " + item.cgpa : ""}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
