import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Calendar, CheckCircle, Clock, AlertTriangle } from "lucide-react";

const CitizenDashboard = () => {
  const reports = [
    {
      id: 1,
      location: "Connaught Place, New Delhi",
      date: "2024-01-15",
      status: "verified",
      score: 23,
      violations: ["Size exceeded", "No permit"]
    },
    {
      id: 2,
      location: "MG Road, Bangalore",
      date: "2024-01-12",
      status: "pending",
      score: 45,
      violations: ["Improper placement"]
    },
    {
      id: 3,
      location: "Marine Drive, Mumbai",
      date: "2024-01-10",
      status: "verified",
      score: 78,
      violations: []
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "verified": return "default";
      case "pending": return "secondary";
      case "rejected": return "destructive";
      default: return "secondary";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "verified": return <CheckCircle className="h-4 w-4" />;
      case "pending": return <Clock className="h-4 w-4" />;
      case "rejected": return <AlertTriangle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/citizen" className="flex items-center text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back
          </Link>
          <h1 className="text-xl font-semibold">My Reports</h1>
          <div></div>
        </div>
      </header>

      <div className="container mx-auto max-w-2xl p-4">
        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">{reports.length}</div>
            <div className="text-sm text-muted-foreground">Total Reports</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-success">
              {reports.filter(r => r.status === "verified").length}
            </div>
            <div className="text-sm text-muted-foreground">Verified</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">850</div>
            <div className="text-sm text-muted-foreground">Points Earned</div>
          </Card>
        </div>

        {/* Reports List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Recent Reports</h2>
          
          {reports.map((report) => (
            <Card key={report.id} className="p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{report.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(report.date).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <Badge variant={getStatusColor(report.status)} className="flex items-center space-x-1">
                  {getStatusIcon(report.status)}
                  <span className="capitalize">{report.status}</span>
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground">Compliance Score</div>
                  <div className={`text-lg font-bold ${
                    report.score >= 70 ? "text-success" : 
                    report.score >= 40 ? "text-yellow-600" : "text-violation"
                  }`}>
                    {report.score}/100
                  </div>
                </div>

                {report.violations.length > 0 && (
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Violations</div>
                    <div className="text-sm text-violation">
                      {report.violations.length} found
                    </div>
                  </div>
                )}
              </div>

              {report.violations.length > 0 && (
                <div className="mt-3 pt-3 border-t border-border">
                  <div className="flex flex-wrap gap-2">
                    {report.violations.map((violation, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {violation}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-8 space-y-3">
          <Link to="/citizen/camera">
            <Button className="w-full bg-gradient-to-r from-primary to-primary-glow">
              Report New Billboard
            </Button>
          </Link>
          
          <Link to="/citizen/leaderboard">
            <Button variant="outline" className="w-full">
              View Leaderboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CitizenDashboard;