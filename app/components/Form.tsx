"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import {  useFormStatus } from "react-dom";
import PostData from "../lib/actions";
import { useRef, useState } from "react";

export function Form(){
  const formRef=useRef<HTMLFormElement>(null)
    return (
        <form action={async (formData)=>{
            await PostData(formData);
            formRef.current?.reset();
        }}
        ref={formRef}
        className="flex justify-between gap-4 flex-col md:flex-row">
            <Input
            type="text"
            name="message"
            maxLength={80}
            minLength={1}
            placeholder="Write Your Message..."
            required
            />
            <SubmitButton/>
        </form>
        
    )
};

function SubmitButton (){
    const {pending}=useFormStatus();
     return (
        <>
        {pending ? (
            <Button disabled>
                <Loader2 className="mr-3 h-4 w-4 animate-spin"/> Please wait
            </Button>
        ):(
            <Button> 
          
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mx-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
            </svg>
            Submit
                        </Button>
        )}
        </>
        
     )
    
}