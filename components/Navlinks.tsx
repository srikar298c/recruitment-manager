'use client'
import {
CheckCircle
} from "lucide-react";

import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "Nurses",
        href: "/dashboard/nurses",
        icon: CheckCircle
    },
    {
        name: "School Teachers",
        href: "/dashboard/school-teachers",
        icon: CheckCircle
    },
    {
        name: "lecturers",
        href: "/dashboard/lectureres",
        icon: CheckCircle
    },
    
];



function NavLinks() {
    const pathname = usePathname();

    return (
        <div className="space-y-2 ">
            {links.map((link) => {
                const LinkIcon = link.icon;
                const isActive = pathname === link.href;

                return (
                    <div className="flex flex-col">
                        <div className=""><Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                buttonVariants({
                                    variant: isActive ? "secondary" : "ghost",
                                    size: "lg",
                                }),
                                "flex  justify-start space-x-2 px-4 py-2 rounded-md"
                            )}
                        >
                            <LinkIcon className="w-6 h-6" />
                            <span>{link.name}</span>
                        </Link>
                        </div>
                        
                        <div className="flex">
                            
                        </div>
                    </div>
                    
                    
                );
            })}
        </div>
    );
}

export default NavLinks