import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Award, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Clock, label: "Years of Experience", value: "15+" },
    { icon: Users, label: "Trained Operators", value: "50+" },
    { icon: Shield, label: "Protected Locations", value: "500+" },
    { icon: Award, label: "Incidents Prevented", value: "2000+" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About <span className="text-accent">SecureWatch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your Cameras, Our Eyes — 24/7
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-card border-border">
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

            <Card className="bg-card border-border">
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
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-card border-border text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground text-center">Why Choose Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="font-semibold text-foreground mb-2">Professional Team</h3>
                  <p className="text-sm text-muted-foreground">
                    Our operators are trained security professionals with extensive experience 
                    in surveillance and incident response.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-foreground mb-2">Advanced Technology</h3>
                  <p className="text-sm text-muted-foreground">
                    We use industry-leading monitoring systems compatible with all major 
                    camera brands and protocols.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-foreground mb-2">Proven Results</h3>
                  <p className="text-sm text-muted-foreground">
                    With thousands of prevented incidents, we have a proven track record 
                    of protecting businesses.
                  </p>
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

export default About;
