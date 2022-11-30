import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";



type Props = {};



export default function Hero({}:Props) {
    const [text, count] = useTypewriter({words:["Hi there..My Name Is Eurel Rambaran","Pronounced as You-ral","<Some may think URL />"],
    loop: true,delaySpeed: 2000,});
    return(
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
        <img className="relative full h-32 w-32 mx-auto object-cover"
        src="https://imgs.search.brave.com/_totggp2liE6esYYbuBfO-2IQ8vjhgN8VArf9gXTmIM/rs:fit:400:115:1/g:ce/aHR0cHM6Ly9ldXJl/bC5zaS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8wNS9ldXJl/bF9sb2dvLnBuZw" alt=""/>
        <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Developer</h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
            <span className="=mr-3">{text}</span>
            <Cursor cursorColor="#F7ABBA" />
        </h1>
        <div className="pt-5">
            <Link href="#about">
            <button className="abutton">About</button>
            </Link>
            <Link href="#reason">
            <button className="abutton">Why SovTech</button>
            </Link>
            <Link href="#skill">
            <button className="abutton">Skills</button>
            </Link>
            <Link href="#contact">
            <button className="abutton">Contact</button>
            </Link>
        </div>
        </div>
    </div>);
    
  }
