import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, FileText, Wifi } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: MapPin,
    title: "Choose your plan",
    description: "Select from our flexible bundles based on your speed needs and budget.",
  },
  {
    number: "2",
    icon: FileText,
    title: "Fill out questionnaire",
    description: "Quick setup form so we can customize your installation experience.",
  },
  {
    number: "3",
    icon: Wifi,
    title: "Get connected",
    description: "Our techs install everything and test your connection. You're online!",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-zentrix-purple-light to-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-background rounded-3xl p-12 shadow-2xl transform -rotate-2 border-4 border-foreground"
          >
            <div className="border-2 border-dashed border-foreground rounded-2xl p-8">
              <h2 className="text-4xl font-black mb-12 text-center">
                YOU JUST ORDERED A BUNDLE!
              </h2>

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zentrix-blue-bright text-background flex items-center justify-center font-black text-xl">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-black mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t-2 border-dashed border-foreground">
                <p className="text-center font-mono text-sm">CONFIRMATION #123456789</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl font-black mb-6">
              I'm intrigued.
              <br />
              How does
              <br />
              this work?
            </h2>
            <Button variant="orange" size="lg" className="text-lg">
              CHECK AVAILABILITY
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
