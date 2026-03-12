'use client'

import { Header } from '@/components/dashboard/header'
import { SettingsForm } from '@/components/dashboard/settings-form'

export default function SettingsPage() {
  return (
    <div className="flex flex-col h-full">
      <Header title="Settings" description="Configure your account and notification preferences" />
      
      <div className="flex-1 overflow-auto p-6">
        <SettingsForm />
      </div>
    </div>
  )
}
