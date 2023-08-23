import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/home-img.JPG"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-center w-full'>
            <div className='w-1/2'>
              <Image src={profilePic} alt="IdanHur" className='w-full h-auto'></Image>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Engineering Software Excellence Through Precision and Innovation." className='!text-6xl !text-left'/>
              <p className='my-4 text-base font-medium'>
                As a dedicated Software Engineer, I harness a rich palette of programming languages, 
                frameworks, and tools to breathe life into visionary projects. 
                Dive into my extensive portfolio, which mirrors my adeptness in C#, Python, Java, and more. 
                Together, let's sculpt the future of software, one line of code at a time.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link href="/Idan Hur.pdf" target='_blank'
                className='flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark
                '
                download={true}
                >Resume <LinkArrow className={"w-6 ml-1"}/>
                </Link>
                <Link href="mailto:idan12060@gmail.com" target='_blank'
                className='ml-4 text-lg font-medium capitalize text-dark underline'
                >Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
        <div className='absolute right-8 bottom-8 inline-block w-24'>
          <Image src={lightBulb} alt='IdanHur' className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}
