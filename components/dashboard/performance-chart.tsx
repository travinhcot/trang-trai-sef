'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { week: 'Week 1', performance: 72, engagement: 68, attendance: 94 },
  { week: 'Week 2', performance: 75, engagement: 70, attendance: 92 },
  { week: 'Week 3', performance: 78, engagement: 75, attendance: 95 },
  { week: 'Week 4', performance: 82, engagement: 80, attendance: 96 },
  { week: 'Week 5', performance: 79, engagement: 77, attendance: 93 },
  { week: 'Week 6', performance: 85, engagement: 82, attendance: 97 },
  { week: 'Week 7', performance: 88, engagement: 85, attendance: 98 },
  { week: 'Week 8', performance: 87, engagement: 84, attendance: 96 },
]

export function PerformanceChart() {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader>
        <CardTitle>Student Performance Trend</CardTitle>
        <CardDescription>Weekly average scores across key metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.922 0 0)" />
            <XAxis dataKey="week" stroke="oklch(0.556 0 0)" />
            <YAxis stroke="oklch(0.556 0 0)" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'oklch(1 0 0)',
                border: '1px solid oklch(0.88 0.02 252.43)',
                borderRadius: '8px',
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="performance"
              stroke="oklch(0.52 0.215 263.51)"
              strokeWidth={2}
              dot={{ fill: 'oklch(0.52 0.215 263.51)', r: 4 }}
              activeDot={{ r: 6 }}
              name="Performance"
            />
            <Line
              type="monotone"
              dataKey="engagement"
              stroke="oklch(0.65 0.2 262.51)"
              strokeWidth={2}
              dot={{ fill: 'oklch(0.65 0.2 262.51)', r: 4 }}
              activeDot={{ r: 6 }}
              name="Engagement"
            />
            <Line
              type="monotone"
              dataKey="attendance"
              stroke="oklch(0.88 0.18 95.59)"
              strokeWidth={2}
              dot={{ fill: 'oklch(0.88 0.18 95.59)', r: 4 }}
              activeDot={{ r: 6 }}
              name="Attendance"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
