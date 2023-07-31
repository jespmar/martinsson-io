
import ErrorPage from 'next/error'
import { getPostBySlug, getAllPosts } from "../../../lib/api"
import Head from 'next/head'
import markdownToHtml from '../../../lib/markdownToHtml'
import { transformHtml } from '@/lib/htmlToComponent'
import { BlogPost } from '@/components/BlogPost'
import { Layout } from '@/components/Layout'
import { baseURL } from '@/config'
import Image from 'next/image'

import markdownStyles from "../../../components/markdown-styles.module.css"
import { Share } from '@/components/Share'


type Props = {
  params: any
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = getAllPosts(['slug'])
 
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function Post({ params}: Props) {
  console.log(params)
  const { slug } = params


  const post = getPostBySlug(slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    "excerpt"
  ])


  const content = await markdownToHtml(post.content)
  
 
  return (
<div>
<Layout>
<p className='text-base'>{post.date}</p>
<h1 className='text-4xl roboto'>{post.title}</h1>
<Image className='w-full' width={1000} height={1000} src={`${post.coverImage}`} alt="cover image" />
<p className='text-xs text-gray-500 mb-3 mt-2'>{`${baseURL}${post.coverImage}`}</p>

{/* <BlogPost elements={elements} /> */}
<div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <Share slug={post.slug} excerpt={post.excerpt} />
</Layout>
    </div>
  )
}


