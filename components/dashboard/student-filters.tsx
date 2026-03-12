'use client'

import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Search } from 'lucide-react'

interface StudentFiltersProps {
  filters: {
    risk: string
    search: string
    class: string
    department: string
  }
  onFiltersChange: (filters: StudentFiltersProps['filters']) => void
}

export function StudentFilters({ filters, onFiltersChange }: StudentFiltersProps) {
  const handleRiskChange = (value: string) => {
    onFiltersChange({ ...filters, risk: value })
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFiltersChange({ ...filters, search: e.target.value })
  }

  const handleClassChange = (value: string) => {
    onFiltersChange({ ...filters, class: value })
  }

  const handleDepartmentChange = (value: string) => {
    onFiltersChange({ ...filters, department: value })
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground/50" />
        <Input
          placeholder="Search students..."
          value={filters.search}
          onChange={handleSearchChange}
          className="pl-10"
        />
      </div>

      <Select value={filters.risk} onValueChange={handleRiskChange}>
        <SelectTrigger className="bg-white dark:bg-slate-900">
          <SelectValue placeholder="Risk Level" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Risk Levels</SelectItem>
          <SelectItem value="low">Low Risk</SelectItem>
          <SelectItem value="medium">Medium Risk</SelectItem>
          <SelectItem value="high">High Risk</SelectItem>
          <SelectItem value="critical">Critical</SelectItem>
        </SelectContent>
      </Select>

      <Select value={filters.class} onValueChange={handleClassChange}>
        <SelectTrigger className="bg-white dark:bg-slate-900">
          <SelectValue placeholder="Class" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Classes</SelectItem>
          <SelectItem value="cs101">CS 101</SelectItem>
          <SelectItem value="cs201">CS 201</SelectItem>
          <SelectItem value="math101">MATH 101</SelectItem>
          <SelectItem value="eng102">ENG 102</SelectItem>
        </SelectContent>
      </Select>

      <Select value={filters.department} onValueChange={handleDepartmentChange}>
        <SelectTrigger className="bg-white dark:bg-slate-900">
          <SelectValue placeholder="Department" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Departments</SelectItem>
          <SelectItem value="cs">Computer Science</SelectItem>
          <SelectItem value="eng">Engineering</SelectItem>
          <SelectItem value="business">Business</SelectItem>
          <SelectItem value="arts">Arts & Sciences</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
