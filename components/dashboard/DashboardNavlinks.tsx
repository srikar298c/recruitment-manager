'use client'

import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const links = [
 { name: "Nurses", href: "/nurses/projects", icon: CheckCircle },
 { name: "i", href: "/dashboard/school-teachers", icon: CheckCircle },
 { name: "Lecturers", href: "/dashboard/lecturers", icon: CheckCircle }, // corrected "lectureres" to "lecturers"
];

function DashboardNavLinks() {
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

export default DashboardNavLinks;