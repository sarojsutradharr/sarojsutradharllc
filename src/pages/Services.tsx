import ScrollReveal from '@/components/ScrollReveal';
import PageMeta from '@/components/common/PageMeta';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Code2, Lightbulb, Zap, TrendingUp, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'SaaS Product Development',
    description: 'Build scalable software solutions designed to solve real-world challenges. From concept to deployment, I develop robust applications using modern technologies and best practices.',
    features: ['Full-stack development', 'Cloud architecture', 'API design & integration', 'Scalable infrastructure'],
  },
  {
    icon: Lightbulb,
    title: 'Product Strategy',
    description: 'Identify opportunities, validate ideas, and create products people genuinely need. Strategic planning ensures every product has a clear path to market success.',
    features: ['Market research', 'Competitive analysis', 'User personas', 'Go-to-market planning'],
  },
  {
    icon: Zap,
    title: 'Productivity Solutions',
    description: 'Develop tools that simplify workflows and improve efficiency. Every solution is designed to save time and reduce cognitive load for end users.',
    features: ['Workflow automation', 'Process optimization', 'Tool integration', 'Time-saving features'],
  },
  {
    icon: TrendingUp,
    title: 'Growth-Focused Execution',
    description: 'Turn ideas into practical products with measurable impact. Data-driven decisions and rapid iteration drive sustainable growth.',
    features: ['MVP development', 'User feedback loops', 'Performance metrics', 'Continuous iteration'],
  },
];

export default function Services() {
  return (
    <div className="pt-[52px]">
      <PageMeta
        title="Services — SarojSutradharLLC | SaaS Product Development"
        description="SaaS product development, product strategy, and growth-focused execution services. Build scalable software solutions that solve real problems and improve productivity."
        keywords="saas product development, product strategy, business automation, workflow management, productivity solutions, cloud-based software, team collaboration, software as a service"
      />
      {/* Hero */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <ScrollReveal>
            <h1 className="text-[36px] md:text-[48px] font-semibold tracking-tight text-foreground">
              Services
            </h1>
            <p className="mt-6 text-[17px] md:text-[19px] text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Comprehensive SaaS product development services focused on delivering real value and measurable outcomes.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-[#f5f5f7] py-20 md:py-24">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="flex flex-col gap-12">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <div className="bg-white border border-black/5 rounded-[18px] p-8 md:p-10">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[22px] md:text-[24px] font-semibold text-foreground tracking-tight">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-[15px] md:text-[17px] text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-[14px] text-muted-foreground">
                            <ArrowRight className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-16 text-center">
              <p className="text-[17px] text-muted-foreground mb-6">
                Have a project in mind? Let's discuss how I can help.
              </p>
              <Button
                asChild
                className="rounded-full text-[14px] h-11 px-7 bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
              >
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
