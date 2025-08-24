import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, AlertTriangle, CheckCircle, XCircle, Send, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ReportSubmission = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const analysisData = location.state || {
    complianceScore: 23,
    violations: ["Exceeds size limit", "No permit visible", "Blocks traffic view"]
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Report submitted successfully!",
        description: "Thank you for helping keep our city compliant.",
      });
      navigate("/citizen/dashboard");
    }, 2000);
  };

  const getScoreColor = (score: number) => {
    if (score >= 70) return "text-success";
    if (score >= 40) return "text-yellow-600";
    return "text-violation";
  };

  const getScoreBackground = (score: number) => {
    if (score >= 70) return "bg-gradient-to-r from-success to-compliant";
    if (score >= 40) return "bg-gradient-to-r from-yellow-500 to-orange-500";
    return "bg-gradient-to-r from-violation to-red-600";
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/citizen/camera" className="flex items-center text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back
          </Link>
          <h1 className="text-xl font-semibold">Analysis Results</h1>
          <div></div>
        </div>
      </header>

      <div className="container mx-auto max-w-md p-4 space-y-6">
        {/* Compliance Score */}
        <Card className="p-6 text-center">
          <h2 className="text-lg font-semibold mb-4">Billboard Compliance Score</h2>
          <div className={`text-6xl font-bold mb-2 ${getScoreColor(analysisData.complianceScore)}`}>
            {analysisData.complianceScore}
          </div>
          <div className="text-muted-foreground mb-4">out of 100</div>
          
          <div className="w-full bg-muted rounded-full h-3 mb-4">
            <div 
              className={`h-3 rounded-full ${getScoreBackground(analysisData.complianceScore)}`}
              style={{width: `${analysisData.complianceScore}%`}}
            ></div>
          </div>
          
          {analysisData.complianceScore < 70 && (
            <div className="flex items-center justify-center space-x-2 text-violation">
              <AlertTriangle className="h-5 w-5" />
              <span className="font-medium">Violations Detected</span>
            </div>
          )}
        </Card>

        {/* Violations List */}
        {analysisData.violations && analysisData.violations.length > 0 && (
          <Card className="p-6">
            <h3 className="font-semibold mb-4 flex items-center">
              <XCircle className="h-5 w-5 text-violation mr-2" />
              Detected Issues
            </h3>
            <div className="space-y-3">
              {analysisData.violations.map((violation: string, index: number) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-violation/5 rounded-lg border border-violation/20">
                  <AlertTriangle className="h-4 w-4 text-violation mt-0.5" />
                  <span className="text-sm">{violation}</span>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Location Info */}
        <Card className="p-4">
          <div className="flex items-center space-x-3">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <div>
              <div className="font-medium">Connaught Place, New Delhi</div>
              <div className="text-sm text-muted-foreground">28.6315° N, 77.2167° E</div>
            </div>
          </div>
        </Card>

        {/* Additional Notes */}
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Additional Notes (Optional)</h3>
          <Textarea
            placeholder="Add any additional context about this billboard..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="min-h-[100px]"
          />
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button 
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-violation to-red-600 hover:shadow-lg"
            size="lg"
          >
            {isSubmitting ? (
              <>
                <Send className="mr-2 h-5 w-5 animate-pulse" />
                Submitting Report...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Submit Violation Report
              </>
            )}
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => navigate("/citizen")}
          >
            Cancel
          </Button>
        </div>

        {/* Privacy Note */}
        <Card className="p-4 bg-accent/30">
          <p className="text-sm text-muted-foreground text-center">
            Your report will be reviewed by municipal authorities. 
            No personal information is shared beyond location and timestamp.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default ReportSubmission;