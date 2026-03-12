'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { StudentDetail } from './student-detail'

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

const mockStudents: Student[] = [
  {
    id: '1',
    name: 'John Smith',
    studentId: 'STU001',
    class: 'CS 101',
    risk: 'critical',
    gpa: 2.1,
    attendance: 65,
    engagement: 45,
    lastActive: '5 days ago',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    studentId: 'STU002',
    class: 'CS 201',
    risk: 'high',
    gpa: 2.8,
    attendance: 78,
    engagement: 62,
    lastActive: '2 days ago',
  },
  {
    id: '3',
    name: 'Mike Chen',
    studentId: 'STU003',
    class: 'MATH 101',
    risk: 'high',
    gpa: 3.0,
    attendance: 72,
    engagement: 58,
    lastActive: '1 week ago',
  },
  {
    id: '4',
    name: 'Emma Davis',
    studentId: 'STU004',
    class: 'ENG 102',
    risk: 'medium',
    gpa: 3.2,
    attendance: 85,
    engagement: 75,
    lastActive: '1 day ago',
  },
  {
    id: '5',
    name: 'Alex Rodriguez',
    studentId: 'STU005',
    class: 'CS 101',
    risk: 'medium',
    gpa: 3.5,
    attendance: 90,
    engagement: 82,
    lastActive: 'Today',
  },
  {
    id: '6',
    name: 'Lisa Wong',
    studentId: 'STU006',
    class: 'CS 201',
    risk: 'low',
    gpa: 3.8,
    attendance: 95,
    engagement: 92,
    lastActive: 'Today',
  },
]

const getRiskColor = (risk: Student['risk']) => {
  switch (risk) {
    case 'critical':
      return 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-400'
    case 'high':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-400'
    case 'medium':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-400'
    case 'low':
      return 'bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-400'
  }
}

interface StudentListProps {
  filters: {
    risk: string
    search: string
    class: string
    department: string
  }
}

export function StudentList({ filters }: StudentListProps) {
  const [expandedStudentId, setExpandedStudentId] = useState<string | null>(null)

  const filteredStudents = mockStudents.filter((student) => {
    if (filters.risk !== 'all' && student.risk !== filters.risk) return false
    if (filters.search && !student.name.toLowerCase().includes(filters.search.toLowerCase())) return false
    if (filters.class !== 'all' && student.class !== filters.class) return false
    return true
  })

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-4 font-semibold text-foreground">Student Name</th>
            <th className="text-left py-3 px-4 font-semibold text-foreground">Class</th>
            <th className="text-left py-3 px-4 font-semibold text-foreground">Risk Level</th>
            <th className="text-left py-3 px-4 font-semibold text-foreground">GPA</th>
            <th className="text-left py-3 px-4 font-semibold text-foreground">Attendance</th>
            <th className="text-left py-3 px-4 font-semibold text-foreground">Engagement</th>
            <th className="text-left py-3 px-4 font-semibold text-foreground">Last Active</th>
            <th className="text-left py-3 px-4 font-semibold text-foreground">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <div key={student.id} className="space-y-0">
              <tr className="border-b border-border hover:bg-blue-50 dark:hover:bg-blue-950/20 transition">
                <td className="py-4 px-4 text-foreground">{student.name}</td>
                <td className="py-4 px-4 text-foreground/70">{student.class}</td>
                <td className="py-4 px-4">
                  <Badge className={getRiskColor(student.risk)}>
                    {student.risk}
                  </Badge>
                </td>
                <td className="py-4 px-4 text-foreground font-semibold">{student.gpa.toFixed(1)}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <div className="w-16 bg-blue-200 dark:bg-blue-900 rounded-full h-2">
                      <div
                        className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full"
                        style={{ width: `${student.attendance}%` }}
                      />
                    </div>
                    <span className="text-sm text-foreground/70">{student.attendance}%</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <div className="w-16 bg-cyan-200 dark:bg-cyan-900 rounded-full h-2">
                      <div
                        className="bg-cyan-600 dark:bg-cyan-400 h-2 rounded-full"
                        style={{ width: `${student.engagement}%` }}
                      />
                    </div>
                    <span className="text-sm text-foreground/70">{student.engagement}%</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-foreground/70 text-sm">{student.lastActive}</td>
                <td className="py-4 px-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setExpandedStudentId(expandedStudentId === student.id ? null : student.id)}
                  >
                    {expandedStudentId === student.id ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </Button>
                </td>
              </tr>
              {expandedStudentId === student.id && (
                <tr className="border-b border-border bg-blue-50 dark:bg-blue-950/10">
                  <td colSpan={8} className="py-4 px-4">
                    <StudentDetail student={student} />
                  </td>
                </tr>
              )}
            </div>
          ))}
        </tbody>
      </table>
    </div>
  )
}
