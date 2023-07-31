import { Tag } from "./Tag"

export const Tags = ({tags}:any) => {


    return (
        <div className="flex gap-1 my-2 w-full justify-center">
            {tags.map((tag:string, index:number) => {
                return (<Tag key={index} tag={tag} />)
            })}
        </div>
    )

}