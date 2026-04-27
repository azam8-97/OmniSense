import { quotes } from '../data/contentData';

function HowItWorksPage() {
  return (
    <main>
      <section id="how-it-works" className="section section-light">
        <div className="container">
          <h2>Simple. Automatic. Unstoppable.</h2>
          
          {quotes.howItWorks && quotes.howItWorks.length > 0 && (
            <blockquote className="page-quote">
              <p>"{quotes.howItWorks[0].text}"</p>
              <footer>— {quotes.howItWorks[0].author}</footer>
            </blockquote>
          )}

          <ol className="steps">
            <li>Central Node detects water rising on the street</li>
            <li>Algorithm checks multiple sensors to confirm - no false alarms</li>
            <li>Alert tier decided: Green to Yellow to Orange to Red</li>
            <li>All Household Nodes on the street warned simultaneously in under 30 seconds</li>
            <li>Residents act: move valuables at Yellow, evacuate at Red</li>
          </ol>

          <div className="tier-grid" role="list" aria-label="Alert tiers">
            <div className="tier tier-green">GREEN - All clear, system active</div>
            <div className="tier tier-yellow">YELLOW - Heavy rain expected. Move valuables upstairs.</div>
            <div className="tier tier-orange">ORANGE - Water rising fast. Go upstairs NOW.</div>
            <div className="tier tier-red">RED - EVACUATE. Water entering ground floor.</div>
          </div>

          <iframe
            className="video-placeholder"
            title="Product Demo Video (to be uploaded)"
            src="about:blank"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Technical Advantages</h2>
          <div className="grid-3">
            <article className="card">
              <h3>Real-Time Detection</h3>
              <p>Monitors water level and rise rate every 30 seconds for precise early warning.</p>
            </article>
            <article className="card">
              <h3>Multi-Sensor Confirmation</h3>
              <p>Cross-validates data to eliminate false positives and ensure reliability.</p>
            </article>
            <article className="card">
              <h3>Rapid Broadcast</h3>
              <p>WiFi-based alert delivery reaches all homes on the street in under 30 seconds.</p>
            </article>
            <article className="card">
              <h3>Autonomous Operation</h3>
              <p>No cloud dependency. All logic processes locally on the central node.</p>
            </article>
            <article className="card">
              <h3>Multi-Hazard Sensing</h3>
              <p>Detects flooding, fire (smoke), and gas leaks on residential streets.</p>
            </article>
            <article className="card">
              <h3>Emergency Durability</h3>
              <p>Designed to operate in extreme weather, power failure, and network outages.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HowItWorksPage;
