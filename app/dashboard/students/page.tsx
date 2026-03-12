'use client'

import { useState } from 'react'
import { Header } from '@/components/dashboard/header'
import { StudentList } from '@/components/dashboard/student-list'
import { StudentFilters } from '@/components/dashboard/student-filters'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function StudentsPage() {
  const [filters, setFilters] = useState({
    risk: 'all',
    search: '',
    class: 'all',
    department: 'all',
  })

  return (
    <div className="flex flex-col h-full">
      <Header title="Students" description="Monitor individual student performance and risk levels" />
      
      <div className="flex-1 overflow-auto p-6 space-y-6">
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Student Risk Analysis</CardTitle>
            <CardDescription>Filter and view detailed student information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <StudentFilters filters={filters} onFiltersChange={setFilters} />
            <StudentList filters={filters} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
