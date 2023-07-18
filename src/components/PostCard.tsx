import { baseURL } from "@/config"
import Image from "next/image"
import Link from "next/link"

export const PostCard = ({post}:any) => {

return (
    <Link href={`/posts/${post.slug}`} className="flex flex-col items-center bg-white rounded-lg md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-4 my-2">
    <Image className="md:object-cover md:w-48 md:aspect-square rounded-lg" width={1000} height={1000} src={`${post.coverImage}`} alt="cover image" />
    <div className="flex flex-col justify-between p-4 leading-normal">
        <p className="mb-1 text-sm text-gray-600 dark:text-gray-400">{post.date}</p>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white roboto">{post.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.excerpt}</p>
        
    </div>
</Link>
)

}