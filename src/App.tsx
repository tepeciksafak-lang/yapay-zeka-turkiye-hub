import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "./contexts/LanguageContext";
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
              <Navigation />
              <main className="flex-1">
                <Routes>
                  {/* Redirect root to Turkish */}
                  <Route path="/" element={<Navigate to="/tr" replace />} />
                  
                  {/* Language-based routes */}
                  <Route path="/:lang" element={<Index />} />
                  <Route path="/:lang/yapay-zeka-is-alanlari" element={<YapayZekaIsAlanlari />} />
                  <Route path="/:lang/yapay-zeka-is-alanlari/pazarlama" element={<Pazarlama />} />
                  <Route path="/:lang/yapay-zeka-is-alanlari/yapay-zeka-satis-otomasyonu" element={<SatisOtomasyonu />} />
                  <Route path="/:lang/satis-otomasyonu-demo" element={<SatisOtomasyonuDemo />} />
                  <Route path="/:lang/services-5" element={<Services5 />} />
                  <Route path="/:lang/hakkimda" element={<Hakkimda />} />
                  <Route path="/:lang/otomasyon" element={<Otomasyon />} />
                  <Route path="/:lang/veri-analizi" element={<VeriAnalizi />} />
                  
                  {/* Legacy routes without language - redirect to Turkish */}
                  <Route path="/yapay-zeka-is-alanlari" element={<Navigate to="/tr/yapay-zeka-is-alanlari" replace />} />
                  <Route path="/yapay-zeka-is-alanlari/pazarlama" element={<Navigate to="/tr/yapay-zeka-is-alanlari/pazarlama" replace />} />
                  <Route path="/yapay-zeka-is-alanlari/yapay-zeka-satis-otomasyonu" element={<Navigate to="/tr/yapay-zeka-is-alanlari/yapay-zeka-satis-otomasyonu" replace />} />
                  <Route path="/satis-otomasyonu-demo" element={<Navigate to="/tr/satis-otomasyonu-demo" replace />} />
                  <Route path="/services-5" element={<Navigate to="/tr/services-5" replace />} />
                  <Route path="/hakkimda" element={<Navigate to="/tr/hakkimda" replace />} />
                  <Route path="/otomasyon" element={<Navigate to="/tr/otomasyon" replace />} />
                  <Route path="/veri-analizi" element={<Navigate to="/tr/veri-analizi" replace />} />
                  
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </LanguageProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
