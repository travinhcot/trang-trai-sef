'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AlertTriangle, Mail, MessageSquare } from 'lucide-react'

interface Student {
  id: string
  name: string
  studentId: string
  class: string
  risk: 'low' | 'medium' | 'high' | 'critical'
  gpa: number
  attendance: number
  engagement: number
  lastActive: string
}

const mockDetailData = {
  '1': {
    courses: ['CS 101', 'MATH 101', 'ENG 102'],
    recentGrades: [
      { assignment: 'Assignment 1', score: 45, date: '2024-03-05' },
      { assignment: 'Quiz 1', score: 38, date: '2024-03-03' },
      { assignment: 'Lab Work', score: 52, date: '2024-02-28' },
    ],
    alerts: [
      'Missed 3 consecutive assignments',
      'Low quiz performance',
      'No LMS activity for 5 days',
    ],
    interventionsNeeded: ['Academic Support', 'Mentoring', 'Attendance Counseling'],
  },
  '2': {
    courses: ['CS 201', 'DATA 101', 'STAT 201'],
    recentGrades: [
      { assignment: 'Midterm', score: 68, date: '2024-03-06' },
      { assignment: 'Assignment 2', score: 72, date: '2024-03-04' },
      { assignment: 'Quiz 2', score: 65, date: '2024-03-02' },
    ],
    alerts: ['Low quiz performance (42%)', 'Declining assignment scores'],
    interventionsNeeded: ['Tutoring', 'Study Group Enrollment'],
  },
  '3': {
    courses: ['MATH 101', 'MATH 201', 'PHY 101'],
    recentGrades: [
      { assignment: 'Problem Set', score: 58, date: '2024-03-07' },
      { assignment: 'Quiz 3', score: 62, date: '2024-03-05' },
      { assignment: 'Homework', score: 55, date: '2024-03-01' },
    ],
    alerts: ['No LMS activity for 5 days', 'Declining performance trend'],
    interventionsNeeded: ['Check-in Meeting', 'Resource Referral'],
  },
}

export function StudentDetail({ student }: { student: Student }) {
  const details = mockDetailData[student.id as keyof typeof mockDetailData] || mockDetailData['1']

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Course Overview */}
      <Card className="border-0 shadow-none bg-transparent">
        <CardContent className="pt-0 space-y-4">
          <div>
            <h4 className="font-semibold text-foreground mb-2">Enrolled Courses</h4>
            <div className="space-y-2">
              {details.courses.map((course, index) => (
                <div key={index} className="p-2 bg-blue-50 dark:bg-blue-950/30 rounded text-sm text-foreground">
                  {course}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Performance */}
      <Card className="border-0 shadow-none bg-transparent">
        <CardContent className="pt-0 space-y-4">
          <div>
            <h4 className="font-semibold text-foreground mb-2">Recent Grades</h4>
            <div className="space-y-2">
              {details.recentGrades.map((grade, index) => (
                <div key={index} className="flex justify-between items-center p-2 bg-blue-50 dark:bg-blue-950/30 rounded text-sm">
                  <span className="text-foreground">{grade.assignment}</span>
                  <span className={grade.score < 60 ? 'text-red-600 font-semibold' : 'text-green-600 font-semibold'}>
                    {grade.score}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Alerts & Actions */}
      <Card className="border-0 shadow-none bg-transparent">
        <CardContent className="pt-0 space-y-4">
          <div>
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-yellow-600" />
              Current Alerts
            </h4>
            <div className="space-y-2">
              {details.alerts.map((alert, index) => (
                <div key={index} className="p-2 bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-900 rounded text-sm text-foreground">
                  {alert}
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-2 pt-4">
            <Button size="sm" variant="outline" className="gap-2">
              <Mail className="w-4 h-4" />
              Email
            </Button>
            <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90">
              <MessageSquare className="w-4 h-4" />
              Schedule Meeting
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
