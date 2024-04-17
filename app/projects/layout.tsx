import React from 'react';
import Header from "@/components/Header";
import ProjectList from '@/components/dashboard/ProjectList';
import ProjectSideNav from '@/components/Projects/ProjectsSideNav';
import FilterComponent from '@/components/Projects/Enrollers';

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
                   <ProjectSideNav/>
                </div>
                <div className=" flex-grow  w-full px-10 py-8 ">
                    <FilterComponent/>
                </div>
            </div >
        </div>
    );
}