import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')
const pagesDirectory = join(process.cwd(), '_pages')

export function getPostSlugs() {

  const slugs = []

  console.log(fs.readdirSync(postsDirectory))

  for (let slug of fs.readdirSync(postsDirectory)) {

    const fullPath = join(postsDirectory, `${slug}`,`${slug}.md`)

    if (fs.existsSync(fullPath)) slugs.push(slug)

  }
  return slugs
}

export const getAllPostTags = () => {

  const tagsArray:string[] = []

  const addTags = (tags:string[]) => {
    for (let tag of tags) {
      addTag(tag)
    }
  }

  const addTag = (tag:string) => {

    let t = tag.toLowerCase().split(" ").join("-")

    if (!tagsArray.includes(t)) {
      tagsArray.push(t)
    }
  }

  const slugs = getPostSlugs()
  console.log({slugs})

  for (let slug of slugs) {
    const tags = getTagsBySlug(slug)
    addTags(tags)
  }

  return tagsArray


}

const getTagsBySlug = (slug:string) => {

  const fullPath = join(postsDirectory, `${slug}`,`${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  if (data.tags) {
    return data.tags
  } else return null



}


export const getPostsByTag = (tag:string) => {

  const allPosts = getAllPosts(["title", "tags", "excerpt", "coverImage", "date", "slug"])

  const posts = []

  for (let post of allPosts) {
    let tags = post.tags
    let modTags = []

    for (let t of tags) {

      let tt = t.toLowerCase().split(" ").join("-")
      modTags.push(tt)

    }

    if (modTags.includes(tag)) posts.push(post)

  }

  return posts

}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug
  //const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}`,`${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export const getPage = (page:string, fields: string[] = []) => {

  const fullPath = join(pagesDirectory, `${page}`,`${page}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
      if (field === 'slug') {
        items[field] = page
      }
      if (field === 'content') {
        items[field] = content
      }
  
      if (typeof data[field] !== 'undefined') {
        items[field] = data[field]
      }
    })
  
    return items

}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (new Date(post1.date) > new Date(post2.date) ? -1 : 1))
  return posts
}