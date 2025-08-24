import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, MapPin, BarChart3, Shield, Users, Award } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-accent via-background to-card">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">UrbanSpotter</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link to="/citizen" className="text-muted-foreground hover:text-primary transition-colors">
              Citizen App
            </Link>
            <Link to="/authority" className="text-muted-foreground hover:text-primary transition-colors">
              Authority Dashboard
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Protecting Our Cities,<br />
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              One Billboard at a Time
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            AI-powered billboard compliance monitoring for Indian cities. 
            Citizens report, authorities verify, communities thrive.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/citizen">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                <Camera className="mr-2 h-5 w-5" />
                Start Reporting
              </Button>
            </Link>
            <Link to="/authority">
              <Button variant="outline" size="lg" className="hover:bg-accent transition-colors">
                <BarChart3 className="mr-2 h-5 w-5" />
                Authority Login
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">How It Works</h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Citizen Side */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-4">For Citizens</h4>
                <div className="space-y-3 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Capture billboard photos with your phone</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">AI analyzes compliance automatically</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Submit reports with location & timestamp</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Earn points on the leaderboard</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Authority Side */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-success to-compliant rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-4">For Authorities</h4>
                <div className="space-y-3 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                    <span className="text-muted-foreground">View reports on interactive heatmap</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Verify violations with AI insights</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Track compliance trends & analytics</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Export reports for action</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2,847</div>
              <div className="text-muted-foreground">Reports Submitted</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-success mb-2">1,203</div>
              <div className="text-muted-foreground">Violations Found</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">156</div>
              <div className="text-muted-foreground">Active Citizens</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-success mb-2">23</div>
              <div className="text-muted-foreground">Cities Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Notice */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Privacy & Security First</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            UrbanSpotter uses AI only for billboard analysis - no facial recognition. 
            Your photos and location data are securely encrypted and shared only with 
            authorized municipal authorities. You maintain full control over your data.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 UrbanSpotter. Building smarter, compliant cities together.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;