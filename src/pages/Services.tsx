import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Eye, AlertCircle, Video, Clock, FileText, ArrowRight, CheckCircle, Award } from "lucide-react";
import controlRoomImg from "@/assets/control-room.jpg";
import modernCameraImg from "@/assets/modern-camera.jpg";

const Services = () => {
  const services = [
    {
      icon: Eye,
      title: "24/7 Remote Monitoring",
      slug: "remote-monitoring",
      description: "Round-the-clock surveillance by trained security professionals monitoring your cameras from our central control room.",
      features: ["Live camera feeds", "Real-time alerts", "Professional monitoring staff", "Instant incident response"]
    },
    {
      icon: Video,
      title: "Live Video Wall",
      slug: "video-wall",
      description: "Multi-camera display systems allowing simultaneous monitoring of multiple locations and camera feeds.",
      features: ["Multi-screen displays", "Custom layouts", "Priority camera switching", "HD quality viewing"]
    },
    {
      icon: AlertCircle,
      title: "Incident Response",
      slug: "incident-response",
      description: "Immediate action when suspicious activity is detected, including alerts to authorities and emergency contacts.",
      features: ["Instant notifications", "Police coordination", "Emergency contacts", "Incident documentation"]
    },
    {
      icon: Shield,
      title: "Virtual Security Guard",
      slug: "virtual-guard",
      description: "Professional remote guard services providing active deterrence and response without on-site personnel costs.",
      features: ["Audio warnings", "Two-way communication", "Visual deterrence", "Cost-effective protection"]
    },
    {
      icon: Clock,
      title: "Event Logging",
      slug: "event-logging",
      description: "Comprehensive logging of all events, activities, and incidents with timestamp and video evidence.",
      features: ["Automated logging", "Video clips", "Detailed reports", "Searchable database"]
    },
    {
      icon: FileText,
      title: "Custom Reports",
      slug: "custom-reports",
      description: "Detailed activity reports and analytics to help you understand patterns and improve security.",
      features: ["Daily summaries", "Activity analytics", "Trend analysis", "Custom scheduling"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete CCTV monitoring solutions designed to protect your business around the clock
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Security Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Click any service to learn more about features, benefits, pricing, and real client success stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link key={index} to={`/services/${service.slug}`}>
                <Card className="bg-card border-border hover:border-accent transition-all cursor-pointer h-full hover-scale group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-foreground group-hover:text-accent transition-colors">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="ghost" className="w-full group-hover:bg-accent/10">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img 
              src={modernCameraImg} 
              alt="Modern security camera with advanced features"
              className="rounded-lg shadow-xl border border-accent/20"
            />
            <div>
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/40">
                <Shield className="mr-2 h-3 w-3" />
                Why Choose HNS
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                The Most Trusted Name in Live Video Monitoring
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Over 20 Years of Experience</h4>
                    <p className="text-muted-foreground">Proven track record protecting thousands of businesses nationwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Works With Your Existing Cameras</h4>
                    <p className="text-muted-foreground">Universal compatibility with all IP cameras, NVRs, DVRs, and CCTV systems</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Proven Crime Prevention</h4>
                    <p className="text-muted-foreground">Clients report 60-80% reduction in security incidents after implementation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Cost-Effective Security</h4>
                    <p className="text-muted-foreground">Save 50-70% compared to traditional on-site security guards</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-accent hover:shadow-neon" asChild>
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
