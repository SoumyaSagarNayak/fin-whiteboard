import React from 'react'
import{UserButton} from '@clerk/nextjs'
import WelcomeBanner from '@/components/custom/dashboard/WelcomeBanner'
import ProjectList from '@/components/custom/dashboard/ProjectList'

function DashboardPage() {
    return (
        <div>
            {/* Welcome Banner */}
            <WelcomeBanner />

            {/* Project List/Empty State */}
            <ProjectList />

        </div>
    )
}
export default DashboardPage