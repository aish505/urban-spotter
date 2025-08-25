import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CitizenApp from "./pages/CitizenApp";
import AuthorityDashboard from "./pages/AuthorityDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/citizen/*" element={<CitizenApp />} />
          <Route path="/authority/*" element={<AuthorityDashboard />} />
          {/* Redirect common direct authority routes to proper nested paths */}
          <Route path="/analytics" element={<Navigate to="/authority/analytics" replace />} />
          <Route path="/heatmap" element={<Navigate to="/authority/heatmap" replace />} />
          <Route path="/reports" element={<Navigate to="/authority/reports" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
