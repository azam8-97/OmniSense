import { pricingTiers } from '../data/contentData';
import { Link } from 'react-router-dom';

function PricingPage() {
  return (
    <main>
      <section id="pricing" className="section section-light">
        <div className="container">
          <h2>Street-Kit Pricing. One Decision Covers the Whole Street.</h2>
          <div className="grid-3">
            {pricingTiers.map((tier) => (
              <article key={tier.title} className={`pricing-card ${tier.highlighted ? 'pricing-card--featured' : ''}`}>
                <h3>{tier.title}</h3>
                <p className="price">{tier.price}</p>
                <p>{tier.details}</p>
                <p>{tier.useCase}</p>
              </article>
            ))}
          </div>
          <p className="pricing-note">Additional Household Node - Rs. 5,000 per unit</p>
          <p className="pricing-note">
            NGO and government bulk orders (10+ kits): 15% discount. Pilot program for first
            10 housing societies: 20% discount.
          </p>
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
