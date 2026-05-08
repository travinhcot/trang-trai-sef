'use client'

import { useState } from 'react'
import { Header } from '@/components/dashboard/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BookOpen, GraduationCap, ShieldAlert, FileText, BellRing, BarChart, UploadCloud, Users, Settings } from 'lucide-react'

export default function HelpPage() {
  const [activeRole, setActiveRole] = useState<'lecturer' | 'student' | 'admin'>('lecturer')

  return (
    <div className="flex flex-col h-full">
      <Header title="Help & Documentation" description="Comprehensive guides for all system users" />
      
      <div className="flex-1 overflow-auto p-6 space-y-6">
        {/* Responsive Tabs */}
        <div className="flex flex-wrap gap-3 border-b border-border pb-4">
          <Button
            variant={activeRole === 'lecturer' ? 'default' : 'outline'}
            onClick={() => setActiveRole('lecturer')}
            className="gap-2"
          >
            <BookOpen className="w-4 h-4" />
            Lecturer Guide
          </Button>
          <Button
            variant={activeRole === 'student' ? 'default' : 'outline'}
            onClick={() => setActiveRole('student')}
            className="gap-2"
          >
            <GraduationCap className="w-4 h-4" />
            Student Guide
          </Button>
          <Button
            variant={activeRole === 'admin' ? 'default' : 'outline'}
            onClick={() => setActiveRole('admin')}
            className="gap-2"
          >
            <ShieldAlert className="w-4 h-4" />
            Admin Guide
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl">
          <div className="flex-1 max-w-4xl">
            {/* Lecturer Content */}
            {activeRole === 'lecturer' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <Card className="border-0 shadow-sm" id="managing-alerts">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BellRing className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      Managing Student Alerts
                    </CardTitle>
                    <CardDescription>How to monitor and respond to at-risk indicators</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 text-foreground/80">
                    <p>The system automatically flags students based on attendance, engagement, and academic performance.</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Critical Alerts:</strong> Immediate attention required (e.g., missed multiple consecutive assignments).</li>
                      <li><strong>High/Medium Alerts:</strong> Warning signs of declining performance or engagement.</li>
                      <li><strong>Actionable Steps:</strong> Click "Mark Addressed" when you've reached out, and "Resolve" once the student is back on track.</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm" id="student-interventions">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      Student Interventions
                    </CardTitle>
                    <CardDescription>Scheduling meetings and providing support</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 text-foreground/80">
                    <p>Access the <strong>Students</strong> tab to view detailed profiles. From there, you can:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Review recent grades and LMS engagement metrics.</li>
                      <li>Send direct emails or schedule check-in meetings.</li>
                      <li>Log intervention notes to track progress over the semester.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Student Content */}
            {activeRole === 'student' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <Card className="border-0 shadow-sm" id="understanding-dashboard">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart className="w-5 h-5 text-green-600 dark:text-green-400" />
                      Understanding Your Dashboard
                    </CardTitle>
                    <CardDescription>Tracking your own academic progress</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 text-foreground/80">
                    <p>Your student dashboard provides a transparent view of your current standing.</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Engagement Score:</strong> Reflects your participation in LMS activities and forums.</li>
                      <li><strong>Attendance:</strong> Your recorded presence in lectures and labs.</li>
                      <li><strong>Performance Trend:</strong> A timeline of your recent quiz and assignment scores.</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm" id="accessing-support">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-green-600 dark:text-green-400" />
                      Accessing Support
                    </CardTitle>
                    <CardDescription>What to do if you need help</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 text-foreground/80">
                    <p>If you receive a notification or feel you are falling behind:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Use the "Request Help" button to notify your lecturer.</li>
                      <li>Browse the recommended resources linked in your alerts.</li>
                      <li>Schedule a mentoring session directly through the platform.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Admin Content */}
            {activeRole === 'admin' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <Card className="border-0 shadow-sm" id="data-integration">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <UploadCloud className="w-5 h-5 text-red-600 dark:text-red-400" />
                      Data Integration & Management
                    </CardTitle>
                    <CardDescription>Uploading and configuring institutional data</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 text-foreground/80">
                    <p>The system relies on up-to-date data to generate accurate risk predictions.</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Navigate to the <strong>Data Upload</strong> section to import CSV, XLSX, or JSON files.</li>
                      <li>Adjust the <strong>Risk Thresholds</strong> in Settings to flag students based on institutional policies.</li>
                      <li>Manage user roles (Lecturer, Student, Admin) and assign appropriate access levels.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Table of Contents / On This Page Placeholder */}
          <div className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-0 space-y-4">
              <h3 className="font-semibold text-sm text-foreground uppercase tracking-wider">Contents</h3>
              <nav className="space-y-2 text-sm text-foreground/70 border-l border-border pl-4">
                <a href="#overview" className="block hover:text-primary transition-colors">Overview</a>
                <a href="#getting-started" className="block hover:text-primary transition-colors">Getting Started</a>
                <a href="#features" className="block hover:text-primary transition-colors">Key Features</a>
                <a href="#faq" className="block hover:text-primary transition-colors">FAQ</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}