import { pricingTiers } from '../data/contentData';
import { Link } from 'react-router-dom';

function PricingPage() {
  return (
    <main>
      <section id="pricing" className="section section-light">
        <div className="container">
          <h2>Business Model</h2>
          <p className="pricing-subtitle">Hardware sales + mesh network growth model</p>
          <div className="grid-3">
            {pricingTiers.map((tier) => (
              <article key={tier.title} className={`pricing-card ${tier.highlighted ? 'pricing-card--featured' : ''}`}>
                {tier.badge && <span className="pricing-badge">{tier.badge}</span>}
                <div className="pricing-header">
                  <h3>{tier.title}</h3>
                  <span className="pricing-sku">{tier.sku}</span>
                </div>
                <p className="price">{tier.price}</p>
                <ul className="pricing-list">
                  {tier.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="pricing-footer">{tier.footer}</p>
              </article>
            ))}
          </div>
          <Link to="/contact" className="btn btn-primary">
            Get a Quote for Your Street
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Who Should Buy OmniSense?</h2>
          <div className="grid-3">
            <article className="card">
              <h3>Housing Society Management</h3>
              <p>One committee decision covers every home. No individual selling required.</p>
            </article>
            <article className="card">
              <h3>NGOs and Disaster Preparedness Groups</h3>
              <p>Bulk pricing available for low-income flood-risk communities with donor funding.</p>
            </article>
            <article className="card">
              <h3>Private Gated Communities</h3>
              <p>No municipal permits needed on private land. Install immediately.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2>Flexible Payment & Installation</h2>
          <div className="grid-3">
            <article className="card">
              <h3>Installment Plans</h3>
              <p>Spread payments over 12 months with no interest for housing societies.</p>
            </article>
            <article className="card">
              <h3>Professional Installation</h3>
              <p>Our team handles installation and training included in the kit price.</p>
            </article>
            <article className="card">
              <h3>Warranty & Support</h3>
              <p>2-year hardware warranty and 24/7 technical support for all kits.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PricingPage;
