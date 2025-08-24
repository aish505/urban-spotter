import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Search, Filter, Eye, CheckCircle, XCircle, Clock, MapPin, Calendar } from "lucide-react";

const ReportsTable = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const reports = [
    {
      id: "RPT001",
      location: "Connaught Place, New Delhi",
      submittedBy: "Priya S.",
      date: "2024-01-15",
      time: "14:30",
      status: "pending",
      score: 23,
      violations: ["Size exceeded", "No permit visible"],
      priority: "high"
    },
    {
      id: "RPT002", 
      location: "MG Road, Bangalore",
      submittedBy: "Arjun K.",
      date: "2024-01-15",
      time: "12:15",
      status: "verified",
      score: 45,
      violations: ["Improper placement"],
      priority: "medium"
    },
    {
      id: "RPT003",
      location: "Marine Drive, Mumbai", 
      submittedBy: "Meera R.",
      date: "2024-01-14",
      time: "16:45",
      status: "verified",
      score: 78,
      violations: [],
      priority: "low"
    },
    {
      id: "RPT004",
      location: "Anna Salai, Chennai",
      submittedBy: "Raj M.",
      date: "2024-01-14",
      time: "11:20",
      status: "rejected",
      score: 15,
      violations: ["Multiple violations", "Structural hazard"],
      priority: "high"
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
      case "rejected": return <XCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "text-violation";
      case "medium": return "text-yellow-600";
      case "low": return "text-success";
      default: return "text-muted-foreground";
    }
  };

  const filteredReports = reports.filter(report => {
    const matchesFilter = filter === "all" || report.status === filter;
    const matchesSearch = report.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.submittedBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/authority" className="flex items-center text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-xl font-semibold">Reports Management</h1>
          <Button>
            Export Reports
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Filters */}
        <Card className="p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by location, reporter, or report ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Reports</SelectItem>
                <SelectItem value="pending">Pending Review</SelectItem>
                <SelectItem value="verified">Verified</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        {/* Reports Grid */}
        <div className="space-y-4">
          {filteredReports.map((report) => (
            <Card key={report.id} className="p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold text-lg">{report.id}</h3>
                    <Badge variant={getStatusColor(report.status)} className="flex items-center space-x-1">
                      {getStatusIcon(report.status)}
                      <span className="capitalize">{report.status}</span>
                    </Badge>
                    <span className={`text-sm font-medium ${getPriorityColor(report.priority)}`}>
                      {report.priority.toUpperCase()} PRIORITY
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{report.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{report.date} at {report.time}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">Reported by: <span className="font-medium">{report.submittedBy}</span></p>
                </div>

                <div className="text-right">
                  <div className="mb-2">
                    <div className={`text-2xl font-bold ${
                      report.score >= 70 ? "text-success" : 
                      report.score >= 40 ? "text-yellow-600" : "text-violation"
                    }`}>
                      {report.score}/100
                    </div>
                    <div className="text-sm text-muted-foreground">Compliance Score</div>
                  </div>
                </div>
              </div>

              {report.violations.length > 0 && (
                <div className="mb-4">
                  <p className="text-sm font-medium mb-2">Detected Violations:</p>
                  <div className="flex flex-wrap gap-2">
                    {report.violations.map((violation, index) => (
                      <Badge key={index} variant="outline" className="text-xs text-violation border-violation/30">
                        {violation}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex space-x-2">
                  {report.status === "pending" && (
                    <>
                      <Button size="sm" className="bg-success hover:bg-success/90">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Verify
                      </Button>
                      <Button size="sm" variant="destructive">
                        <XCircle className="h-4 w-4 mr-1" />
                        Reject
                      </Button>
                    </>
                  )}
                </div>
                
                <Button size="sm" variant="outline">
                  <Eye className="h-4 w-4 mr-1" />
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {filteredReports.length === 0 && (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground">No reports found matching your criteria.</p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ReportsTable;