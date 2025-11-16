import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$199",
      period: "/month",
      description: "Perfect for small shops and retail stores",
      features: [
        "Up to 4 cameras",
        "24/7 monitoring",
        "Live viewing access",
        "Email alerts",
        "7-day cloud storage",
        "Monthly reports"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      description: "Ideal for warehouses and multi-location businesses",
      features: [
        "Up to 16 cameras",
        "24/7 monitoring",
        "Priority response",
        "SMS & email alerts",
        "30-day cloud storage",
        "Weekly reports",
        "Virtual guard service",
        "Incident response team"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Comprehensive solution for large facilities",
      features: [
        "Unlimited cameras",
        "24/7 monitoring",
        "Dedicated account manager",
        "Multi-channel alerts",
        "90-day cloud storage",
        "Daily reports",
        "Virtual guard service",
        "Emergency response",
        "Custom integrations",
        "On-site visits"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Simple, <span className="text-accent">Transparent Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your security needs. No hidden fees, no long-term contracts required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`bg-card border-border ${
                  plan.highlighted 
                    ? 'border-accent shadow-neon scale-105' 
                    : 'hover:border-accent'
                } transition-all`}
              >
                <CardHeader>
                  {plan.highlighted && (
                    <div className="text-accent text-sm font-semibold mb-2">MOST POPULAR</div>
                  )}
                  <CardTitle className="text-2xl text-foreground">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-accent">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button 
                      className={`w-full ${
                        plan.highlighted 
                          ? 'bg-accent text-accent-foreground hover:shadow-neon' 
                          : ''
                      }`}
                      variant={plan.highlighted ? 'default' : 'outline'}
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground text-center">Additional Services</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <h3 className="font-semibold text-foreground mb-2">Installation Support</h3>
                  <p className="text-sm text-muted-foreground mb-2">Professional camera installation and setup</p>
                  <p className="text-accent font-semibold">Starting at $99/camera</p>
                </div>
                <div className="text-center p-4">
                  <h3 className="font-semibold text-foreground mb-2">System Integration</h3>
                  <p className="text-sm text-muted-foreground mb-2">Connect your existing cameras to our platform</p>
                  <p className="text-accent font-semibold">Starting at $299</p>
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

export default Pricing;
