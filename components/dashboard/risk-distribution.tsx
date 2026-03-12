'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

const data = [
  { name: 'Low Risk', value: 856, color: '#10b981' },
  { name: 'Medium Risk', value: 256, color: '#f59e0b' },
  { name: 'High Risk', value: 87, color: '#ef4444' },
  { name: 'Critical', value: 49, color: '#dc2626' },
]

export function RiskDistribution() {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader>
        <CardTitle>Risk Distribution</CardTitle>
        <CardDescription>Student risk category breakdown</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: 'oklch(1 0 0)',
                border: '1px solid oklch(0.88 0.02 252.43)',
                borderRadius: '8px',
              }}
            />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
