import { motion } from "framer-motion";
import { FileText, Settings, Clock, Headphones } from "lucide-react";
import { Card } from "@/components/ui/card"; // assuming shadcn/ui Card
import GlassCard from "@/components/ui/glass-card"; // your existing glass wrapper

const features = [
  {
    icon: "🏗️",
    title: "Verified Vendors",
    description:
      "Every supplier undergoes a multi-step verification process ensuring reliability and quality.",
    detail: "Certified and quality-checked partners",
    bgGradient: "from-[#fff]/10 to-[#f2e5dc]/30",
  },
  {
    icon: "⚙️",
    title: "Smart Procurement",
    description:
      "AI-driven insights to help you source the best materials with cost efficiency and speed.",
    detail: "AI-matched material sourcing",
    bgGradient: "from-[#fff]/10 to-[#e9d5c4]/30",
  },
  {
    icon: "💰",
    title: "Transparent Pricing",
    description:
      "Get instant quotes from multiple vendors — no hidden costs, just clear pricing.",
    detail: "Dynamic market pricing",
    bgGradient: "from-[#fff]/10 to-[#f3e1d3]/30",
  },
];

export default function WhyChooseMaterialMatrix({ featuresRef, isFeaturesInView }: any) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#fffaf6] to-[#f5efea]" ref={featuresRef}>
      {/* Subtle background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#c15738]/10 via-[#5c2d23]/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#c15738] to-[#5c2d23] bg-clip-text text-transparent">
              Why Choose MaterialMatrix?
            </span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[#c15738] to-[#5c2d23] mx-auto rounded-full mb-6" />
          <p className="text-xl text-[#5c2d23]/70 max-w-3xl mx-auto">
            Experience the future of construction material procurement with our cutting-edge platform
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isFeaturesInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GlassCard className="text-center p-10 rounded-2xl backdrop-blur-md bg-white/20 border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <div className="mx-auto mb-6 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#c15738] to-[#5c2d23] text-white group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-semibold text-[#5c2d23] mb-4">
                  {feature.title}
                </h3>
                <p className="text-[#3a2a27]/80 mb-4">{feature.description}</p>
                <p className="text-sm font-medium text-[#c15738]">{feature.detail}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: FileText,
              title: "Bulk Orders",
              description:
                "Special pricing for large-scale construction projects with flexible payment terms and dedicated account management.",
            },
            {
              icon: Settings,
              title: "Custom Solutions",
              description:
                "Tailored material packages designed specifically for your project requirements with expert consultation.",
            },
            {
              icon: Clock,
              title: "Just-in-Time Delivery",
              description:
                "Scheduled deliveries to keep your project on track and minimize storage costs with real-time tracking.",
            },
            {
              icon: Headphones,
              title: "24/7 Support",
              description:
                "Expert team available round the clock to assist with orders, queries, and technical specifications.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-md hover:shadow-xl transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#c15738] to-[#5c2d23] flex items-center justify-center mb-4 shadow-md">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#5c2d23] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#3a2a27]/80 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
