'use client'
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { useState } from 'react'
import MexicoPathQuiz from './components/MexicoPathQuiz'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="page-root" style={{ fontFamily: "var(--font-inter, 'Inter', 'Helvetica Neue', sans-serif)", backgroundColor: '#FDF6F0', color: '#2C1810' }}>
      <style>{`
        .page-root { overflow-x: hidden; }
        .main-nav { background-color: #FDF6F0; padding: 20px 40px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #E8A598; position: sticky; top: 0; z-index: 100; }
        .nav-brand { font-size: 18px; font-weight: bold; color: #7D3B4E; letter-spacing: 2px; font-family: var(--font-playfair, 'Playfair Display', Georgia, serif); }
        .nav-right { display: flex; align-items: center; gap: 20px; position: relative; }
        .nav-links { display: flex; gap: 24px; align-items: center; flex-wrap: wrap; }
        .nav-links a { color: #2C1810; text-decoration: none; font-size: 14px; }
        .nav-toggle { display: none; background: none; border: none; cursor: pointer; flex-direction: column; gap: 5px; padding: 8px; }
        .nav-toggle span { width: 22px; height: 2px; background: #2C1810; display: block; border-radius: 1px; }
        .nav-cta { background-color: #C4622D; color: white; padding: 10px 22px; border-radius: 4px; text-decoration: none; font-size: 14px; font-weight: 600; letter-spacing: 0.5px; white-space: nowrap; }
        .hero-section { display: flex; flex-direction: row-reverse; min-height: 90vh; align-items: stretch; overflow: hidden; }
        .hero-photo { flex: 0 0 58%; min-height: 380px; overflow: hidden; }
        .hero-copy { flex: 0 0 42%; background-color: #FDF6F0; padding: 80px 60px; display: flex; flex-direction: column; justify-content: center; }
        .hero-copy p.lead { color: #7D3B4E; font-size: 11px; letter-spacing: 5px; margin-bottom: 28px; font-weight: 700; }
        .hero-copy h1 { color: #2C1810; font-size: 52px; line-height: 1.1; margin-bottom: 28px; font-weight: normal; font-family: var(--font-playfair, 'Playfair Display', Georgia, serif); }
        .hero-copy h1 span { color: #7D3B4E; }
        .hero-copy .hero-description { color: #2C1810; font-size: 17px; line-height: 1.8; margin-bottom: 40px; }
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
        @media (max-width: 767px) {
          .main-nav { padding: 16px 20px; }
          .nav-links { display: none; position: absolute; top: 100%; right: 20px; background: #FDF6F0; box-shadow: 0 12px 32px rgba(0,0,0,.12); border: 1px solid #E8A598; border-radius: 8px; flex-direction: column; width: calc(100vw - 40px); max-width: 320px; z-index: 110; }
          .nav-links.open { display: flex; }
          .nav-links a { padding: 12px 18px; border-bottom: 1px solid #E8A598; }
          .nav-links a:last-child { border-bottom: none; }
          .nav-toggle { display: flex; }
          .hero-section { flex-direction: column; min-height: auto; }
          .hero-photo, .hero-copy { flex: 1 1 100%; }
          .hero-copy { padding: 48px 20px; }
          .hero-copy h1 { font-size: 36px !important; }
          .hero-buttons { flex-direction: column; width: 100%; }
          .button-link { width: 100%; padding: 16px 20px; }
          .responsive-section { padding: 48px 20px; }
          .content-wrapper { padding: 0; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
          .ticker-track { animation-duration: 55s; }
          .footer-grid { grid-template-columns: 1fr; gap: 32px; }
          .pull-quotes-grid, .why-grid, .press-grid, .service-grid, .pricing-grid, .testimonials-grid { grid-template-columns: 1fr; }
          .press-grid { grid-template-columns: repeat(2, 1fr); }
          .button-row { flex-direction: column; align-items: stretch; }
          .hero-columns, .two-column-stack, .flex-stack { flex-direction: column; }
          main h1 { font-size: 36px !important; }
          main h2 { font-size: 28px !important; }
          main h3 { font-size: 20px !important; }
          main h4 { font-size: 18px !important; }
          .responsive-img { max-width: 100%; height: auto; }
        }
      `}</style>

      {/* Navigation */}
      <nav className="main-nav">
        <div className="nav-brand">IN THE KNOW MEXICO</div>
        <div className="nav-right">
          <button className="nav-toggle" aria-label="Toggle navigation" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span />
            <span />
            <span />
          </button>
          <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>Concierge</a>
            <a href="/residency" onClick={() => setMobileMenuOpen(false)}>Residency</a>
            <a href="#rentals" onClick={() => setMobileMenuOpen(false)}>Rentals</a>
            <a href="#properties" onClick={() => setMobileMenuOpen(false)}>Owning</a>
            <a href="#caretaking" onClick={() => setMobileMenuOpen(false)}>Home & Pet</a>
            <a href="#local-companion" onClick={() => setMobileMenuOpen(false)}>Local Companion</a>
            <a href="#welcome-table" onClick={() => setMobileMenuOpen(false)}>Welcome Table</a>
          </div>
          <a className="button-link nav-cta" href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank">Book a Planning Call</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="responsive-section hero-section">
        <div className="hero-photo">
          <Image
            src="/images/herocropped.jpg"
            alt="San Miguel de Allende"
            className="responsive-img"
            priority
            width={1600}
            height={1200}
            style={{ objectFit: 'cover', objectPosition: 'center top', width: '100%', height: '100%', display: 'block' }}
          />
        </div>
        <div className="hero-copy">
          <p className="lead">SAN MIGUEL DE ALLENDE · MEXICO</p>
          <h1>San Miguel<br /><span>Insider.</span></h1>
          <div style={{ width: '48px', height: '2px', backgroundColor: '#D4A017', marginBottom: '28px' }} />
          <p className="hero-description">Your person on the ground since 2015.</p>
          <div className="hero-buttons">
            <a className="button-link" href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank">Book a Planning Call</a>
            <a className="button-link secondary" href="/residency">See If I Qualify →</a>
          </div>
        </div>
      </section>
      {/* Stats Bar */}
      <section className="responsive-section" style={{ backgroundColor: '#2C1810' }}>
        <div className="content-wrapper stats-grid">
          {[
            { number: '12+', label: 'Years in Mexico' },
            { number: '100%', label: 'In-Person Service' },
            { number: '300+', label: 'Five-Star Reviews' },
            { number: '124+', label: 'Repeat Clients' },
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
                { text: '"The hardest part about having her is saying goodbye."', name: 'Michelle L., Gecko Bungalows Resort · Belize' },
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
              { emoji: '🤝', title: 'Trusted by the community.', body: '500+ five-star reviews. Not because nothing ever goes wrong — but because when it does, Lisa handles it before you have to. She clears the problem. You come home to exactly what you left. Ready to welcome you back to your charmed life in San Miguel.' },
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

      {/* Book CTA Band */}
      <section className="responsive-section" style={{ backgroundColor: '#C4622D' }}>
        <div className="content-wrapper button-row" style={{ textAlign: 'center', justifyContent: 'center' }}>
          <p style={{ color: 'white', fontSize: '18px', margin: 0, fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", fontStyle: 'italic' }}>
            Ready to make San Miguel your home?
          </p>
          <a className="button-link" href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank">✦ Book a Planning Call Now</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="responsive-section">
        <div className="content-wrapper two-column-stack" style={{ alignItems: 'center' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
          <p style={{ color: '#7D3B4E', fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', fontWeight: '600' }}>ABOUT LISA MAY COBHAM</p>
          <h2 style={{ fontSize: '42px', fontWeight: 'normal', marginBottom: '24px', lineHeight: '1.2', color: '#2C1810', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>
            Known here. Trusted here. Since 2015.
          </h2>
          <p style={{ fontSize: '17px', lineHeight: '1.85', marginBottom: '20px', color: '#2C1810' }}>
            I didn't plan to stay. San Miguel charmed me into it. The joy of this city — the light, the people, the pace, the way life actually feels here — made leaving impossible. Eleven years later I am still here, still discovering, and still completely in love with this country.
          </p>
          <p style={{ fontSize: '17px', lineHeight: '1.85', marginBottom: '20px', color: '#2C1810' }}>
            I work with <strong>Mexico newcomers</strong> who need more than a checklist. They need someone
            who already knows the plumber, the notary, the landlord, and the unspoken rules
            that no guidebook will tell you. <strong>Friend-level trust. Professional-grade follow-through.</strong>
          </p>
          <p style={{ fontSize: '17px', lineHeight: '1.85', color: '#2C1810' }}>
            The town knows me. My clients know me. Now you do too.<em> I got you.</em>
          </p>
          <div style={{ marginTop: '32px' }}>
            <a href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{
              backgroundColor: '#C4622D',
              color: 'white',
              padding: '14px 32px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '700'
            }}>✦ Book a Planning Call</a>
          </div>
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

      <section id="services" className="responsive-section" style={{ backgroundColor: '#7D3B4E' }}>
        <div className="content-wrapper">
          <p style={{ color: '#E8C47A', fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', textAlign: 'center', fontWeight: '600' }}>WHAT I OFFER</p>
          <h2 style={{ fontSize: '42px', fontWeight: 'normal', marginBottom: '16px', textAlign: 'center', color: 'white', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>
            Your Mexico life — built with someone who already lives it.
          </h2>
          <p style={{ color: '#F5E0E6', fontSize: '17px', textAlign: 'center', maxWidth: '600px', margin: '0 auto 16px', lineHeight: '1.75' }}>
            Every service is personal, in-person, and built around your specific situation. Not outsourced. Not handed off. Lisa and her team are with you every step — from your first question to the day you hold your residency card and beyond.
          </p>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <a className="button-link" href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{
              backgroundColor: '#C4622D',
              color: 'white',
              borderRadius: '4px',
              display: 'inline-block'
            }}>✦ Book a Planning Call</a>
          </div>
          {/* Planning Calls */}
          <div className="service-grid" style={{ marginBottom: '28px' }}>
            {[
              {
                emoji: '🗺️',
                title: 'The Relocation Planning Call',
                subtitle: 'Everything in your head about Mexico — sorted.',
                body: "You'll complete a brief pre-call questionnaire so we arrive prepared and nothing gets missed. In our one-hour conversation we map your housing, residency, budget, timeline, pets, furniture, remote income, healthcare, and your personal next steps. Within 48 hours you receive a written summary of our call, specific answers to every question you raised, any additional resources I promised, and a timeline. You don't just leave with clarity — you leave with a document that becomes your Mexico roadmap.",
                closing: 'You will know exactly what your next step is.',
              },
              {
                emoji: '📋',
                title: 'From Dream to Action Plan',
                subtitle: "You've been talking about Mexico for years. Let's turn that into a real outline.",
                body: "This call is for the serious dreamer who needs structure. Together we build a step-by-step action plan — what to do first, what to do next, and what can wait. We identify the gaps between where you are now and where you want to be, and we close them one by one. We cover the practical questions you've been putting off — housing options, neighborhood fit, budget reality, income sources, healthcare access, and what moving actually looks like for your specific life. Nothing vague. Nothing generic. A real plan built around your real situation. You've done the dreaming. This is where the doing begins.",
                closing: "Dreams don’t move you to Mexico. Plans do.",
              },
              {
                emoji: '💛',
                title: 'Moving Through Fear',
                subtitle: 'Sometimes the only thing standing between you and the life you want is fear.',
                body: "Projected fear from loved ones. Fear of the unknown. Uncertainty about healthcare, personal safety, language, or leaving things behind. These are real — and they deserve a real conversation. This call is a mindful coaching session. We talk honestly about what's holding you back, work through the emotional and practical blocks, and build concrete steps to motivate you to take that first real move. If San Miguel isn't right for you, we discuss other parts of Mexico or the world. Your fears are addressed directly — with care and acceptance.",
                closing: "You don't need to have it all figured out. You simply need a brainstorming session.",
              },
            ].map((card) => (
              <div key={card.title} style={{ backgroundColor: '#FDF6F0', padding: '40px 32px', borderRadius: '8px', borderTop: '4px solid #C4622D', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '34px', marginBottom: '14px' }}>{card.emoji}</div>
                <h3 style={{ fontSize: '21px', marginBottom: '10px', color: '#7D3B4E', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.3' }}>{card.title}</h3>
                <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#5C3A2E', marginBottom: '16px', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.6' }}>{card.subtitle}</p>
                <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#2C1810', marginBottom: '16px', flex: 1 }}>{card.body}</p>
                <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#8B1A2A', marginBottom: '20px', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>{card.closing}</p>
                <a className="button-link" href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{ color: '#C4622D', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>Book a Planning Call →</a>
              </div>
            ))}
          </div>

          {/* Planning Calls Footer Note */}
          <div style={{ backgroundColor: '#FAE8E0', borderLeft: '4px solid #D4A017', padding: '28px 32px', borderRadius: '8px', marginBottom: '28px' }}>
            <p style={{ fontSize: '15px', fontWeight: '700', color: '#7D3B4E', marginBottom: '14px', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>All Planning Calls Include:</p>
            <ul style={{ fontSize: '15px', lineHeight: '1.9', color: '#2C1810', paddingLeft: '20px', margin: 0 }}>
              <li>A pre-call questionnaire so we arrive prepared and nothing gets missed</li>
              <li>A 48-hour written follow-up with a summary, specific answers to every question you raised, and any resources promised during our call</li>
              <li>Real steps to a plan at your fingertips before the week is out</li>
            </ul>
          </div>

          <div className="service-grid">

            {/* Service - Immigration */}
            <div style={{ backgroundColor: '#FDF6F0', padding: '40px 32px', borderRadius: '8px', borderTop: '4px solid #C4622D', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '34px', marginBottom: '14px' }}>🛂</div>
              <h3 style={{ fontSize: '21px', marginBottom: '14px', color: '#7D3B4E', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.3' }}>Mexican Residency, Sorted</h3>
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#2C1810', marginBottom: '16px', flex: 1 }}>
                My residency team is your residency team. I coordinate every step, set your appointments, and walk in with you. Temporary residency, permanent residency, heritage citizenship — navigated together by people who know this city and this process. You don't show up to a consulate alone with a stack of papers you don't understand. You arrive prepared, accompanied, and confident. We review your eligibility together, identify the right path for your specific situation, and handle the coordination from start to finish. Not outsourced. Not handed off. Lisa and her licensed immigration team stay present until you are fully taken care of — from your first question to the day you hold your residency card and beyond.
              </p>
              <p style={{ fontSize: '14px', fontStyle: 'italic', color: '#8B1A2A', marginBottom: '20px', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>My residency team is your residency team.</p>
              <a className="button-link" href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{ color: '#C4622D', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>Book a Planning Call →</a>
            </div>

            {/* Service - Concierge */}
            <div style={{ backgroundColor: '#FDF6F0', padding: '40px 32px', borderRadius: '8px', borderTop: '4px solid #C4622D' }}>
              <div style={{ fontSize: '34px', marginBottom: '14px' }}>🌮</div>
              <h3 style={{ fontSize: '21px', marginBottom: '14px', color: '#7D3B4E', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.3' }}>Mexico Newcomers Concierge</h3>
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#2C1810', marginBottom: '16px' }}>
                Mexico has a learning curve. Everyone hits it. The difference is whether you hit it alone or with someone who has already figured it out. I can do it for you — or I can show you how Mexico works. Banking, utilities, household staff, lease review, internet setup, government accounts, healthcare, post-surgery support, Mexican driver's license, car nationalization, setting up a business, travel assistance, home and pet security while you are away, Mexican phone number — we will handle it together until you take the reigns. That's the goal.
              </p>
              <ul style={{ fontSize: '14px', lineHeight: '1.9', color: '#2C1810', paddingLeft: '18px', marginBottom: '20px' }}>
                <li>Utility setup & bill payment</li>
                <li>Mexican bank account opening</li>
                <li>SIM card & internet setup</li>
                <li>Bilingual lease review & negotiation</li>
                <li>Trusted referrals: gardeners, household help, contractors</li>
                <li>Property management & construction oversight</li>
                <li>Reasonable home & clothing shopping guidance</li>
                <li>SSA & Mexican government account setup</li>
                <li>Post-surgery companionship & recovery support</li>
                <li>Shipping logistics, visa preparation, finding your gym, your doctor, your favorite coffee spot</li>
              </ul>
              <a className="button-link" href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{ color: '#C4622D', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>Book a Planning Call →</a>
            </div>

          </div>
        </div>
      </section>

      {/* Senior Concierge */}
      <section id="senior-concierge" className="responsive-section" style={{ backgroundColor: '#FDF6F0' }}>
        <div className="content-wrapper">
          <p style={{ color: '#D4A017', fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', fontWeight: '600' }}>SENIOR CONCIERGE</p>
          <h2 style={{ fontSize: '42px', fontWeight: 'normal', marginBottom: '14px', color: '#2C1810', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.2' }}>Senior Concierge</h2>
          <div style={{ fontSize: '34px', marginBottom: '12px' }}>🌺</div>
          <p style={{ fontSize: '17px', color: '#7D3B4E', marginBottom: '18px', fontStyle: 'italic', maxWidth: '820px' }}>Mexico is extraordinary at every age. Some days it just needs a little more navigation.</p>
          <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#2C1810', marginBottom: '12px', maxWidth: '820px' }}>
            Why won't Amazon.mx take my card? How do I access my SSA account from Mexico? How the hell do I navigate submitting my insurance reimbursement with my Medicaid insurance? How do I find a trustworthy CNA to help me a few hours per week to cook, clean and pick up my meds from the pharmacy? How do I use the translation app to navigate my day? How do I use the Uber app to receive a cheaper rate? How do I use the bus system? How do I get to my medical appointment when I don't have a car and don't speak Spanish?
          </p>
          <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#2C1810', marginBottom: '12px', maxWidth: '820px' }}>
            These are not small problems. They are the things that turn a beautiful day in San Miguel into a frustrating one. And they are completely solvable — with the right person by your side.
          </p>
          <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#2C1810', marginBottom: '18px', maxWidth: '820px' }}>
            The Senior Concierge is for the person who wants to live fully, independently, and confidently in Mexico — with a trusted support system available when the details get complicated.
          </p>
          <ul style={{ fontSize: '15px', lineHeight: '1.9', color: '#2C1810', paddingLeft: '18px', marginBottom: '18px', maxWidth: '820px' }}>
            <li>📱 Tech support — phones, apps, banking portals, streaming, Amazon.mx</li>
            <li>🏥 Medical accompaniment and appointment coordination</li>
            <li>💊 Pharmacy navigation and prescription support</li>
            <li>🏛️ SSA and government account setup and troubleshooting</li>
            <li>💸 Online bill pay and money transfer support</li>
            <li>🚗 Transportation coordination</li>
            <li>📋 Post-surgery companionship and recovery support</li>
            <li>🤝 Trusted referrals for home care, housekeeping, and healthcare providers</li>
          </ul>
          <p style={{ fontSize: '15px', color: '#7D3B4E', fontStyle: 'italic', marginBottom: '20px' }}>You didn't move to Mexico to struggle. You moved here to live.</p>
          <a className="button-link" href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{ backgroundColor: '#C4622D', color: 'white', borderRadius: '4px', textDecoration: 'none', fontSize: '15px', fontWeight: '700', display: 'inline-block' }}>Book a Planning Call</a>
        </div>
      </section>

      {/* Pricing */}
      <section className="responsive-section" style={{ backgroundColor: '#2C1810' }}>
        <div className="content-wrapper">
          <p style={{ color: '#D4A017', fontSize: '11px', letterSpacing: '5px', fontWeight: '700', marginBottom: '16px', textAlign: 'center' }}>TRANSPARENT PRICING</p>
          <h2 style={{ fontSize: '42px', fontWeight: 'normal', color: 'white', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", textAlign: 'center', marginBottom: '12px', lineHeight: '1.2' }}>
            Simple, honest pricing.
          </h2>
          <p style={{ fontSize: '17px', color: '#E8A598', textAlign: 'center', marginBottom: '56px', lineHeight: '1.7' }}>
            Every service is personal. Here is where we start.
          </p>
          <div className="pricing-grid" style={{ marginBottom: '40px' }}>

            <div style={{ backgroundColor: '#FDF6F0', padding: '40px 32px', borderRadius: '8px' }}>
              <div style={{ fontSize: '32px', marginBottom: '14px' }}>📞</div>
              <h3 style={{ fontSize: '21px', fontWeight: 'normal', color: '#2C1810', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '12px' }}>Book a Planning Call</h3>
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#2C1810', marginBottom: '24px' }}>
                Your first step. We map out your entire Mexico plan together.
              </p>
              <p style={{ fontSize: '13px', color: '#7D3B4E', letterSpacing: '1px', marginBottom: '28px', fontWeight: '600' }}>Book to confirm rate</p>
              <a className="button-link" href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{ backgroundColor: '#C4622D', color: 'white', borderRadius: '4px', textDecoration: 'none', fontSize: '14px', fontWeight: '700', display: 'inline-block' }}>Book a Planning Call</a>
            </div>

            <div style={{ backgroundColor: '#FDF6F0', padding: '40px 32px', borderRadius: '8px' }}>
              <div style={{ fontSize: '32px', marginBottom: '14px' }}>🌮</div>
              <h3 style={{ fontSize: '21px', fontWeight: 'normal', color: '#2C1810', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '12px' }}>Mexico Newcomers Concierge</h3>
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#2C1810', marginBottom: '24px' }}>
                Day-to-day life in Mexico, handled.
              </p>
              <p style={{ fontSize: '13px', color: '#7D3B4E', letterSpacing: '1px', marginBottom: '28px', fontWeight: '600' }}>Custom packages available</p>
              <a href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{ backgroundColor: '#C4622D', color: 'white', padding: '13px 28px', borderRadius: '4px', textDecoration: 'none', fontSize: '14px', fontWeight: '700', display: 'inline-block' }}>Book a Planning Call</a>
            </div>

            {/* Residency Tiered Cards */}
            <div style={{ backgroundColor: '#FDF6F0', padding: '40px 32px', borderRadius: '8px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '32px', marginBottom: '14px' }}>🛂</div>
              <h3 style={{ fontSize: '21px', fontWeight: 'normal', color: '#2C1810', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '8px' }}>Residency Planning Call</h3>
              <p style={{ fontSize: '28px', fontWeight: '700', color: '#8B1A2A', marginBottom: '8px', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>$89</p>
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#2C1810', marginBottom: '16px' }}>50 minutes. Everything you need to know about your residency options. Includes a free DIY document checklist to get started on your own.</p>
              <ul style={{ fontSize: '14px', lineHeight: '1.9', color: '#2C1810', paddingLeft: '18px', marginBottom: '16px', flex: 1 }}>
                <li>50-minute video or phone call</li>
                <li>Pre-call intake questionnaire</li>
                <li>Free DIY residency document checklist</li>
                <li>48-hour written follow-up with summary and next steps</li>
                <li>$89 credited toward any package upgrade</li>
              </ul>
              <p style={{ fontSize: '12px', color: '#7D3B4E', marginBottom: '16px', lineHeight: '1.6' }}>Pay via Zelle, Venmo ($91), Stripe ($92), or PayPal ($92)</p>
              <a href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{ backgroundColor: '#C4622D', color: 'white', padding: '13px 28px', borderRadius: '4px', textDecoration: 'none', fontSize: '14px', fontWeight: '700', display: 'inline-block', textAlign: 'center' }}>Book for $89</a>
            </div>

            <div style={{ backgroundColor: '#FDF6F0', padding: '40px 32px', borderRadius: '8px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '32px', marginBottom: '14px' }}>📋</div>
              <h3 style={{ fontSize: '21px', fontWeight: 'normal', color: '#2C1810', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '8px' }}>Residency Guided Package</h3>
              <p style={{ fontSize: '28px', fontWeight: '700', color: '#8B1A2A', marginBottom: '8px', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>$397</p>
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#2C1810', marginBottom: '16px' }}>I coordinate everything, prep you fully, and accompany you to your appointments. Attorney fees quoted separately.</p>
              <ul style={{ fontSize: '14px', lineHeight: '1.9', color: '#2C1810', paddingLeft: '18px', marginBottom: '16px', flex: 1 }}>
                <li>Pre-call intake questionnaire</li>
                <li>Full eligibility review</li>
                <li>Document preparation guidance</li>
                <li>Appointment coordination — consulate and INM</li>
                <li>In-person accompaniment to all appointments</li>
                <li>48-hour written follow-up</li>
                <li>WhatsApp support throughout</li>
                <li>Attorney fees quoted separately based on your case</li>
              </ul>
              <p style={{ fontSize: '12px', color: '#7D3B4E', marginBottom: '16px', lineHeight: '1.6' }}>Pay via Zelle, Venmo ($406), Stripe ($410), or PayPal ($410)</p>
              <a href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{ backgroundColor: '#C4622D', color: 'white', padding: '13px 28px', borderRadius: '4px', textDecoration: 'none', fontSize: '14px', fontWeight: '700', display: 'inline-block', textAlign: 'center' }}>Book for $397</a>
            </div>

            <div style={{ backgroundColor: '#FDF6F0', padding: '40px 32px', borderRadius: '8px', border: '2px solid #C4622D', position: 'relative', display: 'flex', flexDirection: 'column' }}>
              <p style={{ position: 'absolute', top: '-13px', left: '28px', fontSize: '11px', backgroundColor: '#C4622D', color: 'white', padding: '4px 14px', borderRadius: '20px', fontWeight: '700', letterSpacing: '1px', margin: 0 }}>MOST POPULAR</p>
              <div style={{ fontSize: '32px', marginBottom: '14px' }}>⭐</div>
              <h3 style={{ fontSize: '21px', fontWeight: 'normal', color: '#2C1810', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '8px' }}>Full Residency Concierge</h3>
              <p style={{ fontSize: '28px', fontWeight: '700', color: '#8B1A2A', marginBottom: '8px', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>$797</p>
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#2C1810', marginBottom: '16px' }}>White glove, start to finish. Coordination, accompaniment, and attorney fees included. No surprises.</p>
              <ul style={{ fontSize: '14px', lineHeight: '1.9', color: '#2C1810', paddingLeft: '18px', marginBottom: '16px', flex: 1 }}>
                <li>Everything in Guided Package</li>
                <li>Licensed immigration attorney fees included</li>
                <li>Full document preparation</li>
                <li>Consulate and INM appointments secured</li>
                <li>In-person accompaniment — every step</li>
                <li>Priority WhatsApp support</li>
                <li>One flat price — no surprise invoices</li>
              </ul>
              <p style={{ fontSize: '12px', color: '#7D3B4E', marginBottom: '16px', lineHeight: '1.6' }}>Pay via Zelle, Venmo ($814), Stripe ($821), or PayPal ($821)</p>
              <a href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{ backgroundColor: '#C4622D', color: 'white', padding: '13px 28px', borderRadius: '4px', textDecoration: 'none', fontSize: '14px', fontWeight: '700', display: 'inline-block', textAlign: 'center' }}>Book for $797</a>
            </div>

          </div>
          <p style={{ textAlign: 'center', color: '#E8A598', fontSize: '14px', lineHeight: '1.8' }}>
            Rental property showing packages, property &amp; pet care, senior concierge, and local companion services are priced individually. Ask Lisa during your planning call.
          </p>
        </div>
      </section>

      {/* Booking & Cancellation Policy */}
      <section className="responsive-section" style={{ backgroundColor: '#2C1810', borderTop: '1px solid #3D2418' }}>
        <div className="content-wrapper" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '28px', fontWeight: 'normal', color: '#FDF6F0', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '28px', textAlign: 'center' }}>Booking &amp; Cancellation Policy</h3>
          <p style={{ fontSize: '16px', lineHeight: '1.85', color: '#E8A598', marginBottom: '20px' }}>
            All sessions require payment in full to confirm. You will receive a confirmation email with your intake questionnaire within 24 hours of booking. Please complete your questionnaire at least 48 hours before your scheduled call so we arrive fully prepared.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.85', color: '#E8A598' }}>
            Cancellations made 48 hours or more before your session receive a full credit toward a future booking. Cancellations within 24 hours are non-refundable. No-shows forfeit the full session fee. Rescheduling is welcome with 48 hours notice.
          </p>
        </div>
      </section>

      {/* Why San Miguel */}
      <section className="responsive-section" style={{ backgroundColor: '#FDF6F0' }}>
        <div className="content-wrapper">
          <p style={{ color: '#D4A017', fontSize: '11px', letterSpacing: '5px', fontWeight: '700', marginBottom: '16px', textAlign: 'center' }}>WHY SAN MIGUEL DE ALLENDE</p>
          <h2 style={{ fontSize: '42px', fontWeight: 'normal', color: '#2C1810', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", textAlign: 'center', marginBottom: '12px', lineHeight: '1.2' }}>
            There is a reason people come here<br />and never leave.
          </h2>
          <p style={{ fontSize: '17px', color: '#5C3A2E', textAlign: 'center', marginBottom: '56px', lineHeight: '1.7' }}>
            UNESCO World Heritage city. World-class food, art, and community. And the most beautiful light you have ever seen.
          </p>
          <div className="why-grid" style={{ marginBottom: '56px' }}>
            {[
              { name: 'Centro', subtitle: 'The heart of it all', desc: 'The historic heart — cobblestone streets, the iconic Parroquia, world-class restaurants, and rooftop bars above 300-year-old buildings. Where everyone starts and many stay.' },
              { name: 'San Antonio', subtitle: 'Quiet, walkable, local', desc: 'Leafy and local. A quiet residential neighborhood with excellent taco stands, long-term expat community, and a slower, more authentic pace just minutes from everything.' },
              { name: 'Guadiana', subtitle: 'Leafy streets, expat community', desc: 'Tucked in a verdant ravine, Guadiana is one of the most beautiful and walkable neighborhoods in the city. Artists, writers, and longtime residents call it home.' },
              { name: 'Atascadero', subtitle: 'Views, space, serenity', desc: 'More space, more garden, more sky. A favorite for those who want a real home rather than a pied-à-terre — with stunning views and a genuine neighborhood feel.' },
            ].map((n) => (
              <a key={n.name} href="#contact" style={{ textDecoration: 'none' }}>
                <div style={{ backgroundColor: 'white', padding: '32px 24px', borderRadius: '8px', borderTop: '3px solid #D4A017', boxShadow: '0 2px 12px rgba(44,24,16,0.06)', height: '100%', boxSizing: 'border-box' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 'normal', color: '#8B1A2A', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '4px' }}>{n.name}</h3>
                  <p style={{ fontSize: '12px', color: '#D4A017', letterSpacing: '2px', fontWeight: '600', marginBottom: '12px' }}>{n.subtitle.toUpperCase()}</p>
                  <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#2C1810' }}>{n.desc}</p>
                </div>
              </a>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: '16px', color: '#5C3A2E', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto 32px' }}>
            Not sure which neighborhood is right for you? That is exactly what a strategy session is for.
          </p>
          <div style={{ textAlign: 'center' }}>
            <a href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{ backgroundColor: '#C4622D', color: 'white', padding: '16px 40px', borderRadius: '4px', textDecoration: 'none', fontSize: '15px', fontWeight: '700', display: 'inline-block' }}>✦ Book a Planning Call</a>
          </div>
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
                '🤝 Ongoing support after you move in — Questions don\'t stop at move-in. When you sign your lease, you receive 2 free hours of Mexico Newcomers Concierge support — home setup, utilities, domestic staff, banking, grocery delivery, Mexican SIM setup, pet grooming, healthcare, or whatever you need to completely settle in.',
              ].map((item) => (
                <p key={item} style={{ fontSize: '14px', color: '#2C1810', margin: '4px 0', lineHeight: '1.6' }}>{item}</p>
              ))}
            </div>
          </div>

          {/* Showing Day Packages */}
          <h3 style={{ fontSize: '28px', fontWeight: 'normal', color: '#2C1810', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '24px' }}>
            Property Showing Day Packages
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '40px' }}>

            <div style={{ backgroundColor: 'white', padding: '36px 28px', borderRadius: '8px', border: '1px solid #E8A598' }}>
              <h4 style={{ fontSize: '19px', color: '#7D3B4E', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '8px' }}>Essential Day</h4>
              <p style={{ fontSize: '13px', color: '#7D3B4E', marginBottom: '16px', letterSpacing: '1px' }}>PERSONAL AGENT · FULL DAY</p>
              <ul style={{ fontSize: '14px', lineHeight: '1.9', color: '#2C1810', paddingLeft: '18px', marginBottom: '0' }}>
                <li>Pre-curated property list based on your needs</li>
                <li>Personal escort to all showings</li>
                <li>Translation & negotiation support</li>
                <li>Lease review included</li>
                <li style={{ color: '#7D3B4E', fontWeight: '700' }}>Lease signed? 2 free hours of Mexico Newcomers Concierge support</li>
              </ul>
              <p style={{ fontSize: '13px', color: '#C97B8A', margin: '12px 0 6px', lineHeight: '1.6' }}>1 free reschedule available</p>
              <p style={{ fontSize: '13px', color: '#C97B8A', margin: '0 0 16px', lineHeight: '1.6' }}>No refunds within 48 hours of showing day.</p>
              <div style={{ height: '16px' }} />
              <a href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{
                backgroundColor: '#C4622D', color: 'white', padding: '12px 24px',
                borderRadius: '4px', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold', display: 'inline-block'
              }}>Book This Package →</a>
            </div>

            <div style={{ backgroundColor: 'white', padding: '36px 28px', borderRadius: '8px', border: '2px solid #C4622D' }}>
              <p style={{ fontSize: '11px', backgroundColor: '#C4622D', color: 'white', display: 'inline-block', padding: '4px 12px', borderRadius: '20px', marginBottom: '12px', fontWeight: '600', letterSpacing: '1px' }}>MOST POPULAR</p>
              <h4 style={{ fontSize: '19px', color: '#7D3B4E', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '8px' }}>Full Experience Day</h4>
              <p style={{ fontSize: '13px', color: '#7D3B4E', marginBottom: '16px', letterSpacing: '1px' }}>WITH PRIVATE DRIVER + ROOFTOP DEBRIEF</p>
              <ul style={{ fontSize: '14px', lineHeight: '1.9', color: '#2C1810', paddingLeft: '18px', marginBottom: '0' }}>
                <li>Everything in Essential Day</li>
                <li>Private driver for the full day — no logistics stress</li>
                <li>Rooftop dinner or sunset snack package</li>
                <li>Post-showing debrief: we review every property together</li>
                <li>Pros/cons breakdown, my honest recommendations</li>
                <li style={{ color: '#7D3B4E', fontWeight: '700' }}>Lease signed? 2 free hours of Mexico Newcomers Concierge support</li>
              </ul>
              <p style={{ fontSize: '13px', color: '#C97B8A', margin: '12px 0 6px', lineHeight: '1.6' }}>1 free reschedule available</p>
              <p style={{ fontSize: '13px', color: '#C97B8A', margin: '0 0 16px', lineHeight: '1.6' }}>No refunds within 48 hours of showing day.</p>
              <div style={{ height: '16px' }} />
              <a href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{
                backgroundColor: '#C4622D', color: 'white', padding: '12px 24px',
                borderRadius: '4px', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold', display: 'inline-block'
              }}>Book This Package →</a>
            </div>

          </div>

          {/* Client Agreement Note */}
          <div style={{ backgroundColor: '#2C1810', padding: '32px 36px', borderRadius: '8px', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '20px', color: '#E8A598', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '12px' }}>
              My Commitment to You — in Writing
            </h3>
            <p style={{ fontSize: '15px', color: '#FDF6F0', lineHeight: '1.8', marginBottom: '0' }}>
              Every rental client receives a personal agent agreement outlining exactly what I will research,
              verify, and deliver on your behalf — before showing day. No surprises, no shortcuts.
              You deserve to know what you're getting. <a href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{ color: '#E8A598', fontWeight: 'bold' }}>Book a call to receive yours.</a>
            </p>
          </div>

          {/* MLS Link */}
          <div style={{ textAlign: 'center', padding: '40px', backgroundColor: '#FAE8E0', borderRadius: '8px' }}>
            <p style={{ fontSize: '13px', color: '#7D3B4E', letterSpacing: '3px', marginBottom: '12px', fontWeight: '600' }}>BROWSE AVAILABLE RENTALS</p>
            <h3 style={{ fontSize: '28px', fontWeight: 'normal', color: '#2C1810', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '16px' }}>
              View San Miguel Rental Listings
            </h3>
            <p style={{ fontSize: '15px', color: '#2C1810', marginBottom: '24px', lineHeight: '1.7', maxWidth: '560px', margin: '0 auto 24px' }}>
              In partnership with Tiffany Paige of The Agency San Miguel — access to the full rental market in one place.
            </p>
            <a href="https://sanmiguelrealestate.com.mx/san-miguel-mls-real-estate-listings" target="_blank" style={{
              backgroundColor: '#C4622D', color: 'white', padding: '14px 36px',
              borderRadius: '4px', textDecoration: 'none', fontSize: '15px', fontWeight: '700', display: 'inline-block'
            }}>Browse Rental Listings →</a>
          </div>
        </div>
      </section>

      {/* Buy / Properties Section */}
      <section id="properties" className="responsive-section" style={{ backgroundColor: '#2C1810' }}>
        <div className="content-wrapper">
          <p style={{ color: '#E8A598', fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', fontWeight: '600' }}>BUY IN SAN MIGUEL</p>
          <h2 style={{ fontSize: '42px', fontWeight: 'normal', marginBottom: '20px', color: 'white', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.2' }}>
            Ready to Buy? Meet Tiffany Paige.
          </h2>
          <p style={{ fontSize: '17px', lineHeight: '1.85', color: '#FDF6F0', maxWidth: '700px', marginBottom: '40px' }}>
            When it's time to buy, I connect Mexico newcomers with my trusted partner <strong style={{ color: '#E8A598' }}>Tiffany Paige</strong>,
            Licensed Real Estate Advisor at The Agency San Miguel. She's done this herself —
            bought property in Mexico, navigated every step — and now guides international buyers
            with clarity and care. Together, we cover every part of your journey.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="https://sanmiguelrealestate.com.mx/the-agency-san-miguel-featured-listings" target="_blank" style={{
              backgroundColor: '#C4622D', color: 'white', padding: '14px 36px',
              borderRadius: '4px', textDecoration: 'none', fontSize: '15px', fontWeight: '700'
            }}>Browse Properties →</a>
            <a href="https://sanmiguelrealestate.com.mx" target="_blank" style={{
              backgroundColor: 'transparent', color: '#E8A598', padding: '14px 36px',
              borderRadius: '4px', textDecoration: 'none', fontSize: '15px', border: '1px solid #E8A598'
            }}>Visit Tiffany's Site →</a>
            <a href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{
              backgroundColor: 'white', color: '#2C1810', padding: '14px 36px',
              borderRadius: '4px', textDecoration: 'none', fontSize: '15px', fontWeight: '700'
            }}>✦ Book a Planning Call First</a>
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
                500+ five-star reviews from people who trusted Lisa with their most precious things while they were away.
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
              <a className="button-link" href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{
                backgroundColor: '#C4622D',
                color: 'white',
                borderRadius: '4px',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '700'
              }}>✦ Book a Planning Call</a>
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

      {/* Local Companion */}
      <section id="local-companion" className="responsive-section" style={{ backgroundColor: '#2C1810' }}>
        <div className="content-wrapper">
          <p style={{ color: '#D4A017', fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', fontWeight: '600' }}>LOCAL COMPANION</p>
          <h2 style={{ fontSize: '42px', fontWeight: 'normal', marginBottom: '24px', color: 'white', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.2', maxWidth: '700px' }}>
            Sometimes you just need someone who knows every corner.
          </h2>
          <p style={{ fontSize: '17px', lineHeight: '1.85', color: '#FDF6F0', maxWidth: '720px', marginBottom: '40px' }}>
            Inspired by Japan's beloved rental person culture — sometimes you just need a trusted local by your side.
            Whether it's dinner for one that shouldn't be, a medical appointment, a cultural event, or simply exploring
            San Miguel with someone who knows every corner. I show up. No agenda. Just good company.
          </p>
          <a className="button-link" href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{
            backgroundColor: '#C4622D',
            color: 'white',
            borderRadius: '4px',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: '700',
            display: 'inline-block'
          }}>✦ Book a Planning Call</a>
          <p style={{ marginTop: '28px', fontSize: '14px', color: '#E8A598', lineHeight: '1.7', fontStyle: 'italic' }}>
            In The Know Mexico. Because having an insider makes all the difference.
          </p>
        </div>
      </section>

      {/* Welcome Table */}
      <section id="welcome-table" className="responsive-section" style={{ backgroundColor: '#E8A598' }}>
        <div className="content-wrapper button-row" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#7D3B4E', fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', fontWeight: '600' }}>COMMUNITY</p>
          <h2 style={{ fontSize: '42px', fontWeight: 'normal', marginBottom: '24px', color: '#2C1810', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>
            The Welcome Table
          </h2>
          <p style={{ fontSize: '18px', lineHeight: '1.85', color: '#2C1810', maxWidth: '700px', margin: '0 auto 20px' }}>
            Not sure where to start? That's exactly what The Welcome Table is for.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.85', color: '#5C2A35', maxWidth: '680px', margin: '0 auto 40px' }}>
            In partnership with <strong>Tiffany Paige of The Agency San Miguel</strong>, The Welcome Table
            is a free, no-pressure Saturday morning gathering for Mexico newcomers and anyone curious
            about life here. Come with your questions — leave with real answers and real connections.
            Every Saturday 10am–1pm at The Agency, Aldama 31. Always free.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a className="button-link" href="https://sanmiguelrealestate.com.mx/welcome-table" target="_blank" style={{
              backgroundColor: '#2C1810',
              color: 'white',
              borderRadius: '4px',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: 'bold'
            }}>Learn More & RSVP →</a>
            <a className="button-link" href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{
              backgroundColor: '#C4622D',
              color: 'white',
              borderRadius: '4px',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: 'bold'
            }}>✦ Book a Private Consultation</a>
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
              { quote: "She is tenacious, organized, and deeply caring — going above and beyond to make sure her clients feel seen, supported, and completely at ease. She's not just a relocation concierge — she's a trusted guide.", name: 'Tiffany Paige', title: 'Licensed Real Estate Advisor, The Agency SMA', date: '2026' },
              { quote: "I could not be more pleased with Lisa! She was very responsive, reasonable and she stayed with the program until we were successful. Do business with Lisa and she will solve your problems!", name: 'Terry M.', title: 'San Miguel Expat', date: '2026' },
              { quote: "From the moment I got off the plane, Lisa showed up with kindness, clarity, and a deep knowledge of how things work here. She met me at my Airbnb, took me grocery shopping, helped me with the ATM, showed me around San Miguel, and helped me find my apartment. Lisa is more than a service provider — she's a support system, a guide, and a true friend.", name: 'Brian Keith Webster', title: 'Author', date: '2025' },
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
              { quote: "Lisa was prompt, professional and everything you could want in a dog sitter. She even adjusted her schedule to take Charlie on an extra walk when our flight was delayed. I cannot say enough good things about her.", name: 'Brandon S.', title: '', date: '2019' },
              { quote: "When we arrived home we found a cooked dinner, well kept house — cleaner than we left it — and a happy cat. Strongly recommend her to anyone who is in need of house and pet sitting.", name: 'Neslihan S.', title: '', date: '2018' },
              { quote: "My home was running like a well-oiled machine. She had a pork chop dinner waiting for me once I woke up. As a professional dog groomer with high expectations on animal care, I would highly recommend Lisa May.", name: 'Janet A.', title: '', date: '2018' },
              { quote: "She has cared for our 3 large indoor/outdoor dogs, kitty, and bustling guest cottage with great success. Our guests have raved about her! The hardest part about having her is saying goodbye.", name: 'Michelle & Scott Lyons', title: 'Gecko Bungalows Resort · Belize', date: '2018' },
              { quote: "Lisa was fantastic with our puppy! Great communication as well.", name: 'Sue C.', title: '', date: '2019' },
              { quote: "Lisa was great with our 4-month old puppy Puddin. Excellent communication and pictures of their walk. I would encourage you to hire her.", name: 'Sue C.', title: '', date: '2019' },
              { quote: "Lisa was wonderful. We had a last minute booking and she was able to take good care of our three dogs. She took great care of our house and sent us photos of the dogs every day we were gone.", name: 'Alex C.', title: '', date: '2019' },
              { quote: "Lisa was great. She took great care of our home and our old dog, getting him out for walks even when it was raining. The house was clean when we got home too.", name: 'Rachel B.', title: '', date: '2019' },
              { quote: "Lisa May put me at ease. My home was running like a well-oiled machine. As a professional dog groomer with high expectations on animal care, I would highly recommend Lisa May as a caring companion.", name: 'Doris O.', title: '', date: '2018' },
              { quote: "Lisa May was a blessing to find. Friendly and professional. When we arrived home we found a cooked dinner, well kept house and a happy cat. Strongly recommend.", name: 'Neslihan S.', title: '', date: '2018' },
              { quote: "Greetings from Belize! We have had Lisa May house sit for us on several occasions. She has cared for our 3 large indoor/outdoor dogs, kitty, and bustling guest cottage with great success over the years. Our guests have raved about her!", name: 'Michelle & Scott Lyons', title: 'Gecko Bungalows Resort', date: '2018' },
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
              { quote: "Lisa was prompt, professional and everything you could want in a dog sitter. She even adjusted her schedule to take Charlie on an extra walk when our flight was delayed.", name: 'Brandon S.', title: '', date: '2019' },
              { quote: "She even managed to grab my Dog Lily when her harness failed! Amazing!", name: 'Derek S.', title: '', date: '2019' },
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
              { quote: "Lisa took great care of Henry.", name: 'William F.', title: '', date: '2023' },
              { quote: "Lisa is a total pro. Left our house perfectly clean and exactly how we left it, just a little better.", name: 'Claire H.', title: '', date: '2023' },
            ].map((t, i) => (
              <div key={t.name + t.date + i} style={{ backgroundColor: 'white', padding: '28px 24px', borderRadius: '8px', borderLeft: '4px solid #E8A598' }}>
                <p style={{ fontSize: '14px', lineHeight: '1.85', color: '#2C1810', fontStyle: 'italic', marginBottom: '16px' }}>
                  "{t.quote}"
                </p>
                <div style={{ color: '#7D3B4E', fontWeight: 'bold', fontSize: '14px' }}>{t.name}</div>
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
        <a className="button-link" href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{
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
            <a href="#services">Moving Through Fear</a>
            <a href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank">Book a Planning Call</a>
          </div>
          <div className="footer-col">
            <h4>RESOURCES</h4>
            <a href="#find-your-path">Find Your Mexico Path</a>
            <a href="/residency">Do I Qualify?</a>
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
            © 2026 In The Know Mexico · Lisa May Cobham, Relocation Specialist · San Miguel de Allende, México · Known here since 2015.
          </p>
        </div>
      </footer>

    </main>
  )
}
