import { stats, quotes } from '../data/contentData';

function ProblemPage() {
  return (
    <main>
      <section id="problem" className="section section-light">
        <div className="container">
          <h2>Every Monsoon Season. No Warning.</h2>
          
          {quotes.problem && quotes.problem.length > 0 && (
            <blockquote className="page-quote">
              <p>"{quotes.problem[0].text}"</p>
              <footer>— {quotes.problem[0].author}</footer>
            </blockquote>
          )}

          <div className="grid-3">
            <article className="card">
              <h3>City-scale alerts are useless</h3>
              <p>
                NDMA sends the same SMS to 23 million people. It does not tell you your drain is
                rising at 3cm/minute.
              </p>
            </article>
            <article className="card">
              <h3>Power cuts kill the alarm</h3>
              <p>
                The worst floods cut mains power first. Most systems go dark exactly when you need them.
              </p>
            </article>
            <article className="card">
              <h3>By the time you know, it is too late</h3>
              <p>
                Families lose furniture, valuables, and sometimes lives - not because floods are
                unpredictable, but because there is no street-level sensor.
              </p>
            </article>
          </div>
          <div className="stats-row">
            {stats.map((item) => (
              <p key={item} className="stat-chip">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProblemPage;
