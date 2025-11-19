import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Wifi, Signal, Globe, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Content - Takes 7 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Tag Line */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#EFF1F3] text-[#186974] px-4 py-2 rounded-full text-sm font-semibold"
            >
              <Zap className="w-4 h-4" />
              Ultra-Fast Fiber Network
            </motion.div>

            {/* Main Heading - Staggered Layout */}
            <div className="space-y-2 overflow-hidden">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none">
                <motion.span
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  className="text-[#186974] block"
                >
                  FIBER
                </motion.span>
                <motion.span
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                  className="text-[#222] block ml-8"
                >
                  INTERNET
                </motion.span>
                <motion.span
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                  className="text-[#2BA8AE] block ml-16"
                >
                  ON DEMAND
                </motion.span>
              </h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl md:text-2xl text-[#186974] max-w-xl leading-relaxed"
            >
              We take your connectivity stress away, so you can focus on the bigger picture.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="lg" className="gap-2 text-lg shadow-lg hover:shadow-xl transition-all bg-[#186974] text-white" asChild>
                <a href="tel:8338020775">
                  CALL NOW: (833) 802-0775
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2 text-lg border-2 border-[#186974] text-[#186974] hover:bg-[#EFF1F3]" asChild>
                <Link to="/plans">VIEW PLANS</Link>
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-8 pt-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#EFF1F3] flex items-center justify-center">
                  <Zap className="w-6 h-6 text-[#186974]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#186974]">1000+</p>
                  <p className="text-sm text-[#2BA8AE]">Happy Customers</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#EFF1F3] flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#186974]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#186974]">99.9%</p>
                  <p className="text-sm text-[#2BA8AE]">Uptime</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Mobile Mockup - Takes 5 columns */}
          <div
            className="lg:col-span-5 relative flex justify-center items-center"
            style={{ perspective: "2000px" }}
          >
            {/* Decorative background shape */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2BA8AE]/20 to-[#186974]/20 rounded-[3rem] transform rotate-6 scale-105" />
            
            {/* Mobile Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="relative z-10 w-[280px] h-[570px]"
              style={{ 
                transform: "rotateY(-30deg) rotateX(10deg)",
                transformStyle: "preserve-3d"
              }}
            >
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-black rounded-[3rem] shadow-2xl p-3">
                {/* Screen */}
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="bg-white px-6 pt-3 pb-2 flex justify-between items-center">
                    <span className="text-xs font-semibold">9:41</span>
                    <div className="flex gap-1 items-center">
                      <Signal className="w-3 h-3" />
                      <Wifi className="w-3 h-3" />
                      <div className="text-xs">100%</div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="px-6 py-4 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm text-gray-500">Welcome back</h3>
                        <h2 className="text-xl font-bold text-gray-900">Internet Data</h2>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#2BA8AE] flex items-center justify-center">
                        <Wifi className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Speed Card */}
                    <motion.div
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                      className="bg-gradient-to-br from-[#2BA8AE] to-[#186974] rounded-2xl p-6 shadow-lg"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <Zap className="w-5 h-5 text-white" />
                        <span className="text-white text-sm font-semibold">Current Speed</span>
                      </div>
                      <div className="text-5xl font-black text-white mb-1">1000</div>
                      <div className="text-white/80 text-sm">Mbps Download</div>
                      
                      {/* Mini Chart */}
                      <div className="mt-4 flex items-end gap-1 h-12">
                        {[40, 60, 45, 80, 65, 90, 100, 85, 95, 100].map((height, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                            className="flex-1 bg-white/40 rounded-t"
                          />
                        ))}
                      </div>
                    </motion.div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-[#E8F6F7] rounded-xl p-4">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mb-2">
                          <TrendingUp className="w-4 h-4 text-[#2BA8AE]" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900">42 GB</div>
                        <div className="text-xs text-gray-600">Data Used</div>
                      </div>
                      <div className="bg-[#E8F6F7] rounded-xl p-4">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mb-2">
                          <Globe className="w-4 h-4 text-[#2BA8AE]" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900">24/7</div>
                        <div className="text-xs text-gray-600">Uptime</div>
                      </div>
                    </div>

                    {/* Connection Status */}
                    <div className="bg-white border-2 border-gray-100 rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                            <Wifi className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 text-sm">Connected</div>
                            <div className="text-xs text-gray-500">Q Net Fiber</div>
                          </div>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-20" />
            </motion.div>

            {/* Floating Speed Indicator */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -left-4 top-1/3 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 z-20"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-semibold text-gray-900">Online</span>
              </div>
            </motion.div>

            {/* Floating Upload/Download */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="absolute -right-4 bottom-1/3 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 z-20"
            >
              <div className="text-center">
                <div className="text-xs text-gray-500">Upload</div>
                <div className="text-lg font-bold text-[#2BA8AE]">500</div>
                <div className="text-xs text-gray-500">Mbps</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative floating elements - Updated colors */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-[#2BA8AE]/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-[#186974]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, #2BA8AE 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
    </section>
  );
};
