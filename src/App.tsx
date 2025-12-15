import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ModalProvider } from "./contexts/ModalContext";
import { useAnalytics } from "./hooks/useAnalytics";
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
const AlmanyaExport = lazy(() => import("./pages/AlmanyaExport"));

// Turkish Solution pages
import {
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

// Component to handle legacy /tr redirects
const LegacyRedirect = () => {
  const location = useLocation();
  const newPath = location.pathname.replace(/^\/tr/, '') || '/';
  return <Navigate to={newPath + location.search + location.hash} replace />;
};

// Component to handle routes  
const AppWithModal = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Routes>
          {/* Homepage */}
          <Route path="/" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <Index />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/cozumler" element={
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
          
          <Route path="/vaka-calismalari" element={
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
          
          <Route path="/vaka-calismalari/:slug" element={
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
          
          <Route path="/ucretsiz-icerikler" element={
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
          
          <Route path="/test-blog-creation" element={
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
          
          <Route path="/blog" element={
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
          
          <Route path="/blog/:slug" element={
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
          
          <Route path="/hakkimizda" element={
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
          <Route path="/gizlilik" element={
            <LanguageWrapper>
              <Suspense fallback={<PageLoader />}>
                <GizlilikPolitikasi />
              </Suspense>
            </LanguageWrapper>
          } />
          
          <Route path="/kullanim-kosullari" element={
            <LanguageWrapper>
              <Suspense fallback={<PageLoader />}>
                <KullanimKosullari />
              </Suspense>
            </LanguageWrapper>
          } />
          
          {/* Solution Pages */}
          <Route path="/cozumler/lead-generation" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <LeadGenerationKI_TR />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/cozumler/satis-otomasyonu" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <VertriebsAutomatisierung_TR />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/cozumler/pazarlama-otomasyonu" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <MarketingAutomatisierung_TR />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/cozumler/crm-otomasyonu" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <CRMProzessAutomatisierung_TR />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/cozumler/musteri-hizmeti-otomasyonu" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <KundenserviceAutomatisierung_TR />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/cozumler/almanya-ihracat" element={
            <LanguageWrapper>
              <Navigation />
              <main className="flex-1">
                <Suspense fallback={<PageLoader />}>
                  <AlmanyaExport />
                </Suspense>
              </main>
              <Footer />
            </LanguageWrapper>
          } />

          {/* Legacy /tr/* redirects for SEO */}
          <Route path="/tr/*" element={<LegacyRedirect />} />
          <Route path="/tr" element={<Navigate to="/" replace />} />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

function AnalyticsWrapper({ children }: { children: React.ReactNode }) {
  useAnalytics();
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