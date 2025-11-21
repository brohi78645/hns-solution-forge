import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="mb-6 text-muted-foreground">
          <p className="mb-2"><strong>Effective Date:</strong> January 1, 2025</p>
          <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>1. Introduction</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              HNS Secure Watch ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our security monitoring application and services. By using HNS Secure Watch, you agree to the collection and use of information in accordance with this policy.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>2. Data We Collect</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">2.1 Personal Information</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Account credentials (email address, password)</li>
                  <li>Contact information (name, phone number, address)</li>
                  <li>Payment and billing information</li>
                  <li>User profile information and preferences</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2">2.2 Security System Data</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Video and image data from connected security cameras</li>
                  <li>Motion detection alerts and security events</li>
                  <li>Device information (camera models, IP addresses, connection status)</li>
                  <li>Location data of monitored premises</li>
                  <li>System logs and monitoring activity records</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">2.3 Technical Information</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Device information (mobile device type, operating system)</li>
                  <li>IP address and network information</li>
                  <li>App usage data and analytics</li>
                  <li>Crash reports and performance data</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>3. How We Use Your Data</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-3">We use the collected data for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Service Provision:</strong> To provide 24/7 security monitoring, incident detection, and alert notifications</li>
              <li><strong>Account Management:</strong> To create and manage your user account</li>
              <li><strong>Security Response:</strong> To respond to security incidents and emergencies</li>
              <li><strong>Service Improvement:</strong> To analyze and improve our monitoring services and app functionality</li>
              <li><strong>Customer Support:</strong> To provide technical support and respond to inquiries</li>
              <li><strong>Communication:</strong> To send service updates, security alerts, and important notifications</li>
              <li><strong>Legal Compliance:</strong> To comply with legal obligations and law enforcement requests</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>4. Data Sharing and Disclosure</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">4.1 Service Providers</h4>
                <p className="text-muted-foreground mb-2">We may share your data with trusted third-party service providers who assist us in:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Cloud storage and data hosting services</li>
                  <li>Payment processing</li>
                  <li>Analytics and app performance monitoring</li>
                  <li>Customer support platforms</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">4.2 Law Enforcement</h4>
                <p className="text-muted-foreground">
                  We may disclose your information to law enforcement, government authorities, or other third parties when required by law, court order, or to protect our rights and safety, or the rights and safety of others.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">4.3 Business Transfers</h4>
                <p className="text-muted-foreground">
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">4.4 No Sale of Personal Data</h4>
                <p className="text-muted-foreground">
                  We do not sell, rent, or trade your personal information to third parties for marketing purposes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>5. Data Security Measures</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-3">
              We implement industry-standard security measures to protect your sensitive data:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Encryption:</strong> All video feeds, personal data, and communications are encrypted using AES-256 encryption in transit and at rest</li>
              <li><strong>Secure Access:</strong> Multi-factor authentication and role-based access controls</li>
              <li><strong>Regular Audits:</strong> Routine security audits and vulnerability assessments</li>
              <li><strong>Secure Infrastructure:</strong> Data stored on secure, SOC 2 compliant cloud servers</li>
              <li><strong>Access Controls:</strong> Strict access controls limiting data access to authorized personnel only</li>
              <li><strong>Monitoring:</strong> 24/7 security monitoring of our systems and infrastructure</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>6. Data Retention</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-3">We retain your data for the following periods:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Video Footage:</strong> Stored for 30 days by default (customizable based on your plan)</li>
              <li><strong>Account Information:</strong> Retained for the duration of your active subscription</li>
              <li><strong>Security Incident Records:</strong> Retained for 1 year for security and legal purposes</li>
              <li><strong>Transaction Records:</strong> Retained for 7 years for tax and legal compliance</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              After account deletion, personal data is permanently deleted within 90 days, except where retention is required by law.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>7. Your Rights and Choices</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-3">You have the following rights regarding your personal data:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Access:</strong> Request access to the personal data we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications (security alerts cannot be disabled)</li>
              <li><strong>Restrict Processing:</strong> Request limitation on how we process your data</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              To exercise these rights, contact us at admin@HNS.shop or through your account settings.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>8. Children's Privacy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              HNS Secure Watch is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected data from a child, please contact us immediately, and we will take steps to delete such information.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>9. International Data Transfers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>10. Third-Party Services</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our app may contain links to third-party services or integrate with third-party platforms. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>11. Changes to This Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. Continued use of the service after changes constitutes acceptance of the updated policy.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>12. Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-3">
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p><strong>Email:</strong> admin@HNS.shop</p>
              <p><strong>Phone:</strong> +1 (346) 384-9811</p>
              <p><strong>Address:</strong> HNS Secure Watch, 24/7 Monitoring Center</p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
