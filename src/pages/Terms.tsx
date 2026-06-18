import ScrollReveal from '@/components/ScrollReveal';
import PageMeta from '@/components/common/PageMeta';

export default function Terms() {
  return (
    <div className="pt-[52px]">
      <PageMeta
        title="Terms & Conditions — SarojSutradharLLC"
        description="Terms and conditions for using the SarojSutradharLLC website. Read our guidelines for accessing our SaaS product portfolio and services."
      />
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[800px] mx-auto px-6">
          <ScrollReveal>
            <h1 className="text-[36px] md:text-[48px] font-semibold tracking-tight text-foreground">
              Terms & Conditions
            </h1>
            <p className="mt-4 text-[15px] text-muted-foreground">
              Last updated: June 2026
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-12 flex flex-col gap-10">
              <div>
                <h2 className="text-[20px] font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  By accessing and using the SarojSutradharLLC website, you accept and agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our website.
                </p>
              </div>

              <div>
                <h2 className="text-[20px] font-semibold text-foreground mb-3">2. Use of Website</h2>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any person, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website.
                </p>
              </div>

              <div>
                <h2 className="text-[20px] font-semibold text-foreground mb-3">3. Intellectual Property</h2>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  All content on this website, including text, graphics, logos, images, and software, is the property of SarojSutradharLLC and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without express written permission.
                </p>
              </div>

              <div>
                <h2 className="text-[20px] font-semibold text-foreground mb-3">4. External Links</h2>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party websites. These links are provided for your convenience and do not signify endorsement. We have no control over the content of external sites and accept no responsibility for them.
                </p>
              </div>

              <div>
                <h2 className="text-[20px] font-semibold text-foreground mb-3">5. Disclaimer</h2>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  The information on this website is provided "as is" without warranties of any kind, either express or implied. We do not warrant that the website will be uninterrupted, timely, secure, or error-free.
                </p>
              </div>

              <div>
                <h2 className="text-[20px] font-semibold text-foreground mb-3">6. Limitation of Liability</h2>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  In no event shall SarojSutradharLLC be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or related to your use of this website.
                </p>
              </div>

              <div>
                <h2 className="text-[20px] font-semibold text-foreground mb-3">7. Changes to Terms</h2>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms & Conditions at any time. Changes will be effective immediately upon posting. Your continued use of the website after any changes indicates your acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h2 className="text-[20px] font-semibold text-foreground mb-3">8. Governing Law</h2>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  These Terms & Conditions shall be governed by and construed in accordance with applicable laws. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the competent courts.
                </p>
              </div>

              <div>
                <h2 className="text-[20px] font-semibold text-foreground mb-3">9. Contact Information</h2>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms & Conditions, please contact us through our Contact page.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
