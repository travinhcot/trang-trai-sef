'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { AlertTriangle, AlertCircle, TrendingDown, CheckCircle2, Trash2 } from 'lucide-react'

interface Alert {
  id: string
  student: string
  studentId: string
  issue: string
  severity: 'critical' | 'high' | 'medium'
  timestamp: string
  status: 'open' | 'addressed' | 'resolved'
}

const mockAlerts: Alert[] = [
  {
    id: '1',
    student: 'John Smith',
    studentId: 'STU001',
    issue: 'Missed 3 consecutive assignments',
    severity: 'critical',
    timestamp: '2 hours ago',
    status: 'open',
  },
  {
    id: '2',
    student: 'Sarah Johnson',
    studentId: 'STU002',
    issue: 'Low quiz performance (42%)',
    severity: 'high',
    timestamp: '4 hours ago',
    status: 'addressed',
  },
  {
    id: '3',
    student: 'Mike Chen',
    studentId: 'STU003',
    issue: 'No LMS activity for 5 days',
    severity: 'high',
    timestamp: '1 day ago',
    status: 'open',
  },
  {
    id: '4',
    student: 'Emma Davis',
    studentId: 'STU004',
    issue: 'Declining attendance pattern',
    severity: 'medium',
    timestamp: '2 days ago',
    status: 'resolved',
  },
  {
    id: '5',
    student: 'Alex Rodriguez',
    studentId: 'STU005',
    issue: 'Low engagement in forums',
    severity: 'medium',
    timestamp: '3 days ago',
    status: 'addressed',
  },
  {
    id: '6',
    student: 'Lisa Wong',
    studentId: 'STU006',
    issue: 'Missing prerequisite concepts',
    severity: 'high',
    timestamp: '4 days ago',
    status: 'open',
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

const getStatusColor = (status: Alert['status']) => {
  switch (status) {
    case 'open':
      return 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900'
    case 'addressed':
      return 'bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-900'
    case 'resolved':
      return 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900'
  }
}

const getStatusBadge = (status: Alert['status']) => {
  switch (status) {
    case 'open':
      return 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-400'
    case 'addressed':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-400'
    case 'resolved':
      return 'bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-400'
  }
}

export function AlertsList() {
  const [alerts, setAlerts] = useState(mockAlerts)

  const handleMarkAddressed = (id: string) => {
    setAlerts(alerts.map(alert => 
      alert.id === id ? { ...alert, status: 'addressed' } : alert
    ))
  }

  const handleMarkResolved = (id: string) => {
    setAlerts(alerts.map(alert => 
      alert.id === id ? { ...alert, status: 'resolved' } : alert
    ))
  }

  const handleDelete = (id: string) => {
    setAlerts(alerts.filter(alert => alert.id !== id))
  }

  return (
    <div className="space-y-4">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={`p-4 rounded-lg border ${getStatusColor(alert.status)} transition`}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center gap-2">
                  {alert.severity === 'critical' ? (
                    <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  )}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{alert.student}</p>
                  <p className="text-sm text-foreground/70">{alert.studentId}</p>
                </div>
                <div className="flex items-center gap-2 ml-auto">
                  <Badge className={getSeverityColor(alert.severity)}>
                    {alert.severity}
                  </Badge>
                  <Badge className={getStatusBadge(alert.status)}>
                    {alert.status}
                  </Badge>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingDown className="w-4 h-4 text-foreground/50 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground/80">{alert.issue}</p>
                  <p className="text-sm text-foreground/50 mt-1">{alert.timestamp}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {alert.status !== 'resolved' && (
                <>
                  {alert.status === 'open' ? (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleMarkAddressed(alert.id)}
                      className="text-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-950/20"
                    >
                      Mark Addressed
                    </Button>
                  ) : null}
                  <Button
                    size="sm"
                    className="bg-green-600 hover:bg-green-700"
                    onClick={() => handleMarkResolved(alert.id)}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    Resolve
                  </Button>
                </>
              )}
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleDelete(alert.id)}
                className="text-destructive hover:bg-red-50 dark:hover:bg-red-950/20"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
