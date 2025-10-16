// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "@/contexts/AuthContext";
// import { CartProvider } from "@/contexts/CartContext";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import Index from "./pages/Index";
// import Products from "./pages/Products";
// import ProductDetail from "./pages/ProductDetail";
// import Cart from "./pages/Cart";
// import RFQ from "./pages/RFQ";
// import RFQSuccess from "./pages/RFQSuccess";
// import Login from "./pages/Login";
// import BuyerRegister from "./pages/BuyerRegister";
// import SellerRegister from "./pages/SellerRegister";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import SellerDashboard from "./pages/SellerDashboard";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <AuthProvider>
//         <CartProvider>
//           <Toaster />
//           <Sonner />
//           <BrowserRouter>
//             <Header />
//             <Routes>
//               <Route path="/" element={<Index />} />
//               <Route path="/products" element={<Products />} />
//               <Route path="/products/:id" element={<ProductDetail />} />
//               <Route path="/cart" element={<Cart />} />
//               <Route path="/rfq" element={<RFQ />} />
//               <Route path="/rfq-success" element={<RFQSuccess />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/buyer-register" element={<BuyerRegister />} />
//               <Route path="/seller-register" element={<SellerRegister />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/seller/dashboard" element={<SellerDashboard />} />
//               {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//             <Footer />
//           </BrowserRouter>
//         </CartProvider>
//       </AuthProvider>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import RFQ from "./pages/RFQ";
import RFQSuccess from "./pages/RFQSuccess";
import Login from "./pages/Login";
import BuyerRegister from "./pages/BuyerRegister";
import SellerRegister from "./pages/SellerRegister";
import ForgotPassword from "./pages/ForgotPassword";

import About from "./pages/About";
import Contact from "./pages/Contact";
import SellerDashboard from "./pages/SellerDashboard";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const AppLayout = () => {
  const location = useLocation();

  // Routes where Header and Footer should be hidden
  const hideLayoutRoutes = ["/login", "/buyer-register", "/seller-register", "/forgot-password"];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && <Header />}
<ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/rfq" element={<RFQ />} />
        <Route path="/rfq-success" element={<RFQSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/buyer-register" element={<BuyerRegister />} />
        <Route path="/seller-register" element={<SellerRegister />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/seller/dashboard" element={<SellerDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!shouldHideLayout && <Footer />}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppLayout />
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
