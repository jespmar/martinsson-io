import { Header } from "./elements/Header"
import { Paragraph } from "./elements/Paragraph"

export const BlogPost = (props:any) => {

    const {elements} = props

    const renderElement = (element:any) => {

        if (element.type === "header") return <Header element={element} />
        if (element.tag === "p") return <Paragraph element={element} />
    }

    return (
        <div>
            {elements.map((element:any, index:number) => {
               return renderElement(element)
            })}
        </div>
    )


    

}