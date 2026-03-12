'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AlertTriangle, AlertCircle, TrendingDown } from 'lucide-react'

interface Alert {
  id: string
  student: string
  issue: string
  severity: 'critical' | 'high' | 'medium'
  timestamp: string
  icon: React.ReactNode
}

const alerts: Alert[] = [
  {
    id: '1',
    student: 'John Smith',
    issue: 'Missed 3 consecutive assignments',
    severity: 'critical',
    timestamp: '2 hours ago',
    icon: <AlertTriangle className="w-4 h-4" />,
  },
  {
    id: '2',
    student: 'Sarah Johnson',
    issue: 'Low quiz performance (42%)',
    severity: 'high',
    timestamp: '4 hours ago',
    icon: <TrendingDown className="w-4 h-4" />,
  },
  {
    id: '3',
    student: 'Mike Chen',
    issue: 'No LMS activity for 5 days',
    severity: 'high',
    timestamp: '1 day ago',
    icon: <AlertCircle className="w-4 h-4" />,
  },
  {
    id: '4',
    student: 'Emma Davis',
    issue: 'Declining attendance pattern',
    severity: 'medium',
    timestamp: '2 days ago',
    icon: <TrendingDown className="w-4 h-4" />,
  },
  {
    id: '5',
    student: 'Alex Rodriguez',
    issue: 'Low engagement in forums',
    severity: 'medium',
    timestamp: '3 days ago',
    icon: <AlertCircle className="w-4 h-4" />,
  },
]

const getSeverityColor = (severity: Alert['severity']) => {
  switch (severity) {
    case 'critical':
      return 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-400'
    case 'high':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-400'
    default:
      return 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-400'
  }
}

const getSeverityIcon = (severity: Alert['severity']) => {
  switch (severity) {
    case 'critical':
      return 'text-red-600 dark:text-red-400'
    case 'high':
      return 'text-yellow-600 dark:text-yellow-400'
    default:
      return 'text-blue-600 dark:text-blue-400'
  }
}

export function RecentAlerts() {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader>
        <CardTitle>Recent Alerts</CardTitle>
        <CardDescription>Latest at-risk student notifications</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div key={alert.id} className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900">
              <div className={getSeverityIcon(alert.severity)}>
                {alert.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-medium text-foreground text-sm">{alert.student}</p>
                  <Badge className={getSeverityColor(alert.severity)}>
                    {alert.severity}
                  </Badge>
                </div>
                <p className="text-xs text-foreground/70 mt-1">{alert.issue}</p>
                <p className="text-xs text-foreground/50 mt-1">{alert.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
