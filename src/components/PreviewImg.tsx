"use client"
import React from 'react'
import logo from "@/assets/RoomGeniusLogo.png"
import { useLoading, useOutput } from '@/store/useStore';
import Image from 'next/image';

function PreviewImg() {

    const isLoading = useLoading((state: any) => state.isLoading);
    const isGenerating = useLoading((state: any) => state.isGenerating);
    const output = useOutput((state: any) => state.output);

  return isLoading ?(
    <div
        className="md:w-[500px] w-[350px] h-[200px] my-auto md:h-[300px]  rounded-lg flex items-center justify-center">
        <Image width={100} height={100} src={logo} alt="logo" className={`${isGenerating && "animate-spin"}`}/>
    </div>
  ) : (
    <div className="my-auto">
       <img src={output} alt="output" className='rounded-lg object-cover'/>
    </div>
  )
}

export default PreviewImg