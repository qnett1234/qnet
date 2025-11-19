import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Privacy = () => {
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
              <h1 className="text-5xl md:text-6xl font-black mb-6">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none space-y-8">
              <div>
                <h2 className="text-3xl font-black mb-4">1. Introduction</h2>
                <p className="text-muted-foreground mb-4">
                  Q Net ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our fiber internet services and visit our website.
                </p>
                <p className="text-muted-foreground">
                  By using our services, you consent to the data practices described in this policy. If you do not agree with our policies and practices, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">2. Information We Collect</h2>
                <h3 className="text-2xl font-bold mb-3 mt-4">Personal Information</h3>
                <p className="text-muted-foreground mb-3">We collect information that you provide directly to us, including:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Full name, email address, and phone number</li>
                  <li>Service address and billing information</li>
                  <li>Payment card details and transaction history</li>
                  <li>Government-issued ID for identity verification</li>
                  <li>Communication preferences and customer service interactions</li>
                </ul>

                <h3 className="text-2xl font-bold mb-3 mt-4">Usage Information</h3>
                <p className="text-muted-foreground mb-3">We automatically collect certain information about your device and usage:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Internet protocol (IP) address and device identifiers</li>
                  <li>Browser type, operating system, and referring URLs</li>
                  <li>Network usage data, bandwidth consumption, and connection logs</li>
                  <li>Website navigation patterns and feature usage</li>
                  <li>Geolocation data based on IP address</li>
                </ul>

                <h3 className="text-2xl font-bold mb-3 mt-4">Cookies and Tracking Technologies</h3>
                <p className="text-muted-foreground">
                  We use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities and to provide personalized experiences. You can control cookies through your browser settings.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-3">We use the information we collect for the following purposes:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>Service Delivery:</strong> To provide, maintain, and improve our fiber internet services</li>
                  <li><strong>Account Management:</strong> To create and manage your account, process payments, and handle billing</li>
                  <li><strong>Customer Support:</strong> To respond to inquiries, troubleshoot issues, and provide technical assistance</li>
                  <li><strong>Network Operations:</strong> To monitor network performance, detect fraud, and ensure service quality</li>
                  <li><strong>Communications:</strong> To send service updates, promotional offers, and important notices</li>
                  <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights</li>
                  <li><strong>Analytics:</strong> To analyze usage patterns and improve our services and user experience</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">4. Information Sharing and Disclosure</h2>
                <p className="text-muted-foreground mb-3">We do not sell your personal information. We may share your information in the following circumstances:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf</li>
                  <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our legal rights</li>
                  <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
                  <li><strong>Emergency Situations:</strong> To protect the safety of our users or the public</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">5. Data Security</h2>
                <p className="text-muted-foreground mb-4">
                  We implement robust technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Encryption of data in transit and at rest using industry-standard protocols</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Access controls and authentication requirements for employees</li>
                  <li>Secure data centers with physical and network security</li>
                  <li>Incident response procedures and breach notification protocols</li>
                </ul>
                <p className="text-muted-foreground">
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">6. Your Privacy Rights</h2>
                <p className="text-muted-foreground mb-3">You have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal obligations</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                  <li><strong>Data Portability:</strong> Request a copy of your data in a machine-readable format</li>
                  <li><strong>Object to Processing:</strong> Object to certain types of data processing</li>
                </ul>
                <p className="text-muted-foreground">
                  To exercise these rights, please call (833) 802-0775.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">7. Data Retention</h2>
                <p className="text-muted-foreground">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">8. Children's Privacy</h2>
                <p className="text-muted-foreground">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">9. International Data Transfers</h2>
                <p className="text-muted-foreground">
                  Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">10. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last Updated" date. Your continued use of our services after such changes constitutes your acceptance of the updated policy.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-4">11. Contact Us</h2>
                <p className="text-muted-foreground mb-3">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-muted p-6 rounded-xl">
                  <p className="text-foreground"><strong>Q Net Privacy Team</strong></p>
                  <p className="text-muted-foreground">Phone: (833) 802-0775</p>
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

export default Privacy;
