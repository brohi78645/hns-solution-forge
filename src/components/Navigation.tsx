import { Shield, ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import UserMenu from "./UserMenu";
import { useState } from "react";

const Navigation = () => {
  const { getTotalItems } = useCart();
  const itemCount = getTotalItems();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <Shield className="text-accent-foreground w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-primary-foreground font-bold text-xl leading-none">HNS</span>
            <span className="text-primary-foreground/70 text-xs leading-none">(Secure Watch)</span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
            Services
          </Link>
          <Link to="/technology" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
            Technology
          </Link>
          <Link to="/shop" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
            Shop
          </Link>
          <Link to="/pricing" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
            Pricing
          </Link>
          <Link to="/about" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10 relative">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Button>
          </Link>
          <UserMenu />
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-primary-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          <Link to="/contact" className="hidden md:block">
            <Button className="bg-accent text-accent-foreground hover:shadow-neon">
              Get Started
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary/98 backdrop-blur-sm border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors py-2 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors py-2 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/technology" 
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors py-2 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Technology
            </Link>
            <Link 
              to="/shop" 
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors py-2 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/pricing" 
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors py-2 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors py-2 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors py-2 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="bg-accent text-accent-foreground hover:shadow-neon w-full mt-2">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
