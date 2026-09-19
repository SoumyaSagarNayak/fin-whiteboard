"use client"
import { Button } from "@/components/ui/button";
import { Folder } from "lucide-react";
import React, { useState } from "react";

function ProjectList() {

    const[projectList, setProjectList] = useState([])
    return (       
        <div>
            {projectList.length === 0 ? (
                //Empty State
                <div className="flex flex-col items-center justify-center gap-2 p-10 border rounded-lg shadow-md mt-5">
                    <Folder className="w-30 h-30" />
                    <h2 className="text-xl font-semibold">No Projects Found</h2>
                    <p className="text-muted-foreground">Create Your First Board!!!</p>
                    <Button>+ Create New Board</Button>
                    
                </div>

            ): <div>
                  {/* Project List */}  
            </div>}
        </div>
    )
}
export default ProjectList;