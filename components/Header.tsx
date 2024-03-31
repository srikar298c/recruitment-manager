import Link from 'next/link'
import React from 'react'
import { Button } from "./ui/button";
import {  Search } from "lucide-react";
import { calSans } from "@/app/fonts";
type Props = {}

export default function Header({}: Props) {
  return (
      <header className="fixed bg-white top-0 flex items-center justify-between w-full z-50 border-b-2 border-neutral-800 px-9 py-2  backdrop-filter backdrop-blur-sm bg-opacity-70  ">
          <Link href={"/dashboard"}>
              <p className={`font-semibold text-xl ${calSans.className}`}>
                  Global Placements
              </p>
          </Link> 
          <div className="flex items-center space-x-2">
              <div className="flex items-center text-neutral-600 bg-zinc-100 gap-x-2 rounded-md px-3.5 py-1.5">
                  <Search className="h-4 w-4" />
                  
              </div>

              <Button size={"icon"}>
                 admin
              </Button>
          </div>
      </header> 
  )
}