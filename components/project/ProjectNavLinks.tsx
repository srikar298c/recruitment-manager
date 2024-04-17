"use client"
import {  CheckCircle, ChevronDown, GlobeIcon, LucideImport, Network, ScrollText, SquareUser } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from 'react'

type Props = {}
const links = [
    { name: "Status", href: "/project/1/Status", icon: CheckCircle },
    { name: "Department", href: "/projects/1/Departmen", icon:Network  },
    { name: "Exam Status", href: "/projects/3", icon: ScrollText },
    { name: "Client", href: "/projects/4", icon: SquareUser },
    { name: "Experience", href: "/projects/5", icon: LucideImport },
    { name: "Country", href: "/projects/6", icon: GlobeIcon },
    { name: "Origin of Country", href: "/projects/7", icon: CheckCircle },

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
             <ChevronDown className="w-3 h-3" />
           </Link>
         </div>
       );
     })}
   </div>
 );
}