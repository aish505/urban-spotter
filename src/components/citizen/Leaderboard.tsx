import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Trophy, Medal, Award, TrendingUp } from "lucide-react";

const Leaderboard = () => {
  const topUsers = [
    { rank: 1, name: "Priya S.", points: 2450, reports: 34, city: "Delhi", verified: 31 },
    { rank: 2, name: "Arjun K.", points: 2180, reports: 29, city: "Mumbai", verified: 27 },
    { rank: 3, name: "Meera R.", points: 1950, reports: 28, city: "Bangalore", verified: 25 },
    { rank: 4, name: "Raj M.", points: 1720, reports: 24, city: "Chennai", verified: 22 },
    { rank: 5, name: "Sanya P.", points: 1480, reports: 21, city: "Pune", verified: 19 },
    { rank: 6, name: "Vikram T.", points: 1250, reports: 18, city: "Delhi", verified: 16 },
    { rank: 7, name: "You", points: 850, reports: 12, city: "Delhi", verified: 11, isCurrentUser: true },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Trophy className="h-6 w-6 text-yellow-500" />;
      case 2: return <Medal className="h-6 w-6 text-gray-400" />;
      case 3: return <Award className="h-6 w-6 text-orange-500" />;
      default: return <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-sm font-bold">{rank}</div>;
    }
  };

  const getRankBackground = (rank: number, isCurrentUser: boolean) => {
    if (isCurrentUser) return "bg-gradient-to-r from-primary/10 to-primary-glow/10 border-primary/30";
    if (rank <= 3) return "bg-gradient-to-r from-accent to-card hover:shadow-lg";
    return "bg-card hover:shadow-md";
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
          <h1 className="text-xl font-semibold">Leaderboard</h1>
          <div></div>
        </div>
      </header>

      <div className="container mx-auto max-w-2xl p-4">
        {/* Your Rank Card */}
        <Card className="p-6 mb-6 bg-gradient-to-r from-primary/5 to-primary-glow/5 border-primary/20">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl font-bold text-white">#7</span>
            </div>
            <h2 className="text-xl font-semibold mb-1">Your Current Rank</h2>
            <p className="text-muted-foreground mb-4">Keep reporting to climb higher!</p>
            
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl font-bold text-primary">850</div>
                <div className="text-sm text-muted-foreground">Points</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">12</div>
                <div className="text-sm text-muted-foreground">Reports</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-success">92%</div>
                <div className="text-sm text-muted-foreground">Verified</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Top Contributors */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Top Contributors</h2>
            <Badge variant="outline" className="flex items-center space-x-1">
              <TrendingUp className="h-4 w-4" />
              <span>This Month</span>
            </Badge>
          </div>

          {topUsers.map((user) => (
            <Card 
              key={user.rank} 
              className={`p-4 transition-all duration-300 ${getRankBackground(user.rank, user.isCurrentUser || false)}`}
            >
              <div className="flex items-center space-x-4">
                {/* Rank Icon */}
                <div className="flex-shrink-0">
                  {getRankIcon(user.rank)}
                </div>

                {/* User Info */}
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">
                      {user.isCurrentUser ? "You" : user.name}
                    </span>
                    {user.isCurrentUser && (
                      <Badge variant="outline" className="text-xs">You</Badge>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">{user.city}</div>
                </div>

                {/* Stats */}
                <div className="text-right">
                  <div className="font-bold text-lg">{user.points.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">points</div>
                </div>

                <div className="text-right">
                  <div className="font-semibold">{user.reports}</div>
                  <div className="text-sm text-muted-foreground">reports</div>
                </div>

                <div className="text-right">
                  <div className="font-semibold text-success">
                    {Math.round((user.verified / user.reports) * 100)}%
                  </div>
                  <div className="text-sm text-muted-foreground">verified</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Achievement Levels */}
        <Card className="mt-8 p-6">
          <h3 className="font-semibold mb-4 flex items-center">
            <Award className="h-5 w-5 mr-2 text-primary" />
            Achievement Levels
          </h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg border border-success/20">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">✓</span>
                </div>
                <div>
                  <div className="font-medium">Guardian</div>
                  <div className="text-sm text-muted-foreground">500+ points</div>
                </div>
              </div>
              <Badge variant="outline" className="text-success border-success">Achieved</Badge>
            </div>

            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">🏆</span>
                </div>
                <div>
                  <div className="font-medium">Sentinel</div>
                  <div className="text-sm text-muted-foreground">1000+ points</div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">150 points to go</div>
            </div>

            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">👑</span>
                </div>
                <div>
                  <div className="font-medium">Champion</div>
                  <div className="text-sm text-muted-foreground">2000+ points</div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">1150 points to go</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Leaderboard;