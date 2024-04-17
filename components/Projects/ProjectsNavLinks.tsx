"use client"
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from 'react'

type Props = {}
const links = [
    { name: "Project 1", href: "/projects/1", icon: CheckCircle },
    { name: "Project 2", href: "/projects/2", icon: CheckCircle },
    { name: "Project 3", href: "/projects/3", icon: CheckCircle },
    { name: "Project 4", href: "/projects/4", icon: CheckCircle },
    { name: "Project 5", href: "/projects/5", icon: CheckCircle },
    { name: "Project 6", href: "/projects/6", icon: CheckCircle },
    { name: "Project 7", href: "/projects/7", icon: CheckCircle },

];

export default function ProjectNavLinks({}: Props) {
  
    const pathname = usePathname();

 return (
   <div className="space-y-2">
     {links.map((link) => {
       const LinkIcon = link.icon;
       const isActive = pathname === link.href;

       return (
         <div key={link.name} className="flex flex-col"> {/* Added key prop */}
           <Link
             href={link.href}
             className={cn(
               buttonVariants({ variant: isActive ? "secondary" : "ghost", size: "lg" }),
               "flex justify-start space-x-2 px-4 py-2 rounded-md"
             )}
           >
             <LinkIcon className="w-6 h-6" />
             <span>{link.name}</span>
           </Link>
         </div>
       );
     })}
   </div>
 );
}