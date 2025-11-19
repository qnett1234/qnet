import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Wifi, Network } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome aboard! 🎉",
        description: "You've been added to our newsletter. Get ready for fiber-fast updates!",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-zentrix-purple-light to-zentrix-purple-medium">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <Wifi className="w-12 h-12 text-black" />
            <h2 className="text-5xl md:text-6xl font-black">
              Came for the content, stayed for the{" "}
              <span className="relative">
                <span className="relative z-10">glow up!</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-[#186974] -rotate-1" />
              </span>
            </h2>
            <Network className="w-12 h-12 text-black" />
          </div>

          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our newsletter for the latest fiber tech news, exclusive deals, and tips to maximize your internet experience.
          </p>

          <div className="flex justify-center mt-8">
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="h-14 px-8 text-lg gap-2 rounded-xl bg-white border-2 border-[#186974] text-[#186974]"
              asChild
            >
              <a href="tel:8338020775">CALL NOW: (833) 802-0775</a>
            </Button>
          </div>

          {/* Icons below CALL NOW button removed as requested */}
        </motion.div>
      </div>
    </section>
  );
};
