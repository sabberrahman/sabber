import Image from "next/image";
import one from "../../public/other/Manga.jpg"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import nextjs from "../../public/icons/nextjs-fill-svgrepo-com.svg"
import git from "../../public/icons/git-svgrepo-com.svg"
import supabase from "../../public/icons/supabase-icon.svg"
import react from "../../public/icons/react-svgrepo-com.svg"
import mongodb from "../../public/icons/mongodb-svgrepo-com.svg"
import sanity from "../../public/icons/sanity-svgrepo-com.svg"
import tailwind from "../../public/icons/tailwind-svgrepo-com.svg"
import node from "../../public/icons/node-js-svgrepo-com.svg"
import prisma from "../../public/icons/prisma-svgrepo-com.svg"
import postman from "../../public/icons/postman-icon-svgrepo-com.svg"
import vscode from "../../public/icons/-4MxdQA-vs-code.svg"
import remix from "../../public/icons/skill-icons--remix-dark.svg"
import gemini from "../../public/icons/-zbxLan-google-bard.svg"
import github from "../../public/icons/github-142-svgrepo-com.svg"
import typescript from "../../public/icons/typescript-svgrepo-com.svg"
import vercel from "../../public/icons/vercel-fill-svgrepo-com.svg"
import brave from "../../public/icons/brave-svgrepo-com.svg"
import npm from "../../public/icons/npm-svgrepo-com.svg"
import x from "../../public/icons/icons8-twitterx.svg"
import insta from "../../public/icons/instagram-1-svgrepo-com.svg"
import linkedin from "../../public/icons/icons8-linkedin.svg"
import { Button } from "@/components/ui/button";




 export const icons = [ nextjs ,react,typescript,supabase,mongodb,sanity,tailwind,node,git,remix,github,gemini,prisma,postman,vscode,npm,brave,vercel]
   
const social =[ {
    id: 1,
    icon: github,
    name: "Github",
    username: "@sabberrahman",
    link: "https://github.com/sabberrahman",
  },
  {
    id: 2,
    icon: x,
    name: "X / Twitter",
    username: "@sabberdev",
    link: "https://x.com/sabberdev",
  },
  {
    id: 3,
    icon: linkedin,
    name: "Linkedin",
    username: "@shohanur-rahman-sabbir",
    link: "https://www.linkedin.com/in/shohanur-rahman-sabber-b82416203",
  },]


export default function TechStack(){
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-10 max-w-7xl mx-auto px-4 md:px-8 py-5">
            <div className=" relative col-span-1">
                <Image
                src={one}
                alt="the one piece is real"
                className="object-cover rounded-2xl"
                />
                
            </div>

            <div className="col-span-1 lg:col-span-2 gap-4 flex flex-col w-full ">
                <Card className="bg-gray-100 border-none">
                    <CardHeader>
                        <CardTitle>Explore my Stack </CardTitle>
                        <CardDescription>stack & tool i use to make projects</CardDescription>
                    </CardHeader>

                    <CardContent className="flex flex-wrap gap-4">
                       {icons.map((icon,index)=>(
                        <Image src={icon}
                         key={index}
                          alt="icon"
                          className="w-16 h-16 hover:bg-gray-100 hover:scale-125 hover:transition-transform hover:duration-200"
                          />
                       ))}
                    </CardContent>
                </Card>

                <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
                    {social.map((item ,index)=>(
                        <Card className="p-4 flex flex-col items-center sm:items-start bg-gray-100 border-none" key={index}>
                            <Image
                            src={item.icon}
                            alt="icon"
                            className="w-16 h-16"
                            />
                            <h1 className="text-2xl font-medium pt-2">{item.name}</h1>
                            <p className="text-muted-foreground ">{item.username}</p>
                            <Button size="sm" className="mt-2 hover:scale-110"><a href={item.link} target="_blank" rel="social">Follow</a></Button>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}