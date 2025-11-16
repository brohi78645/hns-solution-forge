import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Eye, AlertCircle, Video, Clock, FileText, ArrowRight, CheckCircle, Award } from "lucide-react";
import controlRoomImg from "@/assets/control-room.jpg";
import modernCameraImg from "@/assets/modern-camera.jpg";
import cashierTheft from "@/assets/cashier-theft.jpg";
import customerShoplifting from "@/assets/customer-shoplifting.jpg";
import arrestScene from "@/assets/arrest-scene.jpg";
import loiteringDetection from "@/assets/loitering-detection.jpg";
import concealmentTheft from "@/assets/concealment-theft.jpg";
import confrontation from "@/assets/confrontation.jpg";
import parkingSurveillance from "@/assets/parking-surveillance.jpg";
import accessControl from "@/assets/access-control.jpg";
import selfCheckoutFraud from "@/assets/self-checkout-fraud.jpg";
import breakIn from "@/assets/break-in.jpg";
import organizedTheft from "@/assets/organized-theft.jpg";
import vandalism from "@/assets/vandalism.jpg";
import carProwling from "@/assets/car-prowling.jpg";
import packageTheft from "@/assets/package-theft.jpg";
import incidentResponse from "@/assets/incident-response.jpg";

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

      {/* Real-World Security Scenarios Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Real-World Security <span className="text-accent">Scenarios We Prevent</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              See how our advanced monitoring systems catch criminals in the act. Every day, we prevent theft, vandalism, 
              and security breaches across thousands of locations. Here are real examples of what we detect and stop.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cashier Theft */}
            <Card className="bg-card border-border hover:border-accent transition-all overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={cashierTheft} 
                  alt="Cashier theft detection"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Employee Theft
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-foreground">Cashier Theft Detection</CardTitle>
                <CardDescription>
                  Our AI-powered systems monitor register activity 24/7, detecting unusual transactions, 
                  drawer openings, and suspicious cash handling. Instantly alerts supervisors when employee 
                  theft patterns are identified. Average detection time: 8 seconds.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Customer Shoplifting */}
            <Card className="bg-card border-border hover:border-accent transition-all overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={customerShoplifting} 
                  alt="Customer shoplifting detection"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Active Theft
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-foreground">Shoplifting Prevention</CardTitle>
                <CardDescription>
                  Real-time AI tracking identifies suspicious shopping behaviors including excessive browsing, 
                  concealment attempts, and coordinated theft. Operators can issue audio warnings or dispatch 
                  security immediately. Prevents 85% of attempted thefts.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Arrest Scene */}
            <Card className="bg-card border-border hover:border-accent transition-all overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={arrestScene} 
                  alt="Police arrest after CCTV detection"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Law Enforcement
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-foreground">Rapid Police Response</CardTitle>
                <CardDescription>
                  When threats are verified, our operators coordinate with local law enforcement for immediate 
                  response. Direct police dispatch with live video feed and suspect descriptions. Average police 
                  arrival time: 3-5 minutes from initial detection.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Loitering Detection */}
            <Card className="bg-card border-border hover:border-accent transition-all overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={loiteringDetection} 
                  alt="Loitering and trespassing detection"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Trespassing
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-foreground">Loitering & Trespassing Alerts</CardTitle>
                <CardDescription>
                  AI identifies individuals lingering in restricted areas or outside business hours. Automated 
                  tracking monitors duration and movement patterns. Audio warnings issued remotely to deter 
                  unwanted activity before escalation occurs.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Concealment Theft */}
            <Card className="bg-card border-border hover:border-accent transition-all overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={concealmentTheft} 
                  alt="Concealment theft caught on camera"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Concealment
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-foreground">Concealment Detection</CardTitle>
                <CardDescription>
                  Advanced AI tracks hand movements, pocket stuffing, and bag concealment in real-time. 
                  Behavioral analysis flags suspicious item handling before theft occurs. Operators can 
                  intervene with audio deterrence: "We see you, please replace the items."
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Security Confrontation */}
            <Card className="bg-card border-border hover:border-accent transition-all overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={confrontation} 
                  alt="Security guard confronting shoplifter"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Loss Prevention
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-foreground">On-Site Security Coordination</CardTitle>
                <CardDescription>
                  Our operators guide your on-site security personnel with real-time intelligence. Live feed 
                  analysis provides exact locations, suspect descriptions, and merchandise recovery assistance. 
                  Documented evidence for prosecution and insurance claims.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Parking Surveillance */}
            <Card className="bg-card border-border hover:border-accent transition-all overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={parkingSurveillance} 
                  alt="Comprehensive parking lot surveillance"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Vehicle Security
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-foreground">Parking Lot Protection</CardTitle>
                <CardDescription>
                  360-degree coverage with AI license plate recognition and vehicle tracking. Detects car break-ins, 
                  vandalism, and suspicious activity. Automated alerts for unauthorized access, long-term parking, 
                  or abandoned vehicles. Night vision capable.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Access Control */}
            <Card className="bg-card border-border hover:border-accent transition-all overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={accessControl} 
                  alt="Biometric access control system"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Biometric
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-foreground">Biometric Access Control</CardTitle>
                <CardDescription>
                  Multi-factor authentication combining fingerprint, facial recognition, and badge scanning. 
                  Monitors all entry/exit points with detailed access logs. Instant alerts for unauthorized 
                  access attempts, tailgating, or forced entry situations.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Self-Checkout Fraud */}
            <Card className="bg-card border-border hover:border-accent transition-all overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={selfCheckoutFraud} 
                  alt="Self-checkout fraud detection"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Scan Fraud
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-foreground">Self-Checkout Monitoring</CardTitle>
                <CardDescription>
                  AI compares items scanned vs items bagged, detecting barcode swaps, skip-scanning, and weighing 
                  fraud. Real-time transaction analysis identifies suspicious patterns. Staff alerted immediately 
                  for verification. Reduces self-checkout losses by 70%.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* After-Hours Break-In */}
            <Card className="bg-card border-border hover:border-accent transition-all overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={breakIn} 
                  alt="After hours break-in detection"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Burglary
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-foreground">After-Hours Intrusion Detection</CardTitle>
                <CardDescription>
                  Motion-activated alerts during closed hours with instant operator verification. Automated alarm 
                  integration and police dispatch. Live audio warnings: "This is a monitored facility. Police 
                  have been notified." Average intruder departure: 30 seconds.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Organized Retail Crime */}
            <Card className="bg-card border-border hover:border-accent transition-all overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={organizedTheft} 
                  alt="Organized retail crime gang"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Gang Activity
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-foreground">Organized Retail Crime Prevention</CardTitle>
                <CardDescription>
                  Multi-camera coordination tracks groups working together. Facial recognition identifies 
                  known offenders from database. Pattern analysis detects coordinated distraction tactics and 
                  bulk theft operations. Priority escalation to law enforcement.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Vandalism */}
            <Card className="bg-card border-border hover:border-accent transition-all overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={vandalism} 
                  alt="Vandalism caught on camera"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Property Damage
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-foreground">Vandalism & Property Damage</CardTitle>
                <CardDescription>
                  Real-time detection of graffiti, property destruction, and malicious damage. Audio intervention 
                  often stops vandals before significant damage occurs. High-quality footage captured for 
                  insurance claims and criminal prosecution. Repeat offender tracking.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Car Prowling */}
            <Card className="bg-card border-border hover:border-accent transition-all overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={carProwling} 
                  alt="Car break-in prevention"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Auto Theft
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-foreground">Vehicle Break-In Prevention</CardTitle>
                <CardDescription>
                  Parking lot AI monitors suspicious behavior around vehicles including door handle checking, 
                  window peering, and smash-and-grab attempts. Automated spotlight activation and audio warnings. 
                  License plate capture of suspect vehicles for police.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Package Theft */}
            <Card className="bg-card border-border hover:border-accent transition-all overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={packageTheft} 
                  alt="Package theft from doorstep"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Porch Pirates
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-foreground">Delivery & Package Protection</CardTitle>
                <CardDescription>
                  Monitors delivery drop-offs and detects unauthorized package removal. Facial recognition 
                  captures porch pirates with HD quality. Real-time alerts to property owners and police. 
                  Works with business loading docks and residential deliveries.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Incident Response */}
            <Card className="bg-card border-border hover:border-accent transition-all overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={incidentResponse} 
                  alt="Security operations center response"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  24/7 Monitoring
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-foreground">Professional Security Operations Center</CardTitle>
                <CardDescription>
                  Trained operators monitor your cameras from our state-of-the-art command center. Multi-screen 
                  workstations, advanced video analytics, and direct law enforcement communication. Every incident 
                  documented and reported. Response time under 30 seconds guaranteed.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Statistics Bar */}
          <div className="mt-16 bg-card border border-accent rounded-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">5,200+</div>
                <div className="text-sm text-muted-foreground">Incidents Prevented Annually</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">85%</div>
                <div className="text-sm text-muted-foreground">Theft Reduction Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">&lt; 30s</div>
                <div className="text-sm text-muted-foreground">Average Response Time</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">24/7/365</div>
                <div className="text-sm text-muted-foreground">Continuous Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
