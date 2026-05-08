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
            <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">Enrolled Courses</h4>
            <div className="flex flex-wrap gap-2">
              {details.courses.map((course, index) => (
                <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 hover:bg-blue-200 rounded-lg px-3 py-1">
                  {course}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider pt-2">Recommended Interventions</h4>
            <div className="flex flex-wrap gap-2">
              {details.interventionsNeeded.map((intervention, index) => (
                <Badge key={index} variant="outline" className="border-purple-200 text-purple-700 bg-purple-50 dark:border-purple-800/50 dark:text-purple-300 dark:bg-purple-900/20 rounded-lg px-3 py-1">
                  {intervention}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Performance */}
      <Card className="border-0 shadow-none bg-transparent">
        <CardContent className="pt-0 space-y-4">
          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">Recent Grades</h4>
            <div className="space-y-3">
              {details.recentGrades.map((grade, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl shadow-sm">
                  <div className="flex flex-col">
                    <span className="text-foreground font-medium">{grade.assignment}</span>
                    <span className="text-xs text-foreground/50">{grade.date}</span>
                  </div>
                  <div className={`px-3 py-1 rounded-lg text-sm font-bold ${grade.score < 60 ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400' : 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400'}`}>
                    {grade.score}%
                  </div>
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
            <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              Current Alerts
            </h4>
            <div className="space-y-3">
              {details.alerts.map((alert, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-amber-50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/50 rounded-xl shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                  <span className="text-sm text-foreground/90 leading-tight">
                    {alert}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            <Button size="sm" variant="outline" className="gap-2 flex-1 w-full sm:w-auto rounded-xl shadow-sm">
              <Mail className="w-4 h-4" />
              Email
            </Button>
            <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90 flex-1 w-full sm:w-auto rounded-xl shadow-sm text-white">
              <MessageSquare className="w-4 h-4" />
              Schedule Meeting
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
