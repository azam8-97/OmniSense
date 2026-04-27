import { quotes } from '../data/contentData';

function SolutionPage() {
  return (
    <main>
      <section id="solution" className="section">
        <div className="container">
          <h2>One Sensor Per Street. Every Home Warned in 30 Seconds.</h2>
          
          {quotes.solution && quotes.solution.length > 0 && (
            <blockquote className="page-quote">
              <p>"{quotes.solution[0].text}"</p>
              <footer>— {quotes.solution[0].author}</footer>
            </blockquote>
          )}

          <div className="grid-2">
            <article className="product-card">
              <h3>Central Node (outdoor)</h3>
              <ul>
                <li>Pole-mounted, IP65 weatherproof</li>
                <li>Ultrasonic water sensor, PIR motion detector, rain sensor</li>
                <li>Monitors water depth, rising velocity, and confirms alerts with PIR logic</li>
                <li>Powered by 2 Lithium-Ion cells - operates independently of grid</li>
                <li>Algorithm processes every 30 seconds with risk classification (Green/Orange/Red)</li>
              </ul>
              <img src="/central-node.jpeg" alt="Central Node device" className="product-image" />
            </article>
            <article className="product-card">
              <h3>Household Node (indoor)</h3>
              <ul>
                <li>Plugs directly into wall socket with battery backup</li>
                <li>RGB LED ring, 85dB buzzer, LCD display</li>
                <li>Receives alerts via LoRa mesh network and local processing</li>
                <li>Safety sensors: Smoke detector (MQ135), gas/LPG sensor, temperature/humidity (DHT11)</li>
                <li>Fire detection via smoke OR sudden temperature rise detection</li>
                <li>5-second SOS button for emergency mesh broadcast to nearby homes</li>
              </ul>
              <img src="/household-node.jpeg" alt="Household Node device" className="product-image" />
            </article>
          </div>
          <div className="blynk-integration" style={{textAlign: 'center', marginTop: '1rem'}}>
            <h4>Integration Partners</h4>
            <p>Remote monitoring and third-party dashboards supported via Blynk IoT.</p>
            <img src="/blynk-iot.jpeg" alt="Blynk IoT logo" style={{maxWidth: '240px'}} />
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2>Why OmniSense Works Where Others Fail</h2>
          <div className="grid-3">
            <article className="card">
              <h3>Offline-First Reliability</h3>
              <p>Works entirely without internet. All alert logic runs locally on the device.</p>
            </article>
            <article className="card">
              <h3>Zero False Alarms</h3>
              <p>Dual-sensor confirmation. Every alert is cross-checked before broadcasting.</p>
            </article>
            <article className="card">
              <h3>Power-Cut Proof</h3>
              <p>Built-in battery backup on both devices. Keeps running when the grid fails.</p>
            </article>
            <article className="card">
              <h3>Tiered Alerting</h3>
              <p>Four levels tell residents exactly what to do at each risk stage.</p>
            </article>
            <article className="card">
              <h3>Neighbor Alerting</h3>
              <p>Gas or fire detected in one house? Every home on the street is warned within 5 seconds.</p>
            </article>
            <article className="card">
              <h3>Street-Scale Coverage</h3>
              <p>One kit covers an entire street - no per-device setup needed.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SolutionPage;
