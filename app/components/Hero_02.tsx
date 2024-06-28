import Image from "next/image";
import me from "../../public/1702367598614.jpg"
import { Card } from "@/components/ui/card";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  import { Button } from "@/components/ui/button";
  import bdFlag from "../../public/other/flag-for-flag-bangladesh-svgrepo-com.svg"
import { Stars } from "lucide-react";
import { CopyMail } from "./CopyMail";
import { ABoutBtn } from "./AboutBtn";


export default function Hero_02(){
    return (
        <div className="flex flex-col justify-center items-center gap-4 max-w-7xl mx-auto px-4 md:px-8 py-2 ">
            <div className="col-span-1 lg:col-span-3 max-w-7xl px-4 md:px-8 bg-inherit rounded-2xl p-8 text-center">
               
                <h1 className="text-2xl lg:text-6xl font-normal mt-4 chakra mb-6 md:mt-8 md:mb-8 break-words"> Building <span className="bg-cyan-200 rounded-md">⚡Fast-Performant</span> Modern applications that <span className="">solve problems</span>  </h1>
                <h1 className="text-md text-gray-400">hay it's <span className="text-green-500 hover:scale-125 text-xl">Sabber.js</span>🌞 , full stack web developer based in <span className="text-md text-green-500  ">Bangladesh 📍 </span>                
                 </h1> 
        <div className="gap-2 flex items-center justify-center">
           <CopyMail/>
           <ABoutBtn/>
        </div>
       
            </div>

       
       
         </div>
    )
}







function BD(){
  return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="gap-y-2"> 
                 <Image 
                 src={bdFlag}
                 alt="bd"
                 className="w-8 h-6 flex justify-center items-center"
                 /> 

          </TooltipTrigger>
          <TooltipContent>
            <p className="text-xl">Dhaka,Bangladesh</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
}

function Flag(){
  return (

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
  
    )
}

