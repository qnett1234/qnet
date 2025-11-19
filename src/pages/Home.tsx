import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeatureCards } from "@/components/FeatureCards";
import { SpeedSection } from "@/components/SpeedSection";
import { MobileApp } from "@/components/MobileApp";
import { NetworkCoverage } from "@/components/NetworkCoverage";
import { TechnologySection } from "@/components/TechnologySection";
import { StatsSection } from "@/components/StatsSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <FeatureCards />
      <SpeedSection />
  {/* <MobileApp /> removed as requested */}
  {/* <NetworkCoverage /> removed as requested */}
  <StatsSection />
  <TechnologySection />
      <HowItWorks />
      <Testimonials />
  {/* <Pricing /> removed as requested */}
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
