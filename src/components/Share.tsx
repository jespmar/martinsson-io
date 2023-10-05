'use client'

import { FacebookIcon, FacebookShareButton, LinkedinShareButton, LinkedinIcon, EmailShareButton, EmailIcon } from "next-share"
import { useRouter } from "next/router"
import { useEffect } from "react"


export const Share = ({slug, excerpt}:any) => {

    return (
        <div className="p-3 rounded bg-gray-50 border-indigo-800 border-dashed border-2 mb-2 dark:bg-gray-800 dark:text-gray-300">
            <h1 className="text-xl font-bold">Did you like this post?</h1>
            <h3>Feel free to share it!</h3>
            <div className="flex gap-1 mt-2">
        <FacebookShareButton
url={`https://martinsson.io/posts/${slug}`}
quote={excerpt}
>
<FacebookIcon size={32} round />
</FacebookShareButton>
<LinkedinShareButton
url={`https://martinsson.io/posts/${slug}`}
>
<LinkedinIcon size={32} round />
</LinkedinShareButton>
<EmailShareButton
url={`https://martinsson.io/posts/${slug}`}
>
<EmailIcon size={32} round />
</EmailShareButton>
  </div></div>
        
    )
}