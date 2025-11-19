import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Remote Worker",
    text: "Zentrix changed my work-from-home game completely. No more dropped video calls or slow uploads. It's been flawless!",
    rating: 5,
  },
  {
    name: "Mike Chen",
    role: "Gamer & Streamer",
    text: "The symmetrical speeds are a game-changer for streaming. Zero lag, crystal clear quality. My viewers notice the difference!",
    rating: 5,
  },
  {
    name: "Lisa Rodriguez",
    role: "Family of 5",
    text: "Everyone's online at the same time? No problem. The kids game, I work, and we still have bandwidth to spare. Love it!",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-zentrix-green-bright">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black mb-16 text-background text-center"
        >
          Praises? We've Collected A Few! 😊
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-foreground text-background rounded-3xl p-8 shadow-2xl"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-zentrix-orange-bright text-zentrix-orange-bright" />
                ))}
              </div>
              <p className="text-lg mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div>
                <p className="font-black text-xl">{testimonial.name}</p>
                <p className="text-background/80">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
