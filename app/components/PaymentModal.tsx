'use client'

import { useState, useEffect } from 'react'

type PaymentModalProps = {
  open: boolean
  onClose: () => void
  service?: string
  stripeUrl?: string
  paypalUrl?: string
}

const STRIPE_LINKS: Record<string, string> = {
  'The Relocation Planning Call': 'https://buy.stripe.com/14A5kD7fm7fw7WMd282880A',
  'From Dream to Action Plan': 'https://buy.stripe.com/00w28r43a6bsdh65zG2880B',
  'Moving Past Hesitation': 'https://buy.stripe.com/fZu9ATczGdDU2Csgek2880C',
  'Rental Showing Day': 'https://buy.stripe.com/14A8wPgPWeHYcd26DK2880m',
  'Virtual Guidance': 'https://buy.stripe.com/fZu9ATgPWarI7WM7HO2880U',
  'On the Ground Facilitation': 'https://buy.stripe.com/cNicN52Z61Vc2Cs4vC2880W',
}

const PAYPAL_LINKS: Record<string, string> = {
  'The Relocation Planning Call': 'https://www.paypal.com/ncp/payment/SHVFXNG3ZMN68',
  'From Dream to Action Plan': 'https://www.paypal.com/ncp/payment/7M97LFD396424',
  'Moving Past Hesitation': 'https://www.paypal.com/ncp/payment/8FKYYZFUEJ7HJ',
  'Virtual Guidance': 'https://www.paypal.com/ncp/payment/HMK3DGTSXGUCC',
  'On the Ground Facilitation': 'https://www.paypal.com/ncp/payment/RRNW9ALGBZ6J2',
}

const PRE_CALL_SERVICES = [
  'The Relocation Planning Call',
  'From Dream to Action Plan',
  'Moving Past Hesitation',
]

export default function PaymentModal({ open, onClose, service, stripeUrl: stripeOverride, paypalUrl: paypalOverride }: PaymentModalProps) {
  const [policyAgreed, setPolicyAgreed] = useState(false)
  const [policyExpanded, setPolicyExpanded] = useState(false)

  useEffect(() => {
    if (!open) {
      setPolicyAgreed(false)
      setPolicyExpanded(false)
    }
  }, [open])

  if (!open) return null

  const resolvedStripeUrl = stripeOverride || (service ? STRIPE_LINKS[service] : undefined)
  const resolvedPaypalUrl = paypalOverride || (service ? PAYPAL_LINKS[service] : undefined)
  const isPreCall = service ? PRE_CALL_SERVICES.includes(service) : false

  const btnStyle = (color: string): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: '14px 20px',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: 700,
    textDecoration: 'none',
    border: 'none',
    cursor: policyAgreed ? 'pointer' : 'default',
    marginBottom: '10px',
    backgroundColor: color,
    color: 'white',
    opacity: policyAgreed ? 1 : 0.35,
    pointerEvents: (policyAgreed ? 'auto' : 'none') as React.CSSProperties['pointerEvents'],
  })

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(44, 24, 16, 0.88)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      zIndex: 200,
    }}>
      <div style={{
        maxWidth: '520px',
        width: '100%',
        backgroundColor: '#2C1810',
        color: '#FDF6F0',
        borderRadius: '20px',
        padding: '32px',
        position: 'relative',
        boxShadow: '0 24px 80px rgba(0, 0, 0, 0.45)',
        maxHeight: '90vh',
        overflowY: 'auto',
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            background: 'transparent',
            border: '1px solid #FDF6F0',
            color: '#FDF6F0',
            borderRadius: '50%',
            width: '34px',
            height: '34px',
            cursor: 'pointer',
            fontSize: '16px',
            lineHeight: '1',
          }}
          aria-label="Close payment modal"
        >
          ×
        </button>

        <h2 style={{ fontSize: '32px', marginBottom: '16px', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", color: '#FDF6F0' }}>
          Ready to Book?
        </h2>
        {service && (
          <p style={{ marginBottom: '18px', color: '#E8A598', fontSize: '15px' }}>
            Booking: {service}
          </p>
        )}

        {/* Cancellation policy + checkbox gate */}
        <div style={{ marginBottom: '24px', padding: '14px 16px', backgroundColor: 'rgba(255,255,255,0.07)', borderRadius: '8px' }}>
          <p style={{ fontSize: '13px', color: '#E8A598', margin: '0 0 8px', lineHeight: '1.6' }}>
            Full payment confirms your service. Cancellations 48+ hours before your scheduled session receive full credit; under 48 hours are non-refundable.
          </p>
          <button
            onClick={() => setPolicyExpanded(!policyExpanded)}
            style={{ background: 'none', border: 'none', color: '#E8A598', textDecoration: 'underline', cursor: 'pointer', fontSize: '13px', padding: 0 }}
          >
            {policyExpanded ? 'Hide full policy' : 'Read the full policy'}
          </button>
          {policyExpanded && (
            <p style={{ fontSize: '13px', color: '#FDF6F0', margin: '10px 0 0', lineHeight: '1.7' }}>
              Full payment is required to confirm your booking. You will receive a confirmation email with your intake questionnaire within 24 hours of payment. Please complete it before your session so we arrive fully prepared. Cancellations made 48 hours or more before your session receive a full credit toward a future booking. Cancellations made less than 48 hours before your session are non-refundable, and no-shows forfeit the full session fee. Rescheduling is welcome with 48 hours notice, one free reschedule per booking.
            </p>
          )}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginTop: '14px' }}>
            <input
              type="checkbox"
              id="policy-agree"
              checked={policyAgreed}
              onChange={(e) => setPolicyAgreed(e.target.checked)}
              style={{ marginTop: '2px', cursor: 'pointer', accentColor: '#C4622D', flexShrink: 0 }}
            />
            <label htmlFor="policy-agree" style={{ fontSize: '13px', color: '#FDF6F0', cursor: 'pointer', lineHeight: '1.5' }}>
              I have read and agree to the Booking &amp; Cancellation Policy.
            </label>
          </div>
        </div>

        {/* Payment buttons — gated until checkbox checked */}
        <div>
          {resolvedStripeUrl && (
            <a href={resolvedStripeUrl} target="_blank" rel="noreferrer" style={btnStyle('#C4622D')}>
              💳 Credit or Debit (+3% fee)
            </a>
          )}
          {resolvedPaypalUrl && (
            <a href={resolvedPaypalUrl} target="_blank" rel="noreferrer" style={btnStyle('#003087')}>
              PayPal (+3% fee)
            </a>
          )}
          <a
            href="https://wa.me/5214731218554"
            target="_blank"
            rel="noreferrer"
            style={{ ...btnStyle('#198754'), marginBottom: 0 }}
          >
            Zelle (no fee) — message me on WhatsApp
          </a>
        </div>

        <p style={{ marginTop: '24px', fontSize: '13px', fontStyle: 'italic', color: '#E8A598' }}>
          {isPreCall
            ? "You will receive a link to your pre-call questionnaire and booking link after payment. I’m looking forward to working with you!"
            : "You will receive a link to your pre-service questionnaire and booking link after payment. I’m looking forward to working with you!"
          }
        </p>
      </div>
    </div>
  )
}
