import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, MapPin, Trophy, User, ArrowLeft } from "lucide-react";

const CitizenHome = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-xl font-semibold">Citizen Reporter</h1>
          <Link to="/citizen/profile">
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome, Urban Guardian!</h2>
          <p className="text-muted-foreground mb-8">
            Help keep your city compliant by reporting unauthorized billboards.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8">
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">12</div>
              <div className="text-sm text-muted-foreground">Reports</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-success">850</div>
              <div className="text-sm text-muted-foreground">Points</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">#7</div>
              <div className="text-sm text-muted-foreground">Rank</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Actions */}
      <section className="px-4 pb-8">
        <div className="container mx-auto max-w-md space-y-4">
          {/* Report Billboard */}
          <Link to="/citizen/camera">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:shadow-primary/10 border-primary/20 bg-gradient-to-r from-primary/5 to-primary-glow/5">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center">
                  <Camera className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Report Billboard</h3>
                  <p className="text-muted-foreground text-sm">Capture and analyze a billboard</p>
                </div>
              </div>
            </Card>
          </Link>

          {/* View Dashboard */}
          <Link to="/citizen/dashboard">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">My Reports</h3>
                  <p className="text-muted-foreground text-sm">View your submission history</p>
                </div>
              </div>
            </Card>
          </Link>

          {/* Leaderboard */}
          <Link to="/citizen/leaderboard">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-success to-compliant rounded-full flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Leaderboard</h3>
                  <p className="text-muted-foreground text-sm">See top contributors</p>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* Privacy Notice */}
      <section className="px-4 pb-8">
        <div className="container mx-auto max-w-md">
          <Card className="p-4 bg-accent/30 border-primary/20">
            <p className="text-sm text-muted-foreground text-center">
              <strong>Privacy Protected:</strong> We analyze only billboards, not people. 
              Your data is encrypted and secure.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CitizenHome;