import { Link } from "react-router-dom";
import { Brain } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 text-2xl font-black mb-4">
              <img src="/logo.svg" alt="Q Net" className="w-10 h-10" />
              <span>Q NET</span>
            </Link>
            <p className="text-background/80">
              Ultra-fast fiber internet for homes and businesses. Connect at the speed of light.
            </p>
          </div>

          <div>
            <h3 className="font-black text-xl mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-background/80 hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-background/80 hover:text-background transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/plans" className="text-background/80 hover:text-background transition-colors">
                  Plans & Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-black text-xl mb-4">LEGAL</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-background/80 hover:text-background transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-background/80 hover:text-background transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-background/80 hover:text-background transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-black text-xl mb-4">CONNECT</h3>
            <p className="text-background/80 mt-6">
              <strong>Support:</strong> (833) 802-0775
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center text-background/60">
          <p>© {currentYear} Q Net. All rights reserved. Made with ⚡ for speed lovers.</p>
        </div>
      </div>
    </footer>
  );
};
