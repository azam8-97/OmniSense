import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../data/contentData';

export function OmniSenseLogo() {
  return (
    <Link to="/" className="logo-wrap" aria-label="OmniSense home">
      <span className="logo-mark" aria-hidden="true">◉</span>
      <span className="logo-text">
        <span className="logo-omni">Omni</span>
        <span className="logo-sense">Sense</span>
      </span>
    </Link>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="container nav-row">
        <OmniSenseLogo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.id} to={item.path} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="btn btn-primary">
          Get a Quote
        </Link>
      </div>
    </header>
  );
}

export default Header;
