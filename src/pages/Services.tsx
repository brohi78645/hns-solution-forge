import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, AlertCircle, Video, Clock, FileText } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Eye,
      title: "24/7 Remote Monitoring",
      description: "Round-the-clock surveillance by trained security professionals monitoring your cameras from our central control room.",
      features: ["Live camera feeds", "Real-time alerts", "Professional monitoring staff", "Instant incident response"]
    },
    {
      icon: Video,
      title: "Live Video Wall",
      description: "Multi-camera display systems allowing simultaneous monitoring of multiple locations and camera feeds.",
      features: ["Multi-screen displays", "Custom layouts", "Priority camera switching", "HD quality viewing"]
    },
    {
      icon: AlertCircle,
      title: "Incident Response",
      description: "Immediate action when suspicious activity is detected, including alerts to authorities and emergency contacts.",
      features: ["Instant notifications", "Police coordination", "Emergency contacts", "Incident documentation"]
    },
    {
      icon: Shield,
      title: "Virtual Security Guard",
      description: "Professional remote guard services providing active deterrence and response without on-site personnel costs.",
      features: ["Audio warnings", "Two-way communication", "Visual deterrence", "Cost-effective protection"]
    },
    {
      icon: Clock,
      title: "Event Logging",
      description: "Comprehensive logging of all events, activities, and incidents with timestamp and video evidence.",
      features: ["Automated logging", "Video clips", "Detailed reports", "Searchable database"]
    },
    {
      icon: FileText,
      title: "Custom Reports",
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:border-accent transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-foreground">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
