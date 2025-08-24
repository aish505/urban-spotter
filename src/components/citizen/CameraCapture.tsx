import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Camera, Upload, Zap, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Camera as CapCamera, CameraResultType, CameraSource } from '@capacitor/camera';

const CameraCapture = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasImage, setHasImage] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleCapture = async () => {
    try {
      const image = await CapCamera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
      });

      if (image.dataUrl) {
        setCapturedImage(image.dataUrl);
        setHasImage(true);
        toast({
          title: "Photo captured!",
          description: "Ready for AI analysis",
        });
      }
    } catch (error) {
      toast({
        title: "Camera Error",
        description: "Failed to capture photo. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleUploadFromGallery = async () => {
    try {
      const image = await CapCamera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Photos,
      });

      if (image.dataUrl) {
        setCapturedImage(image.dataUrl);
        setHasImage(true);
        toast({
          title: "Photo selected!",
          description: "Ready for AI analysis",
        });
      }
    } catch (error) {
      toast({
        title: "Gallery Error",
        description: "Failed to select photo. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      navigate("/citizen/report", { 
        state: { 
          analysisComplete: true,
          complianceScore: 23,
          violations: ["Exceeds size limit", "No permit visible", "Blocks traffic view"]
        }
      });
    }, 3000);
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
          <h1 className="text-xl font-semibold">Billboard Scanner</h1>
          <div></div>
        </div>
      </header>

      {/* Camera Interface */}
      <section className="p-4">
        <div className="container mx-auto max-w-md">
          {/* Camera Preview */}
          <Card className="aspect-square mb-6 overflow-hidden bg-muted relative">
            {hasImage && capturedImage ? (
              <img 
                src={capturedImage} 
                alt="Captured billboard" 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <div className="text-center">
                  <Camera className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Camera preview</p>
                </div>
              </div>
            )}
            
            {/* Overlay Grid */}
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 opacity-30">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="border border-white/20"></div>
              ))}
            </div>
          </Card>

          {/* Camera Controls */}
          <div className="space-y-4">
            {!hasImage ? (
              <Button 
                onClick={handleCapture}
                className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/25"
                size="lg"
              >
                <Camera className="mr-2 h-5 w-5" />
                Capture Billboard
              </Button>
            ) : (
              <div className="space-y-3">
                <Button 
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/25"
                  size="lg"
                >
                  {isAnalyzing ? (
                    <>
                      <Zap className="mr-2 h-5 w-5 animate-pulse" />
                      Analyzing with AI...
                    </>
                  ) : (
                    <>
                      <Zap className="mr-2 h-5 w-5" />
                      Analyze Compliance
                    </>
                  )}
                </Button>
                
                <Button 
                  onClick={() => {
                    setHasImage(false);
                    setCapturedImage(null);
                  }}
                  variant="outline"
                  className="w-full"
                >
                  Retake Photo
                </Button>
              </div>
            )}

            <Button 
              variant="outline" 
              className="w-full"
              onClick={handleUploadFromGallery}
            >
              <Upload className="mr-2 h-4 w-4" />
              Upload from Gallery
            </Button>
          </div>

          {/* Location Info */}
          <Card className="mt-6 p-4">
            <div className="flex items-center space-x-3 text-sm">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Connaught Place, New Delhi</span>
            </div>
            <div className="flex items-center space-x-3 text-sm mt-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Today, 2:45 PM</span>
            </div>
          </Card>

          {/* Tips */}
          <Card className="mt-4 p-4 bg-accent/30">
            <h3 className="font-medium mb-2">📸 Photo Tips</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Capture the entire billboard clearly</li>
              <li>• Ensure good lighting</li>
              <li>• Include surrounding context</li>
              <li>• Check for permit information</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Analysis Overlay */}
      {isAnalyzing && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
          <Card className="p-8 text-center max-w-sm mx-4">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Analysis in Progress</h3>
            <p className="text-muted-foreground mb-4">
              Checking size, permits, and placement compliance...
            </p>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full animate-pulse" style={{width: "60%"}}></div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CameraCapture;