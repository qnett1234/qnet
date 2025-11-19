import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Smartphone, Activity, CreditCard, Wifi, Bell } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";

const features = [
  {
    icon: Activity,
    title: "Track Usage",
    description: "Monitor your data usage in real-time",
  },
  {
    icon: CreditCard,
    title: "Pay Bills",
    description: "Quick and secure payment options",
  },
  {
    icon: Wifi,
    title: "Monitor Wi-Fi",
    description: "Manage connected devices easily",
  },
  {
    icon: Bell,
    title: "Get Alerts",
    description: "Stay updated with instant notifications",
  },
];

export const MobileApp = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-zentrix-blue-medium to-zentrix-blue-bright relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-background"
          >
            <div className="inline-block bg-background/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-6">
              MOBILE APP
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Manage Your Internet from Anywhere
            </h2>
            <p className="text-xl mb-8 text-background/90">
              Track usage, pay bills, and monitor your Wi-Fi from our mobile app. Everything you need at your fingertips.
            </p>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-background/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{feature.title}</h3>
                    <p className="text-background/80">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4">
              <Button variant="hero" size="lg" className="bg-background text-foreground hover:bg-background/90">
                App Store
              </Button>
              <Button variant="hero" size="lg" className="bg-background text-foreground hover:bg-background/90">
                Google Play
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 max-w-md mx-auto">
              <img
                src={appMockup}
                alt="Zentrix Fiber Mobile App"
                className="w-full animate-float drop-shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-background/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>

      {/* Promo Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 right-0 bg-zentrix-red-bright py-8"
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-background">
            <div className="inline-block bg-background/20 px-3 py-1 rounded-full text-xs font-bold mb-2">
              LIMITED TIME OFFER
            </div>
            <h3 className="text-2xl md:text-3xl font-black">
              Get 2 Months Free on Annual Plans
            </h3>
            <p className="text-background/90">Sign up today and save big on your first year!</p>
          </div>
          <Button variant="hero" size="lg" className="bg-background text-foreground hover:bg-background/90 whitespace-nowrap">
            Claim Offer Now
          </Button>
        </div>
      </motion.div>
    </section>
  );
};
