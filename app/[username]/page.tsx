
import { Metadata } from "next";
import { mockData } from "../preview/mockData";
import DarkMatter from "../templates/darkMatter/darkMatter";
import { Slate } from "../templates/slate/slate";
import { nithinData } from "./NithinData";

export async function generateMetadata({ params }: { params: { username: string } }): Promise<Metadata> {
    const { username } = await params
    return {
        title: username || "Pholio",
        description: `hi this is ${username}` || "create portfolio in minutes",
        icons: {
            icon: "https://res.cloudinary.com/dkhymc3li/image/upload/v1735216898/t3irkgz3pa3e6iqb7l7y.png",
        },
    };
}

export interface PageProps {
    params: {
      username: string;
    };
  }


export default async function portfolio(props: PageProps) {

    const username = props.params.username
    return (
        <>
        {mockData.template === 'darkMatter' && (
            <DarkMatter data={mockData} />
        )}
        {mockData.template === 'slate' && (
            <Slate data={username === 'nithinvarma17' ? nithinData : mockData} />
        )}
        </>
    );
}