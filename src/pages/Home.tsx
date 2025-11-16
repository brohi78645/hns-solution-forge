import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Eye, Shield, Clock, Video, AlertCircle, Camera } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Eye,
      title: "24/7 Live Monitoring",
      description: "Professional security operators watching your cameras around the clock from our central monitoring station."
    },
    {
      icon: Shield,
      title: "Virtual Security Guard",
      description: "Active deterrence and immediate response without the cost of on-site security personnel."
    },
    {
      icon: AlertCircle,
      title: "Instant Incident Response",
      description: "Real-time alerts and coordinated emergency response when suspicious activity is detected."
    },
    {
      icon: Video,
      title: "Remote Camera Access",
      description: "Business owners can log in anytime to view live feeds and recorded footage from anywhere."
    },
    {
      icon: Camera,
      title: "Universal Integration",
      description: "Connect any IP camera, NVR, DVR, or mobile app camera to our monitoring platform."
    },
    {
      icon: Clock,
      title: "Cloud Storage",
      description: "Secure cloud-based video storage with flexible retention periods and easy retrieval."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-security opacity-80" />
        
        {/* Animated glowing orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        </div>
        
        {/* Security grid overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(hsl(var(--accent) / 0.2) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--accent) / 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-pulse 2s ease-in-out infinite'
          }} />
          {/* Scanning line effect */}
          <div className="absolute inset-x-0 h-40 bg-gradient-to-b from-transparent via-accent/20 to-transparent animate-scan" />
        </div>
        
        {/* Floating camera icons */}
        <div className="absolute inset-0 pointer-events-none">
          <Camera className="absolute top-20 left-10 w-8 h-8 text-accent/30 animate-float" />
          <Video className="absolute top-40 right-20 w-10 h-10 text-accent/20 animate-float-slow" style={{ animationDelay: '0.5s' }} />
          <Shield className="absolute bottom-32 left-1/4 w-12 h-12 text-accent/25 animate-float" style={{ animationDelay: '1s' }} />
          <Eye className="absolute top-1/3 right-1/3 w-7 h-7 text-accent/30 animate-float-slow" style={{ animationDelay: '1.5s' }} />
          <Camera className="absolute bottom-20 right-10 w-9 h-9 text-accent/20 animate-float" style={{ animationDelay: '2s' }} />
          <AlertCircle className="absolute top-1/2 left-20 w-8 h-8 text-accent/25 animate-float-slow" style={{ animationDelay: '2.5s' }} />
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in">
              24/7 CCTV Monitoring
              <br />
              <span className="text-accent drop-shadow-[0_0_30px_rgba(0,220,255,0.5)]">For Your Business</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Professional remote surveillance services protecting shops, warehouses, gas stations, and commercial properties
            </p>
            
            <p className="text-lg text-accent font-semibold mb-8 animate-pulse-glow">
              Your Cameras, Our Eyes — 24/7
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:shadow-neon text-lg px-8 hover:scale-105 transition-all">
                  Get Started
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="text-lg px-8 border-accent text-accent hover:bg-accent hover:text-accent-foreground hover:scale-105 transition-all">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Security <span className="text-accent">Solution</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need for professional CCTV monitoring and security management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card border-border hover:border-accent transition-all hover:shadow-panel">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-foreground">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-card border-accent shadow-neon">
            <CardContent className="py-12 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Secure Your Business?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses that trust us with their security. 
                Get started with a free consultation today.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/pricing">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:shadow-neon">
                    View Pricing
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
