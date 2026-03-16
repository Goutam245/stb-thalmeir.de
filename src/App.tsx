import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import Index from "./pages/Index.tsx";
import LawFirm from "./pages/LawFirm.tsx";
import ServicesPrivate from "./pages/ServicesPrivate.tsx";
import ServicesSelfEmployed from "./pages/ServicesSelfEmployed.tsx";
import ServicesStartups from "./pages/ServicesStartups.tsx";
import ServicesInternational from "./pages/ServicesInternational.tsx";
import FAQ from "./pages/FAQ.tsx";
import Contact from "./pages/Contact.tsx";
import Blog from "./pages/Blog.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/law-firm" element={<LawFirm />} />
          <Route path="/services/private" element={<ServicesPrivate />} />
          <Route path="/services/self-employed" element={<ServicesSelfEmployed />} />
          <Route path="/services/startups" element={<ServicesStartups />} />
          <Route path="/services/international" element={<ServicesInternational />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
