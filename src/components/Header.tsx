import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT US" },
    { href: "/services", label: "SERVICES" },
    { href: "/plans", label: "PLANS" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
     <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-2xl font-black">
          <img src="/logo.svg" alt="Q Net" className="w-10 h-10" />
          <span>Q NET</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-bold hover:text-zentrix-blue-bright transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button variant="orange" size="sm" asChild>
            <a href="tel:8338020775">(833) 802-0775</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-bold hover:text-zentrix-blue-bright transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="orange" size="sm" className="w-full" asChild>
                <a href="tel:8338020775">(833) 802-0775</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
