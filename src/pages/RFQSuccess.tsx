import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, Home, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";

const RFQSuccess = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEOHead title="RFQ Submitted Successfully | MaterialMatrix" />

      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full"
        >
          <Card className="p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle2 className="h-12 w-12 text-white" />
            </motion.div>

            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              RFQ Submitted Successfully!
            </h1>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Thank you for your request for quotation. Our team will review your requirements
              and connect you with verified suppliers shortly. You'll receive quotes via WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={() => navigate("/")}
                variant="outline"
                className="flex-1"
              >
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Button>
              <Button
                onClick={() => navigate("/products")}
                className="flex-1"
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Browse More Products
              </Button>
            </div>
          </Card>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Expected response time: 2-4 hours
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default RFQSuccess;
