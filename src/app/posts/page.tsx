import { Layout } from "@/components/Layout"
import { PostCard } from "@/components/PostCard"
import { getAllPosts } from "@/lib/api"

export const BlogPage = () => {

    const posts:any = getAllPosts(['slug', 'title', 'excerpt', 'coverImage', 'date'])

    return (
        <Layout>
            <div className="text-center text-5xl roboto font-bold underline my-10 dark:text-white">Blog</div>
            {posts.map((p:any) => {
                return (<PostCard key={p.slug} post={p} />)
            })}
        </Layout>
    )

}

export default BlogPage