import { motion } from "framer-motion";
import speedCard from "@/assets/speed-card.jpg";
import routerCard from "@/assets/router-card.jpg";
import installCard from "@/assets/installation-card.jpg";

const features = [
  {
    title: "Lightning-fast speeds",
    description: "Up to 10 Gbps fiber connection",
    image: speedCard,
    color: "bg-[#186974]", // requested blue
  },
  {
    title: "Easy installation",
    description: "Professional setup in 24 hours",
    image: installCard,
    color: "bg-[#186974]", // requested blue
  },
  {
    title: "Smart home ready",
    description: "Free premium router included",
    image: routerCard,
    color: "bg-[#186974]", // requested blue
  },
];

export const FeatureCards = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="group cursor-pointer"
            >
              <div className={`${feature.color} rounded-3xl p-8 h-full shadow-xl relative overflow-hidden`}>
                <div className="relative z-10">
                  <h3 className="text-3xl font-black mb-4 text-background">{feature.title}</h3>
                  <p className="text-xl mb-6 text-background/90">{feature.description}</p>
                  <div className="rounded-2xl overflow-hidden shadow-lg transform rotate-2 group-hover:rotate-0 transition-transform">
                    <img src={feature.image} alt={feature.title} className="w-full h-48 object-cover" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
