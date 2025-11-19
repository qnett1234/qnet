import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How do you ensure fast connectivity across all devices?",
    answer:
      "Our fiber optic technology provides consistent, lightning-fast speeds to all devices simultaneously. Plus, our premium routers are optimized for maximum coverage and performance.",
  },
  {
    question: "What formats do you support for home entertainment?",
    answer:
      "Our network supports 4K and 8K streaming, online gaming with minimal latency, cloud storage sync, video conferencing, and any bandwidth-intensive applications you can think of.",
  },
  {
    question: "Do you offer industry-specific packages?",
    answer:
      "Yes! We offer tailored solutions for small businesses, remote workers, content creators, gamers, and large families. Each package is optimized for specific usage patterns.",
  },
  {
    question: "What if I'm not happy with my bundle?",
    answer:
      "We offer a 30-day satisfaction guarantee. If you're not completely happy, we'll work with you to find a better solution or provide a full refund.",
  },
  {
    question: "How fast will I get my speeds?",
    answer:
      "Most installations are completed within 24-48 hours of scheduling. In many areas, we can get you connected the same day!",
  },
  {
    question: "Can I get refunds even after I use the service?",
    answer:
      "Within the first 30 days, yes! After that, we offer prorated refunds if you cancel before your next billing cycle.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            Have more questions?
            <br />
            We've got you! 😊
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-muted rounded-2xl px-6 border-none"
              >
                <AccordionTrigger className="text-left text-lg font-bold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
