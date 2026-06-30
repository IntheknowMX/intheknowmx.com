'use client'
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { useState } from 'react'
import MexicoPathQuiz from './components/MexicoPathQuiz'
import PaymentModal from './components/PaymentModal'

const CONCIERGE_TIERS = [
  { id: 'Hourly', label: 'Hourly — $650 MXN/hour', stripe: 'https://buy.stripe.com/bJe8wPgPW0R8dh6d282880X', paypal: 'https://paypal.com/ncp/payment/M4Q2XASL63F42' },
  { id: 'Starter', label: 'Starter — 8 hrs — $4,500 MXN', stripe: 'https://buy.stripe.com/aFacN58jq0R8fpe3ry2880Y', paypal: 'https://paypal.com/ncp/payment/MTLDLWHWTV7H6' },
  { id: 'Standard', label: 'Standard — 16 hrs — $8,500 MXN', stripe: 'https://buy.stripe.com/14AfZh7fm8jAb8Y0fm2880Z', paypal: 'https://paypal.com/ncp/payment/3DVWJNJK6UXH2' },
  { id: 'Full Support', label: 'Full Support — 24 hrs — $12,500 MXN', stripe: 'https://buy.stripe.com/6oU3cv43aarI5OEd2828810', paypal: 'https://paypal.com/ncp/payment/3KG54FZ69BVBL' },
]

const MEDICAL_TIERS = [
  { id: 'Hourly', label: 'Hourly (2hr min) — $830 MXN', stripe: 'https://buy.stripe.com/bJe00j1V21Vc90Q5zG2880L', paypal: 'https://paypal.com/ncp/payment/28EMS92CF2KFN' },
  { id: 'Half Day', label: 'Half Day, 4 hrs — $1,400 MXN', stripe: 'https://buy.stripe.com/aFa9AT2Z60R8gti2nu2880M', paypal: 'https://paypal.com/ncp/payment/WCR7QZ5VG7N38' },
  { id: 'Full Day', label: 'Full Day, 8 hrs — $2,625 MXN', stripe: 'https://buy.stripe.com/fZu7sL1V2fM27WM2nu2880I', paypal: 'https://paypal.com/ncp/payment/RT8QXN3KYXCKQ' },
]

const COMPANION_TIERS = [
  { id: 'Hourly', label: 'Hourly — $275 MXN', stripe: 'https://buy.stripe.com/dRmeVdeHOgQ60uk8LS2880G', paypal: 'https://paypal.com/ncp/payment/VACFQ8BYBSV7Q' },
  { id: 'Half Day', label: 'Half Day, 4 hrs — $1,020 MXN', stripe: 'https://buy.stripe.com/eVqaEX43aczQ2Cs1jq28812', paypal: 'https://paypal.com/ncp/payment/LLUHD65U5LB7G' },
  { id: 'Full Day', label: 'Full Day, 8 hrs — $1,750 MXN', stripe: 'https://buy.stripe.com/8x228r1V29nE3GwbY42880F', paypal: 'https://paypal.com/ncp/payment/A7FCQUWXAXGZW' },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [paymentModalOpen, setPaymentModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const [modalStripeUrl, setModalStripeUrl] = useState<string | undefined>()
  const [modalPaypalUrl, setModalPaypalUrl] = useState<string | undefined>()
  const [seniorConciergeTier, setSeniorConciergeTier] = useState('Hourly')
  const [personalAssistantTier, setPersonalAssistantTier] = useState('Hourly')
  const [techConciergeTier, setTechConciergeTier] = useState('Hourly')
  const [travelLogisticsTier, setTravelLogisticsTier] = useState('Hourly')
  const [medicalTier, setMedicalTier] = useState('Hourly')
  const [companionTier, setCompanionTier] = useState('Hourly')

  const handlePayNow = (service: string, stripeUrl?: string, paypalUrl?: string) => {
    setSelectedService(service)
    setModalStripeUrl(stripeUrl)
    setModalPaypalUrl(paypalUrl)
    setPaymentModalOpen(true)
  }

  const closePaymentModal = () => {
    setPaymentModalOpen(false)
    setSelectedService('')
    setModalStripeUrl(undefined)
    setModalPaypalUrl(undefined)
  }

  const renderCardActions = (service: string) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '24px' }}>
      <button
        onClick={() => handlePayNow(service)}
        style={{
          backgroundColor: '#C4622D',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          padding: '12px 24px',
          fontSize: '14px',
          fontWeight: 700,
          cursor: 'pointer',
        }}
      >
        Pay Now
      </button>
    </div>
  )

  return (
    <main className="page-root" style={{ fontFamily: "var(--font-inter, 'Inter', 'Helvetica Neue', sans-serif)", backgroundColor: '#FDF6F0', color: '#2C1810' }}>
      <PaymentModal open={paymentModalOpen} onClose={closePaymentModal} service={selectedService} stripeUrl={modalStripeUrl} paypalUrl={modalPaypalUrl} />
      <style>{`
        .page-root { }
        .main-nav { background-color: #FDF6F0; padding: 20px 40px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #E8A598; position: sticky; top: 0; z-index: 100; }
        .nav-brand { font-size: 18px; font-weight: bold; color: #7D3B4E; letter-spacing: 2px; font-family: var(--font-playfair, 'Playfair Display', Georgia, serif); }
        .nav-right { display: flex; align-items: center; gap: 20px; position: relative; }
        .nav-links { display: flex; gap: 24px; align-items: center; flex-wrap: wrap; }
        .nav-links a { color: #2C1810; text-decoration: none; font-size: 14px; }
        .nav-toggle { display: none; background: none; border: none; cursor: pointer; padding: 6px 8px; font-size: 24px; color: #2C1810; line-height: 1; }
        .mobile-menu-close-row { display: none; }
        .mobile-menu-cta { display: none; }
        .nav-cta { background-color: #C4622D; color: white; padding: 10px 22px; border-radius: 4px; text-decoration: none; font-size: 14px; font-weight: 600; letter-spacing: 0.5px; white-space: nowrap; }
        .hero-section { position: relative; min-height: 90vh; overflow: hidden; }
        .hero-img { object-fit: cover; object-position: center top; }
        .hero-gradient { position: absolute; inset: 0; z-index: 1; pointer-events: none; background: linear-gradient(to left, rgba(253,246,240,0.93) 0%, rgba(253,246,240,0.93) 8%, rgba(253,246,240,0.73) 19%, rgba(253,246,240,0.45) 30%, rgba(253,246,240,0.19) 38%, rgba(253,246,240,0) 42%), linear-gradient(to right, rgba(253,246,240,0.91) 0%, rgba(253,246,240,0.91) 28%, rgba(253,246,240,0.65) 41%, rgba(253,246,240,0.35) 51%, rgba(253,246,240,0.10) 56.5%, rgba(253,246,240,0) 58.5%); }
        .hero-copy { position: absolute; left: 0; top: 0; bottom: 0; width: 56%; z-index: 2; display: flex; flex-direction: column; justify-content: center; padding: 80px 48px 80px 92px; }
        .hero-copy p.lead { color: #7D3B4E; font-size: 14px; letter-spacing: 7px; margin-bottom: 28px; font-weight: 700; }
        .hero-copy h1 { color: #2C1810; font-size: 76px; line-height: 0.93; margin-bottom: 32px; font-weight: normal; font-family: var(--font-playfair, 'Playfair Display', Georgia, serif); }
        .hero-copy h1 span { color: #7D3B4E; }
        .hero-copy .hero-description { color: #2C1810; font-size: 20px; line-height: 1.8; margin-bottom: 40px; }
        .hero-buttons { display: flex; gap: 20px; flex-wrap: wrap; align-items: center; }
        .button-link { display: inline-flex; align-items: center; justify-content: center; border-radius: 4px; text-decoration: none; font-size: 15px; font-weight: 700; padding: 16px 48px; }
        .button-link.secondary { background: none; color: #8B1A2A; padding: 16px 0; font-weight: 600; }
        .responsive-img { width: 100%; height: auto; display: block; }
        .content-wrapper { max-width: 1100px; width: 100%; margin: 0 auto; padding: 0 20px; box-sizing: border-box; }
        .responsive-section { padding: 80px 40px; }
        .stats-grid { display: grid; grid-template-columns: repeat(5, minmax(120px, 1fr)); gap: 40px; justify-items: center; width: 100%; }
        .stats-card { text-align: center; }
        .stats-card .stat-number { color: #E8A598; font-size: 34px; font-weight: bold; font-family: var(--font-playfair, 'Playfair Display', Georgia, serif); }
        .stats-card .stat-label { color: #FDF6F0; font-size: 12px; letter-spacing: 2px; margin-top: 4px; }
        .ticker-section { background-color: #2C1810; padding: 16px 0; overflow: hidden; white-space: nowrap; }
        .ticker-track { display: inline-flex; animation: ticker 40s linear infinite; }
        .ticker-item { display: inline-flex; align-items: center; padding: 0 8px; }
        .ticker-item .quote { color: #FDF6F0; font-style: italic; font-size: 14px; }
        .ticker-item .source { color: #E8A598; font-size: 14px; margin-left: 8px; }
        .ticker-item .separator { color: #8B1A2A; margin: 0 28px; font-size: 16px; }
        .pull-quotes-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 48px; }
        .why-grid { display: grid; grid-template-columns: repeat(3, minmax(280px, 1fr)); gap: 28px; }
        .service-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 28px; }
        .pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; }
        .press-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 20px; }
        .testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .button-row { display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; }
        .hero-columns, .two-column-stack, .flex-stack { display: flex; gap: 70px; align-items: center; flex-wrap: wrap; }
        .hero-columns > *, .two-column-stack > * { flex: 1 1 300px; }
        .footer-links { display: flex; gap: 24px; flex-wrap: wrap; justify-content: center; }
        .footer-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 48px; margin-bottom: 32px; }
        .footer-col h4 { color: #D4A017; font-size: 14px; font-weight: 700; letter-spacing: 1px; margin-bottom: 16px; font-family: var(--font-playfair, 'Playfair Display', Georgia, serif); }
        .footer-col a { color: #FDF6F0; text-decoration: none; font-size: 13px; line-height: 1.9; display: block; }
        .footer-col a:hover { color: #E8A598; }
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .payment-methods-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px 28px; }
        .buy-cols { display: flex; gap: 56px; align-items: flex-start; }
        .buy-col-text { flex: 0 0 55%; order: 1; }
        .buy-col-img { flex: 0 0 40%; order: 2; text-align: center; }
        .pricing-booking-row { display: flex; gap: 32px; align-items: flex-start; }
        @media (max-width: 767px) {
          .main-nav { padding: 16px 20px; }
          .nav-right { position: static; }
          .nav-cta { display: none; }
          .nav-links { display: none; position: absolute; top: 100%; left: 0; width: 100%; background: #FDF6F0; box-shadow: 0 8px 24px rgba(44,24,16,.12); flex-direction: column; z-index: 110; border-top: 1px solid #E8A598; }
          .nav-links.open { display: flex; }
          .nav-links a { padding: 14px 24px; border-bottom: 1px solid #E8A598; color: #2C1810; font-size: 15px; }
          .nav-toggle { display: flex; align-items: center; justify-content: center; }
          .mobile-menu-close-row { display: flex; justify-content: flex-end; padding: 10px 16px; border-bottom: 1px solid #E8A598; }
          .mobile-menu-close-btn { background: none; border: none; font-size: 22px; cursor: pointer; color: #2C1810; padding: 4px 8px; line-height: 1; }
          .mobile-menu-cta { display: block; margin: 16px !important; background-color: #C4622D !important; color: white !important; text-align: center; padding: 16px !important; border-radius: 4px; text-decoration: none; font-weight: 700; font-size: 15px; border-bottom: none !important; }
          .hero-section { min-height: 82vh; }
          .hero-img { object-position: 31% top; }
          .hero-gradient { background: linear-gradient(to right, rgba(253,246,240,0.90) 0%, rgba(253,246,240,0.90) 55%, rgba(253,246,240,0.65) 68%, rgba(253,246,240,0.28) 80%, rgba(253,246,240,0) 88%); }
          .hero-copy { width: 88%; padding: 40px 20px 40px 32px; }
          .hero-copy h1 { font-size: 48px !important; line-height: 0.95 !important; }
          .hero-buttons { flex-direction: column; width: 100%; }
          .button-link { width: 100%; padding: 16px 20px; }
          .responsive-section { padding: 48px 20px; }
          .content-wrapper { padding: 0; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
          .ticker-track { animation-duration: 55s; }
          .footer-grid { grid-template-columns: 1fr; gap: 32px; }
          .pull-quotes-grid, .why-grid, .press-grid, .service-grid, .pricing-grid, .testimonials-grid { grid-template-columns: 1fr; }
          .payment-methods-grid { grid-template-columns: 1fr; }
          .pricing-booking-row { flex-direction: column; }
          .press-grid { grid-template-columns: repeat(2, 1fr); }
          .button-row { flex-direction: column; align-items: stretch; }
          .hero-columns, .two-column-stack, .flex-stack { flex-direction: column; }
          main h1 { font-size: 36px !important; }
          main h2 { font-size: 28px !important; }
          main h3 { font-size: 20px !important; }
          main h4 { font-size: 18px !important; }
          .responsive-img { max-width: 100%; height: auto; }
          .buy-cols { flex-direction: column; }
          .buy-col-text, .buy-col-img { flex: 1 1 auto; width: 100%; order: unset; }
        }
      `}</style>

      {/* Navigation */}
      <nav className="main-nav">
        <div className="nav-brand">IN THE KNOW MEXICO</div>
        <div className="nav-right">
          <button className="nav-toggle" aria-label="Toggle navigation" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            ☰
          </button>
          <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <div className="mobile-menu-close-row">
              <button className="mobile-menu-close-btn" aria-label="Close menu" onClick={() => setMobileMenuOpen(false)}>✕</button>
            </div>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="/residency" onClick={() => setMobileMenuOpen(false)}>Residency</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>Concierge</a>
            <a href="#rentals" onClick={() => setMobileMenuOpen(false)}>Rentals</a>
            <a href="#properties" onClick={() => setMobileMenuOpen(false)}>Owning</a>
            <a href="#caretaking" onClick={() => setMobileMenuOpen(false)}>Home & Pet</a>
            <a href="#welcome-table" onClick={() => setMobileMenuOpen(false)}>Welcome Table</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
            <a className="mobile-menu-cta" href="#planning-calls" onClick={() => setMobileMenuOpen(false)}>Book a Planning Call</a>
          </div>
          <a className="button-link nav-cta" href="#planning-calls">Book a Planning Call</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-section">
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/images/herocropped.jpg"
            alt="San Miguel de Allende"
            fill
            priority
            className="hero-img"
            style={{ filter: 'contrast(1.06) saturate(1.08)' }}
          />
        </div>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse at center, transparent 52%, rgba(18,8,4,0.26) 100%)' }} />
        <div className="hero-gradient" />
        <div className="hero-copy">
          <p className="lead">SAN MIGUEL DE ALLENDE · MEXICO</p>
          <h1>San Miguel<br /><span>Insider.</span></h1>
          <div style={{ width: '48px', height: '2px', backgroundColor: '#D4A017', marginBottom: '28px' }} />
          <p className="hero-description">Your person on the ground since 2014.</p>
          <div className="hero-buttons">
            <a className="button-link" style={{ backgroundColor: '#C4622D', color: 'white' }} href="#planning-calls">Book a Planning Call</a>
            <a className="button-link secondary" href="/residency">Find Your Residency Path →</a>
          </div>
        </div>
      </section>
      {/* Stats Bar */}
      <section className="responsive-section" style={{ backgroundColor: '#2C1810' }}>
        <div className="content-wrapper stats-grid">
          {[
            { number: '12+', label: 'Years in Mexico' },
            { number: '100%', label: 'In-Person Service' },
            { number: '150+', label: 'Reviews' },
            { number: '62+', label: 'Repeat Clients' },
            { number: '24/7', label: 'On the Ground' },
          ].map((stat) => (
            <div key={stat.label} className="stats-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Ticker Tape */}
      <section className="ticker-section">
        <div className="ticker-track">
          {[0, 1].map((copy) => (
            <span key={copy} className="ticker-item">
              {[
                { text: '"We never worried once."', name: 'Amy H.' },
                { text: '"The hardest part about having her is saying goodbye."', name: 'Michelle & Scott' },
                { text: '"My home was running like a well-oiled machine."', name: 'Janet A.' },
                { text: '"Left our house perfectly clean and exactly how we left it, just a little better."', name: 'Claire H.' },
                { text: '"I always feel safe when she sits my pets."', name: 'Karla S.' },
                { text: '"Lisa is a god send."', name: 'Amy H.' },
                { text: '"You will not be disappointed."', name: 'Maggie G.' },
                { text: '"She goes above and beyond."', name: 'Kathryn W.' },
              ].map((r) => (
                <span key={r.name + r.text} className="ticker-item">
                  <span style={{ color: '#D4A017', marginRight: '10px' }}>⭐⭐⭐⭐⭐</span>
                  <span className="quote">{r.text}</span>
                  <span className="source">— {r.name}</span>
                  <span className="separator">· · ·</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </section>

      {/* Google Reviews */}
      <section className="responsive-section" style={{ backgroundColor: '#FDF6F0' }}>
        <div className="content-wrapper">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '16px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'white', fontSize: '15px', fontWeight: '700', color: '#4285F4', fontFamily: 'sans-serif', flexShrink: 0 }}>G</span>
            <p style={{ color: '#D4A017', fontSize: '11px', letterSpacing: '5px', fontWeight: '700', margin: 0 }}>VERIFIED GOOGLE REVIEWS</p>
          </div>
          <h2 style={{ fontSize: '32px', fontWeight: 'normal', color: '#8B1A2A', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", textAlign: 'center', marginBottom: '8px' }}>
            What Clients Are Saying
          </h2>
          <p style={{ fontSize: '16px', color: '#2C1810', textAlign: 'center', marginBottom: '32px' }}>Recent reviews from Google</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '32px' }}>
            {[
              { name: 'Breana Foley', excerpt: 'She took the time to listen deeply, ensuring that I felt completely heard and understood. Her dedication and support made a world of difference.', time: '6 hours ago' },
              { name: 'Charlotte Randall', excerpt: "Lisa has the best connections with people and businesses in SMA. Lisa's energy is contagious—she is definitely the person 'In the Know Mexico.'", time: '6 days ago', repeat: true },
              { name: 'Ursula Anne', excerpt: "I had the time of my life! Lisa was incredibly knowledgeable and made the entire experience effortless. This wasn't a tourist checklist—it was a meaningful, immersive experience.", time: '6 days ago', repeat: true },
              { name: 'Kirsten Guisto', excerpt: 'We highly recommend Lisa! She uncovered our wants and needs perfectly and helped ensure a smooth transition. She is very knowledgeable about San Miguel.', time: 'a week ago' },
              { name: 'Cliff Cunningham', excerpt: 'Lisa is a true leader and inspiration. She has a way of traversing through dilemmas with ease. She continues to help me get on the right path towards my expat conquest.', time: 'a week ago', repeat: true },
              { name: 'Brenda Miles', excerpt: "If you're lucky enough to cross paths with Lisa, you'll discover she's one of those rare people who seems to know how to solve just about any problem. In the Know Mexico is having a trusted friend in your corner when you need one most.", time: 'a week ago' },
            ].map((r) => (
              <div key={r.name} style={{ backgroundColor: 'white', border: '1px solid #E8A598', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div style={{ color: '#D4A017', fontSize: '16px', marginBottom: '12px' }}>⭐⭐⭐⭐⭐</div>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#2C1810', fontStyle: 'italic', marginBottom: '12px' }}>&ldquo;{r.excerpt}&rdquo;</p>
                <div style={{ fontWeight: 'bold', color: '#8B1A2A', fontSize: '14px' }}>{r.name}</div>
                {r.repeat && <span style={{ display: 'inline-block', backgroundColor: '#D4A017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.5px', padding: '2px 8px', borderRadius: '10px', marginTop: '4px' }}>Repeat Client</span>}
                <div style={{ color: '#999', fontSize: '12px', marginTop: '2px' }}>{r.time}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <a
              href="https://www.google.com/maps/place/In+The+Know+Mexico/@20.9232722,-100.7407502,17z/data=!3m1!4b1!4m6!3m5!1s0x819e4b8232f542ef:0x8d04217d451b21c2!8m2!3d20.9232722!4d-100.7407502!16s%2Fg%2F11n9p8tm40?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block', backgroundColor: '#C4622D', color: '#FDF6F0', textDecoration: 'none', borderRadius: '6px', padding: '12px 28px', fontSize: '16px', fontWeight: 'bold', marginTop: '32px' }}
            >
              See all reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* Why Lisa? */}
      <section className="responsive-section" style={{ backgroundColor: '#FDF6F0' }}>
        <div className="content-wrapper">
          <p style={{ color: '#D4A017', fontSize: '11px', letterSpacing: '5px', fontWeight: '700', marginBottom: '16px', textAlign: 'center' }}>WHY LISA &amp; THE IN THE KNOW MEXICO TEAM</p>
          <h2 style={{ fontSize: '40px', fontWeight: 'normal', color: '#2C1810', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", textAlign: 'center', lineHeight: '1.2', maxWidth: '700px', margin: '0 auto 24px' }}>
            Mexico is a life, not a checklist.
          </h2>
          <p style={{ fontSize: '17px', lineHeight: '1.8', color: '#5C3A2E', textAlign: 'center', maxWidth: '680px', margin: '0 auto 48px' }}>
            Residency and housing are just the beginning. The real work is building a life you actually love — your grocery store, your doctor, your gym, your people, your Saturday morning, your favorite table at your favorite restaurant. That's where we come in.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
            {[
              { emoji: '📍', title: 'Known in San Miguel.', body: '11 years of real relationships — landlords, attorneys, doctors, contractors, household staff, and neighbors. Not a contact list. A community.' },
              { emoji: '🤝', title: 'Trusted by the community.', body: '300+ five-star reviews. Not because nothing ever goes wrong — but because when it does, Lisa handles it before you have to. She clears the problem. You come home to exactly what you left. Ready to welcome you back to your charmed life in San Miguel.' },
              { emoji: '👩🏽', title: 'Lisa shows up. Every time. On time.', body: "Residency coordination. Rental showings. Bureaucratic roadblocks. The technological moments that put your life on hold — blocked SSA accounts, Mexican government portals, health insurance reimbursement, banking, money transfers, online bill pay, booking travel. Whatever stands between you and your Mexico life, Lisa shows up and gets it handled. Eleven years of building a real expat life here means the right doors tend to open." },
            ].map((card) => (
              <div key={card.title} style={{ backgroundColor: 'white', padding: '36px 28px', borderRadius: '8px', borderTop: '4px solid #8B1A2A', boxShadow: '0 2px 12px rgba(44,24,16,0.06)' }}>
                <div style={{ fontSize: '32px', marginBottom: '14px' }}>{card.emoji}</div>
                <h3 style={{ fontSize: '22px', fontWeight: 'normal', color: '#2C1810', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '14px' }}>{card.title}</h3>
                <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#5C3A2E' }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MexicoPathQuiz />

      {/* Press / Media */}
      <section className="responsive-section" style={{ backgroundColor: '#2C1810' }}>
        <div className="content-wrapper">
          <p style={{ color: '#D4A017', fontSize: '11px', letterSpacing: '5px', marginBottom: '16px', textAlign: 'center', fontWeight: '700' }}>AS SEEN &amp; HEARD</p>
          <h2 style={{ fontSize: '36px', fontWeight: 'normal', marginBottom: '48px', textAlign: 'center', color: 'white', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>
            Lisa May Cobham in the Media
          </h2>
          <div className="press-grid">
            {[
              { img: '/images/press-business-insider.webp', label: 'Business Insider', href: 'https://www.businessinsider.com/how-to-be-an-expat-digital-nomad-living-abroad-2016-10' },
              { img: '/images/press-american-real.png', label: 'American Real', href: 'https://youtu.be/F7Nowbi5Am8' },
              { img: '/images/press-london-real.png', label: 'London Real · Real Talk', href: 'https://youtu.be/xKV6V0BRjvk' },
              { img: '/images/press-quiet-broad.png', label: 'A Quiet Broad Abroad', href: 'https://www.youtube.com/live/YY3Jkjbcbeg' },
              { img: '/images/press-over50.png', label: 'Over 50 Expat Interview', href: 'https://www.youtube.com/live/YY3Jkjbcbeg' },
            ].map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="press-card" style={{ display: 'block', borderRadius: '6px', overflow: 'hidden', textDecoration: 'none', backgroundColor: '#1A0E09' }}>
                <Image src={item.img} alt={item.label} className="responsive-img" loading="lazy" width={600} height={338} style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: '14px 16px', textAlign: 'center' }}>
                  <span style={{ color: '#FDF6F0', fontSize: '13px', letterSpacing: '0.5px' }}>{item.label}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Divider stripe */}
      <div style={{ backgroundColor: '#C4622D', height: '10px', width: '100%' }} />

      {/* About */}
      <section id="about" className="responsive-section">
        <div className="content-wrapper two-column-stack" style={{ alignItems: 'center' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
          <p style={{ color: '#7D3B4E', fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', fontWeight: '600' }}>ABOUT LISA MAY COBHAM</p>
          <h2 style={{ fontSize: '42px', fontWeight: 'normal', marginBottom: '24px', lineHeight: '1.2', color: '#2C1810', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>
            Known here. Trusted here. Since 2014.
          </h2>
          <p style={{ fontSize: '17px', lineHeight: '1.85', marginBottom: '20px', color: '#2C1810' }}>
            I didn't plan to stay. San Miguel charmed me into it. The joy of this city — the light, the people, the pace, the way life actually feels here — made leaving impossible. Twelve years later I am still in Mexico, still discovering, and still completely in love with this country.
          </p>
          <p style={{ fontSize: '17px', lineHeight: '1.85', marginBottom: '20px', color: '#2C1810' }}>
            I work with <strong>Mexico newcomers</strong> who need more than a checklist. They need someone
            who already knows the plumber, the notary, the landlord, and the unspoken rules
            that no guidebook will tell you. <strong>Friend-level trust. Professional-grade follow-through.</strong>
          </p>
          <p style={{ fontSize: '17px', lineHeight: '1.85', color: '#2C1810' }}>
            The town knows me. My clients know me. Now you do too.
          </p>
        </div>
        <div style={{ flex: 1, minWidth: '280px', textAlign: 'center' }}>
          <Image
            src="/images/headshot.jpg"
            alt="Lisa May Cobham — Relocation Specialist, In The Know Mexico"
            className="responsive-img"
            loading="lazy"
            width={420}
            height={560}
            style={{ width: '100%', maxWidth: '420px', borderRadius: '8px', objectFit: 'cover' }}
          />
          <p style={{ fontSize: '13px', color: '#7D3B4E', marginTop: '12px', letterSpacing: '1px' }}>
            📍 San Miguel de Allende, Mexico
          </p>
        </div>
        </div>
      </section>

      <section id="planning-calls" className="responsive-section" style={{ backgroundColor: '#FDF6F0' }}>
        <div className="content-wrapper">
          <p style={{ color: '#C4622D', fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', textAlign: 'center', fontWeight: '600' }}>PLAN YOUR MOVE</p>
          <h2 style={{ fontSize: '42px', fontWeight: 'normal', marginBottom: '20px', textAlign: 'center', color: '#2C1810', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>
            Planning Call
          </h2>
          <p style={{ color: '#5C3A2E', fontSize: '17px', textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px', lineHeight: '1.75' }}>
            Before you pack a single box or fill out a single form — let's talk. A planning call is where clarity begins. Whether you are still dreaming, ready to act, or working through fear — there is a call designed for exactly where you are right now.
          </p>

          {/* Planning Call cards */}
          <div className="service-grid" style={{ marginBottom: '28px' }}>
            {[
              {
                emoji: '🗺️',
                title: 'The Relocation Planning Call',
                subtitle: 'Everything in your head about Mexico — sorted.',
                body: "You'll complete a brief pre-call questionnaire so we arrive prepared and nothing gets missed. In our one-hour conversation we map your housing, residency, budget, timeline, pets, furniture, remote income, healthcare, and your personal next steps. Within 48 hours you receive a written summary of our call, specific answers to every question you raised, any additional resources I promised, and a timeline. You don't just leave with clarity — you leave with a document that becomes your Mexico roadmap.",
                closing: 'You will know exactly what your next step is.',
                priceTag: '$1,600 MXN',
              },
              {
                emoji: '📋',
                title: 'From Dream to Action Plan',
                subtitle: "You've been talking about Mexico for years. Let's turn that into a real outline.",
                body: "This call is for the serious dreamer who needs structure. Together we build a step-by-step action plan — what to do first, what to do next, and what can wait. We identify the gaps between where you are now and where you want to be, and we close them one by one. We cover the practical questions you've been putting off — housing options, neighborhood fit, budget reality, income sources, healthcare access, and what moving actually looks like for your specific life. Nothing vague. Nothing generic. A real plan built around your real situation. You've done the dreaming. This is where the doing begins.",
                closing: "Dreams don't move you to Mexico. Plans do.",
                priceTag: '$1,600 MXN',
              },
              {
                emoji: '💛',
                title: 'Moving Past Hesitation',
                subtitle: 'Sometimes the only thing standing between you and the life you want is fear.',
                body: "The plan is ready, but you're not, and that's worth taking seriously. Whatever's holding you back, whether money, timing, or the quiet fear you haven't said out loud, we talk it through honestly. We look at what's real versus what's imagined, what's a legitimate obstacle versus what's resistance. Most people who book this call already know they want to go. They just need someone to think it through with — not to be sold, but to be heard and helped. You leave with clarity on whether Mexico is actually right for you right now — and if it is, what your real next step is.",
                closing: "You don't need to have it all figured out. You simply need a brainstorming session.",
                priceTag: '$1,600 MXN',
              },
            ].map((card) => (
              <div key={card.title} style={{ backgroundColor: 'white', padding: '40px 32px', borderRadius: '8px', borderTop: '4px solid #C4622D', display: 'flex', flexDirection: 'column', boxShadow: '0 2px 12px rgba(44,24,16,0.07)' }}>
                <div style={{ fontSize: '34px', marginBottom: '14px' }}>{card.emoji}</div>
                <h3 style={{ fontSize: '21px', marginBottom: '10px', color: '#7D3B4E', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.3' }}>{card.title}</h3>
                {card.priceTag && <div style={{ marginBottom: '8px' }}><p style={{ fontSize: '18px', fontWeight: '700', color: '#8B1A2A', margin: '0 0 2px', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>{card.priceTag}</p><p style={{ fontSize: '10px', color: '#A08878', margin: '0' }}>&#8776; $90 USD</p></div>}
                <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#5C3A2E', marginBottom: '16px', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.6' }}>{card.subtitle}</p>
                <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#2C1810', marginBottom: '16px', flex: 1 }}>{card.body}</p>
                <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#8B1A2A', marginBottom: '16px', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>{card.closing}</p>
                {renderCardActions(card.title)}
              </div>
            ))}
          </div>

          {/* Planning Calls Footer Note */}
          <div style={{ backgroundColor: '#FAE8E0', borderLeft: '4px solid #D4A017', padding: '28px 32px', borderRadius: '8px' }}>
            <p style={{ fontSize: '15px', fontWeight: '700', color: '#7D3B4E', marginBottom: '14px', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>All Planning Calls Include:</p>
            <ul style={{ fontSize: '15px', lineHeight: '1.9', color: '#2C1810', paddingLeft: '20px', margin: 0 }}>
              <li>A pre-call questionnaire so we arrive prepared and nothing gets missed</li>
              <li>A 48-hour written follow-up with a summary, specific answers to every question you raised, and any resources promised during our call</li>
              <li>Real steps to a plan at your fingertips before the week is out</li>
            </ul>
          </div>

          {/* Booking & Cancellation Policy */}
          <div style={{ marginTop: '40px', backgroundColor: '#2C1810', borderRadius: '12px', padding: '32px 36px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'normal', color: '#FDF6F0', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '16px' }}>Booking &amp; Cancellation Policy</h3>
            <p style={{ fontSize: '15px', lineHeight: '1.85', color: '#E8A598', marginBottom: '14px' }}>
              Full payment is required to confirm your booking. You will receive a confirmation email with your intake questionnaire within 24 hours of payment. Please complete it before your session so we arrive fully prepared.
            </p>
            <p style={{ fontSize: '15px', lineHeight: '1.85', color: '#E8A598', margin: 0 }}>
              Cancellations made 48 hours or more before your session receive a full credit toward a future booking. Cancellations within 24 hours of your session are non-refundable. No-shows forfeit the full session fee. Rescheduling is welcome with 48 hours notice, one free reschedule per booking.
            </p>
          </div>
        </div>
      </section>

      <section id="residency" className="responsive-section" style={{ backgroundColor: '#2C1810' }}>
        <div className="content-wrapper">
          <p style={{ color: '#D4A017', fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', textAlign: 'center', fontWeight: '600' }}>RESIDENCY</p>
          <h2 style={{ fontSize: '42px', fontWeight: 'normal', marginBottom: '20px', textAlign: 'center', color: 'white', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>
            Mexican Residency, Sorted
          </h2>
          <p style={{ color: '#E8A598', fontSize: '17px', textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px', lineHeight: '1.8' }}>
            We coordinate every step, set your appointments, and walk in with you. Temporary residency, permanent residency — navigated together by people who know Mexico and this process. You don't show up to a consulate with a stack of papers you don't understand. You arrive prepared and confident. We review your eligibility together, identify the right path for your specific situation, and handle the coordination from start to finish. Our Team stays present until you are fully taken care of — from your first question to the day you hold your residency card and beyond.
          </p>

          <div className="service-grid" style={{ marginBottom: '28px' }}>

            {/* Card 1 — Virtual Guidance */}
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
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '24px' }}>
                <button onClick={() => handlePayNow('Virtual Guidance')} style={{ backgroundColor: '#C4622D', color: 'white', border: 'none', borderRadius: '6px', padding: '12px 24px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>Pay Now</button>
              </div>
            </div>

            {/* Card 2 — On the Ground Facilitation */}
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
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '24px' }}>
                <button onClick={() => handlePayNow('On the Ground Facilitation')} style={{ backgroundColor: '#C4622D', color: 'white', border: 'none', borderRadius: '6px', padding: '12px 24px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>Pay Now</button>
              </div>
            </div>

            {/* Card 3 — Other Residency Services */}
            <div style={{ backgroundColor: '#FDF6F0', padding: '40px 32px', borderRadius: '8px', borderTop: '4px solid #C4622D', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '21px', marginBottom: '8px', color: '#7D3B4E', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.3' }}>Other Residency Services</h3>
              <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#5C3A2E', marginBottom: '16px', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.6' }}>Renewals · Address changes · Business permits · Work permits</p>
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#2C1810', marginBottom: '20px', flex: 1 }}>
                Message or email Lisa to describe your situation and we'll be in touch within 48 hours.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <a href="https://wa.me/5214731218554" target="_blank" rel="noreferrer" style={{ backgroundColor: '#29A745', color: 'white', borderRadius: '6px', padding: '12px 24px', fontSize: '14px', fontWeight: 700, textDecoration: 'none', display: 'inline-block' }}>WhatsApp Lisa</a>
                <a href="mailto:lisa@intheknowmx.com" style={{ color: '#2C1810', backgroundColor: '#FDF6F0', border: '1px solid #C4622D', borderRadius: '6px', textDecoration: 'none', fontWeight: 700, padding: '12px 24px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>Lisa@intheknowmx.com</a>
              </div>
            </div>

          </div>

          {/* Notice box */}
          <div style={{ backgroundColor: '#FAE8E0', border: '1px solid #8B1A2A', borderRadius: '8px', padding: '24px 28px' }}>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#2C1810', margin: 0 }}>
              <strong style={{ color: '#8B1A2A' }}>Important:</strong> Government immigration filing fees are additional and vary by case. Rates above apply to straightforward temporary or permanent residency applications. We are not responsible for changes in immigration policies or processing times. Other residency services are quoted separately.
            </p>
          </div>

          {/* Booking & Cancellation Policy */}
          <div style={{ marginTop: '40px', backgroundColor: '#1A0F09', borderRadius: '12px', padding: '32px 36px', border: '1px solid #3D2418' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'normal', color: '#FDF6F0', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '16px' }}>Booking &amp; Cancellation Policy</h3>
            <p style={{ fontSize: '15px', lineHeight: '1.85', color: '#E8A598', margin: 0 }}>
              Full payment is required to confirm your booking. Cancellations made 48 hours or more before your session receive a full credit toward a future booking. Cancellations within 24 hours of your session are non-refundable. No-shows forfeit the full session fee. Rescheduling is welcome with 48 hours notice, one free reschedule per booking.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="responsive-section" style={{ backgroundColor: '#7D3B4E' }}>
        <div className="content-wrapper">
          <p style={{ color: '#E8C47A', fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', textAlign: 'center', fontWeight: '600' }}>CONCIERGE</p>
          <h2 style={{ fontSize: '42px', fontWeight: 'normal', marginBottom: '16px', textAlign: 'center', color: 'white', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>
            Your Mexico life, handled by an experienced expat with the tech and logistics to back it up.
          </h2>
          <p style={{ color: '#F5E0E6', fontSize: '17px', textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px', lineHeight: '1.75' }}>
            Newcomer concierge support, right at your fingertips. Mexico has a learning curve. Everyone hits it. The difference is whether you hit it alone or with someone who has already figured it out. I can do it for you, or I can show you how Mexico works. Banking, utilities, household staff, lease review, internet setup, government accounts, healthcare, post-surgery support, Mexican driver's license, car nationalization, setting up a business, travel assistance, home and pet security while you are away, Mexican phone number, we will handle it together until you take the reins. That's the goal.
          </p>

          <div className="service-grid">

            {/* What We Handle — full-width */}
            <div style={{ gridColumn: '1 / -1', backgroundColor: '#FDF6F0', padding: '40px 32px', borderRadius: '8px', borderTop: '4px solid #C4622D' }}>
              <h3 style={{ fontSize: '21px', marginBottom: '20px', color: '#7D3B4E', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.3' }}>What We Handle</h3>
              <ul className="what-we-handle-list" style={{ fontSize: '14px', color: '#2C1810' }}>
                <li>• Utility setup &amp; bill payment</li>
                <li>• Mexican bank account opening</li>
                <li>• SIM card &amp; internet setup</li>
                <li>• Bilingual lease review &amp; negotiation</li>
                <li>• Trusted referrals: gardeners, household help, contractors</li>
                <li>• Property management &amp; construction oversight</li>
                <li>• Reasonable home &amp; clothing shopping guidance</li>
                <li>• SSA &amp; Mexican government account setup</li>
                <li>• Post-surgery companionship &amp; recovery support</li>
                <li>• Shipping logistics, visa preparation, finding your gym, your doctor, your favorite coffee spot</li>
              </ul>
              <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#8B1A2A', margin: 0, fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>Scroll down for more detailed services.</p>
            </div>

            {/* TOP ROW: Personal Assistant · Tech Concierge · Travel & Logistics */}

            <div id="personal-assistant" style={{ backgroundColor: '#FDF6F0', padding: '40px 32px', borderRadius: '8px', borderTop: '4px solid #C4622D', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '34px', marginBottom: '14px' }}>🛒</div>
              <h3 style={{ fontSize: '21px', marginBottom: '14px', color: '#7D3B4E', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.3' }}>Personal Assistant</h3>
              <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#5C3A2E', marginBottom: '16px', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.6' }}>The errands, the projects, the things that pile up when life gets busy.</p>
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#2C1810', marginBottom: '16px' }}>
                Sometimes you just need an extra pair of hands. Whether it's running errands across town, picking up groceries from your favorite market, light cooking for the week, or tackling that home project that's been sitting on your list — this is where I come in.
              </p>
              <ul style={{ fontSize: '14px', lineHeight: '1.9', color: '#2C1810', paddingLeft: '18px', marginBottom: '8px' }}>
                <li>🚗 Errand runs using your vehicle</li>
                <li>🛍️ Shopping — groceries, markets, specialty stores</li>
                <li>🍳 Light cooking and meal prep</li>
                <li>🔧 Special home projects and coordination</li>
                <li>📦 Deliveries, pickups and drop-offs</li>
                <li>🛒 Set up grocery deliveries</li>
                <li>📺 Set up TV apps</li>
                <li>🌿 Anything else that needs doing</li>
              </ul>
              <p style={{ fontSize: '13px', fontWeight: '700', color: '#7D3B4E', textTransform: 'uppercase', letterSpacing: '1px', margin: '16px 0 8px' }}>Office Assistance</p>
              <ul style={{ fontSize: '14px', lineHeight: '1.9', color: '#2C1810', paddingLeft: '18px', marginBottom: '16px', flex: 1 }}>
                <li>📞 Business calls: local and abroad</li>
                <li>📊 Spreadsheets, documents, and presentations</li>
                <li>📱 Social media setup, management, and scheduling. Editing videos, shorts, and posts.</li>
                <li>👤 Customer account management</li>
                <li>✍️ Blog management and editing</li>
                <li>📅 Appointments</li>
                <li>📹 Zoom setup and call management, during and post-meeting</li>
                <li>📝 Meeting minutes</li>
                <li>📋 Basic project management</li>
                <li>🎉 Event support</li>
              </ul>
              <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#8B1A2A', marginBottom: '16px', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>You have a life to live. Let's keep it running smoothly.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                {CONCIERGE_TIERS.map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setPersonalAssistantTier(tier.id)}
                    style={{
                      backgroundColor: personalAssistantTier === tier.id ? '#C4622D' : '#FDF6F0',
                      color: personalAssistantTier === tier.id ? 'white' : '#2C1810',
                      border: personalAssistantTier === tier.id ? '1px solid #C4622D' : '1px solid #2C1810',
                      borderRadius: '6px',
                      padding: '10px 16px',
                      fontSize: '14px',
                      fontWeight: personalAssistantTier === tier.id ? 700 : 400,
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
              <button
                onClick={() => {
                  const tier = CONCIERGE_TIERS.find(t => t.id === personalAssistantTier)
                  if (tier) handlePayNow('Personal Assistant', tier.stripe, tier.paypal)
                }}
                style={{ backgroundColor: '#C4622D', color: 'white', border: 'none', borderRadius: '6px', padding: '12px 24px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', width: '100%' }}
              >
                Pay Now
              </button>
            </div>

            <div id="tech-concierge" style={{ backgroundColor: '#FDF6F0', padding: '40px 32px', borderRadius: '8px', borderTop: '4px solid #C4622D', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '34px', marginBottom: '14px' }}>💻</div>
              <h3 style={{ fontSize: '21px', marginBottom: '14px', color: '#7D3B4E', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.3' }}>Tech Concierge</h3>
              <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#5C3A2E', marginBottom: '16px', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.6' }}>Technology should make your life easier. When it doesn't — call Lisa.</p>
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#2C1810', marginBottom: '16px' }}>
                Living in Mexico runs on apps these days, your bank, your ride, your prescriptions, your streaming, your government portals. When something won't connect, update, or cooperate, I sort it out, and show you how it works so it's less of a mystery next time. No condescension, no rushing. Just your devices doing what they're supposed to.
              </p>
              <ul style={{ fontSize: '14px', lineHeight: '1.9', color: '#2C1810', paddingLeft: '18px', marginBottom: '16px', flex: 1 }}>
                <li>💻 Laptop and tablet setup and troubleshooting</li>
                <li>📱 Phone setup — Mexican SIM WhatsApp apps</li>
                <li>🔒 VPN setup and internet security</li>
                <li>✈️ Mexican travel apps — Uber ADO bus VivaAerobus Aeromexico</li>
                <li>💊 Health apps and medical record management</li>
                <li>🏦 Online banking and money transfer apps</li>
                <li>📺 Streaming setup — Netflix Amazon Prime Disney+</li>
                <li>🖨️ Printer setup and scanning</li>
                <li>📧 Email organization and management</li>
                <li>🔐 Password management setup</li>
                <li>📹 Video calling — Zoom FaceTime WhatsApp Video</li>
                <li>🌐 Google Translate and essential Mexico apps</li>
                <li>📋 SSA and government portal navigation</li>
                <li>🛒 Amazon.mx setup and navigation</li>
                <li>📸 Photo backup and organization</li>
              </ul>
              <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#8B1A2A', marginBottom: '16px', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>If it has a screen and it is not cooperating — I can help.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                {CONCIERGE_TIERS.map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setTechConciergeTier(tier.id)}
                    style={{
                      backgroundColor: techConciergeTier === tier.id ? '#C4622D' : '#FDF6F0',
                      color: techConciergeTier === tier.id ? 'white' : '#2C1810',
                      border: techConciergeTier === tier.id ? '1px solid #C4622D' : '1px solid #2C1810',
                      borderRadius: '6px',
                      padding: '10px 16px',
                      fontSize: '14px',
                      fontWeight: techConciergeTier === tier.id ? 700 : 400,
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
              <button
                onClick={() => {
                  const tier = CONCIERGE_TIERS.find(t => t.id === techConciergeTier)
                  if (tier) handlePayNow('Tech Concierge', tier.stripe, tier.paypal)
                }}
                style={{ backgroundColor: '#C4622D', color: 'white', border: 'none', borderRadius: '6px', padding: '12px 24px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', width: '100%' }}
              >
                Pay Now
              </button>
            </div>

            <div id="travel-logistics" style={{ backgroundColor: '#FDF6F0', padding: '40px 32px', borderRadius: '8px', borderTop: '4px solid #C4622D', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '34px', marginBottom: '14px' }}>✈️</div>
              <h3 style={{ fontSize: '21px', marginBottom: '14px', color: '#7D3B4E', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.3' }}>Travel &amp; Logistics</h3>
              <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#5C3A2E', marginBottom: '16px', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.6' }}>Getting there is half the adventure. Getting there smoothly is the whole point.</p>
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#2C1810', marginBottom: '16px' }}>
                Mexico opens up when you can move through it with ease. I handle the moving parts, flights, buses, transfers, documents, and the apps that make it all work, so your trip starts the moment you leave the door, not after you've untangled the logistics. Whether it's a weekend in the mountains or a flight back home, you travel knowing someone has the details covered.
              </p>
              <ul style={{ fontSize: '14px', lineHeight: '1.9', color: '#2C1810', paddingLeft: '18px', marginBottom: '16px', flex: 1 }}>
                <li>🛫 Flight research and booking assistance</li>
                <li>🚌 Bus and ground transportation, ADO, BajíoGo, local transfers, airport runs</li>
                <li>🏨 Hotel and accommodation coordination</li>
                <li>🚗 Car rental guidance and local driving tips</li>
                <li>📋 Travel document organization — passports, visas, entry requirements</li>
                <li>🧳 Packing and shipping coordination</li>
                <li>🗺️ Custom itinerary planning for Mexico travel</li>
                <li>🔄 Layover and connection logistics</li>
                <li>📱 Travel app setup — Uber, ADO, VivaAerobus, Aeromexico</li>
                <li>🚨 Emergency travel support — canceled flights, lost documents, rebooking</li>
              </ul>
              <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#8B1A2A', marginBottom: '16px', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>You focus on the journey. I handle the map.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                {CONCIERGE_TIERS.map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setTravelLogisticsTier(tier.id)}
                    style={{
                      backgroundColor: travelLogisticsTier === tier.id ? '#C4622D' : '#FDF6F0',
                      color: travelLogisticsTier === tier.id ? 'white' : '#2C1810',
                      border: travelLogisticsTier === tier.id ? '1px solid #C4622D' : '1px solid #2C1810',
                      borderRadius: '6px',
                      padding: '10px 16px',
                      fontSize: '14px',
                      fontWeight: travelLogisticsTier === tier.id ? 700 : 400,
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
              <button
                onClick={() => {
                  const tier = CONCIERGE_TIERS.find(t => t.id === travelLogisticsTier)
                  if (tier) handlePayNow('Travel & Logistics', tier.stripe, tier.paypal)
                }}
                style={{ backgroundColor: '#C4622D', color: 'white', border: 'none', borderRadius: '6px', padding: '12px 24px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', width: '100%' }}
              >
                Pay Now
              </button>
            </div>

            {/* BOTTOM ROW: Senior Concierge · Medical Concierge · Local Companion */}

            <div id="senior-concierge" style={{ backgroundColor: '#FDF6F0', padding: '40px 32px', borderRadius: '8px', borderTop: '4px solid #C4622D', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '34px', marginBottom: '14px' }}>🌺</div>
              <h3 style={{ fontSize: '21px', marginBottom: '14px', color: '#7D3B4E', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.3' }}>Senior Concierge</h3>
              <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#5C3A2E', marginBottom: '16px', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.6' }}>Mexico is extraordinary at every age. Some days it just needs a little more navigation.</p>
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#2C1810', marginBottom: '12px' }}>
                Why won't Amazon.mx take my card? How do I access my SSA account from Mexico? How do I get to a medical appointment when I don't have a car and don't speak Spanish?
              </p>
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#2C1810', marginBottom: '12px' }}>
                These aren't small problems. They turn a beautiful day in San Miguel into a frustrating one, and they're all solvable with the right person by your side.
              </p>
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#2C1810', marginBottom: '16px' }}>
                The Senior Concierge is for anyone who wants to live fully and confidently in Mexico, with trusted support when the details get complicated.
              </p>
              <ul style={{ fontSize: '14px', lineHeight: '1.9', color: '#2C1810', paddingLeft: '18px', marginBottom: '16px', flex: 1 }}>
                <li>📱 Tech support — phones, apps, banking portals, streaming, Amazon.mx</li>
                <li>🏥 Medical accompaniment and appointment coordination</li>
                <li>💊 Pharmacy navigation and prescription support</li>
                <li>🏛️ SSA and government account setup and troubleshooting</li>
                <li>💸 Online bill pay and money transfer support</li>
                <li>🚗 Transportation coordination</li>
                <li>📋 Post-surgery companionship and recovery support</li>
                <li>🤝 Trusted referrals for home care, housekeeping, and healthcare providers</li>
              </ul>
              <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#8B1A2A', marginBottom: '16px', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>You didn't move to Mexico to struggle. You moved here to live.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                {CONCIERGE_TIERS.map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setSeniorConciergeTier(tier.id)}
                    style={{
                      backgroundColor: seniorConciergeTier === tier.id ? '#C4622D' : '#FDF6F0',
                      color: seniorConciergeTier === tier.id ? 'white' : '#2C1810',
                      border: seniorConciergeTier === tier.id ? '1px solid #C4622D' : '1px solid #2C1810',
                      borderRadius: '6px',
                      padding: '10px 16px',
                      fontSize: '14px',
                      fontWeight: seniorConciergeTier === tier.id ? 700 : 400,
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
              <button
                onClick={() => {
                  const tier = CONCIERGE_TIERS.find(t => t.id === seniorConciergeTier)
                  if (tier) handlePayNow('Senior Concierge', tier.stripe, tier.paypal)
                }}
                style={{ backgroundColor: '#C4622D', color: 'white', border: 'none', borderRadius: '6px', padding: '12px 24px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', width: '100%' }}
              >
                Pay Now
              </button>
            </div>

            <div id="medical-concierge" style={{ backgroundColor: '#FDF6F0', padding: '40px 32px', borderRadius: '8px', borderTop: '4px solid #C4622D', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '34px', marginBottom: '14px' }}>🏥</div>
              <h3 style={{ fontSize: '21px', marginBottom: '14px', color: '#7D3B4E', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.3' }}>Medical Concierge</h3>
              <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#5C3A2E', marginBottom: '16px', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.6' }}>Navigating Mexican healthcare should not be something you do alone.</p>
              <ul style={{ fontSize: '14px', lineHeight: '1.9', color: '#2C1810', paddingLeft: '18px', marginBottom: '16px', flex: 1 }}>
                <li>🔍 Pre-appointment research — finding the right specialist confirming English spoken verifying insurance acceptance</li>
                <li>🚗 Transportation coordination to and from appointment</li>
                <li>♿ Wheelchair assistance and physical accompaniment</li>
                <li>🗣️ Doctor communication and real-time translation</li>
                <li>🧪 Helping navigate any medical tests — labs imaging procedures</li>
                <li>📋 Recording and organizing all medical information and records</li>
                <li>📝 Post-appointment written summary — diagnosis instructions medications follow-up dates</li>
                <li>💊 Prescription pickup on appointment day</li>
                <li>💊 Explaining each medication — what it is for dosage where to fill it affordably</li>
                <li>📄 Filling out all forms in Spanish and English</li>
                <li>💳 Facilitating payments</li>
                <li>📅 Follow-up appointment scheduling</li>
                <li>📞 Communication with family back home if needed</li>
                <li>🚨 Emergency contact coordination</li>
                <li>🏥 Navigating Mexican healthcare vs US insurance reimbursement</li>
                <li>👨‍⚕️ Accompanying to specialist referrals</li>
              </ul>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                {MEDICAL_TIERS.map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setMedicalTier(tier.id)}
                    style={{
                      backgroundColor: medicalTier === tier.id ? '#C4622D' : '#FDF6F0',
                      color: medicalTier === tier.id ? 'white' : '#2C1810',
                      border: medicalTier === tier.id ? '1px solid #C4622D' : '1px solid #2C1810',
                      borderRadius: '6px',
                      padding: '10px 16px',
                      fontSize: '14px',
                      fontWeight: medicalTier === tier.id ? 700 : 400,
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
              <button
                onClick={() => {
                  const tier = MEDICAL_TIERS.find(t => t.id === medicalTier)
                  if (tier) handlePayNow('Medical Concierge', tier.stripe, tier.paypal)
                }}
                style={{ backgroundColor: '#C4622D', color: 'white', border: 'none', borderRadius: '6px', padding: '12px 24px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', width: '100%' }}
              >
                Pay Now
              </button>
            </div>

            <div id="local-companion" style={{ backgroundColor: '#FDF6F0', padding: '40px 32px', borderRadius: '8px', borderTop: '4px solid #C4622D', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '34px', marginBottom: '14px' }}>🤝</div>
              <h3 style={{ fontSize: '21px', marginBottom: '14px', color: '#7D3B4E', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.3' }}>Local Companion</h3>
              <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#5C3A2E', marginBottom: '16px', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.6' }}>Sometimes you just need someone who knows every corner.</p>
              <div style={{ fontSize: '15px', lineHeight: '1.8', color: '#2C1810', marginBottom: '16px', flex: 1 }}>
                <p style={{ marginBottom: '14px' }}>
                  Inspired by Japan's beloved rental-person culture, sometimes you just need a trusted local by your side. Whether it's dinner, a medical appointment, a cultural event, or simply exploring San Miguel with someone who knows every corner. I show up. No agenda. Just good company. This service includes any level of setup and coordination, from a simple meetup to a fully planned outing.
                </p>
                <p style={{ marginBottom: '10px' }}>A few things we could do together:</p>
                <p style={{ marginBottom: '8px' }}><strong>Out and about:</strong> shopping mall runs in Queretaro, HEB / Costco / Home Depot trips, historical-town day trips, hot springs, wine vineyard visits, kayaking, scenic drives, nearby museums.</p>
                <p style={{ marginBottom: '8px' }}><strong>Culture and nightlife:</strong> live music, supper clubs, the opera, the ballet, the circus, the carnival, art crawls, fashion shows, local holiday events.</p>
                <p style={{ marginBottom: '14px' }}><strong>Everyday and social:</strong> consignment and thrift hopping, art class, dance class, a workout partner, rooftop happy hour, or help throwing a dinner party or event.</p>
                <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#8B1A2A', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", margin: 0 }}>And more, if you can dream it, we can probably do it.</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                {COMPANION_TIERS.map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setCompanionTier(tier.id)}
                    style={{
                      backgroundColor: companionTier === tier.id ? '#C4622D' : '#FDF6F0',
                      color: companionTier === tier.id ? 'white' : '#2C1810',
                      border: companionTier === tier.id ? '1px solid #C4622D' : '1px solid #2C1810',
                      borderRadius: '6px',
                      padding: '10px 16px',
                      fontSize: '14px',
                      fontWeight: companionTier === tier.id ? 700 : 400,
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
              <button
                onClick={() => {
                  const tier = COMPANION_TIERS.find(t => t.id === companionTier)
                  if (tier) handlePayNow('Local Companion', tier.stripe, tier.paypal)
                }}
                style={{ backgroundColor: '#C4622D', color: 'white', border: 'none', borderRadius: '6px', padding: '12px 24px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', width: '100%' }}
              >
                Pay Now
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Pull Quotes Band */}
      <section className="responsive-section" style={{ backgroundColor: '#FDF6F0' }}>
        <div className="content-wrapper pull-quotes-grid">
          {[
            { quote: 'From the moment I got off the plane, Lisa showed up with kindness and clarity.', name: 'Brian Keith Webster', title: 'Author' },
            { quote: 'She handled everything with exceptional grace and competence.', name: 'Sugar & Sandy Hudson', title: 'Mayor, Los Frailes SMA' },
            { quote: "She's not just a concierge — she's a trusted guide.", name: 'Tiffany Paige', title: 'Licensed Real Estate Advisor, The Agency SMA' },
          ].map((q) => (
            <div key={q.name}>
              <div style={{ fontSize: '64px', color: '#8B1A2A', lineHeight: '0.8', marginBottom: '20px', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>"</div>
              <p style={{ fontSize: '17px', fontStyle: 'italic', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.75', color: '#2C1810', marginBottom: '20px' }}>{q.quote}</p>
              <div style={{ fontSize: '12px', letterSpacing: '2px', color: '#C97B8A', fontWeight: '700', textTransform: 'uppercase' }}>{q.name}</div>
              <div style={{ fontSize: '11px', letterSpacing: '1px', color: '#C97B8A', marginTop: '4px' }}>{q.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking & Cancellation Policy */}
      <section className="responsive-section" style={{ backgroundColor: '#2C1810', borderTop: '1px solid #3D2418' }}>
        <div className="content-wrapper" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '28px', fontWeight: 'normal', color: '#FDF6F0', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '28px', textAlign: 'center' }}>Booking &amp; Cancellation Policy</h3>
          <p style={{ fontSize: '16px', lineHeight: '1.85', color: '#E8A598', marginBottom: '20px' }}>
            Full payment is required to confirm your booking. You will receive a confirmation email with your intake questionnaire within 24 hours of payment. Please complete it before your session so we arrive fully prepared.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.85', color: '#E8A598' }}>
            Cancellations made 48 hours or more before your session receive a full credit toward a future booking. Cancellations within 24 hours of your session are non-refundable. No-shows forfeit the full session fee. Rescheduling is welcome with 48 hours notice — one free reschedule per booking.
          </p>
        </div>
      </section>

      {/* Rentals Section */}
      <section id="rentals" className="responsive-section" style={{ backgroundColor: '#FDF6F0' }}>
        <div className="content-wrapper">
          <p style={{ color: '#7D3B4E', fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', fontWeight: '600' }}>RENTAL PROPERTIES</p>
          <h2 style={{ fontSize: '42px', fontWeight: 'normal', marginBottom: '20px', color: '#2C1810', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.2' }}>
            Find Your Home in San Miguel —<br />with a Personal Agent at Your Side
          </h2>
          <p style={{ fontSize: '17px', lineHeight: '1.85', color: '#2C1810', maxWidth: '780px', marginBottom: '20px' }}>
            Finding a rental in Mexico is not like searching Zillow. The best homes aren't always listed publicly, landlords expect a trusted connection, and leases are written in Spanish. As your personal representative, I do the research and coordination — so you see only the properties that are genuinely suited to you.
          </p>

          {/* What I Do For You */}
          <div style={{ backgroundColor: '#FAE8E0', padding: '36px', borderRadius: '8px', marginBottom: '40px', borderLeft: '4px solid #C4622D' }}>
            <h3 style={{ fontSize: '20px', color: '#7D3B4E', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '20px' }}>
              What I do for you as your personal rental agent:
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
              {[
                '🔍 Before we look at a single property, you complete a 10-minute survey. Your answers will shape my search for you — neighborhood, budget, must-haves, and dealbreakers. We will focus on matching showings and avoid any surprises.',
                '🏠 Pre-screening every property — For virtual clients, every property is previewed before you arrive. Photos, video walkthroughs, and honest assessments are sent as your eyes to make an educated decision.',
                '📍 Knowledge of every colonia — matched to your lifestyle — Centro, San Antonio, Guadiana, Atascadero — each neighborhood has a different feel, pace, and price point. I\'ll match you to the colonia that fits how you live day to day.',
                '🗝️ Coordinated property showings until we find the right fit — We can do an all-day search or keep looking until the right property appears.',
                '🗣️ Full translation and cultural context during every property showing — Language, lease implications, neighborhood realities, and the unspoken customs of Mexican rental culture that turns a confusing process into a clear one.',
                '📝 Bilingual lease review — section by section — Nothing gets signed until you understand every line. We\'ll review your lease in both languages, flag anything unusual, and explain what it actually means for your daily life.',
                '💬 Negotiation on your behalf with landlords — Price, terms, included furnishings, maintenance responsibilities — negotiated by someone who knows what is standard, what is flexible, and what is worth pushing back on.',
                '✅ Final walkthrough checklist before you sign anything — A documented condition report of the property before keys change hands. Your protection from day one.',
                '🤝 Ongoing support after you move in — Questions don\'t stop at move-in. When you sign your lease, you receive 2 free hours of newcomer concierge support — home setup, utilities, domestic staff, banking, grocery delivery, Mexican SIM setup, pet grooming, healthcare, or whatever you need to completely settle in.',
              ].map((item) => (
                <p key={item} style={{ fontSize: '14px', color: '#2C1810', margin: '4px 0', lineHeight: '1.6' }}>{item}</p>
              ))}
            </div>
          </div>

          {/* Showing Day Packages */}
          <h3 style={{ fontSize: '28px', fontWeight: 'normal', color: '#2C1810', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '24px' }}>
            The Rental Discovery Day
          </h3>

          <div style={{ marginBottom: '20px' }}>

            <div style={{ backgroundColor: 'white', padding: '36px 28px', borderRadius: '8px', border: '1px solid #E8A598', display: 'flex', gap: '32px', alignItems: 'flex-start', flexWrap: 'wrap' }}>

              {/* Left: pricing details */}
              <div style={{ flex: '1 1 260px' }}>
                <h4 style={{ fontSize: '19px', color: '#7D3B4E', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '8px' }}>Rental Discovery Day</h4>
                <div style={{ marginBottom: '4px' }}>
                  <span style={{ fontSize: '28px', fontWeight: '700', color: '#8B1A2A', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>$3,500 MXN</span>
                  <span style={{ fontSize: '15px', color: '#7D3B4E', marginLeft: '10px', fontWeight: '600' }}>&#8776; $200 USD</span>
                </div>
                <p style={{ fontSize: '13px', color: '#C97B8A', margin: '0 0 8px', lineHeight: '1.6' }}>+ processing fees. Card payments add a processing fee at checkout. Fee-free payment (Zelle) available, just ask.</p>
                <p style={{ fontSize: '13px', color: '#7D3B4E', marginBottom: '16px', letterSpacing: '1px' }}>PERSONAL ADVOCATE · FULL DAY</p>
                <ul style={{ fontSize: '14px', lineHeight: '1.9', color: '#2C1810', paddingLeft: '18px', marginBottom: '0' }}>
                  <li>A full day of my time, expertise, and advocacy</li>
                  <li>Up to four properties, pre-curated to your needs and approved by you in advance</li>
                  <li>Private driver for the full day (no cabs, no meeting on a street corner, I come to you)</li>
                  <li>Personal escort, translation, and negotiation throughout</li>
                  <li>Lease review included</li>
                </ul>
                <p style={{ fontSize: '13px', color: '#C97B8A', margin: '12px 0 4px', lineHeight: '1.6' }}>For rental budgets up to 22,000 MXN/month: this is a non-refundable day fee.</p>
                <p style={{ fontSize: '13px', color: '#C97B8A', margin: '0 0 12px', lineHeight: '1.6' }}>For rental budgets over 22,000 MXN/month: this is a deposit, fully refunded when you sign a lease for that rental.</p>
                <p style={{ fontSize: '13px', color: '#C97B8A', margin: '0 0 6px', lineHeight: '1.6' }}>Reschedule once free with at least 48 hours&#39; notice.</p>
                <p style={{ fontSize: '13px', color: '#C97B8A', margin: '0 0 16px', lineHeight: '1.6' }}>Within 48 hours, the fee is non-refundable, as the driver and showings are confirmed.</p>
                <div style={{ height: '16px' }} />
                <button
                  onClick={() => handlePayNow('Rental Showing Day')}
                  style={{ backgroundColor: '#C4622D', color: 'white', padding: '12px 24px', borderRadius: '4px', border: 'none', fontSize: '14px', fontWeight: 'bold', display: 'inline-block', cursor: 'pointer' }}
                >Reserve Your Rental Discovery Day →</button>
              </div>

              {/* Right: client success photo */}
              <div style={{ flex: '1 1 220px' }}>
                <div style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/bree-willie-max.jpg"
                    alt="Couple with their Bernese mountain dog at their new San Miguel rental"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                  <div style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: '#C4622D', color: '#FDF6F0', fontSize: '10px', fontWeight: '700', letterSpacing: '2px', padding: '5px 10px', borderRadius: '4px', textTransform: 'uppercase' }}>
                    Lease Signed
                  </div>
                </div>
                <p style={{ textAlign: 'center', fontSize: '12px', color: '#5C3A2E', marginTop: '8px', marginBottom: '0' }}>
                  Settled into their San Miguel rental
                </p>
              </div>

            </div>

          </div>
          <p style={{ fontSize: '14px', color: '#5C3A2E', lineHeight: '1.7', marginBottom: '40px' }}>
            Customized showing packages available — simply send your needs via{' '}
            <a href="https://wa.me/5214731218554" target="_blank" style={{ color: '#C4622D', fontWeight: '600', textDecoration: 'none' }}>WhatsApp</a>
            {' '}or{' '}
            <a href="mailto:Lisa@InTheKnowMx.com" style={{ color: '#C4622D', fontWeight: '600', textDecoration: 'none' }}>email</a>.
          </p>

          {/* Client Agreement Note */}
          <div style={{ backgroundColor: '#2C1810', padding: '32px 36px', borderRadius: '8px', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '20px', color: '#E8A598', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '12px' }}>
              My Commitment to You — in Writing
            </h3>
            <p style={{ fontSize: '15px', color: '#FDF6F0', lineHeight: '1.8', marginBottom: '0' }}>
              Other agents will show you rentals for free. But a free agent answers to the commission, which means they can rush you toward a quick signature, or quietly lose interest if you&#39;re not ready to commit today. When you hire me, you&#39;re paying for something different: my complete loyalty. I work for you. I don&#39;t politic. I advocate, fully, for what you actually need. That commitment is in writing. Every rental client receives a written agreement outlining exactly what I will research, verify, and deliver on your behalf, before your day. No surprises, no shortcuts. <a href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{ color: '#E8A598', fontWeight: 'bold' }}>Book a call to receive yours.</a>
            </p>
          </div>

        </div>
      </section>

      {/* Buy / Properties Section */}
      <section id="properties" style={{ backgroundColor: '#2C1810', padding: '90px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="buy-cols">
            {/* Right column first in DOM so it appears first on mobile */}
            <div className="buy-col-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/lisa-tiffany-cropped.jpg"
                alt="Lisa May Cobham and Tiffany Paige"
                style={{ width: '100%', maxWidth: '400px', borderRadius: '8px', marginBottom: '32px', display: 'block', margin: '0 auto 32px' }}
              />
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '16px', color: '#E8A598', fontWeight: 'bold', margin: '0 0 4px' }}>Lisa May Cobham</p>
                <p style={{ fontSize: '16px', color: '#E8A598', fontWeight: 'bold', margin: '0 0 12px' }}>Tiffany Paige</p>
                <p style={{ fontSize: '14px', color: '#FDF6F0', margin: 0 }}>The Agency San Miguel</p>
              </div>
            </div>

            {/* Left column: text */}
            <div className="buy-col-text">
              <h2 style={{ fontSize: '32px', fontWeight: 'normal', color: '#FDF6F0', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '24px' }}>A different kind of decision</h2>
              <p style={{ fontSize: '16px', color: '#FDF6F0', lineHeight: '1.8', marginBottom: '60px' }}>Buying a home in San Miguel de Allende isn&rsquo;t just a property decision. It&rsquo;s a life decision. Where you live shapes your rhythm, your routines, and your experience of daily life in ways that don&rsquo;t show up in listings. This process requires more than options. It requires clarity.</p>

              <h2 style={{ fontSize: '32px', fontWeight: 'normal', color: '#FDF6F0', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '24px' }}>What most people miss</h2>
              <p style={{ fontSize: '16px', color: '#FDF6F0', lineHeight: '1.8', marginBottom: '60px' }}>On paper, many homes look similar. In reality, they feel completely different once you live in them. Neighborhood energy. Daily flow. Walkability. Quiet. Convenience. Pace. These are not details you can fully see online. They are experienced. And they are often what determines whether a home truly fits—or doesn&rsquo;t.</p>

              <h2 style={{ fontSize: '32px', fontWeight: 'normal', color: '#FDF6F0', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '24px' }}>Two perspectives, one decision</h2>
              <p style={{ fontSize: '16px', color: '#FDF6F0', lineHeight: '1.8', marginBottom: '20px' }}>This is why we work together. You&rsquo;re not getting one point of view. You&rsquo;re getting two, aligned.</p>
              <p style={{ fontSize: '16px', color: '#FDF6F0', lineHeight: '1.8', marginBottom: '16px' }}><span style={{ fontWeight: 'bold', color: '#E8A598' }}>Local &amp; lifestyle perspective</span> — I focus on how a place actually lives—its rhythm, energy, and day-to-day experience in San Miguel.</p>
              <p style={{ fontSize: '16px', color: '#FDF6F0', lineHeight: '1.8', marginBottom: '16px' }}><span style={{ fontWeight: 'bold', color: '#E8A598' }}>Market &amp; advisory perspective</span> — Tiffany is a Licensed Real Estate Advisor with The Agency San Miguel, part of a global luxury brokerage network. She brings market access, negotiation expertise, and structured real estate guidance.</p>
              <p style={{ fontSize: '16px', color: '#FDF6F0', lineHeight: '1.8', marginBottom: '60px' }}><span style={{ fontWeight: 'bold', color: '#E8A598' }}>Together</span> — We evaluate every home through both lenses at once: what it is—and what it feels like to live there.</p>

              <h2 style={{ fontSize: '32px', fontWeight: 'normal', color: '#FDF6F0', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '24px' }}>How we work</h2>
              <p style={{ fontSize: '16px', color: '#FDF6F0', lineHeight: '1.8', marginBottom: '60px' }}>We don&rsquo;t overwhelm you with options. We refine. Each home is evaluated for both market value and lifestyle fit. We walk properties with context, not just observation. And we narrow decisions based on clarity, not volume. Fewer choices. Better decisions.</p>

              <h2 style={{ fontSize: '32px', fontWeight: 'normal', color: '#FDF6F0', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '24px' }}>Clarity from the start</h2>
              <p style={{ fontSize: '16px', color: '#FDF6F0', lineHeight: '1.8', marginBottom: '60px' }}>We believe you should understand the structure of your decision before you make it. We coordinate with your notary early so you understand costs and requirements before committing. No assumptions. No surprises. A clear, structured process from the beginning.</p>

              <h2 style={{ fontSize: '32px', fontWeight: 'normal', color: '#FDF6F0', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '24px' }}>The outcome</h2>
              <p style={{ fontSize: '16px', color: '#FDF6F0', lineHeight: '1.8', marginBottom: '60px' }}>A home that fits is not just visually right. It works in your life. You understand why it fits—before you commit. And you move forward with clarity, not uncertainty.</p>

              <h2 style={{ fontSize: '32px', fontWeight: 'normal', color: '#FDF6F0', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '24px' }}>The right home</h2>
              <p style={{ fontSize: '16px', color: '#FDF6F0', lineHeight: '1.8', marginBottom: '60px' }}>The right home isn&rsquo;t just a property. It&rsquo;s alignment between place and life. We help you see that clearly—before you decide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial card — Buy section */}
      <section className="responsive-section" style={{ backgroundColor: '#FDF6F0' }}>
        <div className="content-wrapper">
          <div style={{ backgroundColor: '#FDF6F0', borderLeft: '2px solid #E8A598', padding: '32px 36px', borderRadius: '8px' }}>
            <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 280px' }}>
                <p style={{ fontSize: '15px', lineHeight: '1.85', color: '#2C1810', fontStyle: 'italic', marginBottom: '16px', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>
                  "Lisa did an excellent job of uncovering our wants and needs and helped us find a place. When negotiating the terms of the lease, she was active in the process and made sure we were comfortable."
                </p>
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#7D3B4E' }}>Kirsten</div>
                <div style={{ fontSize: '12px', color: '#C97B8A', marginTop: '2px' }}>San Miguel de Allende</div>
              </div>
              <div style={{ flex: '1 1 280px' }}>
                <p style={{ fontSize: '15px', lineHeight: '1.85', color: '#2C1810', fontStyle: 'italic', marginBottom: '16px', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>
                  "Tiffany took the time to actually listen to my priorities and helped me discern what neighborhoods and homes would best fit my lifestyle while being respectful of my budget."
                </p>
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#7D3B4E' }}>Verified Client</div>
                <div style={{ fontSize: '12px', color: '#C97B8A', marginTop: '2px' }}>The Agency SMA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Caretaking */}
      <section id="caretaking" className="responsive-section" style={{ backgroundColor: '#FDF6F0' }}>
        <div className="content-wrapper">
          <div className="flex-stack">
            <div style={{ flex: 1, minWidth: '300px' }}>
              <p style={{ color: '#7D3B4E', fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', fontWeight: '600' }}>PROPERTY & PET CARE</p>
              <h2 style={{ fontSize: '42px', fontWeight: 'normal', marginBottom: '8px', color: '#2C1810', lineHeight: '1.2', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>
                Your Mexico Life, Maintained.
              </h2>
              <p style={{ fontSize: '17px', color: '#7D3B4E', marginBottom: '28px', fontStyle: 'italic', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>
                300+ five-star reviews from people who trusted Lisa with their most precious things while they were away.
              </p>
              <p style={{ fontSize: '17px', lineHeight: '1.85', marginBottom: '20px', color: '#2C1810' }}>
                Pipes burst. Power goes out. Staff doesn't show. These things happen — even in the most
                beautiful homes in San Miguel. The question is who do you trust to handle it.
              </p>
              <p style={{ fontSize: '17px', lineHeight: '1.85', marginBottom: '28px', color: '#2C1810' }}>
                <strong>When you leave, I stay.</strong> I am your eyes, your voice, and your most trusted
                presence on the ground. The town knows me. Your neighbors know me. Your home is safe.
              </p>
              <div style={{ backgroundColor: '#FAE8E0', padding: '32px', borderRadius: '8px', marginBottom: '28px' }}>
                <p style={{ fontSize: '15px', fontWeight: 'bold', color: '#7D3B4E', marginBottom: '18px', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>What this looks like in practice:</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  {[
                    '🐾 Pet sitting — drop-in or live-in',
                    '🔒 Live-in home security',
                    '🏊 Pool & jacuzzi upkeep',
                    '🌿 Plants, cats, dogs, birds',
                    '💸 Bill payments while you\'re away',
                    '🏦 Bank-to-bank transfer support',
                    '👷 Staff payments & oversight',
                    '📦 Receiving deliveries',
                    '🔑 Regular home walk-throughs',
                    '📱 WhatsApp photo updates',
                    '🚨 Emergency response 24/7',
                    '🧹 Housekeeper & gardener oversight',
                  ].map((item) => (
                    <p key={item} style={{ fontSize: '14px', color: '#2C1810', margin: '4px 0', lineHeight: '1.6' }}>{item}</p>
                  ))}
                </div>
              </div>
              <div style={{ marginBottom: '28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { quote: "My home was running like a well-oiled machine. She had a pork chop dinner waiting for me once I woke up. As a professional dog groomer with high expectations on animal care, I would highly recommend Lisa May as a caring companion.", name: 'Janet A.', date: 'November 2018', detail: '3 dogs, 8 cats, pool' },
                  { quote: "We have a daughter in and out of the hospital out of state. Lisa has been so accommodating and even willing to stay extra days when needed. It's such a stress relief to me and my husband knowing she's taking care of our pup.", name: 'Kathryn W.', date: 'October 2020', detail: '105lb rescue dog' },
                  { quote: "She has cared for our 3 large indoor/outdoor dogs, kitty, and bustling guest cottage with great success over the years. Our guests have raved about her! We recommend Lisa May wholeheartedly — you'll be able to enjoy your time away and return to a clean home and happy pets.", name: 'Michelle & Scott Lyons, Gecko Bungalows Resort · Belize · 2018', date: 'November 2018', detail: 'Belize' },
                ].map((r) => (
                  <div key={r.name} style={{ backgroundColor: 'white', padding: '24px 20px', borderRadius: '8px', borderLeft: '4px solid #E8A598' }}>
                    <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#2C1810', fontStyle: 'italic', marginBottom: '12px' }}>"{r.quote}"</p>
                    <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#7D3B4E' }}>{r.name}</div>
                    <div style={{ fontSize: '12px', color: '#C97B8A', marginTop: '2px' }}>{r.date} · {r.detail}</div>
                  </div>
                ))}
              </div>
              {renderCardActions('Property & Pet Care')}
              <div style={{ fontSize: '13px', color: '#2C1810', fontWeight: '600', marginBottom: '24px' }}>
                <div style={{ marginBottom: '12px', fontWeight: '700' }}>WITHOUT PETS</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '16px', fontSize: '12px' }}>
                  <div><strong>Daily</strong><br/>250 pesos · $1.56 USD</div>
                  <div><strong>Weekly</strong><br/>1,500 pesos · $9.35 USD</div>
                  <div><strong>Monthly</strong><br/>5,500 pesos · $34 USD</div>
                </div>
                <div style={{ fontSize: '12px', color: '#7D3B4E', marginBottom: '12px' }}>Includes: home walk-through, WhatsApp photo updates, mail and deliveries, plant watering, emergency response.</div>
                <div style={{ marginBottom: '12px', fontWeight: '700', marginTop: '16px' }}>WITH 1 PET</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '16px', fontSize: '12px' }}>
                  <div><strong>Daily</strong><br/>350 pesos · $2.18 USD</div>
                  <div><strong>Weekly</strong><br/>2,100 pesos · $13 USD</div>
                  <div><strong>Monthly</strong><br/>7,700 pesos · $48 USD</div>
                </div>
                <div style={{ fontSize: '12px', color: '#7D3B4E', marginBottom: '16px' }}>Includes: everything above plus 2-3 feedings, 2 walks, 1-2 litter changes per day.</div>
                <div style={{ marginBottom: '12px', fontWeight: '700', marginTop: '16px' }}>ADD-ONS per day/week/month</div>
                <div style={{ fontSize: '12px', color: '#7D3B4E' }}>
                  <div>Additional animal +$100 pesos per day</div>
                  <div>Oral medication up to 2x daily: +$30 / $210 / $840 pesos</div>
                  <div>Medical injection: +$25 / $175 / $700 pesos</div>
                  <div>Asthma inhaler: +$25 / $175 / $700 pesos</div>
                </div>
              </div>
            </div>
            <div style={{ flex: 1, minWidth: '280px' }}>
              <Image
                src="/images/home-care.jpg"
                alt="Beautiful home in San Miguel de Allende"
                className="responsive-img"
                loading="lazy"
                width={900}
                height={600}
                style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }}
              />
              <div style={{
                backgroundColor: '#7D3B4E',
                padding: '28px',
                borderRadius: '8px',
                color: 'white',
                fontStyle: 'italic',
                fontSize: '18px',
                lineHeight: '1.7',
                fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)"
              }}>
                "I absolutely cannot leave without knowing Lisa is there."
                <div style={{ fontSize: '12px', color: '#E8A598', marginTop: '14px', fontStyle: 'normal', letterSpacing: '2px', fontFamily: "var(--font-inter, 'Inter', sans-serif)", fontWeight: '600' }}>
                  — THE FEELING EVERY CLIENT HAS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Table */}
      <section id="welcome-table" className="responsive-section" style={{ backgroundColor: '#E8A598' }}>
        <div className="content-wrapper" style={{ display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Text side */}
          <div style={{ flex: '1 1 320px' }}>
            <p style={{ color: '#7D3B4E', fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', fontWeight: '600' }}>COMMUNITY</p>
            <p style={{ fontSize: '20px', fontStyle: 'italic', color: '#2C1810', marginBottom: '20px', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.4' }}>Office hours are open.</p>
            <p style={{ fontSize: '16px', lineHeight: '1.85', color: '#2C1810', marginBottom: '20px' }}>
              Not sure where to start? That's exactly what The Welcome Table is for. In partnership with Tiffany Paige of The Agency San Miguel, it's a free, no-pressure Saturday gathering for Mexico newcomers and anyone curious about life here. Come with your questions, leave with real answers and real connections.
            </p>
            <p style={{ fontSize: '15px', color: '#2C1810', marginBottom: '32px', fontWeight: '700', lineHeight: '1.6' }}>
              Every Saturday, 10:30am-1pm · The Agency, Aldama 31, Centro · Always free.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a className="button-link" href="https://sanmiguelrealestate.com.mx/welcome-table" target="_blank" rel="noreferrer" style={{
                backgroundColor: '#2C1810',
                color: 'white',
                borderRadius: '4px',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: 'bold'
              }}>Learn More</a>
              <a className="button-link" href="#planning-calls" style={{
                backgroundColor: '#C4622D',
                color: 'white',
                borderRadius: '4px',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: 'bold'
              }}>Book a Planning Call</a>
            </div>
          </div>
          {/* Image side */}
          <div style={{ flex: '1 1 300px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/the%20welcome%20table.jpg" alt="The Welcome Table postcard" style={{ width: '100%', borderRadius: '8px', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="responsive-section" style={{ backgroundColor: '#FDF6F0' }}>
        <div className="content-wrapper">
          <p style={{ color: '#7D3B4E', fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', textAlign: 'center', fontWeight: '600' }}>WHAT CLIENTS SAY</p>
          <h2 style={{ fontSize: '42px', fontWeight: 'normal', marginBottom: '60px', textAlign: 'center', color: '#2C1810', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>
            The town knows. Now hear it from them.
          </h2>
          <div className="testimonials-grid">
            {[
              { quote: "She is tenacious, organized, and deeply caring — going above and beyond to make sure her clients feel seen, supported, and completely at ease. She's not just a relocation concierge — she's a trusted guide.", name: 'Tiffany Paige', title: 'Licensed Real Estate Advisor, The Agency SMA', date: '2026', repeat: true },
              { quote: "I could not be more pleased with Lisa! She was very responsive, reasonable and she stayed with the program until we were successful. Do business with Lisa and she will solve your problems!", name: 'Terry M.', title: '', date: '2026' },
              { quote: "From the moment I got off the plane, Lisa showed up with kindness, clarity, and a deep knowledge of how things work here. She met me at my Airbnb, took me grocery shopping, helped me with the ATM, showed me around San Miguel, and helped me find my apartment. Lisa is more than a service provider — she's a support system, a guide, and a true friend.", name: 'Brian Keith Webster', title: 'Author', date: '2025', repeat: true },
              { quote: "A plumbing disaster occurred while we were off the grid on a cruise — Lisa handled everything with exceptional grace and competence. She contacted neighbors, coordinated local plumbers and electricians, and ensured our pets and property were safe and cared for.", name: 'Sugar & Sandy Hudson', title: 'Mayor, Los Frailes SMA', date: '2025' },
              { quote: "Left our house perfectly clean and exactly how we left it, just a little better. Turtle was happy and healthy upon our return and we're so grateful he was in good hands.", name: 'Claire H.', title: '', date: '2023' },
              { quote: "Oh my gosh! Lisa was amazing and so great to work with. She took great care of Miss Prissy and our house. I hope to use her again in the future.", name: 'Joni S.', title: '', date: '2023' },
              { quote: "Lisa is wonderful! She took care of our two big dogs and watched our home any time we traveled. My husband and I are very particular about who watches our dogs, and she met every single criteria and need. You will not regret hiring her!", name: 'Maggie G.', title: '', date: '2023' },
              { quote: "Lisa was a great pet and house sitter. Very conscientious and helpful. I would recommend her fully!", name: 'Tina H.', title: '', date: '2023' },
              { quote: "There ended up being severe storms so our return flights were canceled and we didn't know when we'd get home and she was very understanding and flexible, making sure our dog was taken care of. It was a huge weight off our shoulders!", name: 'Emily M.', title: '', date: '2021' },
              { quote: "Coming home to a wonderfully clean home is just priceless! She loves and cares for our pets like we would. She knows their personalities and treats them accordingly.", name: 'Amy H.', title: '', date: '2021' },
              { quote: "She is dedicated and took very good care of my older dog who had health issues. She went beyond the call of duty on some errands I needed while I was in the hospital and was very flexible with me.", name: 'Paula P.', title: '', date: '2021' },
              { quote: "She took care of our 3 dogs, cat and bird for almost 2 weeks including pool and greenhouse. Her experience with pets and homes made it so easy to leave our fur babies. I have never had any house sitter clean the sheets on the bed she used before. If you are lucky enough to use Lisa's many services, you will not be disappointed.", name: 'Wendy E.', title: '', date: '2021' },
              { quote: "We have a daughter that is in and out of the hospital out of state. Lisa has been so accommodating and even willing to stay extra days when needed. Such a stress relief knowing she's taking care of our pup.", name: 'Kathryn W.', title: '', date: '2020' },
              { quote: "Lisa was prompt, professional and everything you could want in a dog sitter. She even adjusted her schedule to take Charlie on an extra walk when our flight was delayed. I cannot say enough good things about her.", name: 'Brandon S.', title: '', date: '2019', repeat: true },
              { quote: "When we arrived home we found a cooked dinner, well kept house — cleaner than we left it — and a happy cat. Strongly recommend her to anyone who is in need of house and pet sitting.", name: 'Neslihan S.', title: '', date: '2018', repeat: true },
              { quote: "My home was running like a well-oiled machine. She had a pork chop dinner waiting for me once I woke up. As a professional dog groomer with high expectations on animal care, I would highly recommend Lisa May.", name: 'Janet A.', title: '', date: '2018' },
              { quote: "She has cared for our 3 large indoor/outdoor dogs, kitty, and bustling guest cottage with great success. Our guests have raved about her! The hardest part about having her is saying goodbye.", name: 'Michelle & Scott Lyons', title: 'Gecko Bungalows Resort · Belize', date: '2018', repeat: true },
              { quote: "Lisa was fantastic with our puppy! Great communication as well.", name: 'Sue C.', title: '', date: '2019' },
              { quote: "Lisa was great with our 4-month old puppy Puddin. Excellent communication and pictures of their walk. I would encourage you to hire her.", name: 'Sue C.', title: '', date: '2019' },
              { quote: "Lisa was wonderful. We had a last minute booking and she was able to take good care of our three dogs. She took great care of our house and sent us photos of the dogs every day we were gone.", name: 'Alex C.', title: '', date: '2019' },
              { quote: "Lisa was great. She took great care of our home and our old dog, getting him out for walks even when it was raining. The house was clean when we got home too.", name: 'Rachel B.', title: '', date: '2019', repeat: true },
              { quote: "Lisa May put me at ease. My home was running like a well-oiled machine. As a professional dog groomer with high expectations on animal care, I would highly recommend Lisa May as a caring companion.", name: 'Doris O.', title: '', date: '2018' },
              { quote: "Lisa had our cat well taken care of. She sent us pictures of him while we were away and I'm sure gave him lots of love. Would definitely hire her again.", name: 'Katherine A.', title: '', date: '2019' },
              { quote: "Lisa is very dependable and is great at communicating timely and thoroughly! She is very flexible and willing to adapt to my dogs daily needs.", name: 'Alicia F.', title: '', date: '2019' },
              { quote: "Lisa was AMAZING! She sent me pics and kept me up to date on everything! I would highly recommend her. I will definitely hire her again!!", name: 'Leslie F.', title: '', date: '2019' },
              { quote: "Lisa took great care of our girls Lola and Hershey! She was quick to respond, sent pictures, and was sweet with our difficult-one-when-we-are-gone Lola!", name: 'Nicole H.', title: '', date: '2019' },
              { quote: "Lisa has been a great help to us with all of our travel! Would highly recommend!", name: 'Amanda C.', title: '', date: '2019' },
              { quote: "I'm so sorry about the accident! Thank you again for moving the plant inside.", name: 'Emily B.', title: '', date: '2019' },
              { quote: "Lisa was timely and reliable and friendly with my pup. I would definitely use her again!", name: 'Ashley H.', title: '', date: '2019' },
              { quote: "Lisa was so great caring for my cat! I loved getting pictures and detailed updates.", name: 'Jordan L.', title: '', date: '2019' },
              { quote: "Lisa was super flexible despite my concierge not showing up to give her my apartment key. She walked my pup almost a full mile in a short period of time. She is extremely responsive and I will be using her again!", name: 'Madeleine H.', title: '', date: '2019' },
              { quote: "What a great sitter for my foster pup!! She takes great photos, is prompt, and leaves great summaries. I highly recommend her.", name: 'Allison A.', title: '', date: '2019' },
              { quote: "Lisa was great! She really helped me out on a day where I couldn't get home to let Louie out. Would highly recommend and use her anytime.", name: 'Erica R.', title: '', date: '2019' },
              { quote: "She even managed to grab my Dog Lily when her harness failed! Amazing!", name: 'Derek S.', title: '', date: '2019', repeat: true },
              { quote: "Lisa as always does a stellar job!", name: 'William S.', title: '', date: '2019' },
              { quote: "You're amazing! Thank you! I feel so good knowing they are taken care of.", name: 'Celeste G.', title: '', date: '2019' },
              { quote: "Lisa was great and sent very good updates!", name: 'Casey S.', title: '', date: '2019' },
              { quote: "We feel very comfortable leaving our fur-babies in her care.", name: 'Maggie G.', title: '', date: '2019' },
              { quote: "Lisa was great! I knew Charlie was in good hands!", name: 'Courtney D.', title: '', date: '2019' },
              { quote: "Feels great knowing your dog is in good hands!", name: 'Michael K.', title: '', date: '2019' },
              { quote: "You are amazing! Thank you so much for attending to mine and Poppy's needs!!!", name: 'Amber K.', title: '', date: '2019' },
              { quote: "Professional. Made me feel comfortable while I was away. Highly recommend.", name: 'Elyse T.', title: '', date: '2019' },
              { quote: "Lisa was great with Hazel! Super perceptive and very proactive and reliable.", name: 'Yangzi L.', title: '', date: '2019' },
              { quote: "Lisa was very patient with Miller and took great photos of him along the way.", name: 'Catherine N.', title: '', date: '2019' },
              { quote: "Lisa was timely and attentive! Would use again!", name: 'Ellen C.', title: '', date: '2019' },
              { quote: "Great communicator, would recommend.", name: 'Reggie & Katie F.', title: '', date: '2020' },
              { quote: "Lisa was very patient and helpful with my very skittish dog!", name: 'Chalet B.', title: '', date: '2020' },
              { quote: "Love Lisa, will use her again for sure!", name: 'Jenny W.', title: '', date: '2020' },
              { quote: "Lisa is great at communicating and goes out of the way to make sure my Pretzel gets everything he needs while I'm away.", name: 'Sarah M.', title: '', date: '2019' },
              { quote: "Lisa was great! Showed up early!", name: 'Kyle S.', title: '', date: '2019' },
              { quote: "Amazing for my first time experience!!", name: 'Meghan M.', title: '', date: '2019' },
              { quote: "Loved the pictures!", name: 'Tyler N.', title: '', date: '2019' },
              { quote: "Lisa is awesome! She watched my two dogs and did a great job.", name: 'Marlow A.', title: '', date: '2021' },
              { quote: "We were so happy with Lisa. We came home to a happy, calm dog and clean house.", name: 'Cindy M.', title: '', date: '2020' },
              { quote: "Lisa stayed with our two fur-babies and did a great job. One of them got sick while we were gone and Lisa took good care of him.", name: 'Mary K.', title: '', date: '2020' },
              { quote: "Lisa was wonderful! Very communicative and Otto loved her!", name: 'Jeana M.', title: '', date: '2020' },
              { quote: "Lisa was excellent in every way! She has a beautiful personality.", name: 'Paula P.', title: '', date: '2020' },
              { quote: "Lisa has been nothing short of spectacular! She goes above and beyond sending pics of our pup.", name: 'Kathryn W.', title: '', date: '2020' },
              { quote: "Lisa was great with Zeus! She took notes at our meet up to ensure she knew how to properly take care of him.", name: 'Sarah H.', title: '', date: '2020' },
              { quote: "Lisa was incredible. She accepted a request last minute and saved us!", name: 'Jazmine O.', title: '', date: '2021' },
              { quote: "Lisa was AMAZING. We never worried once!!!", name: 'Amy H.', title: '', date: '2021' },
              { quote: "Lisa took great care of my dog and home while on vacation. Will rebook again.", name: 'Oliver E.', title: '', date: '2021' },
              { quote: "Lisa did a great job taking care of my dog and home. Very conscientious and helpful.", name: 'Heather H.', title: '', date: '2021' },
              { quote: "Lisa was friendly, professional, and sweet to our dog. This was our first experience with Rover and everything went smoothly.", name: 'Drew H.', title: '', date: '2021' },
              { quote: "I highly recommend Lisa without any hesitation!! She went beyond the call of duty and my house was left in pristine condition.", name: 'Paula P.', title: '', date: '2021' },
              { quote: "Lisa watched our house and dog when we went to Mexico. She was very communicative throughout and everything was taken care of when we got home.", name: 'Emily M.', title: '', date: '2021' },
              { quote: "Lisa took great care of Henry.", name: 'William F.', title: '', date: '2023', repeat: true },
              { quote: "Lisa is a total pro. Left our house perfectly clean and exactly how we left it, just a little better.", name: 'Claire H.', title: '', date: '2023' },
            ].map((t, i) => (
              <div key={t.name + t.date + i} style={{ backgroundColor: 'white', padding: '28px 24px', borderRadius: '8px', borderLeft: '4px solid #E8A598' }}>
                <p style={{ fontSize: '14px', lineHeight: '1.85', color: '#2C1810', fontStyle: 'italic', marginBottom: '16px' }}>
                  "{t.quote}"
                </p>
                <div style={{ color: '#7D3B4E', fontWeight: 'bold', fontSize: '14px' }}>{t.name}</div>
                {t.repeat && <span style={{ display: 'inline-block', backgroundColor: '#D4A017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.5px', padding: '2px 8px', borderRadius: '10px', marginTop: '4px' }}>Repeat Client</span>}
                {t.title && <div style={{ color: '#C97B8A', fontSize: '12px', marginTop: '3px' }}>{t.title}</div>}
                <div style={{ display: 'inline-block', marginTop: '6px', fontSize: '11px', color: '#C97B8A', letterSpacing: '1px', fontWeight: '600', backgroundColor: '#FDF6F0', padding: '2px 8px', borderRadius: '10px' }}>{t.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="responsive-section" style={{ backgroundColor: '#7D3B4E', textAlign: 'center' }}>
        <p style={{ color: '#E8C47A', fontSize: '12px', letterSpacing: '4px', marginBottom: '20px', fontWeight: '600' }}>YOUR NEXT STEP</p>
        <h2 style={{ fontSize: '46px', fontWeight: 'normal', marginBottom: '24px', color: 'white', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.2' }}>
          The life you came here looking for is absolutely real.
        </h2>
        <p style={{ color: '#F5E0E6', fontSize: '18px', maxWidth: '520px', margin: '0 auto 48px', lineHeight: '1.75' }}>
          And so is the person who will help you build it. Book a strategy session and let's map your Mexico — together.
        </p>
        <a className="button-link" href="#planning-calls" style={{
          backgroundColor: '#C4622D',
          color: 'white',
          borderRadius: '4px',
          textDecoration: 'none',
          fontSize: '18px',
          fontWeight: '700',
          letterSpacing: '0.5px',
          display: 'inline-block',
          marginBottom: '40px'
        }}>✦ Book a Planning Call</a>
        <div className="button-row" style={{ justifyContent: 'center', marginTop: '16px' }}>
          <a href="mailto:Lisa@InTheKnowMx.com" style={{ color: '#F5E0E6', textDecoration: 'none', fontSize: '14px' }}>Lisa@InTheKnowMx.com</a>
          <a href="https://www.instagram.com/in.the.know.mexico/" target="_blank" style={{ color: '#F5E0E6', textDecoration: 'none', fontSize: '14px' }}>Instagram</a>
          <a href="https://www.facebook.com/InTheKnowMex" target="_blank" style={{ color: '#F5E0E6', textDecoration: 'none', fontSize: '14px' }}>Facebook</a>
          <a href="https://www.facebook.com/groups/655871853479437" target="_blank" style={{ color: '#F5E0E6', textDecoration: 'none', fontSize: '14px' }}>Facebook Group</a>
          <a href="https://www.linkedin.com/in/lisamcobham" target="_blank" style={{ color: '#F5E0E6', textDecoration: 'none', fontSize: '14px' }}>LinkedIn</a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1A0E09', padding: '60px 40px 40px' }}>
        <div className="footer-grid">
          <div className="footer-col">
            <h4>SERVICES</h4>
            <a href="#services">Concierge</a>
            <a href="/residency">Residency</a>
            <a href="#rentals">Rental Properties</a>
            <a href="#properties">Buy in SMA</a>
            <a href="#caretaking">Property & Pet Care</a>
            <a href="#senior-concierge">Senior Concierge</a>
            <a href="#local-companion">Local Companion</a>
          </div>
          <div className="footer-col">
            <h4>PLANNING CALLS</h4>
            <a href="#services">The Relocation Planning Call</a>
            <a href="#services">From Dream to Action Plan</a>
            <a href="#services">Moving Past Hesitation</a>
            <a href="#planning-calls">Book a Planning Call</a>
          </div>
          <div className="footer-col">
            <h4>RESOURCES</h4>
            <a href="#find-your-path">Find Your Mexico Path</a>
            <a href="#welcome-table">Welcome Table</a>
            <a href="#why-san-miguel">Why San Miguel</a>
          </div>
          <div className="footer-col">
            <h4>CONNECT</h4>
            <a href="#about">About Lisa</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#press">Press & Media</a>
            <a href="https://www.instagram.com/in.the.know.mexico/" target="_blank">Instagram</a>
            <a href="https://www.facebook.com/InTheKnowMex" target="_blank">Facebook</a>
            <a href="https://www.facebook.com/groups/655871853479437" target="_blank">Facebook Group</a>
            <a href="https://www.linkedin.com/in/lisamcobham" target="_blank">LinkedIn</a>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #2C1810', paddingTop: '24px', marginTop: '24px' }}>
          <p style={{ color: '#FDF6F0', fontSize: '13px', margin: '0' }}>
            © 2026 In The Know Mexico · Lisa May Cobham, Relocation Specialist · San Miguel de Allende, México · Known here since 2014.
          </p>
        </div>
      </footer>

    </main>
  )
}
