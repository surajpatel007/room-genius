import GenerateBtn from '@/components/GenerateBtn'
import PreviewImg from '@/components/PreviewImg'
import SelectInput from '@/components/SelectInput'
import ThemeOptions from '@/components/ThemeOptions'
import UploadNew from '@/components/UploadNew'
import React from 'react'

function page() {
  return (
    <div className="container mx-auto py-10">
      <div className="w-full flex flex-col md:flex-row items-center md:items-stretch gap-20 px-10">
        <div className="flex flex-col items-center gap-8 md:w-1/3">
          <div className="flex flex-col items-center gap-5 w-full border-2 border-red-500 border-dashed rounded-lg cursor-pointer p-10">
            <h3 className="font-bold text-red-500 text-xl">Upload a photo of your room</h3>
            <UploadNew/>
          </div>
          <div className="flex flex-col items-center gap-5 w-full">
            <h3 className="font-bold text-red-500 text-xl">Select Room Type</h3>
            <SelectInput />
          </div>
          <div className="flex flex-col items-center gap-5 w-full">
            <h3 className="font-bold text-red-500 text-xl">Select Room Theme</h3>
            <ThemeOptions/>
          </div>
          <GenerateBtn/>
        </div>
        <div className="md:w-2/3 flex flex-col items-center pb-10">
          <div className="md:flex hidden flex-col gap-5 text-center">
            <h1 className="text-6xl text-red-500 font-bold mb-5">
              Redesign your <span className="text-red-500 hover:underline cursor-pointer">room</span> in
              seconds
            </h1>
            <h3 className='p-2 text-2xl font-bold text-red-500'> Upload Image <span className='text-blue-400'>&rarr;</span> Select Room Type <span className='text-blue-400'>&rarr;</span> Select Room Theme</h3>
       
          </div>
          <div className='mt-10 shadow-xl shadow-red-500/100 border-4 rounded-lg border-red-500'>
          <PreviewImg/></div>
        </div>
      </div>
    </div>
  )
}

export default page