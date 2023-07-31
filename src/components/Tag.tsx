import Link from "next/link"

export const Tag = ({tag}:any) => {

    const tagURL = tag.toLowerCase().split(" ").join("-")

    return (
        <Link href={`/posts/tag/${tagURL}`} className="p-1 text-xs uppercase  hover:text-indigo-500">
            {tag}
        </Link>
    )


}