import Appheader from '@/components/custom/dashboard/Appheader';
import { AppSidebar } from '@/components/custom/dashboard/AppSideBar';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <div className="flex flex-1 flex-col">   
                <Appheader />
                <div className="p-5">{children}</div>
                
            </div>
        </SidebarProvider>

    )
}
export default DashboardLayout