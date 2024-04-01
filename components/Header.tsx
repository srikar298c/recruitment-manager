import Link from 'next/link'
import React from 'react'
import { Button } from "./ui/button";
import { Search, BellPlus, PlusCircle, User2 } from "lucide-react";
import { calSans } from "@/app/fonts";
type Props = {}

export default function Header({ }: Props) {
    return (
        <header className="fixed md:justify-between bg-white top-0 flex items-center justify-between w-full z-50 border-b-2 border-neutral-800   backdrop-filter backdrop-blur-sm bg-opacity-70 px-9 py-3 sm:-ml-6">
            <div className="">
                <Link href={"/dashboard"}>
                    <p className={`font-semibold text-xl ${calSans.className}`}>
                        Leads data
                    </p>
                </Link>
            </div>


            <div className="flex items-center space-x-2">

                <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent placeholder:text-neutral-600  flex-1 px-1
                    outline-offset-0 rounded-sm"
                />
                <div className="flex items-center text-neutral-600 bg-zinc-100 gap-x-2 rounded-md px-3.5 py-1.5 ">
                    <Search className="h-4 w-4" />
                </div>
                <div className="flex items-center text-neutral-600 bg-zinc-100 gap-x-2 rounded-md px-3.5 py-1.5">

                    <BellPlus className="h-4 w-4" />
                </div>

                <div className="flex items-center text-neutral-600 bg-zinc-100 gap-x-2 rounded-md px-3.5 py-1.5">
                    <PlusCircle className="h-4 w-4" />
                </div>

                <Button size={'sm'} variant={'secondary'}>
                    Admin
                </Button>

                <div className="flex items-center text-neutral-600 bg-zinc-100 gap-x-2 rounded-md px-3.5 py-1.5">
                    <User2 className="h-4 w-4" />
                </div>

            </div>
        </header>
    )
}