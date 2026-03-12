'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Upload, CheckCircle2, AlertCircle } from 'lucide-react'

interface UploadedFile {
  name: string
  size: number
  status: 'uploaded' | 'processing' | 'error'
  timestamp: string
}

export function DataUploadForm() {
  const [dataType, setDataType] = useState('')
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([
    {
      name: 'student_records_march.csv',
      size: 2.4,
      status: 'uploaded',
      timestamp: '2024-03-10 14:30',
    },
    {
      name: 'course_registrations.xlsx',
      size: 1.8,
      status: 'uploaded',
      timestamp: '2024-03-09 10:15',
    },
    {
      name: 'lms_activities_weekly.json',
      size: 3.2,
      status: 'uploaded',
      timestamp: '2024-03-08 16:45',
    },
  ])

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      Array.from(files).forEach((file) => {
        const newFile: UploadedFile = {
          name: file.name,
          size: parseFloat((file.size / 1024 / 1024).toFixed(2)),
          status: 'processing',
          timestamp: new Date().toLocaleString(),
        }
        setUploadedFiles((prev) => [newFile, ...prev])

        // Simulate processing
        setTimeout(() => {
          setUploadedFiles((prev) =>
            prev.map((f) =>
              f.name === file.name ? { ...f, status: 'uploaded' } : f
            )
          )
        }, 2000)
      })
    }
  }

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader>
        <CardTitle>Upload Student Data</CardTitle>
        <CardDescription>
          Upload your student records to begin monitoring and analysis
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Data Type Selection */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">Data Type</label>
          <Select value={dataType} onValueChange={setDataType}>
            <SelectTrigger className="bg-white dark:bg-slate-900">
              <SelectValue placeholder="Select data type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="student">Student Information</SelectItem>
              <SelectItem value="courses">Course Registrations</SelectItem>
              <SelectItem value="assessments">Assessment Scores</SelectItem>
              <SelectItem value="lms">LMS Activities</SelectItem>
              <SelectItem value="attendance">Attendance Records</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* File Upload Area */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">Upload File</label>
          <div className="border-2 border-dashed border-blue-300 dark:border-blue-800 rounded-lg p-8 text-center bg-blue-50 dark:bg-blue-950/20 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition cursor-pointer">
            <input
              type="file"
              multiple
              onChange={handleUpload}
              className="hidden"
              id="file-upload"
              accept=".csv,.xlsx,.xls,.json"
            />
            <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center gap-3">
              <Upload className="w-8 h-8 text-primary" />
              <div>
                <p className="font-semibold text-foreground">Drag and drop your files here</p>
                <p className="text-sm text-foreground/70">or click to browse</p>
              </div>
              <p className="text-xs text-foreground/50">Supported: CSV, XLSX, JSON</p>
            </label>
          </div>
        </div>

        {/* Upload History */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground">Recent Uploads</h3>
          <div className="space-y-2 max-h-72 overflow-y-auto">
            {uploadedFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg border border-border bg-white dark:bg-slate-950 hover:shadow-sm transition"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground truncate">{file.name}</p>
                  <p className="text-xs text-foreground/70">
                    {file.size} MB · {file.timestamp}
                  </p>
                </div>
                <div className="ml-2 flex-shrink-0">
                  {file.status === 'uploaded' && (
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  )}
                  {file.status === 'processing' && (
                    <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                  )}
                  {file.status === 'error' && (
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button className="bg-primary hover:bg-primary/90 text-white flex-1">
            Confirm Upload
          </Button>
          <Button variant="outline" className="border-blue-300">
            Clear All
          </Button>
        </div>

        {/* Info Box */}
        <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-900 rounded-lg">
          <p className="text-sm text-foreground/80">
            <span className="font-semibold">Tip:</span> Ensure your data includes student IDs, assessment dates, and engagement metrics for accurate analysis and recommendations.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
