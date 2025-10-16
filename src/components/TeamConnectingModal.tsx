import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Users, CheckCircle, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";

interface TeamConnectingModalProps {
  isOpen: boolean;
  onClose: () => void;
  contactMethod?: "whatsapp" | "email" | "phone";
}

const TeamConnectingModal = ({ isOpen, onClose, contactMethod = "whatsapp" }: TeamConnectingModalProps) => {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const steps = [
    { icon: MessageCircle, text: "Processing your request...", color: "text-blue-500" },
    { icon: Users, text: "Connecting with our team...", color: "text-primary" },
    { icon: CheckCircle, text: "Team member assigned!", color: "text-green-500" }
  ];

  const contactMessages = {
    whatsapp: {
      title: "WhatsApp Connection",
      description: "We're opening WhatsApp for you to connect with our team instantly.",
      action: "Continue to WhatsApp"
    },
    email: {
      title: "Email Being Prepared",
      description: "Your email client will open with a pre-filled message to our team.",
      action: "Continue to Email"
    },
    phone: {
      title: "Call Connection",
      description: "We're connecting you directly to our support team.",
      action: "Start Call"
    }
  };

  useEffect(() => {
    if (isOpen) {
      setStep(0);
      setProgress(0);
      
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + 2;
        });
      }, 50);

      const stepTimeout1 = setTimeout(() => setStep(1), 1000);
      const stepTimeout2 = setTimeout(() => setStep(2), 2500);
      const autoClose = setTimeout(() => {
        onClose();
      }, 4000);

      return () => {
        clearInterval(progressInterval);
        clearTimeout(stepTimeout1);
        clearTimeout(stepTimeout2);
        clearTimeout(autoClose);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="w-full max-w-md"
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <GlassCard variant="premium" className="p-6 relative overflow-hidden">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 p-0 rounded-full hover:bg-glass-bg/50"
            >
              <X className="h-4 w-4" />
            </Button>

            {/* Header */}
            <div className="text-center mb-6">
              <motion.div
                className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Users className="h-8 w-8 text-primary-foreground" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {contactMessages[contactMethod].title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {contactMessages[contactMethod].description}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="h-2 bg-glass-bg rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                {progress < 100 ? `${Math.round(progress)}% Complete` : "Ready to Connect!"}
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-4 mb-6">
              {steps.map((stepItem, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                    index <= step ? 'bg-primary/10 border border-primary/20' : 'bg-glass-bg/30'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    index <= step ? 'bg-gradient-primary' : 'bg-glass-bg'
                  }`}>
                    <stepItem.icon className={`h-4 w-4 ${
                      index <= step ? 'text-primary-foreground' : 'text-muted-foreground'
                    }`} />
                  </div>
                  <span className={`text-sm font-medium transition-all duration-300 ${
                    index <= step ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {stepItem.text}
                  </span>
                  {index <= step && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-auto"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Action Button */}
            {step >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <Button
                  onClick={onClose}
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  {contactMessages[contactMethod].action}
                </Button>
              </motion.div>
            )}

            {/* Background Animation */}
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: progress / 100 }}
              style={{ transformOrigin: "left" }}
            />
          </GlassCard>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TeamConnectingModal;