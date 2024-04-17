import React from 'react';
import SideNav from "@/components/dashboard/DashboardSideNav";
import Header from "@/components/Header";
import ProjectList from '@/components/dashboard/ProjectList';

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
              
            </div >
        </div>
    );
}