import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Services', path: '/services' },
  { name: 'Process', path: '/#process' },
  { name: 'Contact', path: '/contact' },
];

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="relative w-5 h-5 flex flex-col justify-center items-center">
      <span
        className={`absolute block w-5 h-[1.5px] bg-foreground transition-all duration-300 ease-out ${
          open ? 'rotate-45' : '-translate-y-[4px]'
        }`}
      />
      <span
        className={`absolute block w-5 h-[1.5px] bg-foreground transition-all duration-300 ease-out ${
          open ? '-rotate-45' : 'translate-y-[4px]'
        }`}
      />
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (path: string) => {
    if (path.startsWith('/#')) return location.pathname === '/';
    return location.pathname === path;
  };

  const handleNavClick = (path: string) => {
    setMobileOpen(false);
    if (path.startsWith('/#') && location.pathname === '/') {
      const id = path.replace('/#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-[52px] flex items-center justify-between">
          <Link to="/" className="text-[15px] font-semibold tracking-tight text-foreground">
            SarojSutradharLLC
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`text-[13px] font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="rounded-full text-[13px] h-8 px-4 border-primary text-primary hover:bg-primary/5"
            >
              <Link to="/projects">View Projects</Link>
            </Button>
            <Button
              asChild
              className="rounded-full text-[13px] h-8 px-4 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 relative z-[60]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <HamburgerIcon open={mobileOpen} />
            </Button>
          </div>
        </div>
      </header>

      {/* Apple-style Full-Screen Mobile Menu */}
      <div
        className={`fixed inset-0 z-[55] bg-white transition-all duration-500 ease-out md:hidden ${
          mobileOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        {/* Close X top-right */}
        <div className="absolute top-0 right-0 h-[52px] flex items-center px-6">
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 relative z-[60]"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <HamburgerIcon open={true} />
          </Button>
        </div>

        <nav className="flex flex-col justify-center h-full px-10 pb-16">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => handleNavClick(link.path)}
              className={`text-[28px] font-semibold py-3 transition-all duration-300 ${
                mobileOpen
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              } ${
                isActive(link.path)
                  ? 'text-primary'
                  : 'text-foreground hover:text-primary'
              }`}
              style={{
                transitionDelay: mobileOpen ? `${150 + i * 40}ms` : '0ms',
              }}
            >
              {link.name}
            </Link>
          ))}
          <div
            className={`flex flex-col gap-3 mt-8 transition-all duration-300 ${
              mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: mobileOpen ? `${150 + navLinks.length * 40}ms` : '0ms' }}
          >
            <Button
              asChild
              variant="outline"
              className="rounded-full w-full max-w-[200px] border-primary text-primary hover:bg-primary/5"
            >
              <Link to="/projects">View Projects</Link>
            </Button>
            <Button
              asChild
              className="rounded-full w-full max-w-[200px] bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
