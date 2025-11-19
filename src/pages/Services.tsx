import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Home, Building2, Sparkles, Shield } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Fiber",
    description: "Lightning-fast internet for your home. Stream 4K, game online, and work remotely without a hitch.",
    features: ["Up to 10 Gbps", "Free router", "24/7 support", "No data caps"],
    color: "bg-zentrix-blue-bright",
  },
  {
    icon: Building2,
    title: "Business Solutions",
    description: "Enterprise-grade fiber for businesses of all sizes. Scalable, reliable, and backed by SLAs.",
    features: ["Dedicated connection", "Static IP", "Priority support", "99.9% uptime SLA"],
    color: "bg-zentrix-orange-bright",
  },
  {
    icon: Sparkles,
    title: "Smart Home Setup",
    description: "Complete smart home integration with your fiber network. IoT devices, security cameras, and more.",
    features: ["Professional setup", "Device integration", "Network optimization", "Ongoing support"],
    color: "bg-zentrix-green-bright",
  },
  {
    icon: Shield,
    title: "Network Security",
    description: "Advanced security features to protect your network from threats. Parental controls included.",
    features: ["Threat detection", "Parental controls", "Guest network", "VPN support"],
    color: "bg-zentrix-purple-dark",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <section className="py-16 bg-gradient-to-br from-zentrix-orange-bright to-zentrix-orange-medium">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center text-background"
            >
              <h1 className="text-6xl md:text-8xl font-black mb-6">OUR SERVICES</h1>
              <p className="text-2xl">
                From homes to enterprises, we've got you covered.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className={`${service.color} text-background rounded-3xl p-8 shadow-2xl`}
                >
                  <service.icon className="w-16 h-16 mb-6" />
                  <h3 className="text-3xl font-black mb-4">{service.title}</h3>
                  <p className="text-xl mb-6 text-background/90">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-background" />
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
