import { motion } from "framer-motion";
import { Users, Building2, Award, Zap } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "50K+",
    label: "Happy Customers",
    color: "bg-zentrix-blue-bright",
  },
  {
    icon: Building2,
    number: "15+",
    label: "Cities Covered",
    color: "bg-zentrix-green-bright",
  },
  {
    icon: Award,
    number: "99.9%",
    label: "Uptime Guarantee",
    color: "bg-zentrix-orange-bright",
  },
  {
    icon: Zap,
    number: "10 Gbps",
    label: "Max Speed",
    color: "bg-zentrix-purple-dark",
  },
];

export const StatsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-zentrix-purple-light to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Zentrix by the Numbers
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: -5 }}
              className={`${stat.color} text-background rounded-3xl p-8 text-center shadow-xl`}
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4" />
              <div className="text-5xl font-black mb-2">{stat.number}</div>
              <div className="text-lg font-bold text-background/90">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
