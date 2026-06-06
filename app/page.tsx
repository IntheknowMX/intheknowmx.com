/* eslint-disable react/no-unescaped-entities */
export default function Home() {
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
        zIndex: 100
      }}>
        <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#7D3B4E', letterSpacing: '2px', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>
          IN THE KNOW MEXICO
        </div>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <a href="#about" style={{ color: '#2C1810', textDecoration: 'none', fontSize: '14px' }}>About</a>
          <a href="#services" style={{ color: '#2C1810', textDecoration: 'none', fontSize: '14px' }}>Residency</a>
          <a href="#rentals" style={{ color: '#2C1810', textDecoration: 'none', fontSize: '14px' }}>Renting</a>
          <a href="#properties" style={{ color: '#2C1810', textDecoration: 'none', fontSize: '14px' }}>Owning</a>
          <a href="#caretaking" style={{ color: '#2C1810', textDecoration: 'none', fontSize: '14px' }}>Property & Pet Care</a>
          <a href="#local-companion" style={{ color: '#2C1810', textDecoration: 'none', fontSize: '14px' }}>Local Companion</a>
          <a href="#welcome-table" style={{ color: '#2C1810', textDecoration: 'none', fontSize: '14px' }}>Welcome Table</a>
          <a href="#testimonials" style={{ color: '#2C1810', textDecoration: 'none', fontSize: '14px' }}>Testimonials</a>
          <a href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{
            backgroundColor: '#C4622D',
            color: 'white',
            padding: '10px 22px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '600',
            letterSpacing: '0.5px'
          }}>Book a Call</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ display: "flex", minHeight: "90vh" }}>
        {/* Left — text panel */}
        <div style={{
          flex: "0 0 42%",
          backgroundColor: "#FDF6F0",
          padding: "80px 60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}>
          <p style={{ color: "#7D3B4E", fontSize: "11px", letterSpacing: "5px", marginBottom: "28px", fontWeight: "700" }}>SAN MIGUEL DE ALLENDE · MEXICO</p>
          <h1 style={{ color: "#2C1810", fontSize: "52px", lineHeight: "1.1", marginBottom: "28px", fontWeight: "normal", fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>San Miguel<br /><span style={{ color: "#7D3B4E" }}>Insider.</span></h1>
          <p style={{ color: "#7D3B4E", fontSize: "15px", marginBottom: "28px", letterSpacing: "1px" }}>Helping Mexico Newcomers since 2015.</p>
          <div style={{ width: "48px", height: "2px", backgroundColor: "#D4A017", marginBottom: "28px" }} />
          <p style={{ color: "#2C1810", fontSize: "17px", lineHeight: "1.8", marginBottom: "40px" }}>Relocation support, rental property showings, home care, and on-the-ground expertise for newcomers moving to Mexico.</p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{ backgroundColor: "#C4622D", color: "white", padding: "16px 36px", borderRadius: "4px", textDecoration: "none", fontSize: "15px", fontWeight: "700" }}>Book a Strategy Session</a>
            <a href="#services" style={{ backgroundColor: "transparent", color: "#2C1810", padding: "16px 28px", borderRadius: "4px", textDecoration: "none", fontSize: "15px", border: "1px solid #2C1810" }}>See How I Help</a>
          </div>
        </div>
        {/* Right — full uncropped photo */}
        <div style={{ flex: "0 0 58%", backgroundColor: "#FDF6F0", overflow: "hidden" }}>
          <img
            src="/images/hero.jpg"
            alt="San Miguel de Allende"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
          />
        </div>
      </section>
      {/* Stats Bar */}
      <section style={{
        backgroundColor: '#2C1810',
        padding: '36px 40px',
        display: 'flex',
        justifyContent: 'center',
        gap: '80px',
        flexWrap: 'wrap'
      }}>
        {[
          { number: '12+', label: 'Years in Mexico' },
          { number: '100%', label: 'Personal Service' },
          { number: '5★', label: 'Client Rated' },
          { number: '24/7', label: 'On-the-Ground Support' },
        ].map((stat) => (
          <div key={stat.label} style={{ textAlign: 'center' }}>
            <div style={{ color: '#E8A598', fontSize: '34px', fontWeight: 'bold', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>{stat.number}</div>
            <div style={{ color: '#FDF6F0', fontSize: '12px', letterSpacing: '2px', marginTop: '4px' }}>{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Press / Media */}
      <section style={{ backgroundColor: '#2C1810', padding: '70px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ color: '#D4A017', fontSize: '11px', letterSpacing: '5px', marginBottom: '16px', textAlign: 'center', fontWeight: '700' }}>AS SEEN &amp; HEARD</p>
          <h2 style={{ fontSize: '36px', fontWeight: 'normal', marginBottom: '48px', textAlign: 'center', color: 'white', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>
            Lisa May Cobham in the Media
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
            {[
              { img: '/images/press-business-insider.webp', label: 'Business Insider', href: 'https://www.businessinsider.com/how-to-be-an-expat-digital-nomad-living-abroad-2016-10' },
              { img: '/images/press-american-real.png', label: 'American Real', href: 'https://youtu.be/F7Nowbi5Am8' },
              { img: '/images/press-london-real.png', label: 'London Real · Real Talk', href: 'https://youtu.be/xKV6V0BRjvk' },
              { img: '/images/press-quiet-broad.png', label: 'A Quiet Broad Abroad', href: 'https://www.youtube.com/live/YY3Jkjbcbeg' },
              { img: '/images/press-over50.png', label: 'Over 50 Expat Interview', href: 'https://www.youtube.com/live/YY3Jkjbcbeg' },
            ].map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="press-card" style={{ display: 'block', borderRadius: '6px', overflow: 'hidden', textDecoration: 'none', backgroundColor: '#1A0E09' }}>
                <img src={item.img} alt={item.label} style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: '14px 16px', textAlign: 'center' }}>
                  <span style={{ color: '#FDF6F0', fontSize: '13px', letterSpacing: '0.5px' }}>{item.label}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Book CTA Band */}
      <section style={{
        backgroundColor: '#C4622D',
        padding: '28px 40px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '32px',
        flexWrap: 'wrap'
      }}>
        <p style={{ color: 'white', fontSize: '18px', margin: 0, fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", fontStyle: 'italic' }}>
          Ready to make San Miguel your home?
        </p>
        <a href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{
          backgroundColor: 'white',
          color: '#C4622D',
          padding: '14px 36px',
          borderRadius: '4px',
          textDecoration: 'none',
          fontSize: '15px',
          fontWeight: '700',
          letterSpacing: '0.5px'
        }}>✦ Book Your Consultation Now</a>
      </section>

      {/* About */}
      <section id="about" style={{ padding: '90px 40px', maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '70px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <p style={{ color: '#7D3B4E', fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', fontWeight: '600' }}>ABOUT ME</p>
          <h2 style={{ fontSize: '42px', fontWeight: 'normal', marginBottom: '24px', lineHeight: '1.2', color: '#2C1810', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>
            The insider every<br />Mexico newcomer needs.
          </h2>
          <p style={{ fontSize: '17px', lineHeight: '1.85', marginBottom: '20px', color: '#2C1810' }}>
            Hi, I'm <strong>Lisa May Cobham</strong>, Relocation Specialist and founder of In The Know Mexico.
            I'm a New Yorker replanted in San Miguel de Allende — and I've spent 12 years learning exactly
            what it takes to make Mexico not just livable, but extraordinary.
          </p>
          <p style={{ fontSize: '17px', lineHeight: '1.85', marginBottom: '20px', color: '#2C1810' }}>
            I work with <strong>Mexico newcomers</strong> who need more than a checklist — they need someone
            who already knows the plumber, the notary, the landlord, the neighborhood, and the unspoken rules
            that no guidebook will tell you. <strong>Friend-level trust. Professional-grade follow-through.</strong>
          </p>
          <p style={{ fontSize: '17px', lineHeight: '1.85', color: '#2C1810' }}>
            I am your local contact — the cousin, aunt, or longtime friend you wish you already had here.
            <em> I got you.</em>
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
            }}>✦ Book a Consultation</a>
          </div>
        </div>
        <div style={{ flex: 1, minWidth: '280px', textAlign: 'center' }}>
          <img
            src="/images/headshot.jpg"
            alt="Lisa May Cobham — Relocation Specialist, In The Know Mexico"
            style={{ width: '100%', maxWidth: '420px', borderRadius: '8px', objectFit: 'cover' }}
          />
          <p style={{ fontSize: '13px', color: '#7D3B4E', marginTop: '12px', letterSpacing: '1px' }}>
            📍 San Miguel de Allende, Mexico
          </p>
        </div>
      </section>

      {/* Divider */}
      <div style={{ borderTop: '1px solid #E8A598', maxWidth: '1100px', margin: '0 auto' }} />

      {/* Services */}
      <section id="services" style={{ backgroundColor: '#7D3B4E', padding: '90px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ color: '#E8C47A', fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', textAlign: 'center', fontWeight: '600' }}>WHAT I OFFER</p>
          <h2 style={{ fontSize: '42px', fontWeight: 'normal', marginBottom: '16px', textAlign: 'center', color: 'white', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>
            Turn Mexico into a Reality
          </h2>
          <p style={{ color: '#F5E0E6', fontSize: '17px', textAlign: 'center', maxWidth: '600px', margin: '0 auto 16px', lineHeight: '1.75' }}>
            Every service is personal, hands-on, and built around your specific situation — not a package, not a script.
          </p>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <a href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{
              backgroundColor: '#C4622D',
              color: 'white',
              padding: '14px 36px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '700',
              display: 'inline-block'
            }}>✦ Book Your Consultation</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>

            {/* Service 1 */}
            <div style={{ backgroundColor: '#FDF6F0', padding: '40px 32px', borderRadius: '8px', borderTop: '4px solid #C4622D' }}>
              <div style={{ fontSize: '34px', marginBottom: '14px' }}>📞</div>
              <h3 style={{ fontSize: '21px', marginBottom: '14px', color: '#7D3B4E', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.3' }}>1-Hour Relocation Consultation</h3>
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#2C1810', marginBottom: '20px' }}>
                A deep-dive video call built for serious Mexico newcomers. We cover housing, neighborhoods,
                visas, healthcare, safety, daily life, budget planning, and your personal step-by-step roadmap.
                You leave with clarity — not more questions.
              </p>
              <a href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{ color: '#C4622D', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>Book Now →</a>
            </div>

            {/* Service 2 */}
            <div style={{ backgroundColor: '#FDF6F0', padding: '40px 32px', borderRadius: '8px', borderTop: '4px solid #C4622D' }}>
              <div style={{ fontSize: '34px', marginBottom: '14px' }}>🌮</div>
              <h3 style={{ fontSize: '21px', marginBottom: '14px', color: '#7D3B4E', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.3' }}>Mexico Newcomer Support</h3>
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#2C1810', marginBottom: '16px' }}>
                For newcomers already in Mexico who need help getting grounded. I handle the practical side
                of building your life here — so you can actually enjoy it.
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
                <li>Home delivery coordination</li>
              </ul>
              <a href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{ color: '#C4622D', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>Book a Call →</a>
            </div>

            {/* Service 3 */}
            <div style={{ backgroundColor: '#FDF6F0', padding: '40px 32px', borderRadius: '8px', borderTop: '4px solid #C4622D' }}>
              <div style={{ fontSize: '34px', marginBottom: '14px' }}>✈️</div>
              <h3 style={{ fontSize: '21px', marginBottom: '14px', color: '#7D3B4E', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.3' }}>Full Relocation Concierge</h3>
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#2C1810', marginBottom: '20px' }}>
                From your first question to your first week unpacked — I coordinate every step.
                Shipping logistics, visa preparation, banking setup, internet, utilities, household staff,
                finding your gym, your doctor, your favorite coffee spot. I walk beside you so nothing
                falls through the cracks.
              </p>
              <a href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{ color: '#C4622D', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>Get Started →</a>
            </div>

            {/* Service 4 - Immigration */}
            <div style={{ backgroundColor: '#FDF6F0', padding: '40px 32px', borderRadius: '8px', borderTop: '4px solid #C4622D' }}>
              <div style={{ fontSize: '34px', marginBottom: '14px' }}>🛂</div>
              <h3 style={{ fontSize: '21px', marginBottom: '14px', color: '#7D3B4E', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.3' }}>Immigration Referrals</h3>
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#2C1810', marginBottom: '20px' }}>
                My residency team is your residency team. I connect you directly, coordinate every step,
                and even show up with you. Temporary residency, permanent residency, or heritage citizenship
                — navigated together.
              </p>
              <a href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{ color: '#C4622D', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>Ask Me About This →</a>
            </div>

          </div>
        </div>
      </section>

      {/* Rentals Section */}
      <section id="rentals" style={{ backgroundColor: '#FDF6F0', padding: '90px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ color: '#7D3B4E', fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', fontWeight: '600' }}>RENTAL PROPERTIES</p>
          <h2 style={{ fontSize: '42px', fontWeight: 'normal', marginBottom: '20px', color: '#2C1810', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.2' }}>
            Find Your Home in San Miguel —<br />with a Personal Agent at Your Side
          </h2>
          <p style={{ fontSize: '17px', lineHeight: '1.85', color: '#2C1810', maxWidth: '780px', marginBottom: '20px' }}>
            Finding a rental in Mexico is not like searching Zillow. The best homes are
            never listed publicly, landlords expect a trusted introduction, and leases are
            written in Spanish. As your personal rental agent, I do the work — so you
            see only the properties that are genuinely right for you.
          </p>

          {/* What I Do For You */}
          <div style={{ backgroundColor: '#FAE8E0', padding: '36px', borderRadius: '8px', marginBottom: '40px', borderLeft: '4px solid #C4622D' }}>
            <h3 style={{ fontSize: '20px', color: '#7D3B4E', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '20px' }}>
              What I do for you as your personal rental agent:
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
              {[
                '🔍 Deep research into your needs, budget, and non-negotiables',
                '🏠 Pre-screening every property before you see it',
                '📍 Knowledge of every colonia — I know which blocks to avoid',
                '🗝️ Personally escorting you through each property showing',
                '🗣️ Full translation & cultural context during every visit',
                '📝 Bilingual lease review — line by line',
                '💬 Negotiation on your behalf with landlords',
                '✅ Final walkthrough checklist before you sign anything',
                '📞 Landlord introductions and relationship setup',
                '🤝 Ongoing support after you move in',
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
              <ul style={{ fontSize: '14px', lineHeight: '1.9', color: '#2C1810', paddingLeft: '18px', marginBottom: '20px' }}>
                <li>Pre-curated property list based on your needs</li>
                <li>Personal escort to all showings</li>
                <li>Translation & negotiation support</li>
                <li>Lease review included</li>
                <li>No refunds on day-of pricing</li>
                <li style={{ color: '#C4622D', fontWeight: 'bold' }}>Lease signed? $70 credit toward in-Mexico concierge services</li>
              </ul>
              <a href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{
                backgroundColor: '#C4622D', color: 'white', padding: '12px 24px',
                borderRadius: '4px', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold', display: 'inline-block'
              }}>Book This Package →</a>
            </div>

            <div style={{ backgroundColor: 'white', padding: '36px 28px', borderRadius: '8px', border: '2px solid #C4622D' }}>
              <p style={{ fontSize: '11px', backgroundColor: '#C4622D', color: 'white', display: 'inline-block', padding: '4px 12px', borderRadius: '20px', marginBottom: '12px', fontWeight: '600', letterSpacing: '1px' }}>MOST POPULAR</p>
              <h4 style={{ fontSize: '19px', color: '#7D3B4E', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '8px' }}>Full Experience Day</h4>
              <p style={{ fontSize: '13px', color: '#7D3B4E', marginBottom: '16px', letterSpacing: '1px' }}>WITH PRIVATE DRIVER + ROOFTOP DEBRIEF</p>
              <ul style={{ fontSize: '14px', lineHeight: '1.9', color: '#2C1810', paddingLeft: '18px', marginBottom: '20px' }}>
                <li>Everything in Essential Day</li>
                <li>Private driver for the full day — no logistics stress</li>
                <li>Rooftop dinner or sunset snack package</li>
                <li>Post-showing debrief: we review every property together</li>
                <li>Pros/cons breakdown, my honest recommendations</li>
                <li>No refunds on day-of pricing</li>
                <li style={{ color: '#C4622D', fontWeight: 'bold' }}>Lease signed? $70 credit toward in-Mexico concierge services</li>
              </ul>
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
      <section id="properties" style={{ backgroundColor: '#2C1810', padding: '90px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
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
            }}>✦ Book a Consultation First</a>
          </div>
        </div>
      </section>

      {/* Home Caretaking */}
      <section id="caretaking" style={{ padding: '90px 40px', backgroundColor: '#FDF6F0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '70px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <p style={{ color: '#7D3B4E', fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', fontWeight: '600' }}>PROPERTY & PET CARE</p>
              <h2 style={{ fontSize: '42px', fontWeight: 'normal', marginBottom: '8px', color: '#2C1810', lineHeight: '1.2', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>
                Your Mexico Life, Maintained.
              </h2>
              <p style={{ fontSize: '17px', color: '#7D3B4E', marginBottom: '28px', fontStyle: 'italic', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>
                Home, pets, and everything in between — while you're away.
              </p>
              <p style={{ fontSize: '17px', lineHeight: '1.85', marginBottom: '20px', color: '#2C1810' }}>
                Pipes burst at 2am. Power goes out during a storm. Your housekeeper doesn't show.
                A neighbor reports water coming under your door. These things happen — even in the
                most beautiful homes in San Miguel.
              </p>
              <p style={{ fontSize: '17px', lineHeight: '1.85', marginBottom: '28px', color: '#2C1810' }}>
                <strong>When you leave, I stay.</strong> I am your eyes, your voice, and your trusted
                presence on the ground.
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
              <a href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{
                backgroundColor: '#C4622D',
                color: 'white',
                padding: '14px 32px',
                borderRadius: '4px',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '700'
              }}>✦ Book a Consultation</a>
            </div>
            <div style={{ flex: 1, minWidth: '280px' }}>
              <img
                src="/images/home-care.jpg"
                alt="Beautiful home in San Miguel de Allende"
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
      <section id="local-companion" style={{ backgroundColor: '#2C1810', padding: '90px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ color: '#D4A017', fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', fontWeight: '600' }}>LOCAL COMPANION</p>
          <h2 style={{ fontSize: '42px', fontWeight: 'normal', marginBottom: '24px', color: 'white', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.2', maxWidth: '700px' }}>
            Sometimes you just need someone who knows every corner.
          </h2>
          <p style={{ fontSize: '17px', lineHeight: '1.85', color: '#FDF6F0', maxWidth: '720px', marginBottom: '40px' }}>
            Inspired by Japan's beloved rental person culture — sometimes you just need a trusted local by your side.
            Whether it's dinner for one that shouldn't be, a medical appointment, a cultural event, or simply exploring
            San Miguel with someone who knows every corner. I show up. No agenda. Just good company.
          </p>
          <a href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{
            backgroundColor: '#C4622D',
            color: 'white',
            padding: '16px 36px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: '700',
            display: 'inline-block'
          }}>✦ Book a Strategy Session</a>
        </div>
      </section>

      {/* Welcome Table */}
      <section id="welcome-table" style={{ backgroundColor: '#E8A598', padding: '90px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
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
            <a href="https://sanmiguelrealestate.com.mx/welcome-table" target="_blank" style={{
              backgroundColor: '#2C1810',
              color: 'white',
              padding: '16px 36px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: 'bold'
            }}>Learn More & RSVP →</a>
            <a href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{
              backgroundColor: '#C4622D',
              color: 'white',
              padding: '16px 36px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: 'bold'
            }}>✦ Book a Private Consultation</a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" style={{ padding: '90px 40px', backgroundColor: '#FDF6F0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ color: '#7D3B4E', fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', textAlign: 'center', fontWeight: '600' }}>WHAT CLIENTS SAY</p>
          <h2 style={{ fontSize: '42px', fontWeight: 'normal', marginBottom: '60px', textAlign: 'center', color: '#2C1810', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>
            Trusted by Mexico Newcomers
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              {
                quote: "From the moment I got off the plane, Lisa showed up with kindness, clarity, and a deep knowledge of how things work here. She met me at my Airbnb, took me grocery shopping, helped me with the ATM, showed me around San Miguel, and helped me find my apartment. Lisa is more than a service provider — she's a support system, a guide, and a true friend.",
                name: 'Brian Keith Webster',
                title: 'Author'
              },
              {
                quote: "A plumbing disaster occurred while we were off the grid on a cruise — Lisa handled everything with exceptional grace and competence. She contacted neighbors, coordinated local plumbers and electricians, and ensured our pets and property were safe and cared for. Far beyond what we could have hoped for.",
                name: 'Sugar & Sandy',
                title: 'Mayor, Los Frailes SMA & Administrator, Lakeside Insurance'
              },
              {
                quote: "She's tenacious, organized, and deeply caring — going above and beyond to make sure her clients feel seen, supported, and completely at ease. Lisa has an intuitive understanding of people's needs, paired with the practical skills and local know-how to get things done. She's a trusted guide.",
                name: 'Tiffany Paige',
                title: 'Licensed Real Estate Advisor, The Agency SMA'
              },
              {
                quote: "I could not be more pleased with Lisa! She was very responsive, reasonable and she stayed with the program until we were successful! With Lisa's help, all the delinquent funds arrived. Do business with Lisa and she will solve your problems!",
                name: 'Terry M.',
                title: 'San Miguel Expat'
              }
            ].map((t) => (
              <div key={t.name} style={{
                backgroundColor: 'white',
                padding: '36px 28px',
                borderRadius: '8px',
                borderLeft: '4px solid #C97B8A'
              }}>
                <p style={{ fontSize: '15px', lineHeight: '1.85', color: '#2C1810', fontStyle: 'italic', marginBottom: '24px' }}>
                  "{t.quote}"
                </p>
                <div style={{ color: '#7D3B4E', fontWeight: 'bold', fontSize: '15px' }}>{t.name}</div>
                <div style={{ color: '#7D3B4E', fontSize: '13px', marginTop: '4px' }}>{t.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ backgroundColor: '#7D3B4E', padding: '90px 40px', textAlign: 'center' }}>
        <p style={{ color: '#E8C47A', fontSize: '12px', letterSpacing: '4px', marginBottom: '20px', fontWeight: '600' }}>YOUR NEXT STEP</p>
        <h2 style={{ fontSize: '46px', fontWeight: 'normal', marginBottom: '24px', color: 'white', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", lineHeight: '1.2' }}>
          The life you came here<br />looking for is absolutely real.
        </h2>
        <p style={{ color: '#F5E0E6', fontSize: '18px', maxWidth: '520px', margin: '0 auto 48px', lineHeight: '1.75' }}>
          Book a consultation and let's build your roadmap to Mexico — together.
        </p>
        <a href="https://calendar.app.google/qfwutaFsrSaqWVkw7" target="_blank" style={{
          backgroundColor: '#C4622D',
          color: 'white',
          padding: '20px 56px',
          borderRadius: '4px',
          textDecoration: 'none',
          fontSize: '18px',
          fontWeight: '700',
          letterSpacing: '0.5px',
          display: 'inline-block',
          marginBottom: '40px'
        }}>✦ Book Your Consultation</a>
        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '16px' }}>
          <a href="mailto:Lisa@InTheKnowMx.com" style={{ color: '#F5E0E6', textDecoration: 'none', fontSize: '14px' }}>Lisa@InTheKnowMx.com</a>
          <a href="https://www.instagram.com/in.the.know.mexico/" target="_blank" style={{ color: '#F5E0E6', textDecoration: 'none', fontSize: '14px' }}>Instagram</a>
          <a href="https://www.facebook.com/InTheKnowMex" target="_blank" style={{ color: '#F5E0E6', textDecoration: 'none', fontSize: '14px' }}>Facebook</a>
          <a href="https://www.facebook.com/groups/655871853479437" target="_blank" style={{ color: '#F5E0E6', textDecoration: 'none', fontSize: '14px' }}>Facebook Group</a>
          <a href="https://www.linkedin.com/in/lisamcobham" target="_blank" style={{ color: '#F5E0E6', textDecoration: 'none', fontSize: '14px' }}>LinkedIn</a>
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
