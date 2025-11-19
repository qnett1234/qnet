import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-black mb-6">Terms of Service</h1>
              <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none space-y-8">
              <div>
                <h2 className="text-3xl font-black mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground mb-4">
                  By accessing, using, or subscribing to Q Net ("Company," "we," "our," or "us") fiber internet services, you ("Customer," "you," or "your") accept and agree to be bound by these Terms of Service ("Terms"). These Terms constitute a legally binding agreement between you and Q Net.
                </p>
                <p className="text-muted-foreground">
                  If you do not agree to these Terms, you must not access or use our services. Your continued use of our services constitutes your acceptance of any modifications to these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">2. Service Description</h2>
                <p className="text-muted-foreground mb-4">
                  Q Net provides high-speed fiber optic internet services to residential and business customers. Our services include:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Symmetrical upload and download speeds ranging from 500 Mbps to 10 Gbps</li>
                  <li>Unlimited data usage with no throttling or data caps</li>
                  <li>Professional installation and equipment setup</li>
                  <li>24/7 customer support and technical assistance</li>
                  <li>Premium WiFi router and networking equipment (plan-dependent)</li>
                </ul>
                <p className="text-muted-foreground">
                  Service availability, speeds, and features may vary by location and are subject to network capabilities and infrastructure limitations.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">3. Service Plans and Pricing</h2>
                <p className="text-muted-foreground mb-4">
                  Our current service plans include The Starter Bundle (500 Mbps) and The Ultimate Bundle (2 Gbps). Pricing is clearly displayed on our website and is subject to change with 30 days' notice to existing customers.
                </p>
                <p className="text-muted-foreground mb-4">
                  All prices are exclusive of applicable taxes, fees, and surcharges. A one-time installation fee may apply. Equipment rental fees, if applicable, are separate from monthly service charges.
                </p>
                <p className="text-muted-foreground">
                  Promotional pricing, if offered, applies for the specified promotional period only. After the promotional period, standard pricing will apply.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">4. Payment Terms</h2>
                <p className="text-muted-foreground mb-4">
                  Service fees are billed monthly in advance on the date you sign up or your designated billing date. Payment is due by the date specified on your invoice.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Accepted payment methods include credit cards, debit cards, and ACH bank transfers</li>
                  <li>You authorize us to charge your payment method for all fees and charges</li>
                  <li>Late payments are subject to a $10 late fee and possible service suspension</li>
                  <li>Services may be suspended if payment is more than 10 days past due</li>
                  <li>A $50 reconnection fee applies for service restoration after suspension</li>
                </ul>
                <p className="text-muted-foreground">
                  If payment disputes arise, you must notify us within 30 days of the billing date.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">5. Installation and Equipment</h2>
                <p className="text-muted-foreground mb-4">
                  Professional installation is included with all service plans. Installation typically occurs within 24-48 hours of service activation, subject to availability and scheduling.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>You must provide access to the installation location and power outlets</li>
                  <li>Equipment provided remains the property of Q Net unless purchased</li>
                  <li>You are responsible for the care and security of all equipment</li>
                  <li>Lost, stolen, or damaged equipment may incur replacement charges</li>
                  <li>All equipment must be returned upon service cancellation</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">6. Acceptable Use Policy</h2>
                <p className="text-muted-foreground mb-4">
                  You agree to use our services in compliance with all applicable laws and regulations. Prohibited activities include but are not limited to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Illegal activities, including copyright infringement and distribution of illegal content</li>
                  <li>Sending spam, malware, or engaging in phishing activities</li>
                  <li>Unauthorized access to networks, systems, or data</li>
                  <li>Activities that disrupt or interfere with our network or other users' service</li>
                  <li>Reselling or redistributing services without authorization</li>
                  <li>Using services for commercial purposes on residential accounts</li>
                </ul>
                <p className="text-muted-foreground">
                  Violation of this policy may result in immediate service suspension or termination without refund.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">7. Service Level and Uptime</h2>
                <p className="text-muted-foreground mb-4">
                  We strive to maintain 99.9% network uptime. However, service may be interrupted for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Scheduled maintenance (with advance notice when possible)</li>
                  <li>Emergency repairs or upgrades</li>
                  <li>Force majeure events beyond our control</li>
                  <li>Issues with third-party networks or services</li>
                </ul>
                <p className="text-muted-foreground">
                  We are not liable for service interruptions caused by factors outside our control, including power outages, natural disasters, or customer equipment failures.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">8. Customer Responsibilities</h2>
                <p className="text-muted-foreground mb-3">As a customer, you agree to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide accurate and current contact and billing information</li>
                  <li>Maintain the security of your account credentials and equipment</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                  <li>Comply with all applicable laws and our Acceptable Use Policy</li>
                  <li>Allow access to your premises for installation, maintenance, and repairs</li>
                  <li>Be responsible for all activity that occurs through your account</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">9. Cancellation and Termination</h2>
                <p className="text-muted-foreground mb-4">
                  <strong>Customer-Initiated Cancellation:</strong> You may cancel your service at any time with no early termination penalty. Cancellation requests must be submitted at least 7 days before your next billing cycle to avoid charges for the following month. Cancellation can be requested by calling (833) 802-0775.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Company-Initiated Termination:</strong> We reserve the right to suspend or terminate your service immediately for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Non-payment of fees or repeated late payments</li>
                  <li>Violation of these Terms or our Acceptable Use Policy</li>
                  <li>Fraudulent or illegal activities</li>
                  <li>Providing false or misleading information</li>
                </ul>
                <p className="text-muted-foreground">
                  Upon termination, you must return all equipment within 30 days or be charged the full replacement value.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">10. Refunds and Credits</h2>
                <p className="text-muted-foreground mb-4">
                  Refunds are provided in accordance with our Refund Policy. Service credits may be issued for qualifying service outages exceeding 24 continuous hours. Credits are calculated on a pro-rata basis and applied to your next billing cycle.
                </p>
                <p className="text-muted-foreground">
                  Installation fees and equipment charges are non-refundable except as required by law.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">11. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-4">
                  To the maximum extent permitted by law, Q Net shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, or goodwill, arising from:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Your use or inability to use our services</li>
                  <li>Service interruptions, delays, or errors</li>
                  <li>Unauthorized access to or alteration of your data</li>
                  <li>Statements or conduct of third parties using our services</li>
                </ul>
                <p className="text-muted-foreground">
                  Our total liability for any claim related to our services shall not exceed the amount you paid to us in the six months preceding the claim.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">12. Warranties and Disclaimers</h2>
                <p className="text-muted-foreground mb-4">
                  Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We disclaim all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>
                <p className="text-muted-foreground">
                  We do not guarantee that our services will be uninterrupted, secure, or error-free, or that defects will be corrected.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">13. Indemnification</h2>
                <p className="text-muted-foreground">
                  You agree to indemnify, defend, and hold harmless Q Net and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from your use of our services, your violation of these Terms, or your violation of any rights of third parties.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">14. Dispute Resolution and Arbitration</h2>
                <p className="text-muted-foreground mb-4">
                  Any dispute arising from these Terms or our services shall be resolved through binding arbitration rather than in court, except that you may assert claims in small claims court if your claims qualify.
                </p>
                <p className="text-muted-foreground">
                  You waive your right to participate in class actions or class arbitrations. Arbitration will be conducted by the American Arbitration Association under its rules.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">15. Governing Law</h2>
                <p className="text-muted-foreground">
                  These Terms shall be governed by and construed in accordance with the laws of the state in which our principal office is located, without regard to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">16. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these Terms at any time. We will provide notice of material changes by email or through our website at least 30 days before the effective date. Your continued use of our services after the effective date constitutes acceptance of the modified Terms.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">17. Severability</h2>
                <p className="text-muted-foreground">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">18. Contact Information</h2>
                <p className="text-muted-foreground mb-3">
                  For questions or concerns about these Terms of Service, please contact us:
                </p>
                <div className="bg-muted p-6 rounded-xl">
                  <p className="text-foreground"><strong>Q Net Customer Service</strong></p>
                  <p className="text-muted-foreground">Phone: (833) 802-0775</p>
                  <p className="text-muted-foreground mt-2">Available 24/7 for your convenience</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
