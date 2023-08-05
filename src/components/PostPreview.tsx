import { baseURL } from "@/config"
import Image from "next/image"
import Link from "next/link"
import { Tags } from "./Tags"

export const PostPreview = ({post}:any) => {


    return (

        <div>
        <Link href={`/posts/${post.slug}`} className="flex flex-col h-auto bg-white rounded-lg md:flex-row hover:bg-indigo-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-4 my-2">
        <div className="flex flex-col">
        <Image className="md:object-cover rounded aspect-[4/3]" width={1000} height={1000} src={`${post.coverImage}`} alt="cover image" />
        <div className="flex mt-1 text-gray-700 dark:text-gray-300">
            <div className="self-center">
            <p className="text-xs dark:text-gray-400">{post.date}</p>
            </div>
            <div className="self-center mx-2 text-xs">|</div>
            <div className="self-center">
            <Tags tags={post.tags}/>
            </div>
        </div>
            <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white roboto">{post.title}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.excerpt}</p>
        </div>
    </Link>
        </div>
    )

}