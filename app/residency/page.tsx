'use client'
/* eslint-disable react/no-unescaped-entities */
import ResidencyChecker from '../components/ResidencyChecker'

export default function ResidencyPage() {
  return (
    <main style={{ fontFamily: "var(--font-inter, 'Inter', 'Helvetica Neue', sans-serif)", backgroundColor: '#FDF6F0', color: '#2C1810' }}>
      {/* Navigation */}
      <nav style={{
        backgroundColor: '#FDF6F0',
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #E8A598',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <a href="/" style={{ fontSize: '18px', fontWeight: 'bold', color: '#7D3B4E', letterSpacing: '2px', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", textDecoration: 'none' }}>
          IN THE KNOW MEXICO
        </a>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <a href="/#about" style={{ color: '#2C1810', textDecoration: 'none', fontSize: '14px' }}>About</a>
          <a href="/#services" style={{ color: '#2C1810', textDecoration: 'none', fontSize: '14px' }}>Residency</a>
          <a href="/#rentals" style={{ color: '#2C1810', textDecoration: 'none', fontSize: '14px' }}>Renting</a>
          <a href="/#properties" style={{ color: '#2C1810', textDecoration: 'none', fontSize: '14px' }}>Owning</a>
          <a href="/#caretaking" style={{ color: '#2C1810', textDecoration: 'none', fontSize: '14px' }}>Property & Pet Care</a>
          <a href="/#local-companion" style={{ color: '#2C1810', textDecoration: 'none', fontSize: '14px' }}>Local Companion</a>
          <a href="/#welcome-table" style={{ color: '#2C1810', textDecoration: 'none', fontSize: '14px' }}>Welcome Table</a>
          <a href="/#testimonials" style={{ color: '#2C1810', textDecoration: 'none', fontSize: '14px' }}>Testimonials</a>
          <a href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{
            backgroundColor: '#C4622D',
            color: 'white',
            padding: '10px 22px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '600',
            letterSpacing: '0.5px',
          }}>Strategy Session</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ backgroundColor: '#8B1A2A', padding: '90px 40px', textAlign: 'center' }}>
        <p style={{ color: '#D4A017', fontSize: '11px', letterSpacing: '5px', fontWeight: '700', marginBottom: '20px' }}>MEXICAN RESIDENCY</p>
        <h1 style={{ fontSize: '52px', fontWeight: 'normal', color: 'white', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '20px', lineHeight: '1.15' }}>
          Mexican Residency, Sorted.
        </h1>
        <p style={{ fontSize: '18px', fontStyle: 'italic', color: '#FDF6F0', maxWidth: '700px', margin: '0 auto 28px', lineHeight: '1.75', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>
          Whether you&rsquo;re pursuing temporary or permanent residency, or weighing your options for living here legally, Lisa and her team are with you every step, from your first question to the day you&rsquo;re settled and secure.
        </p>
        <div style={{ width: '48px', height: '2px', backgroundColor: '#D4A017', margin: '0 auto 24px' }} />
        <p style={{ fontSize: '18px', color: '#F5D0D8', maxWidth: '560px', margin: '0 auto 40px', lineHeight: '1.75' }}>
          Answer 6 questions to see which residency path you qualify for.
        </p>
      </section>

      {/* Eligibility Checker */}
      <ResidencyChecker />

      {/* Pricing Tiers */}
      <section style={{ backgroundColor: '#7D3B4E', padding: '80px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ color: '#E8C47A', fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', textAlign: 'center', fontWeight: '600' }}>RESIDENCY SERVICES</p>
          <h2 style={{ fontSize: '42px', fontWeight: 'normal', color: 'white', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", textAlign: 'center', marginBottom: '48px', lineHeight: '1.2' }}>
            Choose your level of support.
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px', marginBottom: '32px' }}>

            {/* Tier 1 — Virtual Guidance */}
            <div style={{ backgroundColor: '#FDF6F0', padding: '40px 32px', borderRadius: '8px', borderTop: '4px solid #C4622D', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '21px', marginBottom: '8px', color: '#7D3B4E', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.3' }}>Virtual Guidance</h3>
              <div style={{ marginBottom: '8px' }}><p style={{ fontSize: '18px', fontWeight: '700', color: '#8B1A2A', margin: '0 0 2px', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>$6,000 MXN</p><p style={{ fontSize: '10px', color: '#A08878', margin: '0' }}>&#8776; $345 USD</p></div>
              <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#5C3A2E', marginBottom: '20px', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.6' }}>Everything you need — with expert backup.</p>
              <ul style={{ fontSize: '14px', lineHeight: '1.9', color: '#2C1810', paddingLeft: '18px', marginBottom: '24px', flex: 1 }}>
                <li>Professional document review</li>
                <li>All forms prepared and ready</li>
                <li>Consulate and INM appointments scheduled</li>
                <li>Step-by-step guidance throughout</li>
                <li>Follow-up email with action steps</li>
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <a
                  href="https://buy.stripe.com/5kQbJ18jq8jAdh6gek2880O"
                  target="_blank"
                  rel="noreferrer"
                  style={{ backgroundColor: '#C4622D', color: 'white', borderRadius: '6px', padding: '12px 24px', fontSize: '14px', fontWeight: 700, textDecoration: 'none', display: 'inline-block' }}
                >
                  Pay Now
                </a>
                <a
                  href="/residency"
                  style={{ color: '#2C1810', backgroundColor: '#FDF6F0', border: '1px solid #C4622D', borderRadius: '6px', textDecoration: 'none', fontWeight: 700, padding: '12px 24px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}
                >
                  More Info
                </a>
              </div>
            </div>

            {/* Tier 2 — On the Ground Facilitation */}
            <div style={{ backgroundColor: '#FDF6F0', padding: '40px 32px', borderRadius: '8px', borderTop: '4px solid #C4622D', border: '2px solid #C4622D', position: 'relative', display: 'flex', flexDirection: 'column' }}>
              <p style={{ position: 'absolute', top: '-13px', left: '28px', fontSize: '11px', backgroundColor: '#C4622D', color: 'white', padding: '4px 14px', borderRadius: '20px', fontWeight: '700', letterSpacing: '1px', margin: 0 }}>MOST POPULAR</p>
              <h3 style={{ fontSize: '21px', marginBottom: '8px', color: '#7D3B4E', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.3' }}>On the Ground Facilitation</h3>
              <div style={{ marginBottom: '8px' }}><p style={{ fontSize: '18px', fontWeight: '700', color: '#8B1A2A', margin: '0 0 2px', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>$14,000 MXN</p><p style={{ fontSize: '10px', color: '#A08878', margin: '0' }}>&#8776; $810 USD</p></div>
              <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#5C3A2E', marginBottom: '20px', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.6' }}>Everything in Virtual Guidance — plus an experienced INM facilitator on the ground with you.</p>
              <ul style={{ fontSize: '14px', lineHeight: '1.9', color: '#2C1810', paddingLeft: '18px', marginBottom: '24px', flex: 1 }}>
                <li>All document preparation and review</li>
                <li>Consulate and INM appointments scheduled</li>
                <li>In-person accompaniment to every appointment</li>
                <li>Real-time translation throughout</li>
                <li>Final paperwork preparation</li>
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <a
                  href="https://buy.stripe.com/9B63cv57edDU2Csfag2880P"
                  target="_blank"
                  rel="noreferrer"
                  style={{ backgroundColor: '#C4622D', color: 'white', borderRadius: '6px', padding: '12px 24px', fontSize: '14px', fontWeight: 700, textDecoration: 'none', display: 'inline-block' }}
                >
                  Pay Now
                </a>
                <a
                  href="/residency"
                  style={{ color: '#2C1810', backgroundColor: '#FDF6F0', border: '1px solid #C4622D', borderRadius: '6px', textDecoration: 'none', fontWeight: 700, padding: '12px 24px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}
                >
                  More Info
                </a>
              </div>
            </div>

            {/* Tier 3 — Complex Cases */}
            <div style={{ backgroundColor: '#FDF6F0', padding: '40px 32px', borderRadius: '8px', borderTop: '4px solid #C4622D', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '21px', marginBottom: '8px', color: '#7D3B4E', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.3' }}>Complex Cases — Get a Quote</h3>
              <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#5C3A2E', marginBottom: '16px', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.6' }}>Renewals · Address changes · Business permits · Work permits</p>
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#2C1810', marginBottom: '24px', flex: 1 }}>
                Email Lisa to describe your situation and we will be in touch within 48 hours.
              </p>
              <a
                href="mailto:lisa@intheknowmx.com?subject=Complex%20Residency%20Case%20Inquiry"
                style={{ backgroundColor: '#C4622D', color: 'white', border: 'none', borderRadius: '6px', padding: '12px 24px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}
              >
                Email Lisa
              </a>
            </div>

          </div>

          {/* Important Notice */}
          <div style={{ backgroundColor: '#FAE8E0', border: '1px solid #8B1A2A', borderRadius: '8px', padding: '24px 28px' }}>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#2C1810', margin: 0 }}>
              <strong style={{ color: '#8B1A2A' }}>Important:</strong> Government immigration filing fees are additional and vary by case. Rates above apply to straightforward temporary or permanent residency applications. We are not responsible for changes in immigration policies or processing times. Complex cases are quoted separately.
            </p>
          </div>
        </div>
      </section>

      {/* About the Residency Service */}
      <section style={{ backgroundColor: '#2C1810', padding: '80px 40px', borderTop: '1px solid #3D2418' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#D4A017', fontSize: '11px', letterSpacing: '5px', fontWeight: '700', marginBottom: '20px' }}>MY RESIDENCY TEAM</p>
          <h2 style={{ fontSize: '40px', fontWeight: 'normal', color: 'white', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '24px', lineHeight: '1.2' }}>
            My residency team is your residency team.
          </h2>
          <p style={{ fontSize: '17px', color: '#FDF6F0', lineHeight: '1.85', maxWidth: '700px', margin: '0 auto 20px' }}>
            I connect you directly with licensed Mexican immigration attorneys and facilitators who have navigated hundreds of applications.
            I coordinate every step, translate the process into plain language, and even show up with you when it counts.
          </p>
          <p style={{ fontSize: '17px', color: '#E8A598', lineHeight: '1.85', maxWidth: '680px', margin: '0 auto 40px', fontStyle: 'italic', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>
            Temporary residency, permanent residency, or heritage citizenship — navigated together.
          </p>
          <a href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{
            backgroundColor: '#C4622D',
            color: 'white',
            padding: '16px 40px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: '700',
            display: 'inline-block',
          }}>✦ Book a Strategy Session with My Residency Team</a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1A0E09', padding: '32px 40px', textAlign: 'center' }}>
        <p style={{ color: '#E8A598', fontSize: '14px', marginBottom: '8px' }}>
          © 2026 In The Know Mexico · Lisa May Cobham, Relocation Specialist · San Miguel de Allende, México
        </p>
        <p style={{ color: '#7D3B4E', fontSize: '13px' }}>
          In partnership with <a href="https://sanmiguelrealestate.com.mx" target="_blank" style={{ color: '#E8A598' }}>Tiffany Paige, The Agency SMA</a>
        </p>
      </footer>

    </main>
  )
}
