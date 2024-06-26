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


export default function Hero(){
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="col-span-1 lg:col-span-2 h-full min-h-[400px] lg:min-h-[300px] bg-gray-100 rounded-2xl p-8">
                {/* <h1 className="text-2xl lg:text-2xl font-medium text-muted-foreground"> হ্যালো i'm full stack developer working and living in <BD/> </h1> */}
                <h1 className="text-4xl lg:text-6xl font-normal mt-4 chakra mb-6 md:mt-8 md:mb-8">Full Stack Web developer, Building <span className="bg-cyan-200 rounded-md">⚡Fast-Secure</span> Modern application that <span className="underline decoration-indigo-500/30">solve problems</span>  </h1>
                <h1 className="text-xl text-muted-foreground">Working and living in <BD/> </h1>

               

                 <a href="#_" className="relative inline-block text-lg group mt-3">
        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
        <span className="relative">Get in touch</span>
        </span>
        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
        </a>
            </div>

        <Image src={me} 
                  alt="sabber photo"
                  className="col-span-1 md:h-[500px] object-cover rounded-2xl bg-gray-100 h-[350px]"
                  priority
                  />
                

           
       
         </div>
    )
}


function ButtonOne(){
    return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger >

                <Card className="text-4xl font-mono font-normal lg:text-6xl">
                   IUS  
                </Card> 

             
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xl">University of scholars</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )
}



// function Buttontwo(){
//     return (
//         <TooltipProvider>
//           <Tooltip>
//             <TooltipTrigger >

//                 <Card className=" gap-1 flex justify-center items-center">
                    
//                    <p className="inline-block items-center"></p>
//                    <Image 
//                    src={bd}
//                    alt="bd"
//                    className="w-10 h-10 hover:scale-105 hover:transition-transform hover:duration-200 items-center "
//                    /> 
                    
                  
//                 </Card> 

             
//             </TooltipTrigger>
//             <TooltipContent>
//               <p className="text-xl">Rizzer captioal</p>
//             </TooltipContent>
//           </Tooltip>
//         </TooltipProvider>
//       )
// }

function BD(){
  return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger > 
                 <Image 
                 src={bdFlag}
                 alt="bd"
                 className="w-12 h-6 hover:scale-105 hover:transition-transform hover:duration-100 items-center"
                 /> 

          </TooltipTrigger>
          <TooltipContent>
            <p className="text-xl">Dhaka,Bangladesh</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
}

