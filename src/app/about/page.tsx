import { Layout } from "@/components/Layout"
import { PostCard } from "@/components/PostCard"
import { getAllPosts, getPage } from "@/lib/api"
import Image from "next/image"
import markdownStyles from "../../components/markdown-styles.module.css"
import markdownToHtml from "@/lib/markdownToHtml"

export default async function About() {

    const page = getPage("about", ["slug", "title", "coverImage", "content"])
    const content = await markdownToHtml(page.content)

    return (
        <Layout>
<div className="text-center text-5xl roboto font-bold underline my-10 dark:text-white">{page.title}</div>
<Image className='w-full' width={1000} height={1000} src={`${page.coverImage}`} alt="cover image" />
<p className='text-xs text-gray-500 mb-3 mt-2'>{`${page.coverImage}`}</p>

{/* <BlogPost elements={elements} /> */}
<div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
        </Layout>
    )

}