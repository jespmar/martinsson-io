import { baseURL } from "@/config"
import Image from "next/image"
import Link from "next/link"
import { Tags } from "./Tags"

export const PostPreview = ({post}:any) => {


    return (

        <div>
        <div className="flex flex-col h-auto bg-white rounded-lg md:flex-row dark:border-gray-700 dark:bg-gray-900 p-4 ">
        <div className="flex flex-col">
        <Link href={`/posts/${post.slug}`}>
        <Image className="rounded object-cover aspect-[4/3]" width={1000} height={1000} src={`${post.coverImage}`} alt="cover image" />
        </Link>
        <div className="flex mt-1 text-gray-700 dark:text-gray-300">
            <div className="self-center">
            <p className="text-xs dark:text-gray-400">{post.date}</p>
            </div>
            <div className="self-center mx-2 text-xs">|</div>
            <div className="self-center">
            <Tags tags={post.tags}/>
            </div>
        </div>
            <Link href={`/posts/${post.slug}`} className="mb-2 text-xl font-bold text-gray-900 dark:text-white roboto">{post.title}</Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.excerpt}</p>
        </div>
    </div>
        </div>
    )

}