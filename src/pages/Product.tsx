import React, { useState } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import steelMetalImage from "@/assets/steel-metal-materials.jpg";
import cementConcreteImage from "@/assets/cement-concrete.jpg";
import woodTimberImage from "@/assets/wood-timber.jpg";

const Product = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const categories = [
    {
      title: "Steel & Metal",
      image: steelMetalImage,
      items: ["Structural Steel", "TMT Bars", "Metal Sheets", "Fasteners & Hardware"],
      desc: "High-grade steel beams, reinforcement bars, and metal sheets for all construction needs."
    },
    {
      title: "Concrete & Cement",
      image: cementConcreteImage,
      items: ["Portland Cement", "Ready-Mix Concrete", "Concrete Blocks", "Sand & Aggregates"],
      desc: "Premium cement, ready-mix concrete, and aggregates for strong, durable foundations."
    },
    {
      title: "Wood & Timber",
      image: woodTimberImage,
      items: ["Hardwood Lumber", "Marine Plywood", "Engineered Wood", "Wood Panels & Veneers"],
      desc: "Quality lumber, plywood, and engineered wood products for versatile construction uses."
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#f7f5f2]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-[#c15738] to-[#5c2d23] bg-clip-text text-transparent">
              Our Products
            </span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[#c15738] to-[#5c2d23] mx-auto rounded-full mb-4 sm:mb-6" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Comprehensive range of construction materials from verified suppliers across India.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card
                className={cn(
                  "overflow-hidden cursor-pointer group transition-all duration-300 bg-white",
                  "hover:shadow-2xl hover:-translate-y-2", // 👈 hover shadow + lift
                  activeCard === index && "ring-2 ring-[#c15738] shadow-xl"
                )}
                onClick={() => setActiveCard(activeCard === index ? null : index)}
              >
                <div className="relative h-52 sm:h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3   text-[#5c2d23] group-hover:text-[#c15738]  transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                    {category.desc}
                  </p>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#c15738]" />
                        {item}
                      </li>
                    ))}
                  </ul>
            <Link to="/products" className="mt-5 block">
  <Button
    variant="outline"
    className={cn(
      "w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3",
      "border-2 border-[#c15738] text-[#c15738] font-medium rounded-full",
      "bg-transparent hover:bg-gradient-to-r hover:from-[#c15738] hover:to-[#5c2d23]",
      "hover:text-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
    )}
  >
    View Products
    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
  </Button>
</Link>

                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Product;
