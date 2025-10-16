import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAuth } from "@/contexts/AuthContext";
import { Loader2, ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [recoveryMethod, setRecoveryMethod] = useState<"email" | "phone">("email");
  const [recoveryValue, setRecoveryValue] = useState("");
  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      if (recoveryMethod === "email") {
        await resetPassword(recoveryValue);
        setTimeout(() => navigate("/login"), 2000);
      } else {
        // Phone recovery not implemented
        console.log("Phone recovery not yet implemented");
      }
    } catch (error) {
      // Error handled in context
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEOHead title="Forgot Password | MaterialMatrix" description="Recover your MaterialMatrix account" />

      <div className="min-h-screen grid lg:grid-cols-2">
        {/* Left Side - Orange Branded Panel */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:flex flex-col items-center justify-center bg-gradient-to-br from-primary via-primary to-secondary p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10 text-center text-white">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="w-32 h-32 bg-white rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl"
            >
              <span className="text-5xl font-bold text-primary">MM</span>
            </motion.div>
            
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-5xl font-bold mb-4"
            >
              Welcome to
            </motion.h1>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-6xl font-bold mb-12"
            >
              MaterialMatrix
            </motion.h2>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-xl mb-8"
            >
              Remember your password?
            </motion.p>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Link to="/login">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-12 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Back to Sign In
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Recovery Form */}
        <div className="flex items-center justify-center p-4 sm:p-6 lg:p-12 bg-gradient-to-br from-gray-50 to-gray-100">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-lg"
          >
            <div className="backdrop-blur-xl bg-white/90 rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-white/50">
              <Link to="/login" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                <span className="font-medium">Back</span>
              </Link>

              <div className="mb-10 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">Forgot Password?</h2>
                <p className="text-muted-foreground">Choose how you'd like to recover your account</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <Label className="text-foreground font-medium">Recovery Method</Label>
                  <RadioGroup value={recoveryMethod} onValueChange={(value) => setRecoveryMethod(value as "email" | "phone")}>
                    <div className="flex items-center space-x-2 p-4 rounded-xl border-2 border-gray-200 hover:border-primary/50 transition-colors cursor-pointer">
                      <RadioGroupItem value="email" id="email" />
                      <Label htmlFor="email" className="flex-1 cursor-pointer">
                        <span className="font-medium">Email Recovery</span>
                        <p className="text-sm text-muted-foreground">Receive a password reset link via email</p>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 rounded-xl border-2 border-gray-200 hover:border-primary/50 transition-colors cursor-pointer">
                      <RadioGroupItem value="phone" id="phone" />
                      <Label htmlFor="phone" className="flex-1 cursor-pointer">
                        <span className="font-medium">Phone Recovery</span>
                        <p className="text-sm text-muted-foreground">Receive a verification code via SMS</p>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="recovery" className="text-foreground font-medium">
                    {recoveryMethod === "email" ? "Email Address" : "Phone Number"}
                  </Label>
                  <Input
                    id="recovery"
                    type={recoveryMethod === "email" ? "email" : "tel"}
                    placeholder={recoveryMethod === "email" ? "Enter your email" : "Enter your phone number"}
                    value={recoveryValue}
                    onChange={(e) => setRecoveryValue(e.target.value)}
                    required
                    className="h-12 bg-white/50 backdrop-blur-sm border-gray-200 focus:border-primary transition-all"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Recovery Link"
                  )}
                </Button>
              </form>

              {/* Mobile Back Link */}
              <div className="mt-6 lg:hidden text-center">
                <Link to="/login">
                  <Button variant="outline" className="w-full rounded-full border-2">
                    Back to Sign In
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
