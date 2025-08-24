import { Routes, Route } from "react-router-dom";
import AuthorityHome from "@/components/authority/AuthorityHome";
import ReportsTable from "@/components/authority/ReportsTable";
import Analytics from "@/components/authority/Analytics";
import HeatmapView from "@/components/authority/HeatmapView";

const AuthorityDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Routes>
        <Route path="/" element={<AuthorityHome />} />
        <Route path="/reports" element={<ReportsTable />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/heatmap" element={<HeatmapView />} />
      </Routes>
    </div>
  );
};

export default AuthorityDashboard;