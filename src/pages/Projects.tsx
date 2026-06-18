import ScrollReveal from '@/components/ScrollReveal';
import PageMeta from '@/components/common/PageMeta';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    name: 'Rivtone',
    description: 'A modern digital platform focused on delivering streamlined solutions with simplicity, performance, and user experience at its core.',
    url: 'https://rivtone.com/',
    status: 'Live',
  },
  {
    name: 'Productivity Suite',
    description: 'An integrated toolkit designed to automate repetitive tasks and help teams focus on what matters most.',
    url: '#',
    status: 'In Development',
  },
  {
    name: 'Workflow Optimizer',
    description: 'A smart workflow automation platform that connects your tools and eliminates manual busywork.',
    url: '#',
    status: 'Coming Soon',
  },
  {
    name: 'Time Saver App',
    description: 'A personal productivity companion that helps you reclaim hours every week through intelligent scheduling.',
    url: '#',
    status: 'Coming Soon',
  },
];

export default function Projects() {
  return (
    <div className="pt-[52px]">
      <PageMeta
        title="Projects — SarojSutradharLLC | SaaS Product Portfolio"
        description="Explore SaaS products and software solutions built by SarojSutradharLLC. From business automation to productivity software, see real products that solve real problems."
        keywords="saas product portfolio, saas products, business automation software, productivity software, workflow automation, cloud-based software, project management saas, ai saas platform"
      />
      {/* Hero */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[980px] mx-auto px-6 text-center">
          <ScrollReveal>
            <h1 className="text-[36px] md:text-[48px] font-semibold tracking-tight text-foreground">
              Projects
            </h1>
            <p className="mt-6 text-[17px] md:text-[19px] text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              A portfolio of SaaS products built to solve real problems and create meaningful impact.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-[#f5f5f7] py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <ScrollReveal key={project.name} delay={i * 0.1}>
                <div className="h-full flex flex-col bg-white border border-black/5 rounded-[18px] p-8 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-[22px] font-semibold text-foreground tracking-tight">
                      {project.name}
                    </h3>
                    <span
                      className={`text-[11px] font-semibold px-3 py-1 rounded-full ${
                        project.status === 'Live'
                          ? 'bg-green-100 text-green-700'
                          : project.status === 'In Development'
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-[15px] text-muted-foreground leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    {project.url !== '#' && (
                      <Button
                        asChild
                        size="sm"
                        className="rounded-full text-[13px] h-9 px-5 bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Visit Website
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
