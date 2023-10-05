import { Tag } from "./Tag"

export const Tags = ({tags, center}:any) => {

    const align = () => {
        if (center) return "justify-center"
        else return ""
    }


    return (
        <div className={`flex w-full ${align()}`}>
            {tags.map((tag:string, index:number) => {
                return (<Tag key={index} tag={tag} />)
            })}
        </div>
    )

}