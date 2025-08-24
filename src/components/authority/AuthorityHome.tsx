import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, BarChart3, FileText, TrendingUp, AlertTriangle, CheckCircle, Clock, Users } from "lucide-react";

const AuthorityHome = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">US</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold">UrbanSpotter Dashboard</h1>
                <p className="text-muted-foreground">Municipal Authority Portal</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium">Delhi Municipal Corporation</p>
              <p className="text-sm text-muted-foreground">Administrator</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Total Reports</p>
                <p className="text-3xl font-bold">2,847</p>
                <p className="text-sm text-success">↗ 12% from last month</p>
              </div>
              <FileText className="h-8 w-8 text-primary" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Pending Review</p>
                <p className="text-3xl font-bold text-yellow-600">186</p>
                <p className="text-sm text-muted-foreground">Needs attention</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Violations Found</p>
                <p className="text-3xl font-bold text-violation">1,203</p>
                <p className="text-sm text-violation">42% of reports</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-violation" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Active Citizens</p>
                <p className="text-3xl font-bold text-success">156</p>
                <p className="text-sm text-success">↗ 8% growth</p>
              </div>
              <Users className="h-8 w-8 text-success" />
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link to="/authority/heatmap">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:shadow-primary/10 border-primary/20 bg-gradient-to-r from-primary/5 to-primary-glow/5">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Violation Heatmap</h3>
                  <p className="text-muted-foreground text-sm">Geographical overview of reports</p>
                </div>
              </div>
            </Card>
          </Link>

          <Link to="/authority/reports">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Review Reports</h3>
                  <p className="text-muted-foreground text-sm">Verify and process submissions</p>
                </div>
              </div>
            </Card>
          </Link>

          <Link to="/authority/analytics">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-success to-compliant rounded-full flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Analytics</h3>
                  <p className="text-muted-foreground text-sm">Trends and insights</p>
                </div>
              </div>
            </Card>
          </Link>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Reports */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Recent Reports</h3>
              <Link to="/authority/reports">
                <Button variant="outline" size="sm">View All</Button>
              </Link>
            </div>
            
            <div className="space-y-4">
              {[
                { id: 1, location: "Connaught Place", score: 23, time: "2 hours ago", status: "pending" },
                { id: 2, location: "Karol Bagh", score: 78, time: "4 hours ago", status: "verified" },
                { id: 3, location: "Lajpat Nagar", score: 45, time: "6 hours ago", status: "pending" },
              ].map((report) => (
                <div key={report.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div>
                    <p className="font-medium">{report.location}</p>
                    <p className="text-sm text-muted-foreground">{report.time}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-bold ${
                      report.score >= 70 ? "text-success" : 
                      report.score >= 40 ? "text-yellow-600" : "text-violation"
                    }`}>
                      {report.score}/100
                    </p>
                    <div className="flex items-center text-sm">
                      {report.status === "verified" ? (
                        <CheckCircle className="h-4 w-4 text-success mr-1" />
                      ) : (
                        <Clock className="h-4 w-4 text-yellow-600 mr-1" />
                      )}
                      <span className="capitalize">{report.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Compliance Trends */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Compliance Trends</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-5 w-5 text-success" />
                  <div>
                    <p className="font-medium">Overall Compliance</p>
                    <p className="text-sm text-muted-foreground">This month</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-success">68%</p>
                  <p className="text-sm text-success">↗ 5%</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Delhi Central</span>
                  <span className="font-medium">72%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-success h-2 rounded-full" style={{width: "72%"}}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Delhi South</span>
                  <span className="font-medium">65%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{width: "65%"}}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Delhi North</span>
                  <span className="font-medium">58%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-violation h-2 rounded-full" style={{width: "58%"}}></div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AuthorityHome;