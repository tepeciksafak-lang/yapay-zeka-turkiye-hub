import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import YapayZekaIsAlanlari from "./pages/YapayZekaIsAlanlari";
import Pazarlama from "./pages/Pazarlama";
import SatisOtomasyonu from "./pages/SatisOtomasyonu";
import Services5 from "./pages/Services5";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/yapay-zeka-is-alanlari" element={<YapayZekaIsAlanlari />} />
                <Route path="/yapay-zeka-is-alanlari/pazarlama" element={<Pazarlama />} />
                <Route path="/yapay-zeka-is-alanlari/yapay-zeka-satis-otomasyonu" element={<SatisOtomasyonu />} />
                <Route path="/services-5" element={<Services5 />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
