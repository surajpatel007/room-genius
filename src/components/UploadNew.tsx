"use client";
import React, { useState } from 'react'
import { useImage } from '@/store/useStore';
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';

function UploadNew() {

    const [preview, setPreview] = useState<string>()
    const setImageUrl = useImage((state: any) => state.setImageUrl);

    function onUpload(result : any) {
        if (result) {
          console.log("Inside onUpload: UploadNew")
          console.log(result);
          console.log(result.info.url);
          const imageUrl = result.info.url;
          setPreview(imageUrl);
          setImageUrl(imageUrl);
        }
      }

  return preview ?(
    <main className='flex flex-col items-center justify-center'>
         <div className='p-4 w-full m-5 bg-red-500 transition-all ease-in-out delay-5 hover:scale-110 text-black text-center rounded-lg text-2xl'>
             <CldUploadButton className='text-xl' onUpload={onUpload} uploadPreset="pwvwp5hs">
               <span className='font-bold text-2xl'>Change Image</span>
             </CldUploadButton>
        </div>
        <div>
            <CldImage width={400} height={300} crop="fill_pad" src={preview} alt="Description of my image"/> 
        </div>
    </main>
  ) :(
    <main className='flex flex-col items-center justify-center w-full'>
        
        <div className='p-4 w-full bg-red-500 transition-all ease-in-out delay-5 hover:scale-110 text-black text-center rounded-lg text-2xl'>
            <CldUploadButton onUpload={onUpload} uploadPreset="pwvwp5hs" className='font-bold text-2xl'>Upload Image</CldUploadButton> 
        </div>

    </main>
  );
}

export default UploadNew