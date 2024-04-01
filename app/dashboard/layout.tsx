import React from 'react';
import SideNav from "@/components/SideNav";
import Header from "@/components/Header";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
  return (
        < div className="flex flex-col absolute top-14 h-screen" >
            <Header />
            <div className="flex flex-grow">
                <SideNav />
                </div>
                <div className="flex-grow mt-12  flex-1 w-full  ">
                    {children}
            </div>
        </div >
    );
}