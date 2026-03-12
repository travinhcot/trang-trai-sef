'use client'

import { Header } from '@/components/dashboard/header'
import { AlertsList } from '@/components/dashboard/alerts-list'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function AlertsPage() {
  return (
    <div className="flex flex-col h-full">
      <Header title="Alerts & Notifications" description="Manage and respond to at-risk student notifications" />
      
      <div className="flex-1 overflow-auto p-6 space-y-6">
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Alert Management</CardTitle>
            <CardDescription>View and respond to student at-risk alerts</CardDescription>
          </CardHeader>
          <CardContent>
            <AlertsList />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
