
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
import { Tags } from '@/components/Tags'


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
  const { slug } = params


  const post = getPostBySlug(slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    "excerpt",
    "tags"
  ])


  const content = await markdownToHtml(post.content)
  
 
  return (
<div>
<Layout>

<h1 className='text-5xl font-bold roboto text-center mt-4'>{post.title}</h1>
<div className='flex w-full'>
<div className='mx-auto mb-3 border-b border-indigo-800'><Tags tags={post.tags} /></div>
</div>
<Image className='w-full mb-3 rounded object-cover aspect-[4/3]' width={1000} height={1000} src={`${post.coverImage}`} alt="cover image" />

{/* <BlogPost elements={elements} /> */}
<div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <p className='text-sm font-bold italic mb-4'>Published {post.date}</p>
      <Share slug={post.slug} excerpt={post.excerpt} />
</Layout>
    </div>
  )
}


