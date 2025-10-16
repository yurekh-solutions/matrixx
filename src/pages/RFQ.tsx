import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import { toast } from "sonner";
import SEOHead from "@/components/SEOHead";

const RFQ = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();
  const { user } = useAuth();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    company: "",
    deliveryLocation: "",
    email: user?.email || "",
    phone: "",
    additionalNotes: "",
  });

  if (cart.length === 0) {
    navigate("/cart");
    return null;
  }

  const handleSubmit = async () => {
    setLoading(true);

    try {
      // Prepare RFQ data
      const rfqData = {
        customer: formData,
        items: cart,
        timestamp: new Date().toISOString(),
      };

      // Create WhatsApp message
      const whatsappMessage = `
*New RFQ Request from MaterialMatrix*

*Customer Details:*
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}
Delivery Location: ${formData.deliveryLocation}

*Products Requested:*
${cart.map((item, index) => `
${index + 1}. ${item.name}
   - Category: ${item.category}
   - Quantity: ${item.quantity} MT
   ${item.brand ? `- Brand: ${item.brand}` : ""}
   ${item.material ? `- Material: ${item.material}` : ""}
`).join("")}

${formData.additionalNotes ? `*Additional Notes:*\n${formData.additionalNotes}` : ""}
      `.trim();

      // WhatsApp API URL
      const whatsappNumber = "917021341409";
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

      // Email notification (would require backend in real implementation)
      console.log("RFQ Data:", rfqData);

      // Clear cart after successful submission
      clearCart();

      toast.success("RFQ submitted successfully! Redirecting to WhatsApp...");

      // Open WhatsApp
      setTimeout(() => {
        window.open(whatsappURL, "_blank");
        navigate("/rfq-success");
      }, 1500);
    } catch (error) {
      console.error("RFQ submission error:", error);
      toast.error("Failed to submit RFQ. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <SEOHead title="Request for Quotation | MaterialMatrix" />

      <div className="min-h-screen bg-background pt-20 md:pt-24">
        <div className="container mx-auto px-4 py-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/cart")}
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Cart
          </Button>

          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                <span className="text-gradient">Request for Quotation</span>
              </h1>
              <p className="text-muted-foreground">
                Step {step} of 2 - {step === 1 ? "Review Items" : "Customer Information"}
              </p>
            </div>

            {/* Progress Indicator */}
            <div className="flex items-center mb-8">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${step >= 1 ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>
                  1
                </div>
                <div className="h-1 w-24 mx-2 bg-muted">
                  <div className={`h-full ${step >= 2 ? "bg-primary" : ""} transition-all`} style={{ width: step >= 2 ? "100%" : "0%" }} />
                </div>
              </div>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${step >= 2 ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>
                2
              </div>
            </div>

            {/* Step 1: Review Cart */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Review Your Items</h2>
                  <div className="space-y-4">
                    {cart.map((item, index) => (
                      <div key={item.id} className="flex gap-4 pb-4 border-b last:border-0">
                        <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center text-2xl font-bold text-primary/30 flex-shrink-0">
                          {item.category.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {item.category} • Qty: {item.quantity} MT
                          </p>
                          {item.brand && (
                            <p className="text-sm text-muted-foreground">Brand: {item.brand}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Button onClick={() => setStep(2)} className="w-full" size="lg">
                  Continue to Customer Info
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            )}

            {/* Step 2: Customer Information */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-6">Customer Information</h2>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit();
                    }}
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your company name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="delivery">Delivery Location *</Label>
                      <Input
                        id="delivery"
                        value={formData.deliveryLocation}
                        onChange={(e) =>
                          setFormData({ ...formData, deliveryLocation: e.target.value })
                        }
                        placeholder="City, State"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@company.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 12345 67890"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Additional Notes (Optional)</Label>
                      <Textarea
                        id="notes"
                        value={formData.additionalNotes}
                        onChange={(e) =>
                          setFormData({ ...formData, additionalNotes: e.target.value })
                        }
                        placeholder="Any specific requirements or questions..."
                        rows={4}
                      />
                    </div>

                    <div className="flex gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStep(1)}
                        className="flex-1"
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back
                      </Button>
                      <Button type="submit" className="flex-1" disabled={loading}>
                        {loading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          "Submit RFQ"
                        )}
                      </Button>
                    </div>

                    <p className="text-xs text-center text-muted-foreground">
                      By submitting, you agree to receive quotes from verified suppliers
                    </p>
                  </form>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default RFQ;
