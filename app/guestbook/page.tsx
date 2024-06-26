import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {RegisterLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Form } from "../components/Form";
import prisma from "../lib/db";
import github from "../../public/icons/github-142-svgrepo-com.svg"
import Image from "next/image";


export default function GuestBook(){
    return (
        <section className="max-w-7xl w-full  px-4 md:px-8 mx-auto">
            <h1 className="text-4xl font-semibold lg:text-5xl pt-4">Guestbook</h1>
            <p className="leading-7 text-muted-foreground mt-2"> sign-in to leave a Message!</p>

            <Card className="mt-10">
                <CardHeader className="flex flex-col w-full">
                    <Label>Message</Label>
                    <GuestForm />
                    <ul className="pt-7 gap-y-5 flex flex-col">
                      <GuestBookEntries/>  
                    </ul>
                    
                </CardHeader>
            </Card>
         </section>
    )
}

async function GetGuestBookEntry(){
    const data= await prisma.guestBookEntry.findMany({
        select:{
            User:{
                select:{
                    firstname: true,
                    profileimage:true,
                }
            },
            message:true,
            id:true,
        },

        orderBy:{
            createdAt:"desc",
        },

        take:30,
    })

    return data;
}

async function GuestBookEntries(){
    const data= await GetGuestBookEntry()

    if (data.length === 0) {
        return null;
    }

    return data.map((item)=>(
        <li key={item.id}>
            <div className="flex items-center">
                <Image src={github as any} alt="user pfp" 
                className="w-10 h-10 rounded-lg"
                />
           
                <p className="text-muted-foreground pl-3 break-words">{item.User?.firstname}: {""}
                    <span className="text-foreground">{item.message}</span>
                </p>
            </div>
        </li>
    ))
}



async function GuestForm(){
   const {getUser}=getKindeServerSession()
   const user = await getUser()
   console.log(user);

    if (user) {
        return (
            <Form/>
        )
    }

    return (
        <div className="flex flex-col justify-between gap-4 md:flex-row mt-2">
            <Input type="text" placeholder="Write Your Message...." className="outline-none"/>

            <RegisterLink>

                <Button> 
          
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mx-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
</svg>
Sign in
            </Button>
            </RegisterLink>
            
        </div>
    )
}