import Image from "next/image";
import { ProjectsCard } from "../lib/interface";
import { client } from "../lib/sanity";
import { Button } from "@/components/ui/button";



async function getData() {
  const query = `*[_type == 'project'] | order(_createdAt desc) {
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
export default async function ProjectsPage(){
   const data: ProjectsCard[] = await getData()
    return (
        <section className='max-w-7xl mx-auto px-4 md:px-8 py-5'>
            <h1 className="text-4xl font-semibold lg:text-5xl pt-5">Projects</h1>
            <p className="leading-7 text-muted-foreground mt-1">check out what projects i have created</p>

            <div className='py-12 grid md:grid-cols-2 gap-4 sm:gap-12 grid-cols-1'>
              {data.map((item)=>(
                <div className="group  p-4 border rounded-2xl flex flex-col justify-center items-center"  key={item._id}>

                   <div className=" rounded-2xl relative flex justify-center items-center">
                    <Image src={item.imageUrl}
                      alt="project image"
                      width={400}
                      height={200}
                      className="object-cover transition-transform duration-500 ease-in-out rounded-lg hover:scale-105 border border-slate-200"
                      />
                    </div>  

                    <div className="mt-4 flex flex-col justify-center items-center">
                      <h2 className="font-meidum text-lg hover:underline">{item.title}</h2>
                       <p className="mt-1 text-muted-foreground line-clamp-3 ">{item.description}</p>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2 md:justify-center items-center">
                      {item.tags.map((tagItem,index)=>(
                        <span key={index} 
                        className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs sm:text-sm dont-medium text-primary ring-2 ring-inset ring-primary/20"
                        >{tagItem}</span>
                      ))}
                    </div>

                    <div className="mt-4 gap-2 flex flex-wrap ">
                      <Button className="gap-2 hover:underline hover:text-black"><a href={item.live} target="_blank" rel="love"> Live Demo</a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>
</Button>

                      
                      <Button className="bg-gray-200 gap-2 text-black hover:bg-opacity-70" variant={"link"}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>

                      <a href={item.github} target="_blank" rel="love">
                      
                         Open Repository</a></Button> 
                    </div>

                </div>
              ))}
            </div>
 
        </section>
    )
} 