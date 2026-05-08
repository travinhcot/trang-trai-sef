'use client'

import { useState } from 'react'
import type { ComponentType } from 'react'
import { Header } from '@/components/dashboard/header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BookOpen, GraduationCap, ShieldCheck, Code2, FileJson, LifeBuoy } from 'lucide-react'

type RoleKey = 'lecturer' | 'student' | 'admin'

const roleContent: Record<
  RoleKey,
  {
    label: string
    icon: ComponentType<{ className?: string }>
    audience: string
    endpoint: string
    method: string
    summary: string
    requestBody: string
    responseBody: string
    notes: string[]
    generalInfo: string
    detailInfo: string
  }
> = {
  lecturer: {
    label: 'Lecturer',
    icon: BookOpen,
    audience: 'For lecturers managing student alerts and accessing intervention resources.',
    endpoint: '/api/v1/interventions/log',
    method: 'POST',
    summary: 'Log a new intervention action (e.g., email sent, meeting scheduled) for an at-risk student.',
    requestBody: `{
  "lecturerId": "LCT_8492",
  "studentId": "STU_10042",
  "actionType": "SCHEDULE_MEETING",
  "notes": "Student missed 3 consecutive assignments. Scheduled follow-up."
}`,
    responseBody: `{
  "status": "success",
  "interventionId": "INT_99321",
  "message": "Intervention successfully logged."
}`,
    notes: [
      'Authentication: Bearer Token Required',
      'Rate limit: 50 requests per minute',
      'SLA: 99.9% uptime, <200ms response time',
    ],
    generalInfo: 'The lecturer API endpoints provide the necessary tools to systematically monitor and assist at-risk students. It seamlessly integrates real-time risk predictions with your daily workflow. By leveraging these APIs, educators can automate routine check-ins, seamlessly transition from early-warning alerts to direct student engagement, and maintain a historical record of all supportive actions taken throughout the semester.',
    detailInfo: 'Use these endpoints to track your interactions. By formally logging interventions, you help the institution build a comprehensive view of student support, leading to better predictive models and improved student retention rates.',
  },
  student: {
    label: 'Student',
    icon: GraduationCap,
    audience: 'For students requesting learning support and platform assistance.',
    endpoint: '/help/students',
    method: 'POST',
    summary: 'Placeholder endpoint for student help requests and follow-up tracking.',
    requestBody: `{
  "studentId": "PLACEHOLDER_STUDENT_ID",
  "category": "PLACEHOLDER_CATEGORY",
  "urgency": "PLACEHOLDER_URGENCY",
  "message": "PLACEHOLDER_MESSAGE"
}`,
    responseBody: `{
  "status": "PLACEHOLDER_STATUS",
  "requestId": "PLACEHOLDER_REQUEST_ID",
  "estimatedReply": "PLACEHOLDER_ESTIMATE",
  "resources": ["PLACEHOLDER_RESOURCE_1", "PLACEHOLDER_RESOURCE_2"]
}`,
    notes: [
      'Authentication: PLACEHOLDER_AUTH_STRATEGY',
      'Supported categories: PLACEHOLDER_CATEGORY_LIST',
      'Escalation path: PLACEHOLDER_ESCALATION_FLOW',
    ],
    generalInfo: 'The student help endpoints allow learners to securely request assistance, access mental health or academic resources, and track the status of their inquiries in real-time. This ensures that no student falls through the cracks and that help is readily available when needed.',
    detailInfo: 'PLACEHOLDER_DETAIL_INFO',
  },
  admin: {
    label: 'Admin',
    icon: ShieldCheck,
    audience: 'For admins managing support operations and help center governance.',
    endpoint: '/help/admins',
    method: 'GET',
    summary: 'Placeholder endpoint for admin-level help analytics and operational controls.',
    requestBody: `{
  "fromDate": "PLACEHOLDER_FROM_DATE",
  "toDate": "PLACEHOLDER_TO_DATE",
  "department": "PLACEHOLDER_DEPARTMENT"
}`,
    responseBody: `{
  "status": "PLACEHOLDER_STATUS",
  "totalTickets": "PLACEHOLDER_TOTAL",
  "openTickets": "PLACEHOLDER_OPEN",
  "byPriority": {
    "low": "PLACEHOLDER_LOW",
    "medium": "PLACEHOLDER_MEDIUM",
    "high": "PLACEHOLDER_HIGH"
  }
}`,
    notes: [
      'Authentication: PLACEHOLDER_AUTH_STRATEGY',
      'Access policy: PLACEHOLDER_ADMIN_POLICY',
      'Audit retention: PLACEHOLDER_RETENTION_WINDOW',
    ],
    generalInfo: 'Administrative endpoints provide comprehensive oversight of the support ecosystem. System administrators can monitor SLA compliance, evaluate the volume of help requests across different departments, and ensure that both automated alerts and manual interventions are functioning smoothly.',
    detailInfo: 'PLACEHOLDER_DETAIL_INFO',
  },
}

export default function HelpDocumentationPage() {
  const [activeRole, setActiveRole] = useState<RoleKey>('lecturer')
  const content = roleContent[activeRole]
  const ActiveIcon = content.icon

  return (
    <div className="flex flex-col h-full">
      <Header
        title="Help API Documentation"
        description="Placeholder documentation for /help endpoints by user role"
      />

      <div className="flex-1 overflow-auto p-6 space-y-6">
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LifeBuoy className="h-5 w-5 text-primary" />
              Overview
            </CardTitle>
            <CardDescription>
              All content on this page is placeholder text and should be replaced with production-ready API details.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-foreground/80">
            <p>Base path: <code>/help</code></p>
            <p>Version: <code>PLACEHOLDER_API_VERSION</code></p>
            <p>Environment: <code>PLACEHOLDER_ENVIRONMENT_URL</code></p>
          </CardContent>
        </Card>

        <div className="flex flex-wrap gap-3">
          {(Object.keys(roleContent) as RoleKey[]).map((role) => {
            const roleItem = roleContent[role]
            const Icon = roleItem.icon
            return (
              <Button
                key={role}
                variant={activeRole === role ? 'default' : 'outline'}
                onClick={() => setActiveRole(role)}
                className="gap-2"
              >
                <Icon className="h-4 w-4" />
                {roleItem.label}
              </Button>
            )
          })}
        </div>

        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ActiveIcon className="h-5 w-5 text-primary" />
              {content.label} Endpoint
            </CardTitle>
            <CardDescription>{content.audience}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>{content.method}</Badge>
              <code className="rounded bg-muted px-2 py-1 text-sm">{content.endpoint}</code>
            </div>
            <p className="text-sm text-foreground/80">{content.summary}</p>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"> 
                  General Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-foreground/80">
              <div>
                <h4 className="font-semibold text-foreground mb-1">General</h4>
                <p>{content.generalInfo}</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Details</h4>
                <p>{content.detailInfo}</p>
              </div>
              
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileJson className="h-5 w-5 text-primary" />
                Response Body (Placeholder)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-xs leading-relaxed">
                <code>{content.responseBody}</code>
              </pre>
            </CardContent>
          </Card>
        </div>

        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Implementation Notes (Placeholder)</CardTitle>
            <CardDescription>Replace these with finalized integration requirements.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-2 pl-5 text-sm text-foreground/80">
              {content.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
