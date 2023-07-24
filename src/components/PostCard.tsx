import { baseURL } from "@/config"
import Image from "next/image"
import Link from "next/link"

export const PostCard = ({post}:any) => {

return (
    <Link href={`/posts/${post.slug}`} className="flex flex-col items-center bg-white rounded-lg md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-4 my-2">
    <div className="flex flex-col justify-between p-4 leading-normal">
    <div className="h-48 w-full px-10 self-center max-w-4xl text-center absolute">
        <div className=" flex h-full">
            <h1 className="text-center w-full self-center text-4xl roboto font-bold text-white drop-shadow-lg hidden md:inline">{post.title}</h1>
        </div>
    </div>
    <Image className="md:object-cover md:h-48 rounded-lg" width={1000} height={1000} src={`${post.coverImage}`} alt="cover image" />
        <p className="mb-1 text-sm text-gray-600 dark:text-gray-400">{post.date}</p>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white roboto">{post.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.excerpt}</p>
        
    </div>
</Link>
)

}