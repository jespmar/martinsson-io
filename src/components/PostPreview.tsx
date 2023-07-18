import { baseURL } from "@/config"
import Image from "next/image"
import Link from "next/link"

export const PostPreview = ({post}:any) => {


    return (
        <Link href={`/posts/${post.slug}`} className="flex flex-col h-auto bg-white rounded-lg md:flex-row hover:bg-indigo-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-4 my-2">
        <div className="flex flex-col">
        <Image className="md:object-cover rounded" width={1000} height={1000} src={`${post.coverImage}`} alt="cover image" />
            <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white roboto mt-1">{post.title}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.excerpt}</p>
            <p className="mb-1 text-xs italic text-indigo-600 dark:text-gray-400">Published {post.date}</p>
        </div>
    </Link>
    )

}