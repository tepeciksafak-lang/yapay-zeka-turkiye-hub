import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "./contexts/LanguageContext";
import { LanguageWrapper } from "./components/LanguageWrapper";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import YapayZekaIsAlanlari from "./pages/YapayZekaIsAlanlari";
import Pazarlama from "./pages/Pazarlama";
import SatisOtomasyonu from "./pages/SatisOtomasyonu";
import Services5 from "./pages/Services5";
import Hakkimda from "./pages/Hakkimda";
import Otomasyon from "./pages/Otomasyon";
import VeriAnalizi from "./pages/VeriAnalizi";
import SatisOtomasyonuDemo from "./pages/SatisOtomasyonuDemo";
import VakaCalismalari from "./pages/VakaCalismalari";
import UcretsizIcerikler from "./pages/UcretsizIcerikler";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Solutions from "./pages/Solutions";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <LanguageProvider>
            <div className="flex min-h-screen flex-col">
              <Routes>
                {/* Redirect root to Turkish */}
                <Route path="/" element={<Navigate to="/tr" replace />} />
                
                {/* Language-based routes */}
                <Route path="/:lang" element={
                  <LanguageWrapper>
                    <Navigation />
                    <main className="flex-1">
                      <Index />
                    </main>
                    <Footer />
                  </LanguageWrapper>
                } />
                <Route path="/:lang/yapay-zeka-is-alanlari" element={
                  <LanguageWrapper>
                    <Navigation />
                    <main className="flex-1">
                      <YapayZekaIsAlanlari />
                    </main>
                    <Footer />
                  </LanguageWrapper>
                } />
                <Route path="/:lang/yapay-zeka-is-alanlari/pazarlama" element={
                  <LanguageWrapper>
                    <Navigation />
                    <main className="flex-1">
                      <Pazarlama />
                    </main>
                    <Footer />
                  </LanguageWrapper>
                } />
                <Route path="/:lang/yapay-zeka-is-alanlari/yapay-zeka-satis-otomasyonu" element={
                  <LanguageWrapper>
                    <Navigation />
                    <main className="flex-1">
                      <SatisOtomasyonu />
                    </main>
                    <Footer />
                  </LanguageWrapper>
                } />
                <Route path="/:lang/satis-otomasyonu-demo" element={
                  <LanguageWrapper>
                    <Navigation />
                    <main className="flex-1">
                      <SatisOtomasyonuDemo />
                    </main>
                    <Footer />
                  </LanguageWrapper>
                } />
                <Route path="/:lang/services-5" element={
                  <LanguageWrapper>
                    <Navigation />
                    <main className="flex-1">
                      <Services5 />
                    </main>
                    <Footer />
                  </LanguageWrapper>
                } />
                <Route path="/:lang/hakkimda" element={
                  <LanguageWrapper>
                    <Navigation />
                    <main className="flex-1">
                      <Hakkimda />
                    </main>
                    <Footer />
                  </LanguageWrapper>
                } />
                <Route path="/:lang/otomasyon" element={
                  <LanguageWrapper>
                    <Navigation />
                    <main className="flex-1">
                      <Otomasyon />
                    </main>
                    <Footer />
                  </LanguageWrapper>
                } />
                <Route path="/:lang/veri-analizi" element={
                  <LanguageWrapper>
                    <Navigation />
                    <main className="flex-1">
                      <VeriAnalizi />
                    </main>
                    <Footer />
                  </LanguageWrapper>
                } />
                <Route path="/:lang/vaka-calismalari" element={
                  <LanguageWrapper>
                    <Navigation />
                    <main className="flex-1">
                      <VakaCalismalari />
                    </main>
                    <Footer />
                  </LanguageWrapper>
                } />
                <Route path="/:lang/ucretsiz-icerikler" element={
                  <LanguageWrapper>
                    <Navigation />
                    <main className="flex-1">
                      <UcretsizIcerikler />
                    </main>
                    <Footer />
                  </LanguageWrapper>
                } />
                <Route path="/:lang/cozumler" element={
                  <LanguageWrapper>
                    <Navigation />
                    <main className="flex-1">
                      <Solutions />
                    </main>
                    <Footer />
                  </LanguageWrapper>
                } />
                <Route path="/:lang/blog" element={
                  <LanguageWrapper>
                    <Navigation />
                    <main className="flex-1">
                      <Blog />
                    </main>
                    <Footer />
                  </LanguageWrapper>
                } />
                <Route path="/:lang/blog/:id" element={
                  <LanguageWrapper>
                    <Navigation />
                    <main className="flex-1">
                      <BlogPost />
                    </main>
                    <Footer />
                  </LanguageWrapper>
                } />
                
                {/* Legacy routes without language - redirect to Turkish */}
                <Route path="/yapay-zeka-is-alanlari" element={<Navigate to="/tr/yapay-zeka-is-alanlari" replace />} />
                <Route path="/yapay-zeka-is-alanlari/pazarlama" element={<Navigate to="/tr/yapay-zeka-is-alanlari/pazarlama" replace />} />
                <Route path="/yapay-zeka-is-alanlari/yapay-zeka-satis-otomasyonu" element={<Navigate to="/tr/yapay-zeka-is-alanlari/yapay-zeka-satis-otomasyonu" replace />} />
                <Route path="/satis-otomasyonu-demo" element={<Navigate to="/tr/satis-otomasyonu-demo" replace />} />
                <Route path="/services-5" element={<Navigate to="/tr/services-5" replace />} />
                <Route path="/hakkimda" element={<Navigate to="/tr/hakkimda" replace />} />
                <Route path="/otomasyon" element={<Navigate to="/tr/otomasyon" replace />} />
                <Route path="/veri-analizi" element={<Navigate to="/tr/veri-analizi" replace />} />
                <Route path="/vaka-calismalari" element={<Navigate to="/tr/vaka-calismalari" replace />} />
                <Route path="/blog" element={<Navigate to="/tr/blog" replace />} />
                <Route path="/blog/:id" element={<Navigate to="/tr/blog" replace />} />
                
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </LanguageProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
