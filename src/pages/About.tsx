import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Award, Clock, Target, Heart, Zap, CheckCircle } from "lucide-react";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";
import controlRoom from "@/assets/control-room.jpg";
import operator from "@/assets/operator.jpg";
import liveMonitoring from "@/assets/live-monitoring.jpg";
import caughtShoplifter from "@/assets/caught-shoplifter.jpg";
import theftDetection from "@/assets/theft-detection.jpg";

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

const About = () => {
  const parallaxOffset = useParallax();

  const stats = [
    { icon: Clock, label: "Years of Experience", value: "15+" },
    { icon: Users, label: "Trained Operators", value: "50+" },
    { icon: Shield, label: "Protected Locations", value: "500+" },
    { icon: Award, label: "Incidents Prevented", value: "5200+" }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service, from technology to customer support"
    },
    {
      icon: Heart,
      title: "Dedication",
      description: "Our team is dedicated to protecting your business with unwavering commitment and professionalism"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously invest in cutting-edge technology to stay ahead of security threats"
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
            backgroundImage: `url(${controlRoom})`,
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
                About <span className="text-accent">SecureWatch</span>
              </h1>
              <p className="text-2xl text-muted-foreground">
                Your Cameras, Our Eyes — 24/7
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Approach */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <AnimatedSection animation="slide-right">
              <Card className="bg-card border-border hover:border-accent transition-all hover:shadow-panel h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    At SecureWatch, we're committed to providing businesses with professional, reliable, 
                    and affordable remote CCTV monitoring services. Our mission is to give business owners 
                    peace of mind knowing their property is being watched by trained security professionals 
                    24 hours a day, 7 days a week.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="slide-left">
              <Card className="bg-card border-border hover:border-accent transition-all hover:shadow-panel h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Our Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We combine cutting-edge technology with human expertise. Our state-of-the-art monitoring 
                    center operates around the clock, staffed by trained security professionals who respond 
                    to incidents in real-time. We don't just watch—we act.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section with 3D Cards */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} animation="zoom-in" delay={index * 100}>
                <Card className="bg-card border-border text-center hover:border-accent transition-all hover:shadow-neon hover:scale-105 transform-gpu">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Real Results Section with Images */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection animation="slide-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Real <span className="text-accent">Results</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our advanced monitoring systems catch criminals in the act and prevent theft before it happens
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <AnimatedSection animation="slide-right">
              <div className="relative group">
                <img 
                  src={theftDetection} 
                  alt="Theft detection in action"
                  className="rounded-lg shadow-neon border border-accent/30 w-full transform group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent rounded-lg opacity-60" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Theft Detection</h3>
                  <p className="text-sm text-muted-foreground">AI-powered systems identify suspicious behavior and alert operators in real-time</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left">
              <div className="relative group">
                <img 
                  src={caughtShoplifter} 
                  alt="Security response"
                  className="rounded-lg shadow-neon border border-accent/30 w-full transform group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent rounded-lg opacity-60" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Immediate Response</h3>
                  <p className="text-sm text-muted-foreground">Our operators coordinate with law enforcement for rapid incident response</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Monitoring Center Showcase */}
      <section className="py-20 px-4 bg-muted/30 relative overflow-hidden">
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-96 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url(${operator})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-right">
              <div className="relative">
                <img 
                  src={liveMonitoring} 
                  alt="Live monitoring center"
                  className="rounded-lg shadow-neon border border-accent/30 transform hover:scale-105 transition-all duration-500"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-accent/30 rounded-lg pointer-events-none" />
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-left">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  State-of-the-Art <span className="text-accent">Monitoring Center</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Our Security Operations Center operates 24/7/365 with redundant systems, backup power, 
                  and trained professionals ready to respond to any threat.
                </p>
                <div className="space-y-4">
                  {['Certified Security Professionals', 'Advanced Video Analytics', 'Multi-Site Monitoring', 'Rapid Response Protocols'].map((item, index) => (
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

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection animation="slide-up">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground text-center">Our Core Values</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {values.map((value, index) => (
                    <AnimatedSection key={index} animation="zoom-in" delay={index * 150}>
                      <div className="text-center group">
                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                          <value.icon className="w-8 h-8 text-accent" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2 text-lg">{value.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {value.description}
                        </p>
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

export default About;
