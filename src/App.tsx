import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ModalProvider, useModal } from "./contexts/ModalContext";
import { QuickAnalysisModal } from "./components/QuickAnalysisModal";
import { useAnalytics } from "./hooks/useAnalytics";
import { LanguageWrapper } from "./components/LanguageWrapper";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VakaCalismalari from "./pages/VakaCalismalari";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import UcretsizIcerikler from "./pages/UcretsizIcerikler";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Solutions from "./pages/Solutions";
import GizlilikPolitikasi from "./pages/GizlilikPolitikasi";
import KullanimKosullari from "./pages/KullanimKosullari";

const queryClient = new QueryClient();

// Component to handle modal integration  
const AppWithModal = () => {
  const { isQuickAnalysisOpen, closeQuickAnalysis } = useModal();
  
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Routes>
          {/* Root route - Redirect to Turkish */}
          <Route path="/" element={<Navigate to="/tr" replace />} />
          
          {/* German Routes */}
          <Route path="/de" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <Index />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/de/losungen" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <Solutions />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/de/fallstudien" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <VakaCalismalari />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/de/fallstudien/:slug" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <CaseStudyDetail />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/de/kostenlose-inhalte" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <UcretsizIcerikler />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/de/blog" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <Blog />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/de/blog/:slug" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <BlogPost />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/de/datenschutz" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <GizlilikPolitikasi />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/de/nutzungsbedingungen" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <KullanimKosullari />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          {/* PARKED: English Routes - To reactivate, uncomment this block
          <Route path="/en" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <Index />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          */}
          
          {/* Turkish Routes */}
          <Route path="/tr" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <Index />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/tr/cozumler" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <Solutions />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/tr/vaka-calismalari" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <VakaCalismalari />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/tr/vaka-calismalari/:slug" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <CaseStudyDetail />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/tr/ucretsiz-icerikler" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <UcretsizIcerikler />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/tr/blog" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <Blog />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/tr/blog/:slug" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <BlogPost />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          {/* Legal Routes */}
          <Route path="/tr/gizlilik" element={
            <LanguageWrapper>
              <GizlilikPolitikasi />
            </LanguageWrapper>
          } />
          
          <Route path="/tr/kullanim-kosullari" element={
            <LanguageWrapper>
              <KullanimKosullari />
            </LanguageWrapper>
          } />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      
      <QuickAnalysisModal 
        open={isQuickAnalysisOpen} 
        onOpenChange={closeQuickAnalysis} 
      />
    </>
  );
};

function AnalyticsWrapper({ children }: { children: React.ReactNode }) {
  useAnalytics(); // Initialize analytics tracking
  return <>{children}</>;
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <LanguageProvider>
            <TooltipProvider>
              <AnalyticsWrapper>
                <ModalProvider>
                  <AppWithModal />
                </ModalProvider>
              </AnalyticsWrapper>
              <Toaster />
              <Sonner />
            </TooltipProvider>
          </LanguageProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;