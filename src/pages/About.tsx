import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TeamSection } from "@/components/TeamSection";
import { Timeline } from "@/components/Timeline";
import { StatsSection } from "@/components/StatsSection";
import { motion } from "framer-motion";
import { Users, Target, Zap, Heart, Globe, Shield } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <section className="py-16 bg-gradient-to-br from-zentrix-purple-light to-zentrix-purple-medium">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-6xl md:text-8xl font-black mb-6">ABOUT Q NET</h1>
              <p className="text-2xl">
                Revolutionizing connectivity, one fiber at a time.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-5xl font-black mb-8">Our Story</h2>
              <p className="text-xl mb-6 text-muted-foreground">
                Founded in 2020, Q Net Fiber emerged from a simple frustration: why should fast, reliable internet be so complicated and expensive? We set out to change that.
              </p>
              <p className="text-xl mb-6 text-muted-foreground">
                Today, we serve thousands of homes and businesses across major metropolitan areas, delivering fiber-optic internet that just works. No hidden fees, no data caps, no nonsense.
              </p>
              <p className="text-xl mb-6 text-muted-foreground">
                Our mission is simple: make lightning-fast fiber internet accessible to everyone. We believe connectivity is not a luxury—it's a necessity for modern life, work, and play.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                { icon: Users, title: "Customer First", description: "Your experience is our priority" },
                { icon: Target, title: "Mission Driven", description: "Making fast internet accessible to all" },
                { icon: Zap, title: "Innovation", description: "Always pushing the boundaries of speed" },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zentrix-blue-bright text-background rounded-3xl p-8 text-center"
                >
                  <value.icon className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-black mb-2">{value.title}</h3>
                  <p className="text-background/90">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <StatsSection />
        <Timeline />
        <TeamSection />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-black mb-8">Our Values</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { 
                  icon: Heart, 
                  title: "Transparency", 
                  description: "No hidden fees, no fine print tricks. What you see is what you get—simple, honest pricing.",
                  color: "bg-[#186974]"
                },
                { 
                  icon: Globe, 
                  title: "Accessibility", 
                  description: "Everyone deserves great internet. We're expanding to underserved communities nationwide.",
                  color: "bg-zentrix-blue-bright"
                },
                { 
                  icon: Shield, 
                  title: "Reliability", 
                  description: "99.9% uptime isn't just a promise—it's our commitment. Your connection, always on.",
                  color: "bg-zentrix-orange-bright"
                },
                { 
                  icon: Zap, 
                  title: "Performance", 
                  description: "We don't settle for 'good enough.' We deliver the fastest, most consistent speeds possible.",
                  color: "bg-zentrix-green-bright"
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className={`${value.color} text-background rounded-3xl p-8 shadow-xl`}
                >
                  <value.icon className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-black mb-3">{value.title}</h3>
                  <p className="text-background/90 text-lg">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
