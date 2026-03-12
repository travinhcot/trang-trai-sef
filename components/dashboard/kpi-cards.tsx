'use client'

import { Card, CardContent } from '@/components/ui/card'
import { TrendingUp, TrendingDown, Users, AlertTriangle } from 'lucide-react'

interface KPIData {
  label: string
  value: string | number
  change?: string
  trend?: 'up' | 'down'
  icon: React.ReactNode
  color: string
}

const kpis: KPIData[] = [
  {
    label: 'Total Students',
    value: '1,248',
    change: '+5.2%',
    trend: 'up',
    icon: <Users className="w-6 h-6" />,
    color: 'from-blue-600 to-blue-500',
  },
  {
    label: 'At-Risk Students',
    value: '87',
    change: '-2.3%',
    trend: 'down',
    icon: <AlertTriangle className="w-6 h-6" />,
    color: 'from-yellow-600 to-orange-500',
  },
  {
    label: 'Engagement Score',
    value: '78%',
    change: '+3.1%',
    trend: 'up',
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'from-cyan-600 to-cyan-500',
  },
  {
    label: 'Intervention Success',
    value: '87%',
    change: '+1.2%',
    trend: 'up',
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'from-green-600 to-emerald-500',
  },
]

export function KPICards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpis.map((kpi, index) => (
        <Card key={index} className="border-0 shadow-sm hover:shadow-md transition">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm text-foreground/70 font-medium">{kpi.label}</p>
                <div className="flex items-baseline gap-2 mt-2">
                  <p className="text-3xl font-bold text-foreground">{kpi.value}</p>
                  {kpi.change && (
                    <div className="flex items-center gap-1">
                      {kpi.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-green-600" />
                      )}
                      <span className={kpi.trend === 'up' ? 'text-green-600' : 'text-green-600'}>
                        {kpi.change}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className={`p-3 rounded-lg bg-gradient-to-br ${kpi.color} text-white`}>
                {kpi.icon}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
