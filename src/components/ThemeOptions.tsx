"use client"
import React from 'react';
import coastal from "@/assets/coastal.png";
import modern from "@/assets/modern.png";
import professional from "@/assets/professional.png";
import tribal from "@/assets/tribal.png";
import tropical from "@/assets/tropical.png";
import vintage from "@/assets/vintage.png";
import Image from 'next/image';
import { useTheme } from '@/store/useStore';


function ThemeOptions() {

    const setTheme = useTheme((state:any)=>state.setTheme)

    const themes = [
        { value: "Coastal", imgUrl: coastal },
        { value: "Modern", imgUrl: modern },
        { value: "Professional", imgUrl: professional },
        { value: "Tribal", imgUrl: tribal },
        { value: "Tropical", imgUrl: tropical },
        { value: "Vintage", imgUrl: vintage },
    ]

    function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        document.querySelector(".selected")?.classList.remove("selected");
        e.currentTarget.classList.add("selected")
        setTheme(e.currentTarget.lastChild?.textContent);
    }

  return (
      <div className='grid grid-cols-3 gap-5'>
          {
              themes.map((theme, index) => {
                  return (
                      <div onClick={handleClick} key={index} className='cursor-pointer flex flex-col items-center gap-2 group transition-all ease-in-out delay-5 hover:scale-110'>
                          <Image src={theme.imgUrl} alt='theme'  className='rounded-lg group-hover:opacity-80'/>
                          <p className='font-semibold text-red-500'>{theme.value}</p>
                      </div>
                  )
          })
          }
    </div>
  )
}

export default ThemeOptions