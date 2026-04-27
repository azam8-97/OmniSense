import { Link } from 'react-router-dom';
import { OmniSenseLogo } from './Header';
import { navItems } from '../data/contentData';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <OmniSenseLogo />
          <p className="tagline">SENSE EVERYTHING. PROTECT EVERYONE.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          {navItems.map((item) => (
            <Link key={item.id} to={item.path}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div>
          <p>omnisense.pk | OmniSense@gmail.com | 03084450419</p>
          <p>Copyright © 2026 OmniSense. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
