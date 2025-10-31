import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Acceptance of Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              By accessing and using this website, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use this website.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Account Registration</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-3">
              To make purchases, you must create an account. You are responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Providing accurate and complete information</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Pricing and Payment</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              All prices are in USD and subject to change without notice. We reserve the right to refuse or cancel any order. Payment must be received before order fulfillment. We accept major credit cards and other payment methods as indicated at checkout.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Product Availability</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Product availability is subject to change. We make every effort to ensure stock levels are accurate, but cannot guarantee availability. If a product becomes unavailable after you place an order, we will notify you and offer a refund or substitute.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Intellectual Property</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              All content on this website, including text, graphics, logos, and images, is the property of our company or our content suppliers and is protected by copyright laws. You may not reproduce, distribute, or transmit any content without written permission.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>User Conduct</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-3">You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Use the website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any systems</li>
              <li>Interfere with the proper functioning of the website</li>
              <li>Upload malicious code or viruses</li>
              <li>Harass or harm other users</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Governing Law</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              These Terms and Conditions are governed by and construed in accordance with applicable laws. Any disputes shall be resolved in the appropriate courts of our jurisdiction.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default TermsConditions;
