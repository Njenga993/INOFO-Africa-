
import '../styles/MembershipAfrica.css';

const MembershipAfrica = () => (
  <main className="membership-africa">
    <header className="membership-header">
      <h1>Membership & Affiliates</h1>
      <p className="lead">
        Join INOFO Africa — a collective of farmer organisations driving organic transformation across the continent.
      </p>
    </header>

    <section className="membership-types">
      <h2>Choose Your Path</h2>
      <div className="types-grid">
        <div className="type-card">
          <h3>Organisational Member</h3>
          <p>
            Ideal for farmer organisations, cooperatives, or NGOs supporting organic agriculture. Benefits include:
          </p>
          <ul>
            <li>Access to policy advocacy platforms</li>
            <li>Capacity-building training & peer learning</li>
            <li>Networking with continental peers</li>
            <li>Exclusive resource downloads</li>
          </ul>
          <a href="/membership-form" className="btn-primary">
            Apply Now
          </a>
        </div>
        <div className="type-card">
          <h3>Affiliate Partner</h3>
          <p>
            Designed for researchers, businesses, and supporters aligned with organic farming progress in Africa:
          </p>
          <ul>
            <li>Invitation to partner events</li>
            <li>Quarterly newsletter and reports</li>
            <li>Brand visibility on INOFO platforms</li>
          </ul>
          <a href="/membership-form" className="btn-primary">
            Become Partner
          </a>
        </div>
      </div>
    </section>

    <section className="downloads">
      <h2>Download Membership Packet</h2>
      <p>
        Get detailed information and guidelines in our Membership & Affiliate Handbook:
      </p>
      <a href="/INOFO-Africa-membership-handbook.docx" download className="btn-secondary">
        Download Handbook (DOCX)
      </a>
    </section>

    <section className="cta-contact">
      <h2>Questions?</h2>
      <p>
        Reach out to our Membership Coordinator for guidance, bulk applications, or custom partnership agreements.
      </p>
      <a href="/contact" className="btn-primary">Contact Us</a>
    </section>
  </main>
);

export default MembershipAfrica;
