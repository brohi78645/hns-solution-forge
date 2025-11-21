import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted mt-auto border-t safe-bottom">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div>
            <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">About HNS</h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              Professional 24/7 CCTV remote monitoring services for businesses. Your Cameras, Our Eyes.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors inline-block min-h-[44px] flex items-center">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors inline-block min-h-[44px] flex items-center">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors inline-block min-h-[44px] flex items-center">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">Policies</h3>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <Link to="/refund-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Refund & Returns Policy
                </Link>
              </li>
              <li>
                <Link to="/shipping-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-muted-foreground hover:text-foreground transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">Contact</h3>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li>Email: admin@HNS.shop</li>
              <li>Phone: +1 (346) 384-9811</li>
              <li>24/7 Monitoring Center</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t text-center text-xs md:text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} HNS (Secure Watch) CCTV Monitoring. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
