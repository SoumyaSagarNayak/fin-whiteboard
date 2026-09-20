"use client";
import React, { useState } from "react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button";
import { Loader2, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/toast";
import axios from "axios";
import { useRouter } from "next/navigation";

function CreateNewBoardDialog() {

    const [workspaceName, setWorkspaceName] = React.useState("");
    const [loading, setLoading] = useState(false);
    const [dialog, setDialog] = useState(false);
    const route = useRouter();


    const handleCreateBoard = async () => {
        if (workspaceName.trim() === "" || workspaceName?.length > 30) {
            toast.add({
                type: "error",
                title: "Invalid Workspace Name",
                description: "Please enter a valid workspace name (1-30 characters)."
            });

            return;
        }
        setLoading(true);
        const projectId = crypto.randomUUID();
        const result = await axios.post('/api/projects', {
            projectName: workspaceName,
            projectId: projectId
        });

        console.log(result?.data);
        toast.add({
            type: 'success',
            title: 'New Workspace Created'
        })
        setLoading(false);
        setDialog(false);
        route.push('/workspace/' + projectId)


    }


    return (
        <Dialog open={dialog} onOpenChange={setDialog}>
            <DialogTrigger>
                <Button className="w-full bg-blue-500 text-white p-5 mt-2" variant="outline">
                    <Plus /> Create New Board
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-lg font-semibold">Whiteboard Workspace Name</DialogTitle>

                </DialogHeader>
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Enter Workspace Name:
                    </label>
                    <Input placeholder="Workspace Name"
                        onChange={(e) => setWorkspaceName(e.target.value)}


                    />
                </div>

                <DialogFooter>
                    <DialogClose>
                        <Button variant="outline" className="mr-2">Cancel</Button>
                    </DialogClose>

                    <Button
                        disabled={workspaceName?.length == 0 || loading}
                        onClick={handleCreateBoard}>
                        {loading && <Loader2 className="animate-spin" />}Create Board</Button>


                </DialogFooter>
            </DialogContent>

        </Dialog>
    )
}
export default CreateNewBoardDialog;