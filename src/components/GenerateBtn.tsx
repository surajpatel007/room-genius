"use client"
import { useImage, useLoading, useOutput, useRoom, useTheme } from '@/store/useStore';
import React from 'react'

function GenerateBtn() {
    // get image from our store useImage
    const imageUrl = useImage((state: any) => state.imageUrl);
    const room = useRoom((state: any) => state.room);
    const theme = useTheme((state: any) => state.theme);
    const setOutput = useOutput((state: any) => state.setOutput);
    const setLoading = useLoading((state: any) => state.setLoading);
    const setGenerating = useLoading((state: any) => state.setGenerating);
    

    async function handleClick() {

        if (imageUrl && theme) {
           setLoading(true);
           setGenerating(true);

          const res = await fetch("/api/dream", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              theme,
              room,
              imageUrl,
            }),
          });
    
          const newPhoto = await res.json();
          console.log("inside Generate button");
          console.log(newPhoto)
          setLoading(false);
          // setOutput(newPhoto[1]);
          setOutput(newPhoto.predictedImageUrl);
        }
      }

  return (
    <button onClick={handleClick} className={`${ imageUrl && theme ? "" : "cursor-not-allowed"} p-4 w-full bg-red-500 transition-all ease-in-out delay-5 hover:scale-110 text-black text-center font-bold rounded-lg text-2xl`}>
      Generate Room
    </button>
  )
}

export default GenerateBtn