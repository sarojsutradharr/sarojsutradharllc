import { useState, useRef } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import PageMeta from '@/components/common/PageMeta';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  Target,
  Eye,
  Briefcase,
  Heart,
  Lightbulb,
  Plus,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface HighlightSpan {
  text: string;
  bg: string;
}

interface InfoCard {
  id: string;
  icon: React.ElementType;
  label: string;
  title: string;
  shortDesc: string;
  fullDesc: (string | HighlightSpan)[];
}

const infoCards: InfoCard[] = [
  {
    id: 'mission',
    icon: Target,
    label: 'Mission',
    title: 'Build products that solve real problems.',
    shortDesc: 'Remove friction.',
    fullDesc: [
      'I build software that ',
      { text: 'removes friction', bg: '#dbeafe' },
      ' from daily life. Every product starts with a ',
      { text: 'real problem', bg: '#f3e8ff' },
      ' and ends with a solution that helps people ',
      { text: 'achieve more with less effort', bg: '#fce7f3' },
      ' and zero wasted time.',
    ],
  },
  {
    id: 'vision',
    icon: Eye,
    label: 'Vision',
    title: 'A future where productivity is effortless.',
    shortDesc: 'Seamless flow.',
    fullDesc: [
      'A world where ',
      { text: 'technology serves people seamlessly', bg: '#fff4e5' },
      '. Complex workflows feel ',
      { text: 'simple and intuitive', bg: '#e8f4ff' },
      ', making productivity ',
      { text: 'accessible to everyone', bg: '#fce7f3' },
      ' through elegant design.',
    ],
  },
  {
    id: 'experience',
    icon: Briefcase,
    label: 'Experience',
    title: '3+ years building SaaS products.',
    shortDesc: 'SaaS builder.',
    fullDesc: [
      'Over three years building and launching SaaS products like ',
      { text: 'Rivtone', bg: '#e8f9ed' },
      '. I deliver ',
      { text: 'user-first solutions', bg: '#e8f4ff' },
      ' spanning ',
      { text: 'productivity software', bg: '#fff4e5' },
      ' and ',
      { text: 'business automation', bg: '#fce7f3' },
      ' that save time.',
    ],
  },
  {
    id: 'values',
    icon: Heart,
    label: 'Values',
    title: 'User-centric design and clean code.',
    shortDesc: 'Empathy first.',
    fullDesc: [
      { text: 'User-centric design', bg: '#fce7f3' },
      ' means building what people actually need. ',
      { text: 'Clean code', bg: '#e8f4ff' },
      ' ensures products grow without breaking. ',
      { text: 'Relentless iteration', bg: '#fff4e5' },
      ' drives continuous improvement daily.',
    ],
  },
  {
    id: 'approach',
    icon: Lightbulb,
    label: 'Approach',
    title: 'Identify friction, validate fast, build clean.',
    shortDesc: 'Build fast.',
    fullDesc: [
      'I observe and ',
      { text: 'identify workflow friction', bg: '#e8f4ff' },
      ', then ',
      { text: 'validate solutions quickly', bg: '#fff4e5' },
      ' with prototypes. I build with ',
      { text: 'clean scalable architecture', bg: '#e8f9ed' },
      ' and iterate relentlessly based on feedback.',
    ],
  },
];

export default function About() {
  const [activeCard, setActiveCard] = useState<InfoCard | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollCards = (dir: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const amount = dir === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-[52px]">
      <PageMeta
        title="About — SarojSutradharLLC | SaaS Product Builder & Entrepreneur"
        description="Learn about Saroj Sutradhar, founder of SarojSutradharLLC. A dedicated entrepreneur building SaaS products, business automation software, and productivity tools that solve real problems."
        keywords="saas product builder, entrepreneur, product creator, business automation, workflow management, saas development, problem solving saas, time saving tools"
      />
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

      {/* What I Do — Horizontal scroll cards with arrow buttons */}
      <section className="bg-[#f5f5f7] py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col gap-6 mb-10 md:mb-12">
            <ScrollReveal className="flex-1 min-w-0">
              <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold tracking-tight text-foreground">
                What I Do
              </h2>
              <p className="mt-3 sm:mt-4 text-[15px] md:text-[17px] text-muted-foreground leading-relaxed max-w-2xl">
                The principles, vision, and approach that guide every product I build.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="shrink-0 self-start">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollCards('left')}
                  className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center text-foreground hover:bg-[#f5f5f7] transition-colors shadow-sm"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => scrollCards('right')}
                  className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center text-foreground hover:bg-[#f5f5f7] transition-colors shadow-sm"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </ScrollReveal>
          </div>

          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="flex gap-5 overflow-x-auto hide-scrollbar pb-4 snap-x snap-mandatory"
            >
              {infoCards.map((card) => (
                <div
                  key={card.id}
                  className="snap-start flex-shrink-0 w-[280px] md:w-[320px] bg-white rounded-[24px] p-6 md:p-7 relative transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                >
                  {/* Icon + Label row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-10 h-10 rounded-full bg-[#e8f4ff] flex items-center justify-center">
                      <card.icon className="h-5 w-5 text-[#2997ff]" strokeWidth={1.5} />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2997ff]">
                      {card.label}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[18px] md:text-[20px] font-semibold text-foreground leading-snug mb-3">
                    {card.title}
                  </h3>

                  {/* Short description */}
                  <p className="text-[14px] text-muted-foreground leading-relaxed">
                    {card.shortDesc}
                  </p>

                  {/* Plus button */}
                  <button
                    onClick={() => setActiveCard(card)}
                    className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-foreground flex items-center justify-center text-white hover:bg-foreground/80 transition-colors"
                    aria-label={`Learn more about ${card.label}`}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detail Dialog with colorful highlighted text */}
      <Dialog open={!!activeCard} onOpenChange={() => setActiveCard(null)}>
        <DialogContent className="max-w-[calc(100%-2rem)] md:max-w-xl rounded-[20px] p-0 overflow-hidden border-0 shadow-[0_25px_80px_rgba(0,0,0,0.2)] bg-white">
          <DialogTitle className="sr-only">
            {activeCard ? activeCard.label : 'Details'}
          </DialogTitle>
          {activeCard && (
            <div className="bg-white">
              <div className="p-7 md:p-10">
                <DialogHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#e8f4ff] flex items-center justify-center">
                      <activeCard.icon className="h-6 w-6 text-[#2997ff]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <DialogTitle className="text-[26px] font-semibold tracking-tight text-foreground capitalize" aria-hidden="true">
                        {activeCard.id}
                      </DialogTitle>
                      <DialogDescription className="text-[13px] text-muted-foreground leading-relaxed mt-1">
                        {activeCard.shortDesc}
                      </DialogDescription>
                    </div>
                  </div>
                </DialogHeader>
                <div className="mt-6 bg-[#f5f5f7] rounded-[16px] p-6 md:p-8">
                  <p className="text-[16px] text-foreground leading-[1.7]">
                    {activeCard.fullDesc.map((part, idx) =>
                      typeof part === 'string' ? (
                        <span key={idx}>{part}</span>
                      ) : (
                        <span
                          key={idx}
                          className="font-medium rounded-[6px] px-1.5 py-0.5"
                          style={{
                            backgroundColor: part.bg,
                            color: '#1d1d1f',
                          }}
                        >
                          {part.text}
                        </span>
                      )
                    )}
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
