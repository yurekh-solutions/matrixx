import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, Users, Package, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import Home from "./Home";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    { icon: Package, title: "100+ Products", desc: "Wide range of construction materials" },
    { icon: Users, title: "500+ Suppliers", desc: "Verified suppliers across India" },
    { icon: ShoppingCart, title: "Easy RFQ", desc: "Request quotes in minutes" },
    { icon: TrendingUp, title: "Best Prices", desc: "Competitive market rates" }
  ];

  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-background">
        {/* Hero */}
    <Home />
      </div>
    </>
  );
};

export default Index;
