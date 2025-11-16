import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wifi, Camera, Server, Smartphone, Cloud, Lock, Brain, Shield, Eye } from "lucide-react";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";
import aiDetection from "@/assets/ai-detection.jpg";
import biometricScan from "@/assets/biometric-scan.jpg";
import motionDetection from "@/assets/motion-detection.jpg";
import personTracking from "@/assets/person-tracking.jpg";
import licensePlate from "@/assets/license-plate.jpg";
import ipCamera from "@/assets/ip-camera.jpg";

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

const Technology = () => {
  const parallaxOffset = useParallax();

  const technologies = [
    {
      icon: Camera,
      title: "IP Camera Integration",
      description: "Seamless connection with all major IP camera brands and models.",
      specs: ["ONVIF compatible", "H.264/H.265 support", "PTZ control", "HD/4K resolution"]
    },
    {
      icon: Server,
      title: "NVR/DVR Systems",
      description: "Integration with existing network video recorders and digital video recorders.",
      specs: ["Multiple brands", "Remote access", "Playback support", "Storage management"]
    },
    {
      icon: Wifi,
      title: "RTSP Streaming",
      description: "Direct RTSP feed access for low-latency real-time monitoring.",
      specs: ["Low latency", "Direct streaming", "Reliable connection", "Bandwidth optimization"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Cameras",
      description: "Connect cameras from mobile surveillance apps directly to our monitoring system.",
      specs: ["iOS & Android", "Push notifications", "Remote viewing", "App integration"]
    },
    {
      icon: Cloud,
      title: "Cloud Storage",
      description: "Secure cloud-based video storage with flexible retention periods.",
      specs: ["Encrypted storage", "Flexible retention", "Easy retrieval", "Scalable capacity"]
    },
    {
      icon: Lock,
      title: "Secure Access",
      description: "Bank-level encryption and secure protocols for all connections.",
      specs: ["AES-256 encryption", "SSL/TLS protocols", "VPN support", "Access logging"]
    }
  ];

  const aiFeatures = [
    {
      image: aiDetection,
      title: "Facial Recognition",
      description: "Advanced AI-powered facial detection and identification for enhanced security",
      features: ["Real-time identification", "Watchlist alerts", "Person tracking", "99.8% accuracy"]
    },
    {
      image: motionDetection,
      title: "Motion Analytics",
      description: "Intelligent motion detection that filters false alarms and tracks suspicious activity",
      features: ["Heat map tracking", "Zone monitoring", "Behavior analysis", "Smart alerts"]
    },
    {
      image: personTracking,
      title: "Person Counting",
      description: "AI-powered people counting and crowd analytics for traffic monitoring",
      features: ["Occupancy tracking", "Traffic patterns", "Dwell time analysis", "Heatmap generation"]
    },
    {
      image: licensePlate,
      title: "License Plate Recognition",
      description: "Automatic number plate detection for parking lots and access control",
      features: ["ANPR technology", "Vehicle tracking", "Access control", "Database integration"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Parallax */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${ipCamera})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${parallaxOffset * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection animation="zoom-in">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
                Advanced <span className="text-accent">Technology</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Industry-leading integration supporting all major camera systems and protocols
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Technology Cards */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {technologies.map((tech, index) => (
              <AnimatedSection key={index} animation="slide-up" delay={index * 100}>
                <Card className="bg-card border-border hover:border-accent transition-all hover:shadow-panel group hover:-translate-y-2 transform-gpu">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <tech.icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-foreground">{tech.title}</CardTitle>
                    <CardDescription>{tech.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tech.specs.map((spec, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features Section with Images */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection animation="slide-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                AI-Powered <span className="text-accent">Detection</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Cutting-edge artificial intelligence that catches what human eyes might miss
              </p>
            </div>
          </AnimatedSection>
          
          <div className="space-y-16">
            {aiFeatures.map((feature, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <AnimatedSection animation={index % 2 === 0 ? "slide-right" : "slide-left"}>
                  <div className="relative">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="rounded-lg shadow-neon border border-accent/30 transform hover:scale-105 transition-all duration-500"
                    />
                    <div className={`absolute ${index % 2 === 0 ? '-bottom-6 -right-6' : '-bottom-6 -left-6'} w-48 h-48 border-2 border-accent/30 rounded-lg pointer-events-none`} />
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animation={index % 2 === 0 ? "slide-left" : "slide-right"}>
                  <div className={index % 2 === 1 ? 'md:order-first' : ''}>
                    <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
                      <Brain className="w-4 h-4 text-accent" />
                      <span className="text-sm font-semibold text-accent">AI Technology</span>
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground text-lg mb-6">
                      {feature.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {feature.features.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Biometric Technology Section */}
      <section className="py-20 px-4 bg-muted/30 relative overflow-hidden">
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-96 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url(${biometricScan})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-right">
              <div className="relative">
                <img 
                  src={biometricScan} 
                  alt="Biometric Security"
                  className="rounded-lg shadow-neon border border-accent/30 transform hover:rotate-3 hover:scale-105 transition-all duration-500"
                />
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-left">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Biometric <span className="text-accent">Access Control</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Next-generation security combining fingerprint scanning, facial recognition, 
                  and advanced authentication protocols for maximum protection.
                </p>
                <div className="space-y-4">
                  {['Multi-factor Authentication', 'Fingerprint Recognition', 'Facial Biometrics', 'Access Logging'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:border-accent transition-all">
                      <Eye className="w-6 h-6 text-accent flex-shrink-0" />
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Supported Systems */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection animation="zoom-in">
            <Card className="bg-card border-accent">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground text-center">Supported Systems</CardTitle>
                <CardDescription className="text-center">We integrate with all major surveillance platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  {['Hikvision', 'Dahua', 'Axis', 'Hanwha', 'Uniview', 'Bosch', 'Avigilon', 'Milestone'].map((brand, index) => (
                    <AnimatedSection key={index} animation="fade-in" delay={index * 50}>
                      <div className="p-4 bg-muted/30 rounded-lg hover:bg-accent/10 transition-all hover:scale-105 transform-gpu">
                        <p className="font-semibold text-foreground">{brand}</p>
                      </div>
                    </AnimatedSection>
                  ))}
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

export default Technology;
