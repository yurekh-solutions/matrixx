import { motion } from "framer-motion";
import { Target, Users, Award, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To revolutionize construction procurement through AI-powered technology, making it faster, smarter, and more transparent for all stakeholders."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "We put our customers at the heart of everything we do, ensuring seamless experiences and building long-term partnerships."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Every supplier on our platform is thoroughly verified to ensure you receive only the highest quality materials."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Constantly evolving with cutting-edge technology to provide the best procurement solutions in the industry."
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
        title="About Us | MaterialMatrix"
        description="Learn about MaterialMatrix - the AI-powered construction procurement platform connecting buyers with 500+ verified suppliers across India."
      />

      <div className="min-h-screen bg-background pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gradient">About MaterialMatrix</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                MaterialMatrix is India's leading AI-powered construction material procurement platform,
                connecting buyers with verified suppliers for seamless, transparent transactions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="text-gradient">Values</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The principles that drive us forward
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 hover-lift h-full">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                      <value.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
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
      </div>
    </>
  );
};

export default About;
