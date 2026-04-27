import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <main>
      <section id="hero" className="hero section">
        <div className="hero-rain" aria-hidden="true" />
        <div className="hero-shadow" aria-hidden="true" />
        <div className="hero-wave-stack" aria-hidden="true">
          <div className="hero-wave-layer hero-wave-layer--back">
            <svg viewBox="0 0 1440 800" preserveAspectRatio="none">
              <path d="M0,256L60,261.3C120,267,240,277,360,261.3C480,245,600,203,720,202.7C840,203,960,245,1080,261.3C1200,277,1320,267,1380,261.3L1440,256L1440,800L0,800Z" />
            </svg>
          </div>
          <div className="hero-wave-layer hero-wave-layer--mid">
            <svg viewBox="0 0 1440 700" preserveAspectRatio="none">
              <path d="M0,192L80,197.3C160,203,320,213,480,197.3C640,181,800,139,960,144C1120,149,1280,203,1360,229.3L1440,256L1440,700L0,700Z" />
            </svg>
          </div>
          <div className="hero-wave-layer hero-wave-layer--front">
            <svg viewBox="0 0 1440 500" preserveAspectRatio="none">
              <path d="M0,128L60,144C120,160,240,192,360,192C480,192,600,160,720,149.3C840,139,960,149,1080,165.3C1200,181,1320,203,1380,213.3L1440,224L1440,500L0,500Z" />
            </svg>
          </div>
          <div className="hero-wave-layer hero-wave-layer--ridge">
            <svg viewBox="0 0 800 400" preserveAspectRatio="none">
              <path d="M0,160L40,170.7C80,181,160,203,240,197.3C320,192,400,160,480,144C560,128,640,128,720,138.7L800,149.3L800,400L0,400Z" />
            </svg>
          </div>
        </div>

        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="tagline">SENSE EVERYTHING. PROTECT EVERYONE.</p>
            <h1>
              Your Street Gets a Flood Warning.
              <span className="hero-highlight"> Before the Water Reaches Your Door.</span>
            </h1>
            <p className="lead">
              OmniSense deploys street-level IoT sensors that alert every home on your street
              simultaneously - offline, in under 30 seconds, even during a power cut.
            </p>
            <div className="hero-data-row" aria-label="Key operational metrics">
              <p className="hero-data-pill"><strong>&lt;30s</strong> Broadcast latency</p>
              <p className="hero-data-pill"><strong>Offline</strong> Logic and alerts</p>
              <p className="hero-data-pill"><strong>Street-Level</strong> Precision warning</p>
            </div>
            <div className="cta-row">
              <Link to="/how-it-works" className="btn btn-secondary">
                See How It Works
              </Link>
              <Link to="/contact" className="btn btn-primary">
                Get a Quote
              </Link>
            </div>
          </div>

          <aside className="hero-visual" aria-label="OmniSense system preview">
            <div className="hero-orb" aria-hidden="true" />

            <article className="hero-float-card hero-float-card--top">
              <p className="hero-float-title">Rise Velocity</p>
              <p className="hero-float-value">3.1 cm/min</p>
            </article>

            <article className="hero-float-card hero-float-card--left">
              <p className="hero-float-title">Power State</p>
              <p className="hero-float-value">Battery Backup Active</p>
            </article>

            <article className="hero-float-card hero-float-card--bottom">
              <p className="hero-float-title">Street Broadcast</p>
              <p className="hero-float-value">24 / 24 Homes Reached</p>
            </article>

            <div className="hero-console">
              <div className="hero-console-head">
                <span className="hero-chip">Field Snapshot</span>
                <span className="hero-live">
                  <span className="hero-live-dot" aria-hidden="true" />
                  Monitoring
                </span>
              </div>
              <div className="placeholder-card">South Asian Flood Scene + Sensor Overlay Placeholder</div>
              <div className="hero-console-grid">
                <div>
                  <p>Water Level</p>
                  <strong>42 cm</strong>
                </div>
                <div>
                  <p>Risk Tier</p>
                  <strong>Orange</strong>
                </div>
                <div>
                  <p>Updated</p>
                  <strong>30 sec ago</strong>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
