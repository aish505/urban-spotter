import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, User, Mail, MapPin, Phone, Shield, Trash2, Edit3, Save, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Arjun Kumar",
    email: "arjun.kumar@email.com",
    phone: "+91 98765 43210",
    city: "New Delhi"
  });
  const { toast } = useToast();

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Profile updated",
      description: "Your profile has been saved successfully.",
    });
  };

  const handleDeleteAccount = () => {
    // In a real app, this would show a confirmation dialog
    toast({
      title: "Account deletion requested",
      description: "You will receive a confirmation email shortly.",
      variant: "destructive"
    });
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
          <h1 className="text-xl font-semibold">Profile</h1>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => isEditing ? setIsEditing(false) : setIsEditing(true)}
          >
            {isEditing ? <X className="h-4 w-4" /> : <Edit3 className="h-4 w-4" />}
          </Button>
        </div>
      </header>

      <div className="container mx-auto max-w-md p-4 space-y-6">
        {/* Profile Picture & Stats */}
        <Card className="p-6 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-xl font-semibold mb-2">{profile.name}</h2>
          <p className="text-muted-foreground mb-4">Urban Guardian • Rank #7</p>
          
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
            <div>
              <div className="text-lg font-bold text-primary">12</div>
              <div className="text-xs text-muted-foreground">Reports</div>
            </div>
            <div>
              <div className="text-lg font-bold text-success">850</div>
              <div className="text-xs text-muted-foreground">Points</div>
            </div>
            <div>
              <div className="text-lg font-bold text-primary">92%</div>
              <div className="text-xs text-muted-foreground">Accuracy</div>
            </div>
          </div>
        </Card>

        {/* Profile Information */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Personal Information</h3>
            {!isEditing && (
              <Button variant="ghost" size="sm" onClick={() => setIsEditing(true)}>
                <Edit3 className="h-4 w-4" />
              </Button>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="name" className="flex items-center space-x-2 mb-2">
                <User className="h-4 w-4" />
                <span>Full Name</span>
              </Label>
              {isEditing ? (
                <Input
                  id="name"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                />
              ) : (
                <p className="text-muted-foreground">{profile.name}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email" className="flex items-center space-x-2 mb-2">
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </Label>
              {isEditing ? (
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                />
              ) : (
                <p className="text-muted-foreground">{profile.email}</p>
              )}
            </div>

            <div>
              <Label htmlFor="phone" className="flex items-center space-x-2 mb-2">
                <Phone className="h-4 w-4" />
                <span>Phone</span>
              </Label>
              {isEditing ? (
                <Input
                  id="phone"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                />
              ) : (
                <p className="text-muted-foreground">{profile.phone}</p>
              )}
            </div>

            <div>
              <Label htmlFor="city" className="flex items-center space-x-2 mb-2">
                <MapPin className="h-4 w-4" />
                <span>City</span>
              </Label>
              {isEditing ? (
                <Input
                  id="city"
                  value={profile.city}
                  onChange={(e) => setProfile({ ...profile, city: e.target.value })}
                />
              ) : (
                <p className="text-muted-foreground">{profile.city}</p>
              )}
            </div>
          </div>

          {isEditing && (
            <div className="flex space-x-3 mt-6">
              <Button onClick={handleSave} className="flex-1">
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
              <Button variant="outline" onClick={() => setIsEditing(false)} className="flex-1">
                Cancel
              </Button>
            </div>
          )}
        </Card>

        {/* Privacy & Data */}
        <Card className="p-6">
          <h3 className="font-semibold mb-4 flex items-center">
            <Shield className="h-5 w-5 mr-2" />
            Privacy & Data
          </h3>
          
          <div className="space-y-4 text-sm">
            <div className="p-3 bg-accent/30 rounded-lg">
              <p className="font-medium mb-1">Data Collection</p>
              <p className="text-muted-foreground">
                We collect only billboard photos, location, and timestamp for compliance reporting.
              </p>
            </div>
            
            <div className="p-3 bg-accent/30 rounded-lg">
              <p className="font-medium mb-1">AI Analysis</p>
              <p className="text-muted-foreground">
                Our AI analyzes only billboard structures and text - no facial recognition.
              </p>
            </div>
            
            <div className="p-3 bg-accent/30 rounded-lg">
              <p className="font-medium mb-1">Data Sharing</p>
              <p className="text-muted-foreground">
                Reports are shared only with authorized municipal authorities.
              </p>
            </div>
          </div>
        </Card>

        {/* Account Actions */}
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Account Management</h3>
          
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              Export My Data
            </Button>
            
            <Button variant="outline" className="w-full justify-start">
              Download Report History
            </Button>
            
            <Separator />
            
            <Button 
              variant="destructive" 
              className="w-full justify-start"
              onClick={handleDeleteAccount}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Delete Account & Data
            </Button>
          </div>
        </Card>

        {/* App Info */}
        <Card className="p-4 bg-muted/30">
          <p className="text-center text-sm text-muted-foreground">
            UrbanSpotter v1.0.0<br />
            Made with ❤️ for Indian cities
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Profile;