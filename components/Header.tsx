import Link from 'next/link'
import React from 'react'
import { calSans } from "@/app/fonts";
type Props = {}

export default function Header({}: Props) {
  return (
      <header className="fixed bg-white top-0 flex items-center justify-between w-full z-50 border-b-2 border-neutral-800 px-9 py-2 sm:-ml-6 backdrop-filter backdrop-blur-sm bg-opacity-70  ">
          <Link href={"/dashboard"}>
              <p className={`font-semibold text-xl ${calSans.className}`}>
                  Global Placements
              </p>
          </Link> 
      </header> 
  )
}