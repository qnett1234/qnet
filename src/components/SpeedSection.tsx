import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export const SpeedSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Zap className="w-16 h-16 text-[#186974]" />
              <h2 className="text-7xl font-black text-[#186974]">
                10, 5, 3, 2, 1
              </h2>
            </div>
            <h3 className="text-4xl font-black mb-6 text-black">
              That's how quickly we light up your Gbps feed!
            </h3>
            <p className="text-xl mb-8 text-[#2BA8AE] max-w-lg">
              Get blazing fast fiber internet in your home or office. No waiting, no hassle. We'll have you connected faster than you can say "buffering."
            </p>
            <Button variant="green" size="lg" className="text-lg gap-2 bg-[#2BA8AE] text-white" asChild>
              <a href="tel:8338020775">CALL NOW: (833) 802-0775</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/40 backdrop-blur-lg rounded-3xl p-8 transform -rotate-2 hover:rotate-0 transition-transform border border-white/30 shadow-lg">
              <h4 className="text-2xl font-black mb-4 text-black">✓ NO DATA CAPS</h4>
              <p className="text-lg text-black">
                Stream, game, and download as much as you want. Forever.
              </p>
            </div>
            <div className="bg-white/40 backdrop-blur-lg rounded-3xl p-8 transform rotate-2 hover:rotate-0 transition-transform border border-white/30 shadow-lg">
              <h4 className="text-2xl font-black mb-4 text-black">✓ SYMMETRICAL SPEEDS</h4>
              <p className="text-lg text-black">
                Same speed up and down. Perfect for creators and remote workers.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

  <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#186974] rounded-full opacity-10 blur-3xl" />
    </section>
  );
};
