import ScrollReveal from '@/components/ScrollReveal';
import PageMeta from '@/components/common/PageMeta';

export default function Privacy() {
  return (
    <div className="pt-[52px]">
      <PageMeta
        title="Privacy Policy — SarojSutradharLLC"
        description="Privacy policy for SarojSutradharLLC. Learn how we collect, use, and protect your personal information on our SaaS product portfolio website."
      />
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[800px] mx-auto px-6">
          <ScrollReveal>
            <h1 className="text-[36px] md:text-[48px] font-semibold tracking-tight text-foreground">
              Privacy Policy
            </h1>
            <p className="mt-4 text-[15px] text-muted-foreground">
              Last updated: June 2026
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-12 flex flex-col gap-10">
              <div>
                <h2 className="text-[20px] font-semibold text-foreground mb-3">1. Introduction</h2>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  SarojSutradharLLC ("we", "us", or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
                </p>
              </div>

              <div>
                <h2 className="text-[20px] font-semibold text-foreground mb-3">2. Information We Collect</h2>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  We may collect personal information that you voluntarily provide to us, such as your name, email address, and any messages you send through our contact form. We also collect non-personal information such as browser type, device information, and usage data through cookies and analytics tools.
                </p>
              </div>

              <div>
                <h2 className="text-[20px] font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  We use the information we collect to respond to your inquiries, improve our website and services, analyze usage patterns, and communicate with you about updates or offerings. We do not sell or rent your personal information to third parties.
                </p>
              </div>

              <div>
                <h2 className="text-[20px] font-semibold text-foreground mb-3">4. Data Security</h2>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-[20px] font-semibold text-foreground mb-3">5. Your Rights</h2>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing activities. To exercise these rights, please contact us using the information provided on our Contact page.
                </p>
              </div>

              <div>
                <h2 className="text-[20px] font-semibold text-foreground mb-3">6. Changes to This Policy</h2>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
                </p>
              </div>

              <div>
                <h2 className="text-[20px] font-semibold text-foreground mb-3">7. Contact Us</h2>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, please contact us through our Contact page.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
