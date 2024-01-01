import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from "@/assets/RoomGeniusLogo.png"
import githubLogo from "@/assets/githubLogo.png"
import { ClerkProvider } from '@clerk/nextjs'
import UserInf from '@/components/useInf'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Room Genius',
  description: 'Generated Room By Room Genius',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className + "bg-[#17181c] flex flex-col min-h-screen "}>
        <header className='w-full'>
           <div className='container p-5 mx-auto flex items-center justify-between gap-4 shadow-lg shadow-red-500/100'>
              <Link href={"/"} className='flex items-center gap-3'>
                   <Image className='transition-all ease-in-out delay-5 hover:scale-110' src={logo} alt='logo' width={50} height={50}/>
                   <h3 className="text-3xl font-bold text-red-500">Room Genius</h3>
              </Link>
              <Link href={"https://github.com/surajpatel007/room-genius"} className='mx-5' title='Github'>
                   <Image className='transition-all ease-in-out delay-5 hover:scale-110' src={githubLogo} alt='github' width={50} height={50}/>
              </Link>
              {/* user info component */}
              <UserInf/>
           </div>
        </header>
        {children}</body>
    </html>
    </ClerkProvider>
  )
}
