import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { Loader2, Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import SEOHead from "@/components/SEOHead";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await login(loginData.email, loginData.password);
      navigate("/");
    } catch (error) {
      // Error handled in context
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      // Error handled in context
    }
  };

  return (
    <>
      <SEOHead title="Login | MaterialMatrix" description="Sign in to your MaterialMatrix account" />

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
              Don't have an account?
            </motion.p>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-col gap-4"
            >
              <Link to="/buyer-register">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-12 py-6 text-lg rounded-full w-64 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Sign Up as Buyer
                </Button>
              </Link>
              <Link to="/seller-register">
                <Button 
                  size="lg" 
                  className="border-2 border-white text-white hover:bg-white/10 font-semibold px-12 py-6 text-lg rounded-full w-64 backdrop-blur-sm"
                >
                  Sign Up as Seller
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Login Form */}
        <div className="flex items-center justify-center p-4 sm:p-6 lg:p-12 bg-gradient-to-br from-gray-50 to-gray-100">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-lg"
          >
            <div className="backdrop-blur-xl bg-white/90 rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-white/50">
              <div className="mb-10 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">Log In</h2>
                <p className="text-muted-foreground">Access your MaterialMatrix account</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email ID / Phone Number
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your Email ID"
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    required
                    className="h-12 bg-white/50 backdrop-blur-sm border-gray-200 focus:border-primary transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-foreground font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      required
                      className="h-12 pr-10 bg-white/50 backdrop-blur-sm border-gray-200 focus:border-primary transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  <div className="text-right">
                    <Link to="/forgot-password" className="text-sm text-primary hover:underline font-medium">
                      Forgot Password?
                    </Link>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Logging in...
                    </>
                  ) : (
                    "Log In"
                  )}
                </Button>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white/90 text-muted-foreground">Or Sign In With</span>
                  </div>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  onClick={handleGoogleLogin}
                  className="w-full mt-4 h-12 rounded-full border-2 hover:bg-gray-50 transition-all duration-300"
                >
                  <FcGoogle className="mr-2 h-6 w-6" />
                  <span className="font-medium">Continue with Google</span>
                </Button>
              </div>

              {/* Mobile Sign Up Links */}
              <div className="mt-8 lg:hidden text-center space-y-4">
                <p className="text-muted-foreground">Don't have an account?</p>
                <div className="flex flex-col gap-3">
                  <Link to="/buyer-register">
                    <Button variant="outline" className="w-full rounded-full border-2 border-primary text-primary hover:bg-primary/10">
                      Sign Up as Buyer
                    </Button>
                  </Link>
                  <Link to="/seller-register">
                    <Button variant="outline"  className="w-full rounded-full border-2 border-primary text-white  bg-[#c94f31] hover:bg-primary/10">
                      Sign Up as Seller
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Login;
