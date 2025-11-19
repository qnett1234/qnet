import { motion } from "framer-motion";
import { Zap, Shield, Gauge, Network } from "lucide-react";

const technologies = [
  {
    icon: Zap,
    title: "Fiber Optic Technology",
    description: "Pure fiber from our network to your home. No copper bottlenecks, just light-speed data transmission.",
    color: "text-zentrix-orange-bright",
  },
  {
    icon: Network,
    title: "Advanced Network Infrastructure",
    description: "Enterprise-grade backbone with 99.9% uptime. Our redundant systems ensure you stay connected.",
    color: "text-zentrix-blue-bright",
  },
  {
    icon: Gauge,
    title: "Dynamic Bandwidth Allocation",
    description: "Smart technology that adapts to your usage patterns, ensuring optimal speeds when you need them most.",
    color: "text-zentrix-green-bright",
  },
  {
    icon: Shield,
    title: "Built-in Security",
    description: "Advanced DDoS protection and network-level security keep your connection safe from threats.",
    color: "text-zentrix-purple-dark",
  },
];

export const TechnologySection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-foreground to-foreground/90 text-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Powered by Cutting-Edge Technology
          </h2>
          <p className="text-xl text-background/80 max-w-3xl mx-auto">
            We don't just deliver internet—we engineer the future of connectivity with advanced fiber optic infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-background/10 backdrop-blur-sm rounded-3xl p-8 border border-background/20"
            >
              <tech.icon className={`w-16 h-16 mb-6 ${tech.color}`} />
              <h3 className="text-2xl font-black mb-4">{tech.title}</h3>
              <p className="text-background/80 text-lg leading-relaxed">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
