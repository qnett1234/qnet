import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Refund = () => {
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
              <h1 className="text-5xl md:text-6xl font-black mb-6">Refund Policy</h1>
              <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none space-y-8">
              <div>
                <h2 className="text-3xl font-black mb-4">1. Overview</h2>
                <p className="text-muted-foreground mb-4">
                  At Q Net, we stand behind the quality of our fiber internet services. This Refund Policy outlines the terms and conditions under which refunds are provided to our customers. We are committed to ensuring your satisfaction while maintaining fair business practices.
                </p>
                <p className="text-muted-foreground">
                  This policy applies to all Q Net customers and covers service fees, installation charges, equipment costs, and other applicable fees.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">2. 30-Day Money-Back Guarantee</h2>
                <p className="text-muted-foreground mb-4">
                  We offer a comprehensive 30-day money-back guarantee on all new residential service installations. This guarantee allows you to try our service risk-free.
                </p>
                <h3 className="text-2xl font-bold mb-3 mt-4">Eligibility Requirements:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Applies only to first-time Q Net customers</li>
                  <li>Must be requested within 30 calendar days of service activation</li>
                  <li>Available for residential accounts only (business accounts excluded)</li>
                  <li>Customer must not have violated our Terms of Service or Acceptable Use Policy</li>
                  <li>All Q Net equipment must be returned in good condition</li>
                </ul>
                <h3 className="text-2xl font-bold mb-3 mt-4">What's Included:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Full refund of monthly service fees paid</li>
                  <li>Refund of equipment rental fees (if applicable)</li>
                  <li>Standard installation fee refund</li>
                </ul>
                <p className="text-muted-foreground">
                  If you're not completely satisfied with your service for any reason, contact us within 30 days of activation and we'll process your full refund.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">3. Refund Process and Timeline</h2>
                <h3 className="text-2xl font-bold mb-3 mt-4">How to Request a Refund:</h3>
                <p className="text-muted-foreground mb-3">To initiate a refund request, you can:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Call our customer service team at (833) 802-0775 (available 24/7)</li>
                  <li>Submit a request through your online customer portal</li>
                  <li>Visit one of our service centers in person</li>
                </ul>
                <h3 className="text-2xl font-bold mb-3 mt-4">Required Information:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Account number and service address</li>
                  <li>Reason for refund request</li>
                  <li>Preferred refund method (original payment method or account credit)</li>
                  <li>Equipment return tracking information (if applicable)</li>
                </ul>
                <h3 className="text-2xl font-bold mb-3 mt-4">Processing Timeline:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li><strong>Initial Review:</strong> 1-2 business days after request submission</li>
                  <li><strong>Equipment Return Verification:</strong> 3-5 business days after equipment receipt</li>
                  <li><strong>Refund Processing:</strong> 5-7 business days after approval</li>
                  <li><strong>Credit Card Refunds:</strong> May take an additional 3-5 business days depending on your bank</li>
                  <li><strong>ACH/Bank Transfer Refunds:</strong> 7-10 business days total processing time</li>
                </ul>
                <p className="text-muted-foreground">
                  You will receive email confirmation at each stage of the refund process, including final confirmation when the refund has been issued.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">4. Installation Fees</h2>
                <p className="text-muted-foreground mb-4">
                  Standard professional installation fees are refundable within the 30-day money-back guarantee period. However, certain installation circumstances may affect refund eligibility:
                </p>
                <h3 className="text-2xl font-bold mb-3 mt-4">Refundable Installation Scenarios:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Standard installation within the 30-day guarantee period</li>
                  <li>Service cannot be installed due to technical limitations on our end</li>
                  <li>Service appointment missed by Q Net (not customer no-shows)</li>
                  <li>Incorrect service type installed requiring reinstallation</li>
                </ul>
                <h3 className="text-2xl font-bold mb-3 mt-4">Non-Refundable Installation Scenarios:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Custom installation work beyond standard setup (e.g., extensive cable runs, wall drilling)</li>
                  <li>Installation at customer request in locations requiring special permits</li>
                  <li>Additional trips required due to customer unavailability or access issues</li>
                  <li>Installation cancellation after technician arrival at the site</li>
                  <li>Installation fees after the 30-day guarantee period has expired</li>
                </ul>
                <p className="text-muted-foreground">
                  Custom installation fees start at $150 and vary based on the complexity of the work required. These fees will be clearly disclosed and approved by you before work begins.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">5. Prorated Refunds</h2>
                <p className="text-muted-foreground mb-4">
                  If you cancel your service after the 30-day money-back guarantee period, you may be eligible for a prorated refund for the unused portion of your current billing cycle.
                </p>
                <h3 className="text-2xl font-bold mb-3 mt-4">Prorated Refund Eligibility:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Service must be active and in good standing at time of cancellation</li>
                  <li>No outstanding balance or past-due amounts on your account</li>
                  <li>Cancellation notice must be submitted at least 7 days before requested cancellation date</li>
                  <li>All equipment must be returned within 30 days of service termination</li>
                </ul>
                <h3 className="text-2xl font-bold mb-3 mt-4">Calculation Method:</h3>
                <p className="text-muted-foreground mb-3">
                  Prorated refunds are calculated based on the number of full days remaining in your billing cycle:
                </p>
                <div className="bg-muted p-4 rounded-lg mb-4">
                  <p className="text-foreground font-mono">Refund = (Monthly Fee ÷ Days in Billing Cycle) × Unused Days</p>
                </div>
                <p className="text-muted-foreground mb-4">
                  <strong>Example:</strong> If your monthly fee is $89 and you cancel 15 days into a 30-day billing cycle, your prorated refund would be: ($89 ÷ 30) × 15 = $44.50
                </p>
                <h3 className="text-2xl font-bold mb-3 mt-4">Exclusions:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Prorated refunds do not apply to promotional or discounted pricing periods</li>
                  <li>Equipment rental fees are not prorated and are charged for the full billing cycle</li>
                  <li>One-time fees and charges are not eligible for proration</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">6. Equipment Returns and Charges</h2>
                <p className="text-muted-foreground mb-4">
                  All Q Net equipment, including routers, modems, and networking devices, must be returned within 30 days of service cancellation to avoid equipment charges.
                </p>
                <h3 className="text-2xl font-bold mb-3 mt-4">Return Process:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Contact us to receive a prepaid return shipping label</li>
                  <li>Pack equipment securely in original packaging (if available)</li>
                  <li>Include all accessories: power adapters, cables, and mounting hardware</li>
                  <li>Drop off at any authorized shipping location</li>
                  <li>Keep tracking number for your records</li>
                </ul>
                <h3 className="text-2xl font-bold mb-3 mt-4">Equipment Charges:</h3>
                <div className="bg-muted p-4 rounded-lg space-y-2">
                  <p className="text-foreground"><strong>Standard WiFi Router:</strong> $150</p>
                  <p className="text-foreground"><strong>Premium WiFi 6E Router:</strong> $300</p>
                  <p className="text-foreground"><strong>Fiber Modem/ONT:</strong> $200</p>
                  <p className="text-foreground"><strong>Mesh Network Extenders:</strong> $100 each</p>
                  <p className="text-foreground"><strong>Ethernet Cables and Accessories:</strong> $25</p>
                </div>
                <p className="text-muted-foreground mt-4">
                  Damaged equipment may incur partial replacement charges based on the extent of damage. Normal wear and tear is acceptable.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">7. Service Credits vs. Refunds</h2>
                <p className="text-muted-foreground mb-4">
                  In certain situations, we may offer service credits instead of cash refunds. Service credits are applied to your account and can be used toward future billing cycles.
                </p>
                <h3 className="text-2xl font-bold mb-3 mt-4">When Service Credits Are Issued:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Service outages exceeding 24 continuous hours</li>
                  <li>Billing errors or overcharges discovered by Q Net</li>
                  <li>Customer service recovery situations</li>
                  <li>Promotional offers and loyalty rewards</li>
                </ul>
                <h3 className="text-2xl font-bold mb-3 mt-4">Service Credit Terms:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Credits automatically apply to your next billing cycle</li>
                  <li>Credits do not expire as long as your account remains active</li>
                  <li>Credits are non-transferable and have no cash value</li>
                  <li>Unused credits are forfeited upon account closure</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">8. Non-Refundable Items and Services</h2>
                <p className="text-muted-foreground mb-3">The following items and services are not eligible for refunds under any circumstances:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Third-party services or add-ons (e.g., premium content subscriptions)</li>
                  <li>Convenience fees for certain payment methods</li>
                  <li>Late payment fees and collection charges</li>
                  <li>Service restoration fees after suspension</li>
                  <li>Change of service address fees</li>
                  <li>Paper billing fees (if applicable)</li>
                  <li>Express shipping charges for equipment</li>
                  <li>Services rendered after the 30-day guarantee period (except prorated refunds)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">9. Business Account Refunds</h2>
                <p className="text-muted-foreground mb-4">
                  Business accounts are subject to different refund terms due to the nature of commercial service agreements:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>No money-back guarantee period for business accounts</li>
                  <li>Refunds are evaluated on a case-by-case basis</li>
                  <li>Contract terms may include specific cancellation and refund provisions</li>
                  <li>Custom installations and equipment are typically non-refundable</li>
                </ul>
                <p className="text-muted-foreground">
                  Business customers should refer to their service agreement or contact their dedicated account manager for specific refund policies.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">10. Disputed Charges</h2>
                <p className="text-muted-foreground mb-4">
                  If you believe you have been incorrectly charged, please contact us immediately. We will investigate the matter and provide a resolution within 10 business days.
                </p>
                <p className="text-muted-foreground mb-4">
                  During the investigation period, you are still responsible for paying undisputed charges to maintain active service. If our investigation determines you were incorrectly charged, a full refund or credit will be issued.
                </p>
                <p className="text-muted-foreground">
                  Chargeback disputes through your bank may result in service suspension and account closure. We strongly encourage you to contact us directly to resolve billing issues before initiating a chargeback.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">11. Refund Method</h2>
                <p className="text-muted-foreground mb-4">
                  Refunds are issued using the original payment method unless otherwise requested:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li><strong>Credit Card:</strong> Refunded to the card used for payment</li>
                  <li><strong>Debit Card:</strong> Refunded to the card used for payment</li>
                  <li><strong>ACH/Bank Transfer:</strong> Deposited to the bank account on file</li>
                  <li><strong>Check:</strong> Mailed to the billing address (allow 2-3 weeks)</li>
                </ul>
                <p className="text-muted-foreground">
                  If the original payment method is no longer valid, we can issue a check or transfer to an alternate account with proper verification.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">12. Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  Q Net reserves the right to modify this Refund Policy at any time. Changes will be posted on our website with an updated "Last Modified" date. Material changes will be communicated to active customers via email at least 30 days before taking effect. Your continued use of our services after policy changes constitutes acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">13. Contact Information</h2>
                <p className="text-muted-foreground mb-3">
                  For questions about our Refund Policy or to request a refund, please contact us:
                </p>
                <div className="bg-muted p-6 rounded-xl">
                  <p className="text-foreground"><strong>Q Net Refunds Department</strong></p>
                  <p className="text-muted-foreground">Phone: (833) 802-0775</p>
                  <p className="text-muted-foreground mt-2">Hours: 24/7 Customer Support Available</p>
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

export default Refund;
