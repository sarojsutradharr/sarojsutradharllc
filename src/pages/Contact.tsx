import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import PageMeta from '@/components/common/PageMeta';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields.');
      return;
    }
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('contact-form', {
        body: formData,
        method: 'POST',
      });
      if (error) {
        const errorMsg = await error?.context?.text();
        throw new Error(errorMsg || error.message || 'Failed to send message.');
      }
      toast.success('Message sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      toast.error(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-[52px]">
      <PageMeta
        title="Contact — SarojSutradharLLC | Let's Build Something Useful"
        description="Get in touch with SarojSutradharLLC for SaaS product development, collaboration, or discussing your next idea. I respond within 24-48 hours."
        keywords="contact saas developer, saas product collaboration, hire saas developer, business automation consultant, productivity software, workflow management, cloud-based software"
      />
      {/* Hero */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <ScrollReveal>
            <h1 className="text-[36px] md:text-[48px] font-semibold tracking-tight text-foreground">
              Contact
            </h1>
            <p className="mt-6 text-[17px] md:text-[19px] text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Interested in collaborating, discussing ideas, or building impactful software products? I'd love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-[#f5f5f7] py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            {/* Contact Info */}
            <ScrollReveal className="md:col-span-2">
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-[20px] font-semibold text-foreground mb-4">Get in Touch</h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">
                    Whether you have a project idea, want to collaborate, or just want to say hello — I'm always open to meaningful conversations.
                  </p>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-[13px] text-muted-foreground">Email</p>
                      <p className="text-[14px] font-medium text-foreground">hello@sarojsutradharllc.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-[13px] text-muted-foreground">Location</p>
                      <p className="text-[14px] font-medium text-foreground">Remote / Worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-[13px] text-muted-foreground">Response Time</p>
                      <p className="text-[14px] font-medium text-foreground">Within 24-48 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal className="md:col-span-3" delay={0.15}>
              <form onSubmit={handleSubmit} className="bg-white border border-black/5 rounded-[18px] p-8 md:p-10">
                <div className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name" className="text-[13px] font-medium text-foreground">
                        Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="rounded-[11px] h-11 text-[14px] border-black/10 focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email" className="text-[13px] font-medium text-foreground">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="rounded-[11px] h-11 text-[14px] border-black/10 focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="subject" className="text-[13px] font-medium text-foreground">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="What's this about?"
                      className="rounded-[11px] h-11 text-[14px] border-black/10 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message" className="text-[13px] font-medium text-foreground">
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project or idea..."
                      rows={5}
                      className="rounded-[11px] text-[14px] border-black/10 focus:border-primary focus:ring-primary resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-full text-[14px] h-11 px-7 bg-primary text-primary-foreground hover:bg-primary/90 font-medium mt-2"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <span className="inline-flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
