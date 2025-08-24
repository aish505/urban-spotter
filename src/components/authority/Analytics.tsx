import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, TrendingDown, BarChart3, PieChart, Download } from "lucide-react";

const Analytics = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/authority" className="flex items-center text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-xl font-semibold">Analytics & Insights</h1>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Monthly Reports</p>
                <p className="text-3xl font-bold">847</p>
                <div className="flex items-center text-sm text-success">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span>↗ 15% vs last month</span>
                </div>
              </div>
              <BarChart3 className="h-8 w-8 text-primary" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Violation Rate</p>
                <p className="text-3xl font-bold text-violation">42%</p>
                <div className="flex items-center text-sm text-violation">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  <span>↘ 3% improvement</span>
                </div>
              </div>
              <PieChart className="h-8 w-8 text-violation" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Avg Response Time</p>
                <p className="text-3xl font-bold">2.4</p>
                <p className="text-sm text-muted-foreground">hours</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Active Citizens</p>
                <p className="text-3xl font-bold text-success">156</p>
                <div className="flex items-center text-sm text-success">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span>↗ 8% growth</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Reports Trend */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Reports Over Time</h3>
            <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">Line chart showing report trends</p>
                <p className="text-sm text-muted-foreground">Last 6 months data</p>
              </div>
            </div>
          </Card>

          {/* Violation Types */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Violation Types</h3>
            <div className="space-y-4">
              {[
                { type: "Size Exceeded", count: 342, percentage: 35 },
                { type: "No Permit Visible", count: 298, percentage: 31 },
                { type: "Improper Placement", count: 187, percentage: 19 },
                { type: "Content Violations", count: 95, percentage: 10 },
                { type: "Safety Hazards", count: 48, percentage: 5 }
              ].map((violation) => (
                <div key={violation.type} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{violation.type}</span>
                    <span className="text-muted-foreground">{violation.count} reports</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-violation h-2 rounded-full transition-all duration-500"
                      style={{width: `${violation.percentage}%`}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Geographic Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Top Areas */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Most Reported Areas</h3>
            <div className="space-y-3">
              {[
                { area: "Connaught Place", reports: 89, trend: "up" },
                { area: "Karol Bagh", reports: 67, trend: "down" },
                { area: "Lajpat Nagar", reports: 54, trend: "up" },
                { area: "Rajouri Garden", reports: 43, trend: "stable" },
                { area: "Saket", reports: 38, trend: "down" }
              ].map((area, index) => (
                <div key={area.area} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="font-medium">{area.area}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">{area.reports}</div>
                    <div className={`text-xs ${
                      area.trend === "up" ? "text-violation" : 
                      area.trend === "down" ? "text-success" : "text-muted-foreground"
                    }`}>
                      {area.trend === "up" ? "↗" : area.trend === "down" ? "↘" : "→"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Compliance by District */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">District Compliance</h3>
            <div className="space-y-4">
              {[
                { district: "Central Delhi", compliance: 72, reports: 234 },
                { district: "South Delhi", compliance: 68, reports: 189 },
                { district: "West Delhi", compliance: 65, reports: 156 },
                { district: "North Delhi", compliance: 58, reports: 143 },
                { district: "East Delhi", compliance: 61, reports: 125 }
              ].map((district) => (
                <div key={district.district} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm">{district.district}</span>
                    <span className={`font-bold ${
                      district.compliance >= 70 ? "text-success" : 
                      district.compliance >= 60 ? "text-yellow-600" : "text-violation"
                    }`}>
                      {district.compliance}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        district.compliance >= 70 ? "bg-success" : 
                        district.compliance >= 60 ? "bg-yellow-500" : "bg-violation"
                      }`}
                      style={{width: `${district.compliance}%`}}
                    ></div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {district.reports} reports processed
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Time Analysis */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Peak Reporting Times</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium mb-2">By Hour</p>
                <div className="grid grid-cols-6 gap-1">
                  {Array.from({length: 24}, (_, i) => {
                    const activity = Math.random() * 100;
                    return (
                      <div key={i} className="text-center">
                        <div 
                          className="bg-primary/20 w-full mb-1 rounded"
                          style={{height: `${Math.max(activity * 0.3, 4)}px`}}
                        ></div>
                        <div className="text-xs text-muted-foreground">
                          {i}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">By Day of Week</p>
                <div className="space-y-2">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => {
                    const reports = [34, 45, 52, 48, 41, 29, 22][index];
                    return (
                      <div key={day} className="flex items-center space-x-3">
                        <div className="w-8 text-xs font-medium">{day}</div>
                        <div className="flex-1 bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full"
                            style={{width: `${(reports / 52) * 100}%`}}
                          ></div>
                        </div>
                        <div className="text-xs text-muted-foreground w-8">{reports}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Summary Insights */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Key Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium text-success">Positive Trends</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Overall compliance improved by 3% this month</li>
                <li>• Average response time reduced to 2.4 hours</li>
                <li>• 15% increase in citizen participation</li>
                <li>• Central Delhi leading with 72% compliance</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-violation">Areas for Improvement</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• North Delhi compliance below 60%</li>
                <li>• Size violations remain most common (35%)</li>
                <li>• Weekend reporting significantly lower</li>
                <li>• Need focused enforcement in Connaught Place</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;