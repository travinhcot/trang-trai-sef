'use client'

import { Header } from '@/components/dashboard/header'
import { DataUploadForm } from '@/components/dashboard/data-upload-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function UploadPage() {
  return (
    <div className="flex flex-col h-full">
      <Header title="Data Upload" description="Upload student records, assessments, and LMS activities" />
      
      <div className="flex-1 overflow-auto p-6 space-y-6">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <DataUploadForm />
          </div>

          <div className="space-y-6">
            {/* Supported Formats */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base">Supported Formats</CardTitle>
                <CardDescription>Data file types we accept</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { format: 'CSV', description: 'Comma-separated values' },
                  { format: 'Excel', description: 'XLS, XLSX files' },
                  { format: 'JSON', description: 'Structured data format' },
                  { format: 'Power BI', description: 'Direct integration' },
                ].map((item, index) => (
                  <div key={index} className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded">
                    <p className="font-semibold text-sm text-foreground">{item.format}</p>
                    <p className="text-xs text-foreground/70">{item.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Data Categories */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base">Data Categories</CardTitle>
                <CardDescription>What to upload</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  'Student Information',
                  'Course Registrations',
                  'Assessment Scores',
                  'LMS Activities',
                  'Attendance Records',
                ].map((category, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">{category}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
