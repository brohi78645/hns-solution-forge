import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Shipping Policy</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Shipping Methods</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold mb-1">Standard Shipping (5-7 business days)</h4>
                <p className="text-muted-foreground">Free on orders over $50, otherwise $5.99</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Express Shipping (2-3 business days)</h4>
                <p className="text-muted-foreground">$15.99</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Overnight Shipping (1 business day)</h4>
                <p className="text-muted-foreground">$29.99</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Processing Time</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Orders are processed within 1-2 business days. You'll receive a tracking number via email once your order ships.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>International Shipping</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We ship to select international destinations. Delivery times vary by location (typically 10-21 business days). Customs fees and import duties are the responsibility of the customer.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Order Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Track your order using the tracking number provided in your shipping confirmation email. You can also view order status in your account dashboard.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ShippingPolicy;
