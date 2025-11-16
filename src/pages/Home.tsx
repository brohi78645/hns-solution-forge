import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Eye, Shield, Clock, Video, AlertCircle, Camera, CheckCircle, TrendingUp, Users } from "lucide-react";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";
import monitoringCenter from "@/assets/monitoring-center.jpg";
import cameraArray from "@/assets/camera-array.jpg";
import liveMonitoring from "@/assets/live-monitoring.jpg";
import ipCamera from "@/assets/ip-camera.jpg";
import warehouseSecurity from "@/assets/warehouse-security.jpg";
import retailSecurity from "@/assets/retail-security.jpg";
import controlRoom from "@/assets/control-room.jpg";
import operator from "@/assets/operator.jpg";

const AnimatedSection = ({ children, animation = "slide-up", delay = 0 }: { children: React.ReactNode, animation?: string, delay?: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${isVisible ? `animate-${animation}` : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Home = () => {
  const parallaxOffset = useParallax();

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

  const stats = [
    { icon: Camera, value: "10,000+", label: "Cameras Monitored" },
    { icon: Clock, value: "< 30s", label: "Response Time" },
    { icon: Shield, value: "5,200+", label: "Incidents Prevented" },
    { icon: Users, value: "500+", label: "Businesses Protected" }
  ];

  const industries = [
    { image: retailSecurity, title: "Retail Stores", description: "Prevent theft and ensure customer safety" },
    { image: warehouseSecurity, title: "Warehouses", description: "Protect inventory and monitor operations" },
    { image: cameraArray, title: "Commercial Properties", description: "Comprehensive building security" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Parallax */}
      <section className="relative py-32 px-4 overflow-hidden min-h-[90vh] flex items-center">
        {/* Parallax Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${monitoringCenter})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${parallaxOffset * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        </div>
        
        {/* Animated glowing orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        </div>
        
        {/* Security grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(hsl(var(--accent) / 0.2) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--accent) / 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-pulse 2s ease-in-out infinite'
          }} />
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            <AnimatedSection animation="zoom-in">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
                24/7 CCTV Monitoring
                <br />
                <span className="text-accent drop-shadow-[0_0_30px_rgba(0,220,255,0.5)]">For Your Business</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={200}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
                Professional remote surveillance services protecting shops, warehouses, gas stations, and commercial properties
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={400}>
              <p className="text-lg text-accent font-semibold mb-8 animate-pulse-glow">
                Your Cameras, Our Eyes — 24/7
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={600}>
              <div className="flex flex-wrap gap-4 justify-center">
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
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section with 3D Cards */}
      <section className="py-16 px-4 bg-muted/30 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} animation="zoom-in" delay={index * 100}>
                <Card className="bg-card border-border hover:border-accent transition-all hover:shadow-neon hover:scale-105 transform-gpu">
                  <CardContent className="py-8 text-center">
                    <stat.icon className="w-8 h-8 text-accent mx-auto mb-4" />
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Live Monitoring Showcase with Parallax Images */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-96 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url(${liveMonitoring})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${-parallaxOffset * 0.3}px)`,
          }}
        />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-right">
              <div className="relative">
                <img 
                  src={controlRoom} 
                  alt="Professional monitoring center"
                  className="rounded-lg shadow-neon border border-accent/30 transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-accent/30 rounded-lg pointer-events-none" />
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-left">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Professional <span className="text-accent">Monitoring Center</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Our state-of-the-art monitoring center operates 24/7 with trained security professionals watching over your property. 
                  Every camera feed is monitored in real-time with instant response protocols.
                </p>
                <div className="space-y-4">
                  {['Certified Security Operators', 'Advanced Video Analytics', 'Immediate Threat Detection', 'Direct Police Dispatch'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Camera Technology Section with 3D Effect */}
      <section className="py-20 px-4 bg-muted/30 relative overflow-hidden">
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-96 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url(${cameraArray})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-right">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Advanced <span className="text-accent">Camera Systems</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  We integrate with all major camera brands and systems. From legacy analog systems to cutting-edge 
                  IP cameras with AI capabilities, we monitor them all from our unified platform.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card border border-border rounded-lg p-4 hover:border-accent transition-all">
                    <Camera className="w-8 h-8 text-accent mb-2" />
                    <div className="font-semibold text-foreground">4K Resolution</div>
                    <div className="text-sm text-muted-foreground">Crystal clear footage</div>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 hover:border-accent transition-all">
                    <Eye className="w-8 h-8 text-accent mb-2" />
                    <div className="font-semibold text-foreground">Night Vision</div>
                    <div className="text-sm text-muted-foreground">24/7 coverage</div>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 hover:border-accent transition-all">
                    <TrendingUp className="w-8 h-8 text-accent mb-2" />
                    <div className="font-semibold text-foreground">AI Analytics</div>
                    <div className="text-sm text-muted-foreground">Smart detection</div>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 hover:border-accent transition-all">
                    <Shield className="w-8 h-8 text-accent mb-2" />
                    <div className="font-semibold text-foreground">Secure Cloud</div>
                    <div className="text-sm text-muted-foreground">Encrypted storage</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-left">
              <div className="relative">
                <img 
                  src={ipCamera} 
                  alt="Modern IP security camera"
                  className="rounded-lg shadow-neon border border-accent/30 transform hover:rotate-3 hover:scale-105 transition-all duration-500"
                />
                <div className="absolute -top-6 -left-6 w-48 h-48 border-2 border-accent/30 rounded-lg pointer-events-none" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Industries We Serve with Image Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection animation="slide-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Industries We <span className="text-accent">Protect</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Tailored security solutions for businesses across multiple sectors
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <AnimatedSection key={index} animation="zoom-in" delay={index * 150}>
                <Card className="group bg-card border-border hover:border-accent transition-all overflow-hidden hover:shadow-neon">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={industry.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-foreground">{industry.title}</CardTitle>
                    <CardDescription>{industry.description}</CardDescription>
                  </CardHeader>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Animated Cards */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection animation="slide-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Complete Security <span className="text-accent">Solution</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Everything you need for professional CCTV monitoring and security management
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <AnimatedSection key={index} animation="slide-up" delay={index * 100}>
                <Card className="bg-card border-border hover:border-accent transition-all hover:shadow-panel group hover:-translate-y-2 transform-gpu">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-foreground">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Operator Showcase with Parallax */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${operator})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${parallaxOffset * 0.2}px)`,
          }}
        >
          <div className="absolute inset-0 bg-background/90" />
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <AnimatedSection animation="zoom-in">
            <Card className="bg-card/80 backdrop-blur-sm border-accent shadow-neon">
              <CardContent className="py-12 text-center">
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  Ready to Secure Your Business?
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                  Join hundreds of businesses that trust us with their security. 
                  Get started with a free consultation today.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/pricing">
                    <Button size="lg" className="bg-accent text-accent-foreground hover:shadow-neon hover:scale-105 transition-all">
                      View Pricing
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground hover:scale-105 transition-all">
                      Contact Sales
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
