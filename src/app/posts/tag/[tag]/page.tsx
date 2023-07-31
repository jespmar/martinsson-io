
import ErrorPage from 'next/error'
import { getPostBySlug, getAllPosts, getAllPostTags, getPostsByTag } from "../../../../lib/api"
import Head from 'next/head'
import { transformHtml } from '@/lib/htmlToComponent'
import { BlogPost } from '@/components/BlogPost'
import { Layout } from '@/components/Layout'
import { baseURL } from '@/config'
import Image from 'next/image'

import markdownStyles from "../../../components/markdown-styles.module.css"
import { Share } from '@/components/Share'
import { PostCard } from '@/components/PostCard'


type Props = {
  params: any
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const tags = getAllPostTags()
 
  return tags.map((tag) => ({
    tag: tag,
  }))
}

export default async function Post({ params}: Props) {
  const { tag } = params

  const posts = getPostsByTag(tag)
  console.log(posts)

  return (
<div>
<Layout>
{posts.map((p:any) => {
                return (<PostCard key={p.slug} post={p} />)
            })}
</Layout>
    </div>
  )
}


