'use client'
import { useState } from 'react'

const NAV_CSS = `
  .main-nav { background-color: #FDF6F0; padding: 20px 40px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #E8A598; position: sticky; top: 0; z-index: 100; }
  .nav-brand { font-size: 18px; font-weight: bold; color: #7D3B4E; letter-spacing: 2px; font-family: var(--font-playfair, 'Playfair Display', Georgia, serif); text-decoration: none; }
  .nav-right { display: flex; align-items: center; gap: 20px; position: relative; }
  .nav-links { display: flex; gap: 24px; align-items: center; flex-wrap: wrap; }
  .nav-links a { color: #2C1810; text-decoration: none; font-size: 14px; }
  .nav-toggle { display: none; background: none; border: none; cursor: pointer; padding: 6px 8px; font-size: 24px; color: #2C1810; line-height: 1; }
  .mobile-menu-close-row { display: none; }
  .mobile-menu-cta { display: none; }
  .nav-cta { background-color: #C4622D; color: white; padding: 10px 22px; border-radius: 4px; text-decoration: none; font-size: 14px; font-weight: 600; letter-spacing: 0.5px; white-space: nowrap; }
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
  }
`

export default function NavBar({ basePath = '' }: { basePath?: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const close = () => setMobileMenuOpen(false)

  return (
    <>
      <style>{NAV_CSS}</style>
      <nav className="main-nav">
        <a href="/" className="nav-brand">IN THE KNOW MEXICO</a>
        <div className="nav-right">
          <button className="nav-toggle" aria-label="Toggle navigation" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            ☰
          </button>
          <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <div className="mobile-menu-close-row">
              <button className="mobile-menu-close-btn" aria-label="Close menu" onClick={close}>✕</button>
            </div>
            <a href={`${basePath}#about`} onClick={close}>About</a>
            <a href="/residency" onClick={close}>Residency</a>
            <a href={`${basePath}#services`} onClick={close}>Concierge</a>
            <a href={`${basePath}#rentals`} onClick={close}>Rentals</a>
            <a href={`${basePath}#properties`} onClick={close}>Owning</a>
            <a href={`${basePath}#caretaking`} onClick={close}>Property & Pet Care</a>
            <a href={`${basePath}#welcome-table`} onClick={close}>Welcome Table</a>
            <a href={`${basePath}#testimonials`} onClick={close}>Testimonials</a>
            <a className="mobile-menu-cta" href={`${basePath}#planning-calls`} onClick={close}>Book a Planning Call</a>
          </div>
          <a className="nav-cta" href={`${basePath}#planning-calls`}>Book a Planning Call</a>
        </div>
      </nav>
    </>
  )
}
