import { Link } from 'react-router-dom';
import { Twitter, Globe } from 'lucide-react';

const footerLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
  { name: 'SaaS Solutions', path: '/saas-solutions' },
  { name: 'Privacy Policy', path: '/privacy' },
  { name: 'Terms of Service', path: '/terms' },
];

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-black/5">
      <div className="max-w-[980px] mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link to="/" className="text-[15px] font-semibold tracking-tight text-foreground">
              SarojSutradharLLC
            </Link>
            <p className="text-[13px] text-muted-foreground">
              Build • Launch • Scale 
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://x.com/SarojSutradhar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://sarojsutradharllc.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Website"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-[13px] text-muted-foreground hover:text-foreground transition-colors py-1"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-black/5">
          <p className="text-[11px] text-muted-foreground">
            &copy; {new Date().getFullYear()} SarojSutradharLLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
