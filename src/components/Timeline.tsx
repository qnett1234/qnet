import { motion } from "framer-motion";
import { Rocket, Building, Globe, Trophy } from "lucide-react";

const milestones = [
  {
    year: "2020",
    icon: Rocket,
    title: "Launch",
    description: "Zentrix Fiber founded with a mission to democratize high-speed internet",
  },
  {
    year: "2021",
    icon: Building,
    title: "First Network",
    description: "Deployed our first fiber network serving 5,000 homes in New York",
  },
  {
    year: "2022",
    icon: Globe,
    title: "National Expansion",
    description: "Expanded to 10 major cities with 25,000 customers",
  },
  {
    year: "2023",
    icon: Trophy,
    title: "Award Winning",
    description: "Recognized as 'Best New ISP' and reached 50,000 happy customers",
  },
];

export const Timeline = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-zentrix-green-bright to-zentrix-green-medium">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 text-background"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">Our Journey</h2>
          <p className="text-xl text-background/90 max-w-2xl mx-auto">
            From a startup dream to a fiber revolution
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex items-center gap-8 mb-12 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="flex-1">
                <div className={`bg-background/10 backdrop-blur-sm rounded-3xl p-8 ${
                  index % 2 === 0 ? "text-right" : "text-left"
                } text-background`}>
                  <div className="text-5xl font-black mb-4">{milestone.year}</div>
                  <h3 className="text-2xl font-black mb-2">{milestone.title}</h3>
                  <p className="text-background/90">{milestone.description}</p>
                </div>
              </div>

              <div className="w-20 h-20 rounded-full bg-background flex items-center justify-center flex-shrink-0 shadow-xl">
                <milestone.icon className="w-10 h-10 text-zentrix-green-bright" />
              </div>

              <div className="flex-1"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
