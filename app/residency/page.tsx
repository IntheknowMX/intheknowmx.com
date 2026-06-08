/* eslint-disable react/no-unescaped-entities */
import ResidencyChecker from '../components/ResidencyChecker'

export const metadata = {
  title: 'Mexican Residency, Sorted — In The Know Mexico',
  description: 'Find out which Mexican residency path is right for you. Answer 6 questions and get a personalized recommendation from Lisa May Cobham, relocation specialist.',
}

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
          <a href="/residency" style={{ color: '#8B1A2A', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>Do I Qualify?</a>
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
          Not outsourced. Not handed off. Lisa and her team are with you every step — from your first question to the day you hold your residency card and beyond.
        </p>
        <div style={{ width: '48px', height: '2px', backgroundColor: '#D4A017', margin: '0 auto 24px' }} />
        <p style={{ fontSize: '18px', color: '#F5D0D8', maxWidth: '560px', margin: '0 auto 40px', lineHeight: '1.75' }}>
          Answer 6 questions and find your path to living in Mexico legally.
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
        }}>✦ Skip the Quiz — Book a Strategy Session</a>
      </section>

      {/* Eligibility Checker */}
      <ResidencyChecker />

      {/* About the Residency Service */}
      <section style={{ backgroundColor: '#2C1810', padding: '80px 40px' }}>
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
