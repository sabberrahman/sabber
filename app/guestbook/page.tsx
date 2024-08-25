import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {RegisterLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Form } from "../components/Form";
import {format} from "date-fns"
import prisma from "../lib/db";
import github from "../../public/icons/github-142-svgrepo-com.svg"
import Image from "next/image";
import {unstable_noStore as noStore} from "next/cache"




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
    noStore();
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
            createdAt:true,
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

                {item.User?.profileimage ? (
                     <img  src={item.User?.profileimage as string } alt="user" 
                className="w-10 h-10 rounded-lg"
                />
                ):(
                    <Image 
                    src={github}
                    alt="user" 
                    className="w-10 h-10 rounded-lg"
                    />
                )}
               
           
                <p className="text-muted-foreground pl-3 break-words"> 
                    <span className="">
                        {item.User?.firstname}: {""}
                    </span>
                   
                    <span className="text-foreground">{item.message}</span>
                    <span className="text-xs ml-4">{format(item.createdAt, ' h:mm a dd-MMMM')}</span>
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

let count = 0;

async function callGuestBookEntriesPeriodically(intervalInMinutes = 30) {
    
    intervalInMinutes = Math.max(1, Math.floor(intervalInMinutes));
    count++;
    console.log(count);
    try {
      const data = await GuestBookEntries();
      
      if (data) {
       
        console.log("Guestbook entries:", new Date()); 
      } else {
        console.log("No guestbook entries found.");
      }
    } catch (error) {
      console.error("Error fetching guestbook entries:", error);
    }
  
    
    setTimeout(callGuestBookEntriesPeriodically, intervalInMinutes * 60 * 1000)
      
  }

  callGuestBookEntriesPeriodically();
  callGuestBookEntriesPeriodically(60);