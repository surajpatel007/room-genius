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
         <div className='border p-4 w-full m-5 bg-sky-500 text-white text-center rounded-lg hover:opacity-90 active:scale-[.98] transition text-2xl'>
             <CldUploadButton className='text-xl' onUpload={onUpload} uploadPreset="pwvwp5hs">
               <span>Change Image</span>
             </CldUploadButton>
        </div>
        <div>
            <CldImage width={400} height={300} crop="fill_pad" src={preview} alt="Description of my image"/> 
        </div>
    </main>
  ) :(
    <main className='flex flex-col items-center justify-center w-full'>
        
        <div className='border p-5 w-full bg-sky-500 text-white text-center rounded-lg hover:opacity-90 active:scale-[.98] transition text-2xl'>
            <CldUploadButton onUpload={onUpload} uploadPreset="pwvwp5hs">Upload Image</CldUploadButton> 
        </div>

    </main>
  );
}

export default UploadNew