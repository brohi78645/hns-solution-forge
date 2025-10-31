import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Refund & Returns Policy</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Return Window</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We accept returns within 30 days of delivery. Items must be unused, in original packaging, and in the same condition as received.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Refund Process</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-muted-foreground">
              Once we receive your return, we will inspect the item and process your refund within 5-10 business days. Refunds will be issued to the original payment method.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Full refund for defective or damaged items</li>
              <li>Return shipping costs are covered for defective items</li>
              <li>Original shipping charges are non-refundable for standard returns</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Non-Returnable Items</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Opened software or digital products</li>
              <li>Items marked as final sale</li>
              <li>Products damaged due to misuse</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How to Return</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Contact our customer service team with your order number and reason for return. We'll provide you with a return authorization and shipping instructions.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default RefundPolicy;
