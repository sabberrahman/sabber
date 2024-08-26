
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


