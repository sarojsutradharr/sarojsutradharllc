import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import type { ReactNode } from 'react';

export interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
  public?: boolean;
}

export const routes: RouteConfig[] = [
  { name: 'Home', path: '/', element: <Home />, public: true },
  { name: 'About', path: '/about', element: <About />, public: true },
  { name: 'Projects', path: '/projects', element: <Projects />, public: true },
  { name: 'Services', path: '/services', element: <Services />, public: true },
  { name: 'Contact', path: '/contact', element: <Contact />, public: true },
  { name: 'Privacy Policy', path: '/privacy', element: <Privacy />, public: true },
  { name: 'Terms & Conditions', path: '/terms', element: <Terms />, public: true },
];
