import { Routes, Route } from "react-router-dom";
import CitizenHome from "@/components/citizen/CitizenHome";
import CameraCapture from "@/components/citizen/CameraCapture";
import ReportSubmission from "@/components/citizen/ReportSubmission";
import CitizenDashboard from "@/components/citizen/CitizenDashboard";
import Leaderboard from "@/components/citizen/Leaderboard";
import Profile from "@/components/citizen/Profile";

const CitizenApp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-accent to-background">
      <Routes>
        <Route path="/" element={<CitizenHome />} />
        <Route path="/camera" element={<CameraCapture />} />
        <Route path="/report" element={<ReportSubmission />} />
        <Route path="/dashboard" element={<CitizenDashboard />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default CitizenApp;