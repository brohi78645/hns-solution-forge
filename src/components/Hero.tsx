import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="py-20 md:py-32 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Enterprise Networking
            <br />
            <span className="text-accent">Simplified</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
            Professional-grade networking equipment, security cameras, and smart devices for your business and home.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/shop">
              <Button variant="hero" size="lg" className="text-base">
                Shop Now
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-base bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10">
              View Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
