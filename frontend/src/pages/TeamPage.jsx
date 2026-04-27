import { teams, quotes } from '../data/contentData';

function TeamPage() {
  return (
    <main>
      <section id="team" className="section section-light">
        <div className="container">
          <h2>Built by Engineers Who Have Lived Through the Floods.</h2>
          
          {quotes.team && quotes.team.length > 0 && (
            <blockquote className="page-quote">
              <p>"{quotes.team[0].text}"</p>
              <footer>— {quotes.team[0].author}</footer>
            </blockquote>
          )}

          <div className="team-grid">
            {teams.map((member) => {
              let imgSrc = null;
              if (member.role.includes('CEO')) imgSrc = '/ceo.jpg';
              else if (member.role.includes('CPO')) imgSrc = '/cpo.jpeg';
              else if (member.role.includes('COO')) imgSrc = '/coo.jpeg';
              
              return (
                <article key={member.name} className="team-card">
                  {imgSrc ? (
                    <img src={imgSrc} alt={member.name} className="avatar-image" />
                  ) : (
                    <div className="avatar-placeholder" aria-hidden="true">Photo</div>
                  )}
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p>{member.scope}</p>
                </article>
              );
            })}
          </div>
          <p className="affiliation">NUCES-FAST, CFD Campus</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Our Mission</h2>
          <div className="grid-2">
            <article className="card">
              <h3>Problem → Solution</h3>
              <p>
                We founded OmniSense after witnessing preventable flood deaths in Pakistan. 
                We believe that street-level early warning is not a luxury—it's critical infrastructure.
              </p>
            </article>
            <article className="card">
              <h3>Scalable Impact</h3>
              <p>
                Our goal is to deploy OmniSense on 1,000 streets within 5 years, 
                protecting over 1 million families across flood-prone Pakistan.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <h2>Company Values</h2>
          <div className="grid-3">
            <article className="card">
              <h3>Lives First</h3>
              <p>Every design decision prioritizes safety and accessibility for the families we serve.</p>
            </article>
            <article className="card">
              <h3>Engineering Excellence</h3>
              <p>We invest in rigorous testing and validation to ensure reliability under extreme conditions.</p>
            </article>
            <article className="card">
              <h3>Community Trust</h3>
              <p>Transparent operations and long-term partnerships with communities, not one-time sales.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TeamPage;
