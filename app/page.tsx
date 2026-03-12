'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, BarChart3, AlertTriangle, TrendingUp, Users, Zap } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-blue-50 dark:to-slate-950">
      {/* Navigation */}
      <nav className="border-b border-blue-200 dark:border-blue-900 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold">
              SRD
            </div>
            <h1 className="text-xl font-bold text-primary">StudentCare</h1>
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <a href="#features" className="text-sm text-foreground/70 hover:text-primary transition">Features</a>
            <a href="#benefits" className="text-sm text-foreground/70 hover:text-primary transition">Benefits</a>
            <Link href="/dashboard" className="ml-4">
              <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-foreground mb-6 text-balance">
            Detect At-Risk Students <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500">Before It's Too Late</span>
          </h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto text-pretty">
            Leverage predictive analytics to identify struggling students early and provide timely interventions. Monitor engagement, performance, and behavior patterns across your institution.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Start Monitoring
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-blue-300 hover:bg-blue-50 dark:hover:bg-blue-950">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Key Features</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-blue-200 dark:border-blue-900 hover:shadow-lg transition">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 text-white flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6" />
              </div>
              <CardTitle className="text-primary">Predictive Analytics</CardTitle>
              <CardDescription>AI-powered insights identify at-risk patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/70">
                Machine learning models analyze student data to predict performance issues before they occur, enabling proactive interventions.
              </p>
            </CardContent>
          </Card>

          <Card className="border-cyan-200 dark:border-cyan-900 hover:shadow-lg transition">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 text-white flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <CardTitle className="text-cyan-600 dark:text-cyan-400">Real-Time Alerts</CardTitle>
              <CardDescription>Get notified instantly of at-risk students</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/70">
                Automatic alerts notify lecturers when students show signs of disengagement, allowing for immediate action and support.
              </p>
            </CardContent>
          </Card>

          <Card className="border-yellow-200 dark:border-yellow-900 hover:shadow-lg transition">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 text-white flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <CardTitle className="text-yellow-600 dark:text-yellow-400">Performance Tracking</CardTitle>
              <CardDescription>Monitor trends and measure intervention success</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/70">
                Comprehensive dashboards track student progress, engagement metrics, and intervention outcomes in real-time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-2xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">Why Choose StudentCare?</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Student-Centric</p>
                  <p className="text-sm text-foreground/70">Focus on each student's unique journey and learning needs</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <Zap className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Fast Implementation</p>
                  <p className="text-sm text-foreground/70">Quick data integration with Power BI for instant insights</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <TrendingUp className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Improved Retention</p>
                  <p className="text-sm text-foreground/70">Increase student success rates with early interventions</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl blur-2xl" />
            <Card className="relative border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle>Analytics Dashboard</CardTitle>
                <CardDescription>Real-time student monitoring and insights</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/70">At-Risk Students Identified</span>
                    <span className="font-semibold text-primary">24</span>
                  </div>
                  <div className="w-full bg-blue-200 dark:bg-blue-900 rounded-full h-2">
                    <div className="bg-primary rounded-full h-2" style={{width: '65%'}} />
                  </div>
                  <div className="flex justify-between text-sm pt-2">
                    <span className="text-foreground/70">Intervention Success Rate</span>
                    <span className="font-semibold text-yellow-600 dark:text-yellow-400">87%</span>
                  </div>
                  <div className="w-full bg-blue-200 dark:bg-blue-900 rounded-full h-2">
                    <div className="bg-accent rounded-full h-2" style={{width: '87%'}} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h3 className="text-3xl font-bold mb-4 text-foreground">Ready to Transform Student Success?</h3>
        <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
          Start monitoring your students today and see the difference early intervention can make.
        </p>
        <Link href="/dashboard">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
            Access Dashboard
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-foreground/70">
          <p>&copy; 2024 StudentCare. Early Detection. Timely Intervention. Student Success.</p>
        </div>
      </footer>
    </div>
  )
}
