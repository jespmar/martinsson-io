import Link from "next/link"
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs"

export const Social = () => {

    return (
        <div className='flex max-w-md justify-between mx-auto my-5 w-full text-white'>
            <div><Link target="_blank" href={"https://github.com/jespmar"}><BsGithub className='h-8 w-8 hover:text-indigo-500'/></Link></div>
            <div><Link target="_blank" href={"https://www.linkedin.com/in/jesper-martinsson-372007131/"}><BsLinkedin className='h-8 w-8 hover:text-blue-600'/></Link></div>
            <div><Link target="_blank" href={"https://www.instagram.com/teslacruzarna/"}><BsInstagram className='h-8 w-8 hover:text-fuchsia-600'/></Link></div>
            <div><Link target="_blank" href={"https://www.youtube.com/channel/UCr4EBzMmsmz6_B5LGvkdJdA"}><BsYoutube className='h-8 w-8 hover:text-red-500'/></Link></div>
      </div>
    )
}