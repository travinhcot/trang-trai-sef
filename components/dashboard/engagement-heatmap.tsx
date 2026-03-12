'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { day: 'Monday', lms: 85, quiz: 72, assignment: 90, forum: 45 },
  { day: 'Tuesday', lms: 88, quiz: 78, assignment: 85, forum: 52 },
  { day: 'Wednesday', lms: 82, quiz: 81, assignment: 88, forum: 58 },
  { day: 'Thursday', lms: 90, quiz: 84, assignment: 92, forum: 65 },
  { day: 'Friday', lms: 78, quiz: 76, assignment: 80, forum: 48 },
  { day: 'Saturday', lms: 65, quiz: 58, assignment: 62, forum: 35 },
  { day: 'Sunday', lms: 72, quiz: 65, assignment: 70, forum: 40 },
]

export function EngagementHeatmap() {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader>
        <CardTitle>Weekly Engagement Patterns</CardTitle>
        <CardDescription>Daily activity across different platforms</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.922 0 0)" />
            <XAxis dataKey="day" stroke="oklch(0.556 0 0)" />
            <YAxis stroke="oklch(0.556 0 0)" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'oklch(1 0 0)',
                border: '1px solid oklch(0.88 0.02 252.43)',
                borderRadius: '8px',
              }}
            />
            <Bar dataKey="lms" stackId="a" fill="oklch(0.52 0.215 263.51)" name="LMS" />
            <Bar dataKey="quiz" stackId="a" fill="oklch(0.65 0.2 262.51)" name="Quiz" />
            <Bar dataKey="assignment" stackId="a" fill="oklch(0.7 0.18 265.51)" name="Assignment" />
            <Bar dataKey="forum" stackId="a" fill="oklch(0.88 0.18 95.59)" name="Forum" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
