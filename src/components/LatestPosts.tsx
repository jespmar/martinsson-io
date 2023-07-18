import { getAllPosts } from "@/lib/api"
import { PostPreview } from "./PostPreview"

export const LatestPosts = () => {

    const posts:any = getAllPosts(["slug", "title", "coverImage", "excerpt", "date"])

    return (
        <div className='p-2 max-w-6xl mx-auto'>
        <p className='text-center roboto text-4xl underline font-bold my-5'>Latest Posts</p>
        <div className="grid grid-cols-3 gap-5">
            {posts.map((p:any) => {
                return <PostPreview key={p.slug} post={p} />
            })}

        </div>
      </div>
    )
}