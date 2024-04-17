import React from 'react';
import Header from "@/components/Header";
import FilterComponent from '@/components/Projects/Enrollers';
import ProjectSideNav from '@/components/project/ProjectSideNav';
import CandidateDetails from '@/components/project/CanditateDetails';


export default function CanditatePageLayout({
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
                    <CandidateDetails/>
                </div>
            </div >
        </div>
    );
}