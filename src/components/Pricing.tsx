import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "The Starter Bundle",
    speed: "500 Mbps",
    price: "49 USD",
    features: [
      "500 Mbps download & upload",
      "Free standard router",
      "Free installation",
      "24/7 customer support",
      "No data caps",
    ],
    color: "bg-gradient-to-br from-zentrix-blue-bright to-zentrix-blue-medium",
    badge: "BEST FOR HOME",
  },
  {
    name: "The Ultimate Bundle",
    speed: "2 Gbps",
    price: "89 USD",
    features: [
      "2 Gbps download & upload",
      "Premium WiFi 6E router",
      "Priority installation",
      "Dedicated support line",
      "No data caps",
      "Free smart home setup",
    ],
    color: "bg-gradient-to-br from-zentrix-purple-dark to-zentrix-purple-medium",
    badge: "MOST POPULAR",
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-[#EFF1F3] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-black mb-4 text-black">
            Get Started! Select your
            <br />
            Content Bundle
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: index === 0 ? -2 : 2 }}
              className="bg-background rounded-3xl p-8 shadow-2xl relative"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-zentrix-orange-bright text-background px-6 py-2 rounded-full font-black text-sm">
                {plan.badge}
              </div>

              <div className="text-center mb-8 pt-4">
                <h3 className="text-3xl font-black mb-2">{plan.name}</h3>
                <div className="text-5xl font-black mb-2">{plan.speed}</div>
                <div className="text-3xl font-black text-zentrix-blue-bright">
                  {plan.price}
                  <span className="text-lg text-muted-foreground">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-zentrix-green-bright flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="green" size="lg" className="w-full text-lg" asChild>
                <a href="tel:8338020775">CALL NOW: (833) 802-0775</a>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-background text-lg"
        >
          * No contract required. Cancel anytime. Prices exclude installation fee of $99.
        </motion.p>
      </div>

      <div className="absolute -top-20 -left-20 w-64 h-64 bg-background rounded-full opacity-10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-background rounded-full opacity-10 blur-3xl" />
    </section>
  );
};
