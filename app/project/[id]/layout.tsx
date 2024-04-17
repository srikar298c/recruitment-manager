import React from 'react';
import Header from "@/components/Header";
import FilterComponent from '@/components/Projects/Enrollers';
import ProjectSideNav from '@/components/project/ProjectSideNav';
import TableComponent from '@/components/project/TableData';


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
                <div className=" flex-grow  w-full  px-44 py-16  ">
                    <TableComponent/>
                </div>
            </div >
        </div>
    );
}