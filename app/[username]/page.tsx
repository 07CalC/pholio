
import { Metadata } from "next";
import { mockData } from "../preview/mockData";
import DarkMatter from "../templates/darkMatter/darkMatter";
import { Slate } from "../templates/slate/slate";
import { nithinData } from "./NithinData";

export async function generateMetadata({ params }: { params: { username: string } }): Promise<Metadata> {
    return {
        title: params.username || "Pholio",
        description: `hi this is ${params?.username}` || "create portfolio in minutes",
        icons: {
            icon: "https://res.cloudinary.com/dkhymc3li/image/upload/v1735216898/t3irkgz3pa3e6iqb7l7y.png",
        },
    };
}


export default async function ({ params }: { params: { username: string } }) {
    const { username } = await params
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