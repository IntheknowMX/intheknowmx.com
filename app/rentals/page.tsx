/* eslint-disable react/no-unescaped-entities */
export default function RentalsPage() {
  return (
    <main style={{ fontFamily: "var(--font-inter, 'Inter', 'Helvetica Neue', sans-serif)", backgroundColor: '#2C1810', color: '#FDF6F0' }}>
      <style>{`
        .rentals-nav { background-color: #FDF6F0; padding: 20px 40px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #E8A598; position: sticky; top: 0; z-index: 100; }
        .rentals-nav-links { display: flex; gap: 24px; align-items: center; flex-wrap: wrap; }
        .rentals-nav-links a { color: #2C1810; text-decoration: none; font-size: 14px; }
        .rentals-section { padding: 60px 40px; }
        .rentals-inner { max-width: 760px; margin: 0 auto; }
        .rentals-card { background-color: #FDF6F0; border: 2px solid #C4622D; padding: 36px 28px; border-radius: 8px; max-width: 560px; margin: 0 auto; }
        .rentals-card ul { list-style: disc; padding-left: 20px; margin: 0; }
        .rentals-card ul li { font-size: 15px; color: #2C1810; line-height: 1.9; }
        .rentals-divider { height: 1px; background-color: #E8A598; margin: 20px 0; border: none; }
        .rentals-cta-btn { display: inline-block; background-color: #C4622D; color: white; text-decoration: none; font-weight: bold; font-size: 16px; padding: 14px 32px; border-radius: 6px; margin-top: 20px; }
        .rentals-commitment { background-color: #1A0E09; padding: 40px 36px; border-radius: 8px; max-width: 760px; margin: 0 auto; }
        @media (max-width: 767px) {
          .rentals-nav { padding: 16px 20px; flex-wrap: wrap; gap: 12px; }
          .rentals-nav-links { gap: 12px; }
          .rentals-section { padding: 40px 20px; }
          .rentals-card { padding: 28px 20px; }
          .rentals-commitment { padding: 28px 20px; }
        }
      `}</style>

      {/* Navigation */}
      <nav className="rentals-nav">
        <a href="/" style={{ fontSize: '18px', fontWeight: 'bold', color: '#7D3B4E', letterSpacing: '2px', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", textDecoration: 'none' }}>
          IN THE KNOW MEXICO
        </a>
        <div className="rentals-nav-links">
          <a href="/#about">About</a>
          <a href="/#services">Residency</a>
          <a href="/#rentals">Renting</a>
          <a href="/#properties">Owning</a>
          <a href="/#caretaking">Property &amp; Pet Care</a>
          <a href="/#local-companion">Local Companion</a>
          <a href="/#welcome-table">Welcome Table</a>
          <a href="/#testimonials">Testimonials</a>
          <a href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{
            backgroundColor: '#C4622D', color: 'white', padding: '10px 22px', borderRadius: '4px',
            textDecoration: 'none', fontSize: '14px', fontWeight: '600', letterSpacing: '0.5px',
          }}>Strategy Session</a>
        </div>
      </nav>

      {/* Section 1 — Hero Image */}
      <section style={{ backgroundColor: '#2C1810' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/bree-willie-max.jpg"
          alt="Bree, Willie, and Max — lease signed, right fit found"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
        <p style={{ fontSize: '14px', color: '#C4622D', textAlign: 'center', padding: '16px 20px 0', margin: 0 }}>
          Lease signed. Right fit found.
        </p>
      </section>

      {/* Section 2 — Page Header */}
      <section className="rentals-section">
        <div className="rentals-inner">
          <h1 style={{ fontSize: '48px', fontWeight: 'normal', color: '#FDF6F0', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '20px', lineHeight: '1.15' }}>
            Rentals in San Miguel de Allende
          </h1>
          <p style={{ fontSize: '18px', color: '#FDF6F0', lineHeight: '1.8', margin: 0 }}>
            I help you find a rental that fits your life in San Miguel.
          </p>
        </div>
      </section>

      {/* Section 3 — Context */}
      <section className="rentals-section" style={{ paddingTop: 0 }}>
        <div className="rentals-inner">
          <p style={{ fontSize: '16px', color: '#FDF6F0', lineHeight: '1.8', marginBottom: '20px' }}>
            Finding a rental in San Miguel de Allende is not like searching Zillow.
          </p>
          <p style={{ fontSize: '16px', color: '#FDF6F0', lineHeight: '1.8', marginBottom: '20px' }}>
            The best homes are rarely listed publicly. Landlords expect trusted introductions. Leases are in Spanish. The neighborhoods have their own rhythms—some you'll love, some won't fit your life at all.
          </p>
          <p style={{ fontSize: '16px', color: '#FDF6F0', lineHeight: '1.8', margin: 0 }}>
            I navigate this structure for you. You see only homes genuinely worth your time.
          </p>
        </div>
      </section>

      {/* Section 4 — Decision Framework */}
      <section className="rentals-section" style={{ paddingTop: 0 }}>
        <div className="rentals-inner">
          <p style={{ fontSize: '16px', color: '#FDF6F0', lineHeight: '1.8', marginBottom: '20px' }}>
            We begin with clarity.
          </p>
          <p style={{ fontSize: '16px', color: '#FDF6F0', lineHeight: '1.8', marginBottom: '20px' }}>
            How you live. What matters to you. What you will not compromise on.
          </p>
          <p style={{ fontSize: '16px', color: '#FDF6F0', lineHeight: '1.8', marginBottom: '20px' }}>
            From there, every property is filtered through one question:
          </p>
          <p style={{ fontSize: '16px', color: '#FDF6F0', lineHeight: '1.8', marginBottom: '20px', fontStyle: 'italic' }}>
            Does this actually fit your life in San Miguel?
          </p>
          <p style={{ fontSize: '16px', color: '#FDF6F0', lineHeight: '1.8', marginBottom: '20px' }}>
            You don't see everything.<br />
            You see what fits.
          </p>
          <p style={{ fontSize: '16px', color: '#FDF6F0', lineHeight: '1.8', margin: 0 }}>
            We refine until the decision becomes obvious.
          </p>
        </div>
      </section>

      {/* Section 5 — What Happens in Practice */}
      <section className="rentals-section" style={{ paddingTop: 0 }}>
        <div className="rentals-inner">
          <p style={{ fontSize: '16px', color: '#FDF6F0', lineHeight: '1.8', marginBottom: '20px' }}>
            Deep research into your needs, budget, and what actually matters to you. Pre-screening of every property before you see it. Knowledge of every colonia—neighborhood energy, walkability, pace, what to avoid. Personal escort through each property with full cultural and practical context. Translation and interpretation throughout every viewing. Bilingual lease review—line by line, every detail explained. Negotiation on your behalf with landlords. Final walkthrough checklist before you commit to anything. Landlord introductions and relationship setup. Ongoing support after you move in.
          </p>
          <p style={{ fontSize: '16px', color: '#FDF6F0', lineHeight: '1.8', marginBottom: '8px' }}>
            You are not navigating this alone.
          </p>
          <p style={{ fontSize: '16px', color: '#FDF6F0', lineHeight: '1.8', margin: 0 }}>
            You are being filtered toward the right outcome.
          </p>
        </div>
      </section>

      {/* Section 6 — Pricing Card */}
      <section className="rentals-section" style={{ paddingTop: 0 }}>
        <div className="rentals-card">
          <h2 style={{ fontSize: '24px', fontWeight: 'normal', color: '#8B1A2A', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '8px' }}>
            Essential Rental Search
          </h2>
          <p style={{ fontSize: '13px', color: '#C97B8A', letterSpacing: '1px', marginBottom: '20px', margin: '0 0 20px' }}>
            MATCHMAKING SERVICE WITH OPTIONAL PRIVATE DRIVER
          </p>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#C4622D', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '20px' }}>
            $1,825 MXN
          </p>
          <ul>
            <li>Pre-curated property list based on your needs</li>
            <li>Personal escort to all showings</li>
            <li>Translation &amp; negotiation support</li>
            <li>Bilingual lease review included</li>
            <li>Landlord introductions &amp; relationship setup</li>
            <li>Ongoing support after move-in</li>
            <li>Lease signed? 2 free hours of concierge support</li>
          </ul>
          <hr className="rentals-divider" />
          <p style={{ fontSize: '14px', color: '#C4622D', fontWeight: 'bold', marginBottom: '4px' }}>
            Private Driver: +$1,500 MXN
          </p>
          <p style={{ fontSize: '13px', color: '#2C1810', marginBottom: '16px' }}>
            Full-day transportation for property viewings
          </p>
          <p style={{ fontSize: '13px', color: '#C97B8A', marginBottom: '4px' }}>• 1 free reschedule available</p>
          <p style={{ fontSize: '13px', color: '#C97B8A', marginBottom: '16px' }}>• No refunds within 48 hours of showing day</p>
          <a
            href="https://calendar.app.google/qfwutaFsrSaqWVkw7"
            target="_blank"
            rel="noopener noreferrer"
            className="rentals-cta-btn"
          >
            Book a Strategy Session →
          </a>
        </div>
      </section>

      {/* Section 7 — Agent Agreement Commitment */}
      <section className="rentals-section" style={{ paddingTop: 0, paddingBottom: '80px' }}>
        <div className="rentals-commitment">
          <h3 style={{ fontSize: '20px', fontWeight: 'normal', color: '#E8A598', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '16px' }}>
            My Commitment to You — in Writing
          </h3>
          <p style={{ fontSize: '15px', color: '#FDF6F0', lineHeight: '1.8', margin: 0 }}>
            Every rental client receives a personal agent agreement outlining exactly what I will research, verify, and deliver on your behalf — before showing day. No surprises, no shortcuts. You deserve to know what you're getting.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1A0E09', padding: '32px 40px', textAlign: 'center' }}>
        <p style={{ color: '#E8A598', fontSize: '14px', marginBottom: '8px' }}>
          © 2026 In The Know Mexico · Lisa May Cobham, Relocation Specialist · San Miguel de Allende, México
        </p>
        <p style={{ color: '#7D3B4E', fontSize: '13px', marginBottom: '6px' }}>Known here since 2014.</p>
        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '8px' }}>
          <a href="mailto:Lisa@InTheKnowMx.com" style={{ color: '#FDF6F0', textDecoration: 'none', fontSize: '13px' }}>Lisa@InTheKnowMx.com</a>
          <a href="https://www.instagram.com/in.the.know.mexico/" target="_blank" rel="noopener noreferrer" style={{ color: '#FDF6F0', textDecoration: 'none', fontSize: '13px' }}>Instagram</a>
          <a href="https://www.facebook.com/InTheKnowMex" target="_blank" rel="noopener noreferrer" style={{ color: '#FDF6F0', textDecoration: 'none', fontSize: '13px' }}>Facebook</a>
          <a href="https://www.linkedin.com/in/lisamcobham" target="_blank" rel="noopener noreferrer" style={{ color: '#FDF6F0', textDecoration: 'none', fontSize: '13px' }}>LinkedIn</a>
        </div>
      </footer>
    </main>
  )
}
