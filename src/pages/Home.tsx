import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ScrollReveal from '@/components/ScrollReveal';
import {
  Code2,
  Lightbulb,
  Zap,
  TrendingUp,
  Search,
  CheckCircle,
  Palette,
  Hammer,
  Rocket,
  Plus,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'SaaS Product Development',
    description: 'Build scalable software solutions designed to solve real-world challenges.',
  },
  {
    icon: Lightbulb,
    title: 'Product Strategy',
    description: 'Identify opportunities, validate ideas, and create products people genuinely need.',
  },
  {
    icon: Zap,
    title: 'Productivity Solutions',
    description: 'Develop tools that simplify workflows and improve efficiency.',
  },
  {
    icon: TrendingUp,
    title: 'Growth-Focused Execution',
    description: 'Turn ideas into practical products with measurable impact.',
  },
];

interface HighlightSpan {
  text: string;
  bg: string;
}

interface ProcessDetail {
  icon: React.ElementType;
  title: string;
  description: string;
  details: (string | HighlightSpan)[];
  highlight: string;
}

const processSteps: ProcessDetail[] = [
  {
    icon: Search,
    title: 'Identify Problems',
    description: 'Discover pain points and inefficiencies in everyday workflows.',
    details: [
      'Every great product starts with a real problem. I conduct ',
      { text: 'thorough research', bg: '#dbeafe' },
      ', ',
      { text: 'user interviews', bg: '#f3e8ff' },
      ', and market analysis to uncover the most impactful challenges that people face daily. By understanding the ',
      { text: 'root cause', bg: '#fce7f3' },
      ', I ensure the solution actually matters.',
    ],
    highlight: 'Deep user research & market analysis',
  },
  {
    icon: CheckCircle,
    title: 'Validate Solutions',
    description: 'Test assumptions and confirm demand before building.',
    details: [
      'Before writing a single line of code, I validate the solution through ',
      { text: 'prototypes', bg: '#dbeafe' },
      ', ',
      { text: 'landing pages', bg: '#f3e8ff' },
      ', and user testing. This eliminates wasted effort and ensures that what gets built is something people ',
      { text: 'actually want', bg: '#fce7f3' },
      ' and need.',
    ],
    highlight: 'Prototype testing & demand validation',
  },
  {
    icon: Palette,
    title: 'Design Experience',
    description: 'Craft intuitive interfaces that users genuinely enjoy.',
    details: [
      'Design is not just how it looks — it is how it works. I create ',
      { text: 'clean, intuitive', bg: '#dbeafe' },
      ' user experiences that make complex tasks feel simple. Every interaction is thoughtfully designed to ',
      { text: 'minimize friction', bg: '#f3e8ff' },
      ' and maximize ',
      { text: 'delight', bg: '#fce7f3' },
      '.',
    ],
    highlight: 'UI/UX design & interaction prototyping',
  },
  {
    icon: Hammer,
    title: 'Build Product',
    description: 'Engineer scalable, reliable software with clean architecture.',
    details: [
      'With a validated design in hand, I build the product using ',
      { text: 'modern, scalable', bg: '#dbeafe' },
      ' technologies. ',
      { text: 'Clean code architecture', bg: '#f3e8ff' },
      ' ensures the product can grow without technical debt, and rigorous testing guarantees ',
      { text: 'reliability', bg: '#fce7f3' },
      ' from day one.',
    ],
    highlight: 'Full-stack development & clean architecture',
  },
  {
    icon: Rocket,
    title: 'Launch & Improve',
    description: 'Ship fast, gather feedback, and iterate continuously.',
    details: [
      'Launching is just the beginning. I deploy quickly, measure user behavior, gather feedback, and iterate ',
      { text: 'relentlessly', bg: '#dbeafe' },
      '. ',
      { text: 'Continuous improvement', bg: '#f3e8ff' },
      ' is the key to building products that stand the ',
      { text: 'test of time', bg: '#fce7f3' },
      '.',
    ],
    highlight: 'Continuous deployment & iteration',
  },
];

const stats = [
  { value: '10+', label: 'Projects Built' },
  { value: '1000+', label: 'Hours Saved' },
  { value: '100%', label: 'User-First Approach' },
];

export default function Home() {
  const [activeStep, setActiveStep] = useState<ProcessDetail | null>(null);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const missionRef = React.useRef<HTMLDivElement>(null);
  const glowRef = React.useRef<HTMLDivElement>(null);
  const glowRef2 = React.useRef<HTMLDivElement>(null);
  const glowRef3 = React.useRef<HTMLDivElement>(null);
  const auraRef = React.useRef<HTMLDivElement>(null);
  const missionBgRef = React.useRef<HTMLDivElement>(null);
  const mousePos = React.useRef({ x: 50, y: 50 });
  const targetPos = React.useRef({ x: 50, y: 50 });
  const rafId = React.useRef<number>(0);

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, []);

  const scrollProcess = (dir: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const amount = dir === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  // Premium multi-layered glow + background mask follow via requestAnimationFrame
  useEffect(() => {
    let running = true;
    let time = 0;
    const animate = () => {
      if (!running) return;
      time += 0.016;
      const lerp = 0.06;
      mousePos.current.x += (targetPos.current.x - mousePos.current.x) * lerp;
      mousePos.current.y += (targetPos.current.y - mousePos.current.y) * lerp;

      const mx = mousePos.current.x;
      const my = mousePos.current.y;

      // Primary large soft glow
      if (glowRef.current) {
        const breathe = 1 + Math.sin(time * 1.5) * 0.06;
        glowRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%) scale(${breathe})`;
      }
      // Secondary tighter blue glow
      if (glowRef2.current) {
        const lagX = mx + (targetPos.current.x - mx) * 0.3;
        const lagY = my + (targetPos.current.y - my) * 0.3;
        glowRef2.current.style.transform = `translate(${lagX}px, ${lagY}px) translate(-50%, -50%)`;
      }
      // Tertiary ambient warm glow
      if (glowRef3.current) {
        const lagX = mx - (targetPos.current.x - mx) * 0.2;
        const lagY = my - (targetPos.current.y - my) * 0.2;
        const breathe = 1 + Math.cos(time * 1.2) * 0.1;
        glowRef3.current.style.transform = `translate(${lagX}px, ${lagY}px) translate(-50%, -50%) scale(${breathe})`;
      }
      // Aura ring
      if (auraRef.current) {
        const breathe = 1 + Math.sin(time * 2) * 0.04;
        auraRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%) scale(${breathe})`;
      }
      // Background mask reveal
      if (missionBgRef.current) {
        const rmx = Math.round(mx);
        const rmy = Math.round(my);
        const pulse = 360 + Math.sin(time * 2) * 40;
        const mask = `radial-gradient(circle ${pulse}px at ${rmx}px ${rmy}px, black 0%, transparent 80%)`;
        missionBgRef.current.style.maskImage = mask;
        missionBgRef.current.style.webkitMaskImage = mask;
      }

      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);
    return () => {
      running = false;
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  const handleMissionMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!missionRef.current) return;
    const rect = missionRef.current.getBoundingClientRect();
    targetPos.current.x = e.clientX - rect.left;
    targetPos.current.y = e.clientY - rect.top;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-white pt-[52px]">
        <div className="max-w-[1200px] mx-auto px-6 py-20 w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12 md:gap-16">
            {/* Left: Text */}
            <ScrollReveal className="flex-1 max-w-xl" delay={0.1}>
              <h1 className="text-[40px] md:text-[56px] font-semibold leading-[1.07] tracking-tight text-foreground">
                Build Better{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">Products</span>
                  <span
                    className="absolute inset-0 -mx-2 -my-1 rounded-lg z-0"
                    style={{ background: 'linear-gradient(120deg, #ff9a9e 0%, #fecfef 50%, #ff9a9e 100%)', opacity: 0.45 }}
                  />
                </span>
                .
                <br />
                <span className="text-primary">Solve Real Problems.</span>
              </h1>
              <p className="mt-6 text-[17px] md:text-[19px] text-muted-foreground leading-relaxed max-w-lg">
                I create SaaS products that help people save time, improve productivity, and achieve more with less effort.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  asChild
                  className="rounded-full text-[14px] md:text-[15px] h-11 px-7 bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
                >
                  <Link to="/projects">View My Work</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full text-[14px] md:text-[15px] h-11 px-7 border-primary text-primary hover:bg-primary/5 font-medium"
                >
                  <Link to="/contact">Contact Me</Link>
                </Button>
              </div>
              <p className="mt-6 text-[13px] text-muted-foreground tracking-wide">
                Entrepreneur &bull; SaaS Builder &bull; Product Creator
              </p>
            </ScrollReveal>

            {/* Right: Founder Image */}
            <ScrollReveal className="flex-shrink-0" delay={0.3} direction="left">
              <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px] mx-auto">
                <img
                  src="https://miaoda-conversation-file.s3cdn.medo.dev/user-cawzjr40f9xc/app-cbcy2gncy0ox/20260613/IMG_20260215_184630.jpg"
                  alt="Saroj Sutradhar — Entrepreneur and SaaS Builder"
                  className="w-full h-full object-cover rounded-[24px]"
                  style={{ boxShadow: 'rgba(0, 0, 0, 0.22) 3px 5px 30px 0' }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#f5f5f7] py-20 md:py-24">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-foreground">
              Building Products That Matter
            </h2>
            <p className="mt-6 text-[17px] md:text-[19px] text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              I focus on creating practical software solutions that solve everyday problems. My goal is simple: build products that help people work smarter, save valuable time, and unlock greater productivity.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-foreground">
              What I Do
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <div className="h-full bg-white border border-black/5 rounded-[18px] p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1">
                  <service.icon className="h-8 w-8 text-primary mb-4" strokeWidth={1.5} />
                  <h3 className="text-[17px] font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[14px] text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project Section — Apple-style dark card */}
      <section className="bg-[#0d0d0d] py-24 md:py-32">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-[13px] font-semibold uppercase tracking-wider text-[#ff9500] mb-4">
              Featured Project
            </p>
            <h2 className="text-[36px] md:text-[56px] font-semibold tracking-tight text-white leading-[1.07]">
              New dimensions
              <br />
              in power.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-8 text-[15px] md:text-[17px] text-[#999999] leading-relaxed max-w-2xl mx-auto">
              A modern digital platform focused on delivering{' '}
              <span className="text-white font-semibold">streamlined solutions</span>{' '}
              with simplicity, performance, and user experience at its core. Built to solve real problems for real people.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <Button
                asChild
                className="rounded-full text-[14px] h-12 px-7 bg-[#1f1f1f] text-white hover:bg-[#2a2a2a] font-medium border border-white/10 inline-flex items-center gap-3"
              >
                <a
                  href="https://rivtone.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3"
                >
                  Visit Rivtone
                  <span className="w-7 h-7 rounded-full bg-[#2997ff] flex items-center justify-center">
                    <Plus className="h-4 w-4 text-white" />
                  </span>
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process Section — Horizontal Scroll with Plus Icons */}
      <section id="process" className="bg-[#f5f5f7] py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <ScrollReveal>
              <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-foreground">
                How I Build
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollProcess('left')}
                  className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center text-foreground hover:bg-[#f5f5f7] transition-colors shadow-sm"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => scrollProcess('right')}
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
              {processSteps.map((step, i) => (
                <div
                  key={step.title}
                  className="snap-start flex-shrink-0 w-[280px] md:w-[320px] bg-white border border-black/5 rounded-[18px] p-6 md:p-8 relative transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <step.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">
                      Step {i + 1}
                    </span>
                  </div>
                  <h3 className="text-[17px] font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <button
                    onClick={() => setActiveStep(step)}
                    className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-foreground flex items-center justify-center text-white hover:bg-foreground/80 transition-colors"
                    aria-label={`Learn more about ${step.title}`}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Step Dialog — White popup with colored background highlights */}
        <Dialog open={!!activeStep} onOpenChange={() => setActiveStep(null)}>
          <DialogContent className="max-w-[calc(100%-2rem)] md:max-w-xl rounded-[20px] p-0 overflow-hidden border-0 shadow-[0_25px_80px_rgba(0,0,0,0.2)] bg-white">
            {activeStep && (
              <div className="bg-white">
                <div className="p-7 md:p-10">
                  <DialogHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#f5f5f7] flex items-center justify-center">
                        <activeStep.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                      </div>
                      <div>
                        <DialogTitle className="text-[26px] font-semibold tracking-tight text-foreground">
                          {activeStep.title}
                        </DialogTitle>
                        <DialogDescription className="text-[13px] text-muted-foreground leading-relaxed mt-1">
                          {activeStep.highlight}
                        </DialogDescription>
                      </div>
                    </div>
                  </DialogHeader>
                  <div className="mt-6 bg-[#f5f5f7] rounded-[16px] p-6 md:p-8">
                    <p className="text-[16px] text-foreground leading-[1.7]">
                      {activeStep.details.map((part, idx) =>
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
      </section>

      {/* Mission Section — Premium mouse-reveal background with multi-layered glow */}
      <section
        ref={missionRef}
        className="relative py-24 md:py-32 overflow-hidden bg-[#0d0d0d]"
        onMouseMove={handleMissionMouseMove}
      >
        {/* Background coding image — revealed by breathing radial mask following mouse */}
        <div
          ref={missionBgRef}
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: 'url(https://miaoda-conversation-file.s3cdn.medo.dev/user-cawzjr40f9xc/app-cbcy2gncy0ox/20260614/codgggg).png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.5,
            maskImage: 'radial-gradient(circle 360px at 50% 50%, black 0%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(circle 360px at 50% 50%, black 0%, transparent 85%)',
          }}
        />
        {/* Deep dark overlay for readability */}
        <div className="absolute inset-0 z-[1] bg-[#0d0d0d]/60 pointer-events-none" />

        {/* Premium multi-layered glow system */}
        {/* Layer 1: Large ambient blue-purple glow */}
        <div
          ref={glowRef}
          className="pointer-events-none absolute top-0 left-0 z-[2]"
          style={{
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(41,151,255,0.22) 0%, rgba(120,80,255,0.14) 30%, rgba(191,90,242,0.08) 55%, transparent 75%)',
            filter: 'blur(50px)',
            mixBlendMode: 'screen',
            willChange: 'transform',
          }}
        />
        {/* Layer 2: Tighter cyan-white core glow */}
        <div
          ref={glowRef2}
          className="pointer-events-none absolute top-0 left-0 z-[3]"
          style={{
            width: 280,
            height: 280,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(100,210,255,0.35) 0%, rgba(41,151,255,0.18) 40%, transparent 70%)',
            filter: 'blur(24px)',
            mixBlendMode: 'screen',
            willChange: 'transform',
          }}
        />
        {/* Layer 3: Warm ambient offset glow */}
        <div
          ref={glowRef3}
          className="pointer-events-none absolute top-0 left-0 z-[2]"
          style={{
            width: 450,
            height: 450,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,149,0,0.10) 0%, rgba(255,100,50,0.06) 40%, transparent 70%)',
            filter: 'blur(60px)',
            mixBlendMode: 'screen',
            willChange: 'transform',
          }}
        />
        {/* Layer 4: Subtle aura ring */}
        <div
          ref={auraRef}
          className="pointer-events-none absolute top-0 left-0 z-[3]"
          style={{
            width: 180,
            height: 180,
            borderRadius: '50%',
            border: '1px solid rgba(100,210,255,0.15)',
            boxShadow: '0 0 30px rgba(41,151,255,0.10), inset 0 0 30px rgba(41,151,255,0.05)',
            willChange: 'transform',
          }}
        />

        <div className="max-w-[980px] mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <p className="text-[13px] font-semibold uppercase tracking-wider text-[#ff9500] mb-4">
              The Mission
            </p>
            <h2 className="text-[36px] md:text-[56px] font-semibold tracking-tight text-white leading-[1.07]">
              Remove friction.
              <br />
              <span className="text-[#999999]">Amplify impact.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-8 text-[15px] md:text-[17px] text-[#999999] leading-relaxed max-w-2xl mx-auto">
              Technology should remove friction, not create it. I build{' '}
              <span className="text-white font-semibold">software that helps people</span>{' '}
              achieve more while spending less time on repetitive work.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-foreground">
              Focused on Creating Value
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.15}>
                <div className="flex flex-col items-center">
                  <span className="text-[40px] md:text-[48px] font-semibold text-primary tracking-tight">
                    {stat.value}
                  </span>
                  <span className="mt-2 text-[14px] md:text-[15px] text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#f5f5f7] py-20 md:py-24">
        <div className="max-w-[720px] mx-auto px-6">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-foreground">
              FAQ
            </h2>
            <p className="mt-4 text-[15px] md:text-[17px] text-muted-foreground leading-relaxed max-w-lg mx-auto">
              Common questions about my work, process, and how I approach building products.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="bg-white rounded-[14px] border border-black/5 px-5 mb-3">
                <AccordionTrigger className="text-[15px] font-medium text-foreground hover:no-underline py-5">
                  What technologies do you use to build products?
                </AccordionTrigger>
                <AccordionContent className="text-[14px] text-muted-foreground leading-relaxed pb-5">
                  I primarily work with React, TypeScript, and modern frontend frameworks like Next.js for web products. For backend and data, I use Supabase, Node.js, and cloud services. I choose the right stack for each product — performance, scalability, and maintainability always come first.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-[14px] border border-black/5 px-5 mb-3">
                <AccordionTrigger className="text-[15px] font-medium text-foreground hover:no-underline py-5">
                  How long does it take to build a product from idea to launch?
                </AccordionTrigger>
                <AccordionContent className="text-[14px] text-muted-foreground leading-relaxed pb-5">
                  It depends on the scope. A focused MVP typically takes 4 to 8 weeks from concept to first users. I break work into weekly milestones with clear deliverables — design first, build fast, and iterate based on real user feedback. Speed matters, but never at the cost of quality.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-[14px] border border-black/5 px-5 mb-3">
                <AccordionTrigger className="text-[15px] font-medium text-foreground hover:no-underline py-5">
                  Do you work solo or with a team?
                </AccordionTrigger>
                <AccordionContent className="text-[14px] text-muted-foreground leading-relaxed pb-5">
                  I build products independently end-to-end — from product strategy and UX design to frontend and backend development. This gives me full control over quality and speed. For larger projects, I collaborate with designers and engineers I trust to bring specialized skills into the mix.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-[14px] border border-black/5 px-5 mb-3">
                <AccordionTrigger className="text-[15px] font-medium text-foreground hover:no-underline py-5">
                  How do you decide which product to build next?
                </AccordionTrigger>
                <AccordionContent className="text-[14px] text-muted-foreground leading-relaxed pb-5">
                  I look for problems I personally experience or observe in daily life. If a task feels unnecessarily tedious, repetitive, or frustrating, that is a signal. I validate the idea with research, build a quick prototype, and test it with real users before committing to full development.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="bg-white rounded-[14px] border border-black/5 px-5 mb-3">
                <AccordionTrigger className="text-[15px] font-medium text-foreground hover:no-underline py-5">
                  What is your design philosophy?
                </AccordionTrigger>
                <AccordionContent className="text-[14px] text-muted-foreground leading-relaxed pb-5">
                  Less is more. Every screen, button, and interaction should serve a purpose. I draw inspiration from Apple and Stripe — clean interfaces, generous whitespace, and interactions that feel effortless. A great product disappears and lets the user focus on their work.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="bg-white rounded-[14px] border border-black/5 px-5">
                <AccordionTrigger className="text-[15px] font-medium text-foreground hover:no-underline py-5">
                  How do you handle product updates and user feedback?
                </AccordionTrigger>
                <AccordionContent className="text-[14px] text-muted-foreground leading-relaxed pb-5">
                  I ship updates continuously — weekly or bi-weekly depending on the product. Every piece of feedback is logged and categorized. Bugs get fixed immediately. Feature requests go through a validation filter: does this help the majority of users? If yes, it gets prioritized into the next sprint.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-foreground">
              Let's Build Something Useful
            </h2>
            <p className="mt-6 text-[17px] md:text-[19px] text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Interested in collaborating, discussing ideas, or building impactful software products?
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                className="rounded-full text-[14px] md:text-[15px] h-11 px-7 bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
              >
                <Link to="/contact">Contact Me</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full text-[14px] md:text-[15px] h-11 px-7 border-primary text-primary hover:bg-primary/5 font-medium"
              >
                <Link to="/contact">Schedule a Discussion</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
