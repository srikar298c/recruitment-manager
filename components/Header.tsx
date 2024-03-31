import Link from 'next/link'
import React from 'react'
import { calSans } from "@/app/fonts";
type Props = {}

export default function Header({}: Props) {
  return (
      <header className="fixed bg-white top-0 flex items-center justify-between dark:bg-neutral-950 w-full z-50 border-b border-zinc-300 dark:border-neutral-700 px-9 py-2 sm:-ml-6">
          <Link href={"/dashboard"}>
              <p className={`font-semibold text-xl ${calSans.className}`}>
                  Global Placements
              </p>
          </Link> 
      </header> 
  )
}