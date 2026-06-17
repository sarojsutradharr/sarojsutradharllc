import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Services', path: '/services' },
  { name: 'Process', path: '/#process' },
  { name: 'Contact', path: '/contact' },
];

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

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <span className="text-[15px] font-semibold">Menu</span>
                </div>
                <nav className="flex flex-col p-6 gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => handleNavClick(link.path)}
                      className={`text-[15px] font-medium py-3 px-4 rounded-lg transition-colors ${
                        isActive(link.path)
                          ? 'bg-primary/10 text-primary'
                          : 'text-foreground hover:bg-muted'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto p-6 flex flex-col gap-3 border-t border-border">
                  <Button asChild variant="outline" className="rounded-full w-full">
                    <Link to="/projects">View Projects</Link>
                  </Button>
                  <Button asChild className="rounded-full w-full bg-primary text-primary-foreground">
                    <Link to="/contact">Get In Touch</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
