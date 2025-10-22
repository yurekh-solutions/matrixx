import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Target,
  Sparkles,
  Network,
  BarChart3,
  Clock
} from "lucide-react";
import FlipCard from "@/components/FlipCard";
import AIFeatureCard from "@/components/AIFeatureCard";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import ProcurementGrid from "@/components/ProcurementGrid";
import AIFeatureSection from "@/components/AIFeatureSection";
import ProcurementHero from "@/components/ProcurementHero";
import CarouselCards from "@/components/CarouselCards";
import ScrollVideoSection from "@/components/ScrollVideoSec";

const About = () => {
    const [activeIndex, setActiveIndex] = useState(0);
useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const cards = [
  {
    id: 1,
    title: "24/7 AI Assistance",
    description:
      "Get round-the-clock AI help for sourcing, verification, and procurement queries.",
    badge: "Always Online",
  },
  {
    id: 2,
    title: "98% On-Time Delivery",
    description:
      "Track material deliveries in real time with near-perfect accuracy and speed.",
    badge: "Verified Partners",
  },
  {
    id: 3,
    title: "500+ Trusted Suppliers",
    description:
      "A vast network of verified and trusted material suppliers ready to serve your project.",
    badge: "Pan-India Coverage",
  },
];


  const aiFeatures = [
    {
      icon: Brain,
      title: "Intelligent AI Reasoning",
      description: "Advanced machine learning algorithms analyze market trends, supplier performance, and historical data to provide intelligent procurement recommendations at scale."
    },
    {
      icon: Zap,
      title: "Autonomous Sourcing",
      description: "Automate your RFP process with AI-powered vendor matching, bid evaluation, and award scenario optimization that only artificial intelligence can find."
    },
    {
      icon: BarChart3,
      title: "Sourcing Optimization",
      description: "Launch small, medium, or large-scale tenders quickly and efficiently. Our AI evaluates thousands of scenarios to find the optimal sourcing strategy."
    },
    {
      icon: Clock,
      title: "Rate Manager",
      description: "Real-time price intelligence and dynamic rate management powered by AI to ensure you always get the best market rates for construction materials."
    }
  ];

  const flipCardData = [
    {
      icon: Target,
      title: "Our Mission",
      description: "Transforming procurement with AI",
      backTitle: "Forging the Future",
      backContent: "We revolutionize construction procurement through AI-powered technology, making it faster, smarter, and more transparent for all stakeholders in the industry."
    },
    {
      icon: Sparkles,
      title: "Innovation First",
      description: "Cutting-edge AI technology",
      backTitle: "Advanced AI Systems",
      backContent: "Leveraging machine learning and intelligent reasoning to provide procurement solutions that continuously evolve and adapt to market dynamics."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Verified & trusted suppliers",
      backTitle: "Rigorous Verification",
      backContent: "Every supplier undergoes thorough AI-powered vetting and continuous performance monitoring to ensure only the highest quality materials reach you."
    },
    {
      icon: Network,
      title: "Seamless Integration",
      description: "Connected supply chain",
      backTitle: "Smart Connectivity",
      backContent: "Our platform integrates seamlessly with your existing systems, creating a unified, intelligent procurement ecosystem for maximum efficiency."
    }
  ];

  const stats = [
    { number: "500+", label: "Verified Suppliers" },
    { number: "10,000+", label: "Products Available" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "20+", label: "States Covered" }
  ];

  return (
    <>
      <SEOHead
        title="About MaterialMatrix | AI-Powered Construction Procurement"
        description="Forging the future of procurement with AI. MaterialMatrix uses intelligent reasoning and autonomous sourcing to revolutionize construction material procurement across India."
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <ProcurementHero />
<ProcurementGrid />
<AIFeatureSection />
        <CarouselCards />


        {/* Stats Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2 animate-slide-up">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Features Section */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Intelligent AI Reasoning
                <span className="block text-gradient mt-2">That Can Be Automated at Scale</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Whether you're running small, medium, or large-scale tenders, enable your sourcing team 
                to launch RFPs quickly and efficiently with award scenarios only AI can find.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiFeatures.map((feature, index) => (
                <AIFeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Flip Cards Section */}
        <section className="section-padding bg-gradient-to-br from-secondary/5 to-primary/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Our <span className="text-gradient">Core Values</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The principles that drive us forward
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {flipCardData.map((card, index) => (
                <FlipCard
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  backTitle={card.backTitle}
                  backContent={card.backContent}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-8">
                  Our <span className="text-gradient">Journey</span>
                </h2>
                
                <div className="space-y-6 text-left">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-card border-l-4 border-primary p-6 rounded-r-xl hover-lift"
                  >
                    <p className="text-muted-foreground leading-relaxed">
                      Founded with a vision to transform the construction industry, <span className="text-primary font-semibold">MaterialMatrix</span> emerged 
                      from the need to simplify and modernize material procurement through artificial intelligence and machine learning.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-card border-l-4 border-secondary p-6 rounded-r-xl hover-lift"
                  >
                    <p className="text-muted-foreground leading-relaxed">
                      Today, we're proud to be India's most trusted AI-powered construction procurement platform, 
                      serving thousands of businesses across 20+ states with intelligent sourcing optimization and autonomous procurement.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="bg-card border-l-4 border-primary p-6 rounded-r-xl hover-lift"
                  >
                    <p className="text-muted-foreground leading-relaxed">
                      We're committed to continuous innovation, constantly evolving our AI systems to meet the 
                      changing needs of the construction industry and deliver unprecedented value to our customers.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
 <section className="py-16 md:py-24 bg-gradient-to-br from-secondary/5 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                  Our <span className="text-gradient">Story</span>
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Founded with a vision to transform the construction industry, MaterialMatrix emerged from
                    the need to simplify and modernize material procurement processes. We recognized the
                    challenges faced by construction companies in sourcing quality materials from reliable suppliers.
                  </p>
                  <p>
                    Today, we're proud to be India's most trusted construction procurement platform, serving
                    thousands of businesses across 20+ states. Our AI-powered platform connects buyers with
                    over 500 verified suppliers, ensuring quality, transparency, and efficiency at every step.
                  </p>
                  <p>
                    We're committed to continuous innovation, constantly evolving our platform to meet the
                    changing needs of the construction industry and our valued customers.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-[#783f2c] to-[#ad4f31] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-white max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Procurement?
              </h2>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Join thousands of construction companies leveraging AI-powered procurement 
                to source materials faster, smarter, and more efficiently.
              </p>
                              <Link to="/about">
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300"
              >
                Get Started Today
              </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
