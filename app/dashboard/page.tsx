'use client'

import { Header } from '@/components/dashboard/header'
import { KPICards } from '@/components/dashboard/kpi-cards'
import { PerformanceChart } from '@/components/dashboard/performance-chart'
import { EngagementHeatmap } from '@/components/dashboard/engagement-heatmap'
import { RiskDistribution } from '@/components/dashboard/risk-distribution'
import { RecentAlerts } from '@/components/dashboard/recent-alerts'

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-full">
      <Header title="Dashboard" description="Monitor student performance and engagement in real-time" />
      
      <div className="flex-1 overflow-auto p-6 space-y-6">
        {/* KPI Cards */}
        <KPICards />

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <PerformanceChart />
          </div>
          <div>
            <RiskDistribution />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid lg:grid-cols-2 gap-6">
          <EngagementHeatmap />
          <RecentAlerts />
        </div>
      </div>
    </div>
  )
}
