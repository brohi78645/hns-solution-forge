import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wifi, Camera, Server, Smartphone, Cloud, Lock } from "lucide-react";

const Technology = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Advanced <span className="text-accent">Technology</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Industry-leading integration supporting all major camera systems and protocols
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {technologies.map((tech, index) => (
              <Card key={index} className="bg-card border-border hover:border-accent transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
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
            ))}
          </div>

          <Card className="bg-card border-accent">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Supported Systems</CardTitle>
              <CardDescription>We integrate with all major surveillance platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4">
                  <p className="font-semibold text-foreground">Hikvision</p>
                </div>
                <div className="p-4">
                  <p className="font-semibold text-foreground">Dahua</p>
                </div>
                <div className="p-4">
                  <p className="font-semibold text-foreground">Axis</p>
                </div>
                <div className="p-4">
                  <p className="font-semibold text-foreground">Uniview</p>
                </div>
                <div className="p-4">
                  <p className="font-semibold text-foreground">Hanwha</p>
                </div>
                <div className="p-4">
                  <p className="font-semibold text-foreground">Vivotek</p>
                </div>
                <div className="p-4">
                  <p className="font-semibold text-foreground">Bosch</p>
                </div>
                <div className="p-4">
                  <p className="font-semibold text-foreground">And More...</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Technology;
