import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Headphones, BarChart3, Database, Zap, Brain } from "lucide-react";
import aiSourcingImg from "@/assets/ai-sourcing-optimization.jpg";
import autonomousImg from "@/assets/autonomous-procurement.jpg";
import rateManagementImg from "@/assets/rate-management.jpg";
import aidashboard from "@/assets/ai-dashboar.jpg";
import aisourcing from "@/assets/network-3d.jpg";
import autonomous from "@/assets/autonomous-procurement.jpg";
import { Link } from "react-router-dom";

const ProcurementHero = () => {
  const cards = [
    {
      id: 1,
      icon: Headphones,
      title: "24/7 AI Support",
      desc: "Round-the-clock AI assistance for procurement queries, pricing, and supplier verification.",
      color: "from-purple-500/10 via-purple-600/5 to-transparent",
      image: aiSourcingImg,
    },
    {
      id: 2,
      icon: ShieldCheck,
      title: "98% Verified Suppliers",
      desc: "Access a verified network of trusted vendors ensuring reliability and transparency.",
      color: "from-green-500/10 via-green-600/5 to-transparent",
      image: autonomousImg,
    },
    {
      id: 3,
      icon: BarChart3,
      title: "500+ Deliveries Tracked",
      desc: "Track procurement deliveries in real-time with AI-driven dashboards and insights.",
      color: "from-blue-500/10 via-blue-600/5 to-transparent",
      image: rateManagementImg,
    },
    {
      id: 4,
      icon: Database,
      title: "AI Procurement Dashboard",
      desc: "Centralized control to manage sourcing, suppliers, and delivery tracking in one intelligent dashboard.",
      color: "from-orange-500/10 via-orange-600/5 to-transparent",
      image: aidashboard,
    },
    {
      id: 5,
      icon: Zap,
      title: "AI Sourcing Optimization",
      desc: "Automate RFQs, reduce costs, and connect with best suppliers instantly through predictive analytics.",
      color: "from-pink-500/10 via-pink-600/5 to-transparent",
      image: aisourcing,
    },
    {
      id: 6,
      icon: Brain,
      title: "Autonomous Procurement",
      desc: "Self-learning AI engine that handles negotiation, supplier validation, and order tracking autonomously.",
      color: "from-yellow-500/10 via-yellow-600/5 to-transparent",
      image: autonomous,
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto-swipe loop
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <section className="relative  py-12 md:py-20 overflow-hidden mt-10 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-24 left-16 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-24 right-16 w-72 h-72 bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20 backdrop-blur">
              Trusted Platform
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-4 leading-tight">
              Raw Material{" "}
              <span className="text-gradient">Procurement</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl">
              AI-powered procurement platform revolutionizing how businesses
              source TMT, Structures, Flats & Bitumen. Get instant quotes,
              verify suppliers, and track deliveries in real time.
            </p>
                <Link to="/products">

            <Button className="rounded-full px-6 py-5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition hover:scale-105 shadow-md">
              Learn More →
            </Button>
            </Link>

          </motion.div>

          {/* Right Cards - Animated Loop with 3D Stack */}
          <div className="relative flex justify-center lg:justify-end items-center w-full h-[420px] md:h-[500px]">
            <AnimatePresence>
              {cards.map((card, i) => {
                const Icon = card.icon;
                const cardIndex = (i + index) % cards.length;
                const isActive = cardIndex === 0;

                return (
                  <motion.div
                    key={`${card.id}-${index}`}
                    initial={{ opacity: 0, scale: 0.9, x: 50 }}
                    animate={{
                      opacity: 1,
                      scale: isActive ? 1 : 0.95,
                      x: isActive ? 0 : (cardIndex - 1) * 20,
                      y: (cardIndex - 1) * -25,
                      rotateY: (cardIndex - 1) * 5,
                    }}
                    exit={{ opacity: 0, scale: 0.9, x: -50 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className={`absolute w-64 sm:w-72 md:w-80 h-[260px] md:h-[300px] rounded-3xl overflow-hidden border border-gray-700 bg-black/60 transition-all duration-300 ${
                      isActive
                        ? "shadow-2xl hover:shadow-[0_0_30px_rgba(255,165,0,0.6)]"
                        : "shadow-lg"
                    } hover:scale-105`}
                    style={{
                      zIndex: cards.length - cardIndex,
                    }}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.color}`} />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="rounded-2xl p-3 w-fit mb-3 bg-black/40 border border-gray-700">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-1 text-white">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-300">{card.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcurementHero;
