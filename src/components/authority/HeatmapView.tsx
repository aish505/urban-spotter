import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, MapPin, Filter, Calendar, AlertTriangle, Eye } from "lucide-react";

const HeatmapView = () => {
  const [timeFilter, setTimeFilter] = useState("week");
  const [severityFilter, setSeverityFilter] = useState("all");

  // Mock data for map pins
  const reportPins = [
    { id: 1, lat: 28.6315, lng: 77.2167, severity: "high", reports: 8, area: "Connaught Place" },
    { id: 2, lat: 28.6139, lng: 77.2090, severity: "medium", reports: 5, area: "India Gate" },
    { id: 3, lat: 28.5535, lng: 77.2588, severity: "high", reports: 12, area: "Lajpat Nagar" },
    { id: 4, lat: 28.6692, lng: 77.2265, severity: "low", reports: 3, area: "Karol Bagh" },
    { id: 5, lat: 28.5245, lng: 77.1855, severity: "medium", reports: 7, area: "Saket" },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "bg-violation";
      case "medium": return "bg-yellow-500";
      case "low": return "bg-success";
      default: return "bg-muted";
    }
  };

  const filteredPins = reportPins.filter(pin => 
    severityFilter === "all" || pin.severity === severityFilter
  );

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/authority" className="flex items-center text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-xl font-semibold">Violation Heatmap</h1>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              Satellite View
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Map Area */}
        <div className="flex-1 relative">
          {/* Filters */}
          <div className="absolute top-4 left-4 z-10 flex space-x-2">
            <Select value={timeFilter} onValueChange={setTimeFilter}>
              <SelectTrigger className="w-32 bg-card">
                <Calendar className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>

            <Select value={severityFilter} onValueChange={setSeverityFilter}>
              <SelectTrigger className="w-32 bg-card">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Severity</SelectItem>
                <SelectItem value="high">High Risk</SelectItem>
                <SelectItem value="medium">Medium Risk</SelectItem>
                <SelectItem value="low">Low Risk</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Legend */}
          <div className="absolute top-4 right-4 z-10">
            <Card className="p-4 bg-card/95 backdrop-blur-sm">
              <h4 className="font-medium mb-3">Violation Density</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-violation rounded-full"></div>
                  <span className="text-sm">High (8+ reports)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm">Medium (4-7 reports)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-success rounded-full"></div>
                  <span className="text-sm">Low (1-3 reports)</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Mock Map */}
          <div className="h-screen bg-gradient-to-br from-green-100 via-blue-50 to-blue-100 relative overflow-hidden">
            {/* Mock map background with roads */}
            <div className="absolute inset-0">
              {/* Horizontal roads */}
              <div className="absolute top-1/4 left-0 right-0 h-2 bg-gray-300"></div>
              <div className="absolute top-1/2 left-0 right-0 h-3 bg-gray-400"></div>
              <div className="absolute top-3/4 left-0 right-0 h-2 bg-gray-300"></div>
              
              {/* Vertical roads */}
              <div className="absolute left-1/4 top-0 bottom-0 w-2 bg-gray-300"></div>
              <div className="absolute left-1/2 top-0 bottom-0 w-3 bg-gray-400"></div>
              <div className="absolute left-3/4 top-0 bottom-0 w-2 bg-gray-300"></div>

              {/* Report pins */}
              {filteredPins.map((pin, index) => (
                <div
                  key={pin.id}
                  className={`absolute w-8 h-8 ${getSeverityColor(pin.severity)} rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-125 transition-transform flex items-center justify-center text-white text-xs font-bold`}
                  style={{
                    left: `${20 + (index * 15)}%`,
                    top: `${30 + (index * 8)}%`,
                  }}
                  title={`${pin.area}: ${pin.reports} reports`}
                >
                  {pin.reports}
                </div>
              ))}

              {/* Heat zones (mock) */}
              <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-violation/20 rounded-full blur-xl"></div>
              <div className="absolute top-1/2 left-1/5 w-24 h-24 bg-yellow-500/20 rounded-full blur-xl"></div>
              <div className="absolute top-2/3 right-1/4 w-20 h-20 bg-success/20 rounded-full blur-xl"></div>
            </div>

            {/* Area labels */}
            <div className="absolute top-1/4 left-1/3 text-lg font-semibold text-gray-700">Connaught Place</div>
            <div className="absolute top-1/2 left-1/6 text-base font-medium text-gray-600">India Gate</div>
            <div className="absolute top-2/3 left-1/2 text-base font-medium text-gray-600">Lajpat Nagar</div>
            <div className="absolute top-1/3 right-1/3 text-base font-medium text-gray-600">Karol Bagh</div>
            <div className="absolute bottom-1/4 right-1/4 text-base font-medium text-gray-600">Saket</div>
          </div>
        </div>

        {/* Side Panel */}
        <div className="w-80 bg-card border-l border-border h-screen overflow-y-auto">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Report Clusters</h3>
            
            <div className="space-y-4">
              {filteredPins
                .sort((a, b) => b.reports - a.reports)
                .map((pin) => (
                <Card key={pin.id} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{pin.area}</span>
                    </div>
                    <Badge variant={
                      pin.severity === "high" ? "destructive" : 
                      pin.severity === "medium" ? "secondary" : "default"
                    }>
                      {pin.severity}
                    </Badge>
                  </div>
                  
                  <div className="text-sm text-muted-foreground mb-3">
                    {pin.reports} reports in this area
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className={`w-3 h-3 ${getSeverityColor(pin.severity)} rounded-full`}></div>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Summary Stats */}
            <Card className="mt-6 p-4">
              <h4 className="font-medium mb-3">Area Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Total Clusters:</span>
                  <span className="font-medium">{filteredPins.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Reports:</span>
                  <span className="font-medium">{filteredPins.reduce((acc, pin) => acc + pin.reports, 0)}</span>
                </div>
                <div className="flex justify-between">
                  <span>High Risk Areas:</span>
                  <span className="font-medium text-violation">
                    {filteredPins.filter(pin => pin.severity === "high").length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Avg Reports/Area:</span>
                  <span className="font-medium">
                    {Math.round(filteredPins.reduce((acc, pin) => acc + pin.reports, 0) / filteredPins.length)}
                  </span>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <div className="mt-6 space-y-2">
              <Button className="w-full" size="sm">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Generate Alert
              </Button>
              <Button variant="outline" className="w-full" size="sm">
                Export Map Data
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeatmapView;