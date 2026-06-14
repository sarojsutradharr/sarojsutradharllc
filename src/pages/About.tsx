import ScrollReveal from '@/components/ScrollReveal';
import { Target, Eye, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-[52px]">
      {/* Hero */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <ScrollReveal>
            <h1 className="text-[36px] md:text-[48px] font-semibold tracking-tight text-foreground">
              About
            </h1>
            <p className="mt-6 text-[17px] md:text-[19px] text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              A founder dedicated to building practical software that makes a real difference in people's lives.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Founder Story */}
      <section className="bg-[#f5f5f7] py-20 md:py-24">
        <div className="max-w-[980px] mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-shrink-0">
                <img
                  src="https://miaoda-conversation-file.s3cdn.medo.dev/user-cawzjr40f9xc/app-cbcy2gncy0ox/20260613/IMG_20260215_184630.jpg"
                  alt="Saroj Sutradhar"
                  className="w-[240px] h-[240px] md:w-[300px] md:h-[300px] object-cover rounded-[24px]"
                  style={{ boxShadow: 'rgba(0, 0, 0, 0.22) 3px 5px 30px 0' }}
                />
              </div>
              <div className="flex-1">
                <h2 className="text-[28px] md:text-[32px] font-semibold tracking-tight text-foreground">
                  The Founder Story
                </h2>
                <p className="mt-4 text-[16px] md:text-[17px] text-muted-foreground leading-relaxed">
                  I'm Saroj Sutradhar, an entrepreneur and product builder with a passion for creating software that solves real problems. My journey began with a simple belief: technology should make life easier, not more complicated.
                </p>
                <p className="mt-4 text-[16px] md:text-[17px] text-muted-foreground leading-relaxed">
                  Over the years, I've built multiple SaaS products focused on productivity, time-saving, and workflow automation. Each product is born from identifying friction in everyday tasks and designing elegant solutions that just work.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission, Vision, Experience */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <div className="h-full p-8 bg-white border border-black/5 rounded-[18px]">
                <Target className="h-7 w-7 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="text-[20px] font-semibold text-foreground mb-3">Mission</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  To build software that removes friction from people's daily lives, helping them achieve more with less effort and wasted time.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="h-full p-8 bg-white border border-black/5 rounded-[18px]">
                <Eye className="h-7 w-7 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="text-[20px] font-semibold text-foreground mb-3">Vision</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  A world where technology serves people seamlessly — where complex workflows become simple, and productivity is accessible to everyone.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="h-full p-8 bg-white border border-black/5 rounded-[18px]">
                <Briefcase className="h-7 w-7 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="text-[20px] font-semibold text-foreground mb-3">Experience</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  Years of hands-on experience in SaaS development, product strategy, and building user-first solutions that deliver measurable results.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
