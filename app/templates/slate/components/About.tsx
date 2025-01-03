import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"





export const About = ({content}: {content: string}) => {
    return (
        <div className="w-full p-8 px-4 lg:px-24  flex flex-col gap-y-6 justify-center items-center">
      <strong className="text-3xl lg:text-5xl text-center self-center">
        About

      </strong>
        <Markdown className="text-[#a9a9a9] text-center text-lg lg:text-2xl" remarkPlugins={[remarkGfm]}>{content}</Markdown>
      </div>
    )
}