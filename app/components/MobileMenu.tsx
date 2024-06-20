"use client"
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { navigationItems } from "./Navbar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MobileMenu(){
    const pathName=usePathname()
    const [open , setOpen]=useState(false)
    useEffect(()=>{
        setOpen(false)
    },[pathName])
    return (
        <Sheet open={open} onOpenChange={(state)=>setOpen(state)}>
  <SheetTrigger asChild>
     <Button variant="outline" size='icon'>
        <Menu />
     </Button>
  </SheetTrigger>

  <SheetContent >
    <div className="mt-5 flex px-2 space-y-1 flex-col">
        {navigationItems.map((item,index)=>(
            <Link key={index} href={item.href} 
            className={cn(pathName === item.href ? "bg-muted" : "hover:bg-muted hover:bg-opacity-70" , "group flex items-center px-2 py-2 text-md font-semibold rounded-md")}
            > {item.name}
            </Link>
        ))}
    </div>
 

  <SheetFooter className="mt-5">
        <SheetClose > <Button className="w-full">Close</Button>
        </SheetClose>
  </SheetFooter>

   </SheetContent>
</Sheet>

    )
}