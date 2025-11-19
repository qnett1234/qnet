import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricing";
import { motion } from "framer-motion";

const Plans = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <section className="py-16 bg-gradient-to-br from-zentrix-green-bright to-zentrix-green-medium">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center text-background"
            >
              <h1 className="text-6xl md:text-8xl font-black mb-6">PLANS & PRICING</h1>
              <p className="text-2xl">
                Simple, transparent pricing. No hidden fees.
              </p>
            </motion.div>
          </div>
        </section>

        <Pricing />

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl font-black mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-muted rounded-2xl p-6">
                <h3 className="text-xl font-black mb-2">Is there a contract?</h3>
                <p className="text-muted-foreground">No! All our plans are month-to-month. Cancel anytime with no penalties.</p>
              </div>
              <div className="bg-muted rounded-2xl p-6">
                <h3 className="text-xl font-black mb-2">What about installation?</h3>
                <p className="text-muted-foreground">Professional installation is included with all plans. We'll have you connected within 24-48 hours.</p>
              </div>
              <div className="bg-muted rounded-2xl p-6">
                <h3 className="text-xl font-black mb-2">Can I upgrade later?</h3>
                <p className="text-muted-foreground">Absolutely! You can upgrade or downgrade your plan anytime through your account portal.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Plans;
