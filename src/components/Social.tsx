import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs"

export const Social = () => {

    return (
        <div className='flex max-w-md justify-between mx-auto my-5 w-full text-white'>
            <div><BsGithub className='h-8 w-8 hover:text-indigo-500'/></div>
            <div><BsLinkedin className='h-8 w-8 hover:text-blue-600'/></div>
            <div><BsInstagram className='h-8 w-8 hover:text-fuchsia-600'/></div>
            <div><BsYoutube className='h-8 w-8 hover:text-red-500'/></div>
      </div>
    )
}