

import { Metadata } from "next";
import { mockData } from "../preview/mockData";
import DarkMatter from "../templates/darkMatter/darkMatter";
import { Slate } from "../templates/slate/slate";
import { nithinData } from "./NithinData";
import { headers } from "next/headers";


type metaProps = {
    params: Promise<{ username: string }>
}


export async function generateMetadata({ params }: metaProps): Promise<Metadata> {
    const username = (await params).username
    return {
        title: username || "Pholio",
        description: `hi this is ${username}` || "create portfolio in minutes",
        icons: {
            icon: "https://res.cloudinary.com/dkhymc3li/image/upload/v1735216898/t3irkgz3pa3e6iqb7l7y.png",
        },
    };
}

export interface PageProps {
    params: Promise<{ username: string }>;
  }


export default async function portfolio(props: PageProps) {
    const headerObj = await headers()
    
    console.log(headerObj.get('user-agent').split(',')[0].split(' ')[1])
    
    const username = (await props.params).username
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