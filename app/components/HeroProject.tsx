import Image from "next/image";
import { ProjectsCard } from "../lib/interface";
import { client } from "../lib/sanity";
import { Button } from "@/components/ui/button";
import pfp from "../../public/other/luffy.jpg"
import { LucideArrowUpRight } from "lucide-react";
import Link from "next/link";

async function getData() {
  const query = `*[_type == 'project'] | order(_createdAt asc) {
        title,
          _id,
          live,
          github,
          description,
          tags,
          "imageUrl": image.asset->url
        
    }`;

  const data = await client.fetch(query, {}, { next: { revalidate: 30 } });

  return data;
}

export async function FavoriteProjects() {
  const data: ProjectsCard[] = await getData();

  
  return (
    <div className='py-12 grid md:grid-cols-3 gap-4 sm:gap-12 grid-cols-1 max-w-7xl mx-auto px-4 md:px-8 py-5'>
        <div className="col-span-1 md:order-2"> 
            
            <h1 className="text-2xl font-medium md:hidden ">Some of my <span className="text-blue-500 chakra ">Recent Projects</span></h1>
            <Image
            src={pfp}
            className="object-cover bg-opacity-60 hidden md:block rounded-3xl bg-gray-100"
            alt="thorfin"
            />
             <Link href="#" className="relative  text-lg group mt-3 hidden md:block md:inline-block">
        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
        <span className="relative flex">View more projects <LucideArrowUpRight/></span>
        </span>
        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
        </Link>
            {/* <h1 className="text-3xl font-medium gap-2 text-black flex hover:underline hover:text-blue-500 items-center text-center ml-6">view more projects
           
            </h1> */}
        </div>


              {data.map((item)=>(
                <div className="group block md:order-1"  key={item._id}>

                   <div className=" rounded-2xl relative">
                    <Image src={item.imageUrl}
                      alt="project image"
                      width={400}
                      height={200}
                      className="object-cover transition-transform duration-500 ease-in-out rounded-lg hover:scale-105 border border-slate-200"
                      />
                    </div>  

                    <div className="mt-4 ">
                      <h2 className="font-meidum text-lg hover:underline">{item.title}</h2>
                       {/* <p className="mt-1 text-muted-foreground line-clamp-3 ">{item.description}</p> */}
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.tags.map((tagItem,index)=>(
                        <span key={index} 
                        className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs sm:text-sm dont-medium text-primary ring-2 ring-inset ring-primary/20"
                        >{tagItem}</span>
                      ))}
                    </div>

                    <div className="mt-2 gap-2 flex flex-wrap ">
                      <Button className="gap-2 hover:underline hover:text-black"><a href={item.live} target="_blank" rel="love"> Live Demo</a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>
</Button>

                      
                      <Button className="bg-gray-200 gap-2 text-black hover:bg-opacity-70" variant={"link"}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>

                      <a href={item.github} target="_blank" rel="love">
                      
                         Open repositary</a></Button> 
                    </div>

                </div>
              ))}

<Link href="#" className="relative inline-block text-lg group mt-3 md:hidden">
        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
        <span className="relative flex text-center justify-center items-center">View more projects <LucideArrowUpRight/></span>
        </span>
        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
        </Link>
            </div>
  );
}