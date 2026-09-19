"use client";
import { Button } from "@base-ui/react";
import { useUser } from "@clerk/nextjs";
import { Sparkle, Sparkles } from "lucide-react";
import React from "react";

function WelcomeBanner() {
    const { user } = useUser();
    return (       
        <div>
            <div className="text-black p-5 rounded-lg shadow-md bg-gradient-to-r from-blue-200 to-purple-200">
                <h1 className="text-2xl font-bold">Welcome Back, {user?.fullName}!</h1>

                <div className="mt-4 flex items-center gap-4">
                    <Button className="border border-black bg-blue text-black rounded-md px-4 py-2 hover:bg-blue-100 ">+ Create New Project</Button>
                    <Button className="border border-black bg-white text-black rounded-md px-4 py-2 hover:bg-blue-100 ">AI Helper</Button>
                </div>
            </div>
        </div>
    )
}
export default WelcomeBanner;