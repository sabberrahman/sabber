//server action ++ create a func that post data(supabase) coming from input filed ...use prisma plus check if user is auth (kinde)
//it will return the data (to DB)..and PostData will be avtive on form action
"use server"

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import prisma from "./db"
import { revalidatePath } from "next/cache"

export default async function PostData(formData:FormData){
    const {getUser}=getKindeServerSession()
    const user= await getUser()

    if (!user) {
       throw new Error("Unauthorize") 
    }
const message= formData.get("message") as string

const data= await prisma.guestBookEntry.create({
    data:{
        userId:user.id,
        message:message,
    }
})
revalidatePath("/guestbook")
return data; //notsure if necc

}