"use client"
import { ProgressLabel } from "@/components/ui/progress"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import {Button} from "@/components/ui/button"
import { Progress, ProgressIndicator, ProgressValue } from "@base-ui/react"
import { useUser } from "@clerk/nextjs"
import { Archive, Files, LayoutGrid, Settings, SparkleIcon, User2, Users2Icon } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation";

export function AppSidebar() {

  const path = usePathname();
  const {user} = useUser();
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={40} height={40} />
          <h2 className="text-xl font-bold">fin-Board</h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup >
          <Button>+ Create New Board</Button>

        </SidebarGroup>  

        <SidebarGroup >
          <SidebarGroupLabel>My Boards</SidebarGroupLabel>
          <SidebarMenuButton className="p-5" isActive={path==="/dashboard"}>
            <LayoutGrid />
            <span>All Files</span>
          </SidebarMenuButton>

          <SidebarMenuButton className="p-5 mt-2" isActive={path==="/shared-files"}>
            <Users2Icon />
            <span>Shared</span>
          </SidebarMenuButton>

          <SidebarMenuButton className="p-5 mt-2" isActive={path==="/archive"}>
            <Archive />
            <span>Archive</span>
          </SidebarMenuButton>

        </SidebarGroup>
        <SidebarGroupLabel>Others</SidebarGroupLabel>
                  <SidebarMenuButton className="p-5 mt-2" isActive={path==="/ai"}>
            <SparkleIcon />
          <span>AI Helper</span>
          
        </SidebarMenuButton>
                  <SidebarMenuButton className="p-5 mt-2" isActive={path==="/settings"}>
            <Settings />
            <span>Settings</span>
          </SidebarMenuButton>

        <SidebarGroup>
          
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter > 
        <Button>+ Create New Board</Button>
        <div className="p-4 my-3 border rounded-md">
          <h2 className="text-sm flex justify-between mb-1" >2 files created <span> total 3</span></h2>
          <progress className="h-2 mt-2" value={66} max={100} />
        </div>

        <div className="flex items-center gap-2 p-4">
          <Image src={user?.imageUrl ?? ''} alt="Profile" width={40} height={40}
          className="rounded-full"
          />
          <h2 >{user?.firstName} {user?.lastName}</h2>
          
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}