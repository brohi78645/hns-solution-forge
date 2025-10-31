import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>General Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              The information provided on this website is for general informational purposes only. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind about the completeness, accuracy, or reliability of any information on this site.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Product Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Product descriptions, specifications, and images are provided by manufacturers and suppliers. While we make every effort to display accurate information, actual products may vary. We recommend verifying specifications before making a purchase decision.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Limitation of Liability</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of this website or products purchased through it. This includes but is not limited to loss of data, loss of profits, or business interruption.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Third-Party Links</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This website may contain links to third-party websites. We have no control over the content or availability of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Changes to Disclaimer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We reserve the right to modify this disclaimer at any time without prior notice. Your continued use of the website following any changes constitutes acceptance of those changes.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Disclaimer;
