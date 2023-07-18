import { remark } from 'remark'
import html from 'remark-html'

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}


export const markdownToPortableText = (text:string) => {

    const children = []
    const currentChildren = {}

    const splitText = text.split(" ")
    console.log(splitText)

    for (let i = 0; i < splitText.length; i++) {

        
    }

}