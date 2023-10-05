import { Layout } from '@/components/Layout'
import Image from 'next/image'
import cover from "../../public/cover.jpg"
import me from "../../public/me.jpg"
import { LatestPosts } from '@/components/LatestPosts'

import { BsGithub, BsLinkedin, BsInstagram, BsYoutube } from "react-icons/bs";
import { Social } from '@/components/Social'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout fullWidth={true}>
      <div className='relative'>
      <Image className='object-cover h-60' alt='cover image' src={cover} />
      <div className='absolute top-0 h-60 w-full'>
        <div className='w-full h-full flex'>
          <div className='w-full self-center text-center'>
          <p className='roboto text-white font-bold text-6xl drop-shadow-lg'>martinsson.io</p>
          <p className='text-white font-bold roboto drop-shadow-2xl'>IT-Leader, Software Developer & Lover of Buttons</p>
          </div>
        </div>
      </div>
      </div>
      <div className='p-2 w-full bg-gray-800 text-white flex border-b-2 border-indigo-400 dark:border-indigo-600'>
        <div className='w-full max-w-5xl mx-auto'>
        <div className='w-full flex gap-10 my-5 md:flex-row flex-col'>
          <div className='md:w-2/3 w-full self-center order-2 md:order-1 px-5'>
          <p className='text-lg roboto'>This is a blog dedicated to my life as a Nordic IT-Leader, Software Developer & Father of two (Three if you count the dog). <br/><br/> I have a love for technology, coding, music, travel and everything with buttons - I will try to document my journey here as much as I can.</p>
          <Link href={"/about"} className='rounded-lg bg-gray-900 text-white p-2 text-2xl mt-5 roboto hover:bg-indigo-600 w-full block text-center'>Read More Here</Link>
          </div>
          <div className='w-56 mx-auto md:order-2 order-1'>
          <Image className='rounded-full aspect-square object-cover' src={me} alt="me" />
          </div>
        </div>
        <Social />
        </div>
        
      </div>
      <LatestPosts />
    </Layout>
  )
}
