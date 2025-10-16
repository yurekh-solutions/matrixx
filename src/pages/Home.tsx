import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import {
  Mic,
  BarChart3,
  Zap,
  Globe,
  Award,
  Package,
  Users,
  Play,
  Sparkles,
  ArrowRight,
  Building2,
  TrendingUp,
  Shield,
  Clock,
  Target,
  Bot,
  FileText,
  Settings,
  Headphones,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import ScrollToTop from "@/components/ScrollToTop";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Card } from "@/components/ui/card";
import Discover from "./Discover";
import Product from "./Product";
import globalNetwork from "@/assets/ai-networks.jpg";

import ai from "@/assets/global-network.jpg";
import heroImage from "../assets/hero-construction.jpg";
import dashboardAiImage from "@/assets/dashboard-ai.jpg";
import smartWarehouseImage from "@/assets/smart-warehouse.jpg";
import digitalTwinImage from "@/assets/digital-twin.jpg";
import sustainableMaterialsImage from "@/assets/sustainable-materials.jpg";
import aiAssistantImage from "@/assets/ai-assistant.jpg";
import MarqueeSection from "@/components/MarqueeSection";

const Home = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const statsRef = useRef(null);
  const featuresRef = useRef(null);
  const servicesRef = useRef(null);

  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" });

  const generateDynamicStats = () => [
    { label: "Total Orders", value: 1234, icon: Package },
    { label: "Pending Approvals", value: 28, icon: Clock },
    { label: "Suppliers", value: 87, icon: Users },
    { label: "Avg. Delivery Time", value: 4.2, icon: TrendingUp },
  ];
  const stats = generateDynamicStats();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <>
      <ScrollToTop />

      <SEOHead
        title="MaterialMatrix - AI-Powered Construction Material Procurement Platform"
        description="Revolutionize your construction material sourcing with MaterialMatrix's AI-powered platform. Get instant quotes from 500+ verified suppliers across India."
      />

      <div className="min-h-screen bg-background text-foreground">
        {/* 🏗️ Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${globalNetwork})` }}
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/20 to-black/70" />
          </div>

          {/* Floating Effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-1/3 left-1/3 w-56 sm:w-72 h-56 sm:h-72 rounded-full bg-primary/10 blur-3xl"
              animate={{ x: [0, 80, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center px-6 sm:px-8 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center bg-white/10 mt-10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 sm:px-6 sm:py-3 shadow-lg mb-6"
            >
              <Sparkles className="h-5 w-5 text-primary animate-pulse" />
              <span className="ml-2 text-primary-foreground font-medium text-sm sm:text-base">
                Next-Gen Procurement Platform
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg leading-tight"
            >
              Material Matrix
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
            >
              AI-powered platform revolutionizing how businesses source raw materials.
              <br />
              <span className="text-primary font-medium">Smart. Fast. Reliable.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
            >
              <Button
                size="lg"
                className="w-[300px] sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 rounded-full shadow-elegant hover:shadow-2xl transition-all duration-300"
              >
                <span>Start Sourcing</span>
                <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-[300px] sm:w-auto bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 rounded-full backdrop-blur-sm"
              >
                Learn More
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0, y: 30 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto"
            >
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={i}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:bg-white/15 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <Icon className="h-6 sm:h-8 w-6 sm:w-8 text-primary mx-auto mb-2" />
                    <div className="text-lg sm:text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-200">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <AnimatedBackground />
        </section>
<MarqueeSection />
        <Discover />
        <Product />
        <HowItWorks />

        {/* Features Section */}
        <section className="py-16 sm:py-20 bg-[#f7f5f2]" ref={featuresRef}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <motion.div
              className="text-center mb-10 sm:mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#c15738] to-[#5c2d23] bg-clip-text text-transparent">
                  Why Choose MaterialMatrix?
                </span>
              </h2>
              <div className="w-20 sm:w-28 h-1 bg-gradient-to-r from-[#c15738] to-[#5c2d23] mx-auto rounded-full mb-4" />
              <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
                Experience the future of construction material procurement.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[FileText, Settings, Clock, Headphones].map((Icon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 sm:p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-2xl bg-gradient-to-r from-[#c15738] to-[#5c2d23] flex items-center justify-center mb-4 sm:mb-6">
                      <Icon className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                      {["Bulk Orders", "Custom Solutions", "Just-in-Time Delivery", "24/7 Support"][index]}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {[
                        "Special pricing for large-scale projects.",
                        "Tailored packages for your large-scale needs.",
                        "Scheduled deliveries with tracking.",
                        "Always-on support from our experts.",
                      ][index]}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
       

        <Testimonials />
                <FAQ />

         <section className="relative py-16 sm:py-20 bg-gradient-to-br from-[#783f2c] to-[#ad4f31] text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="container mx-auto px-4 sm:px-6 lg:px-12"
          >
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Procurement?
            </h2>
            <p className="text-sm sm:text-lg lg:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Start sourcing materials smarter with our AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Button
                size="lg"
                className="bg-white text-[#c15738] hover:bg-white/90 text-base sm:text-lg px-8 py-4 rounded-full font-semibold"
              >
                <Link to="/products" className="flex items-center gap-2">
                  <span>Get Started</span>
                  <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
              </Button>
              <Button
                size="lg"
                className="border-white/40 text-white hover:bg-white/10 text-base sm:text-lg px-8 py-4 rounded-full font-semibold"
              >
                <Link to="/about" className="flex items-center gap-2">
                  <span>Learn More</span>
                  <Play className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Home;
