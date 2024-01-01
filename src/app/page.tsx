"use client"
import CompareSlider from "@/components/CompareSlider";
import Link from "next/link";

export default function Home() {
  
  return (
    <main className="my-auto flex gap-10 p-11 lg:flex-row flex-col justify-center lg:justify-around items-center">
      <div className="flex relative max-w-xl flex-col items-center gap-5 gradiant-bg">
        <h1 className="text-red-500 text-5xl font-bold text-center ">
        Experience instant room makeovers with{" "}
          <span className="text-red-500 hover:underline cursor-pointer">AI Magic</span>
        </h1>
        <p className="text-rose-500 text-lg text-center">
        Snap a pic, unlock 8+ stunning themes instantly. Elevate your room, join the delighted crowd – transform today!
        </p>
        <Link href={"/room"}>
          <button className="bg-red-500 hover:opacity-90 rounded-lg text-black transition-all ease-in-out delay-5 hover:scale-110 font-bold px-5 py-3">
            Redesign your room
          </button>
        </Link>
      </div>
      <div className="shadow-xl shadow-red-500/100 border-4 rounded-lg border-red-500">
        <CompareSlider />
      </div>
    </main>
  );
}