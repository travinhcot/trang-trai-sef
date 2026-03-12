'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Bell, Lock, User } from 'lucide-react'

interface Settings {
  email: string
  riskThreshold: string
  notificationFrequency: string
  emailAlerts: boolean
  smsAlerts: boolean
  weeklyReport: boolean
  criticalOnly: boolean
}

const defaultSettings: Settings = {
  email: 'lecturer@university.edu',
  riskThreshold: 'medium',
  notificationFrequency: 'real-time',
  emailAlerts: true,
  smsAlerts: false,
  weeklyReport: true,
  criticalOnly: false,
}

export function SettingsForm() {
  const [settings, setSettings] = useState<Settings>(defaultSettings)
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="max-w-3xl space-y-6">
      {/* Account Settings */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-primary" />
            <div>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your profile and contact information</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={settings.email}
              onChange={(e) => setSettings({ ...settings, email: e.target.value })}
              className="bg-white dark:bg-slate-900"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="threshold">Risk Alert Threshold</Label>
            <Select value={settings.riskThreshold} onValueChange={(value) => setSettings({ ...settings, riskThreshold: value })}>
              <SelectTrigger className="bg-white dark:bg-slate-900">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low Risk and Above</SelectItem>
                <SelectItem value="medium">Medium Risk and Above</SelectItem>
                <SelectItem value="high">High Risk and Above</SelectItem>
                <SelectItem value="critical">Critical Risk Only</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-cyan-600" />
            <div>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Choose how you want to receive alerts</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="frequency">Notification Frequency</Label>
            <Select value={settings.notificationFrequency} onValueChange={(value) => setSettings({ ...settings, notificationFrequency: value })}>
              <SelectTrigger className="bg-white dark:bg-slate-900">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="real-time">Real-time</SelectItem>
                <SelectItem value="hourly">Hourly Summary</SelectItem>
                <SelectItem value="daily">Daily Digest</SelectItem>
                <SelectItem value="weekly">Weekly Summary</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3 pt-4 border-t border-border">
            <div className="flex items-center gap-2">
              <Checkbox
                id="email-alerts"
                checked={settings.emailAlerts}
                onCheckedChange={(checked) => setSettings({ ...settings, emailAlerts: checked as boolean })}
              />
              <Label htmlFor="email-alerts" className="cursor-pointer">
                Email Alerts
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="sms-alerts"
                checked={settings.smsAlerts}
                onCheckedChange={(checked) => setSettings({ ...settings, smsAlerts: checked as boolean })}
              />
              <Label htmlFor="sms-alerts" className="cursor-pointer">
                SMS Alerts (for critical alerts only)
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="weekly-report"
                checked={settings.weeklyReport}
                onCheckedChange={(checked) => setSettings({ ...settings, weeklyReport: checked as boolean })}
              />
              <Label htmlFor="weekly-report" className="cursor-pointer">
                Weekly Report
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="critical-only"
                checked={settings.criticalOnly}
                onCheckedChange={(checked) => setSettings({ ...settings, criticalOnly: checked as boolean })}
              />
              <Label htmlFor="critical-only" className="cursor-pointer">
                Critical Alerts Only
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-yellow-600" />
            <div>
              <CardTitle>Security & Privacy</CardTitle>
              <CardDescription>Manage your security settings</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full border-blue-300">
            Change Password
          </Button>
          <Button variant="outline" className="w-full border-blue-300">
            Two-Factor Authentication
          </Button>
          <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-900">
            <p className="text-sm text-foreground/80">
              Your data is encrypted and protected according to FERPA and institutional privacy standards.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex gap-3">
        <Button
          className="bg-primary hover:bg-primary/90 text-white"
          onClick={handleSave}
        >
          Save Changes
        </Button>
        {saved && (
          <div className="flex items-center gap-2 text-green-600">
            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-xs">✓</span>
            </div>
            <span className="text-sm font-medium">Settings saved successfully</span>
          </div>
        )}
      </div>
    </div>
  )
}
