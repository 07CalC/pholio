import { Slate } from "@/app/templates/slate/slate"
import { mockData } from "../mockData"



export default function slate() {
    return (
        <Slate data={mockData}/>
    )
}