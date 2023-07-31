import { Layout } from "@/components/Layout"
import { PostCard } from "@/components/PostCard"
import { getAllPostTags, getAllPosts } from "@/lib/api"

export default async function Post() {

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

