import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense, useEffect } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ModalProvider, useModal } from "./contexts/ModalContext";
import { QuickAnalysisModal } from "./components/QuickAnalysisModal";
import { useAnalytics } from "./hooks/useAnalytics";
import { checkAndRedirectDomain } from "./utils/domainRedirect";
import { LanguageWrapper } from "./components/LanguageWrapper";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load non-critical pages
const VakaCalismalari = lazy(() => import("./pages/VakaCalismalari"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
const UcretsizIcerikler = lazy(() => import("./pages/UcretsizIcerikler"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Solutions = lazy(() => import("./pages/Solutions"));
const Hakkimizda = lazy(() => import("./pages/Hakkimizda"));
const GizlilikPolitikasi = lazy(() => import("./pages/GizlilikPolitikasi"));
const KullanimKosullari = lazy(() => import("./pages/KullanimKosullari"));
const TestBlogCreation = lazy(() => import("./pages/TestBlogCreation"));
const WebsiteIn3Days = lazy(() => import("./pages/WebsiteIn3Days"));
const Website3DaysDanke = lazy(() => import("./pages/Website3DaysDanke"));

// Solution pages - Direct import for better reliability - 2025-01-20T15:00:00Z
import {
  LeadGenerationKI,
  VertriebsAutomatisierung,
  MarketingAutomatisierung,
  CRMProzessAutomatisierung,
  KundenserviceAutomatisierung,
  LeadGenerationKI_TR,
  VertriebsAutomatisierung_TR,
  MarketingAutomatisierung_TR,
  CRMProzessAutomatisierung_TR,
  KundenserviceAutomatisierung_TR
} from "./pages/solutions";

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-pulse text-lg text-muted-foreground">Loading...</div>
  </div>
);


const queryClient = new QueryClient();

// Component to handle routes  
const AppWithModal = () => {
  
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
                <Suspense fallback={<PageLoader />}>
                  <Solutions />
                </Suspense>
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/de/fallstudien" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <Suspense fallback={<PageLoader />}>
                  <VakaCalismalari />
                </Suspense>
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/de/fallstudien/:slug" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <Suspense fallback={<PageLoader />}>
                  <CaseStudyDetail />
                </Suspense>
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/de/kostenlose-inhalte" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <Suspense fallback={<PageLoader />}>
                  <UcretsizIcerikler />
                </Suspense>
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/de/blog" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <Suspense fallback={<PageLoader />}>
                  <Blog />
                </Suspense>
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/de/blog/:slug" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <Suspense fallback={<PageLoader />}>
                  <BlogPost />
                </Suspense>
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/de/datenschutz" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <Suspense fallback={<PageLoader />}>
                  <GizlilikPolitikasi />
                </Suspense>
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/de/nutzungsbedingungen" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <Suspense fallback={<PageLoader />}>
                  <KullanimKosullari />
                </Suspense>
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/de/website-in-3-tagen" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <Suspense fallback={<PageLoader />}>
                  <WebsiteIn3Days />
                </Suspense>
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/de/website-in-3-tagen/danke" element={
            <LanguageWrapper>
              <Suspense fallback={<PageLoader />}>
                <Website3DaysDanke />
              </Suspense>
            </LanguageWrapper>
          } />
          
          {/* Solution Landing Pages */}
          <Route path="/de/losungen/leadgenerierung-ki" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <LeadGenerationKI />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/de/losungen/vertriebsautomatisierung" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <VertriebsAutomatisierung />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/de/losungen/marketing-automatisierung" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <MarketingAutomatisierung />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/de/losungen/crm-prozessautomatisierung" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <CRMProzessAutomatisierung />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/de/losungen/kundenservice-automatisierung" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <KundenserviceAutomatisierung />
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
                <Suspense fallback={<PageLoader />}>
                  <Solutions />
                </Suspense>
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/tr/vaka-calismalari" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <Suspense fallback={<PageLoader />}>
                  <VakaCalismalari />
                </Suspense>
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/tr/vaka-calismalari/:slug" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <Suspense fallback={<PageLoader />}>
                  <CaseStudyDetail />
                </Suspense>
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/tr/ucretsiz-icerikler" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <Suspense fallback={<PageLoader />}>
                  <UcretsizIcerikler />
                </Suspense>
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/tr/test-blog-creation" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <Suspense fallback={<PageLoader />}>
                  <TestBlogCreation />
                </Suspense>
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/tr/blog" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <Suspense fallback={<PageLoader />}>
                  <Blog />
                </Suspense>
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/tr/blog/:slug" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <Suspense fallback={<PageLoader />}>
                  <BlogPost />
                </Suspense>
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/tr/hakkimizda" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <Suspense fallback={<PageLoader />}>
                  <Hakkimizda />
                </Suspense>
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          {/* Legal Routes */}
          <Route path="/tr/gizlilik" element={
            <LanguageWrapper>
              <Suspense fallback={<PageLoader />}>
                <GizlilikPolitikasi />
              </Suspense>
            </LanguageWrapper>
          } />
          
          <Route path="/tr/kullanim-kosullari" element={
            <LanguageWrapper>
              <Suspense fallback={<PageLoader />}>
                <KullanimKosullari />
              </Suspense>
            </LanguageWrapper>
          } />
          
          {/* Turkish Solution Pages */}
          <Route path="/tr/cozumler/lead-generation" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <LeadGenerationKI_TR />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/tr/cozumler/satis-otomasyonu" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <VertriebsAutomatisierung_TR />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/tr/cozumler/pazarlama-otomasyonu" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <MarketingAutomatisierung_TR />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/tr/cozumler/crm-otomasyonu" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <CRMProzessAutomatisierung_TR />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/tr/cozumler/musteri-hizmeti-otomasyonu" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <KundenserviceAutomatisierung_TR />
              </main>
              <Footer />
            </LanguageWrapper>
          } />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

function AnalyticsWrapper({ children }: { children: React.ReactNode }) {
  useAnalytics(); // Initialize analytics tracking
  return <>{children}</>;
}

function DomainRedirectCheck() {
  useEffect(() => {
    checkAndRedirectDomain();
  }, []);
  return null;
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <LanguageProvider>
            <TooltipProvider>
              <AnalyticsWrapper>
                <DomainRedirectCheck />
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