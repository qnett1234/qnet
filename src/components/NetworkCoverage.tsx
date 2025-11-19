import { motion } from "framer-motion";
import { MapPin, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const cities = [
  { name: "New York", coverage: "Full", color: "bg-zentrix-green-bright" },
  { name: "Los Angeles", coverage: "Full", color: "bg-zentrix-green-bright" },
  { name: "Chicago", coverage: "Full", color: "bg-zentrix-green-bright" },
  { name: "Houston", coverage: "Expanding", color: "bg-zentrix-orange-bright" },
  { name: "Phoenix", coverage: "Full", color: "bg-zentrix-green-bright" },
  { name: "Philadelphia", coverage: "Full", color: "bg-zentrix-green-bright" },
  { name: "San Antonio", coverage: "Coming Soon", color: "bg-zentrix-blue-bright" },
  { name: "San Diego", coverage: "Full", color: "bg-zentrix-green-bright" },
  { name: "Dallas", coverage: "Expanding", color: "bg-zentrix-orange-bright" },
  { name: "Austin", coverage: "Full", color: "bg-zentrix-green-bright" },
];

export const NetworkCoverage = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Available in Major Cities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're rapidly expanding our fiber network across the nation. Check if Zentrix Fiber is available in your area!
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-muted rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <MapPin className="w-8 h-8 mx-auto mb-3 text-zentrix-blue-bright" />
                <h3 className="font-black text-lg mb-2">{city.name}</h3>
                <div className={`inline-flex items-center gap-2 ${city.color} text-background px-3 py-1 rounded-full text-xs font-bold`}>
                  {city.coverage === "Full" && <Check className="w-3 h-3" />}
                  {city.coverage}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="orange" size="lg" className="text-lg">
            Check My Address
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
