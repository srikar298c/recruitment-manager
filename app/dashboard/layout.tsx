import React from 'react';
import SideNav from "@/components/SideNav";
import Header from "@/components/Header";
import ProjectList from '@/components/ProjectList';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='flex flex-row justify-between '>
            < div className="flex absolute top-14 h-screen" >
                <Header />
                <div className="flex flex-grow">
                    <SideNav />
                </div>
                <div className=" flex-grow   w-full  sm:p-6 md:p-12 max-w-7xl mx-auto ">
                    <ProjectList/>
                </div>
            </div >
        </div>
    );
}