'use client'

type PaymentModalProps = {
  open: boolean
  onClose: () => void
  service?: string
}

const PLANNING_CALL_SERVICES = [
  'The Relocation Planning Call',
  'From Dream to Action Plan',
  'Moving Past Hesitation',
]

const STRIPE_LINKS: Record<string, string> = {
  'The Relocation Planning Call': 'https://buy.stripe.com/14A5kD7fm7fw7WMd282880A',
  'From Dream to Action Plan': 'https://buy.stripe.com/00w28r43a6bsdh65zG2880B',
  'Moving Past Hesitation': 'https://buy.stripe.com/fZu9ATczGdDU2Csgek2880C',
  'Rental Showing Day': 'https://buy.stripe.com/14A8wPgPWeHYcd26DK2880m',
  'Virtual Guidance': 'https://buy.stripe.com/eVqaEX2Z60R83Gw2nu2880n',
  'On the Ground Facilitation': 'https://buy.stripe.com/6oUbJ1dDK0R81yoaU02880o',
}

const PAYPAL_LINKS: Record<string, string> = {
  'The Relocation Planning Call': 'https://www.paypal.com/ncp/payment/SHVFXNG3ZMN68',
  'From Dream to Action Plan': 'https://www.paypal.com/ncp/payment/7M97LFD396424',
  'Moving Past Hesitation': 'https://www.paypal.com/ncp/payment/8FKYYZFUEJ7HJ',
}

const RESIDENCY_SERVICES = [
  'Mexican Residency, Sorted',
  'Residency Planning Call',
  'Residency Guided Package',
  'Full Residency Concierge',
]

const CONCIERGE_SERVICES = [
  'Personal Assistant',
  'Tech Concierge',
  'Travel & Logistics',
  'Senior Concierge',
]

const CONCIERGE_STRIPE_LINKS = [
  { label: 'Hourly $35/hour', url: 'https://buy.stripe.com/8x2bJ11V21Vc2CsbY42880s' },
  { label: 'Starter (8 hours) $250', url: 'https://buy.stripe.com/bJe5kDary57ob8YbY42880q' },
  { label: 'Standard (16 hours) $480', url: 'https://buy.stripe.com/5kQcN59nuarIfpe3ry2880r' },
  { label: 'Full Support (24 hours) $700', url: 'https://buy.stripe.com/28EcN52Z69nE5OEfag2880p' },
]

const MEDICAL_CONCIERGE_STRIPE_LINKS = [
  { label: 'Hourly $22', url: 'https://buy.stripe.com/00wfZh8jqarI0uk8LS2880t' },
  { label: 'Half Day $80', url: 'https://buy.stripe.com/eVq28rgPWczQa4U7HO2880u' },
  { label: 'Full Day $150', url: 'https://buy.stripe.com/8x2aEXdDKdDUelad282880v' },
]

const LOCAL_COMPANION_STRIPE_LINKS = [
  { label: 'Hourly $15', url: 'https://buy.stripe.com/8x2aEX57e57ob8Y4vC2880y' },
  { label: 'Half Day $56', url: 'https://buy.stripe.com/7sY7sLczG9nE5OE6DK2880w' },
  { label: 'Full Day $96', url: 'https://buy.stripe.com/8x28wP6bi0R82Cs4vC2880x' },
]

export default function PaymentModal({ open, onClose, service }: PaymentModalProps) {
  if (!open) return null

  const stripeUrl = service ? STRIPE_LINKS[service] : undefined
  const paypalUrl = service ? PAYPAL_LINKS[service] : undefined
  const isPlanningCall = service ? PLANNING_CALL_SERVICES.includes(service) : false
  const isResidency = service ? RESIDENCY_SERVICES.includes(service) : false
  const isConcierge = service ? CONCIERGE_SERVICES.includes(service) : false
  const isMedicalConcierge = service === 'Medical Concierge'
  const isLocalCompanion = service === 'Local Companion'

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
        maxWidth: '560px',
        width: '100%',
        backgroundColor: '#2C1810',
        color: '#FDF6F0',
        borderRadius: '20px',
        padding: '32px',
        position: 'relative',
        boxShadow: '0 24px 80px rgba(0, 0, 0, 0.45)',
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

        {isPlanningCall ? (
          <>
            <p style={{ marginBottom: '18px', fontSize: '15px', lineHeight: '1.8', color: '#FDF6F0' }}>
              Confirm your booking via your preferred payment method:
            </p>
            <div style={{ fontSize: '15px', lineHeight: '1.9', color: '#FDF6F0' }}>
              <p style={{ marginBottom: '12px' }}>
                ✅ <a href="https://wa.me/5214731218554" target="_blank" rel="noreferrer" style={{ color: '#FDF6F0', textDecoration: 'underline' }}>Zelle (no fee) — message me on WhatsApp for my details</a>
              </p>
              {paypalUrl && (
                <p style={{ marginBottom: '12px' }}>
                  💻 <a href={paypalUrl} target="_blank" rel="noreferrer" style={{ color: '#FDF6F0', textDecoration: 'underline' }}>PayPal (+3% fee)</a>
                </p>
              )}
              {stripeUrl && (
                <p style={{ marginBottom: '0' }}>
                  💳 <a href={stripeUrl} target="_blank" rel="noreferrer" style={{ color: '#FDF6F0', textDecoration: 'underline' }}>Credit or debit (+3% fee)</a>
                </p>
              )}
            </div>
          </>
        ) : (
          <>
            <p style={{ marginBottom: '18px', fontSize: '15px', lineHeight: '1.8', color: '#FDF6F0' }}>
              Step 1 — Message Lisa on WhatsApp to confirm your service, date, and amount.
            </p>
            <a
              href="https://wa.me/5214731218554"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#29A745',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                padding: '14px 22px',
                fontSize: '15px',
                fontWeight: 700,
                marginBottom: '24px',
              }}
            >
              Message Lisa on WhatsApp →
            </a>
            <p style={{ marginBottom: '16px', fontSize: '15px', lineHeight: '1.8', color: '#FDF6F0' }}>
              Step 2 — Once confirmed, send payment via your preferred method:
            </p>
            <div style={{ fontSize: '15px', lineHeight: '1.9', color: '#FDF6F0' }}>
              <p style={{ marginBottom: '12px' }}>✅ Zelle — no fee → <strong>sittingprettydc@gmail.com</strong></p>
              <p style={{ marginBottom: '12px' }}>📱 Venmo — +2% fee → <a href="https://venmo.com/code?user_id=3758990584448601525&created=1781206512" target="_blank" rel="noreferrer" style={{ color: '#FDF6F0', textDecoration: 'underline' }}>https://venmo.com/code?user_id=3758990584448601525&created=1781206512</a></p>
              <p style={{ marginBottom: isResidency ? '0' : '12px' }}>💻 PayPal — +3% fee → <a href="https://paypal.com/paypalme/lisaMayCo" target="_blank" rel="noreferrer" style={{ color: '#FDF6F0', textDecoration: 'underline' }}>https://paypal.com/paypalme/lisaMayCo</a></p>
              {!isResidency && (
                <div>
                  {stripeUrl ? (
                    <p style={{ marginBottom: '0' }}>💳 Stripe — +3% fee → <a href={stripeUrl} target="_blank" rel="noreferrer" style={{ color: '#FDF6F0', textDecoration: 'underline' }}>Pay now with Stripe →</a></p>
                  ) : isConcierge ? (
                    <div>
                      <p style={{ marginBottom: '8px' }}>💳 Credit or debit — +3% fee</p>
                      {CONCIERGE_STRIPE_LINKS.map(({ label, url }) => (
                        <p key={url} style={{ marginBottom: '6px', paddingLeft: '24px' }}>→ <a href={url} target="_blank" rel="noreferrer" style={{ color: '#FDF6F0', textDecoration: 'underline' }}>{label}</a></p>
                      ))}
                    </div>
                  ) : isMedicalConcierge ? (
                    <div>
                      <p style={{ marginBottom: '8px' }}>💳 Credit or debit — +3% fee</p>
                      {MEDICAL_CONCIERGE_STRIPE_LINKS.map(({ label, url }) => (
                        <p key={url} style={{ marginBottom: '6px', paddingLeft: '24px' }}>→ <a href={url} target="_blank" rel="noreferrer" style={{ color: '#FDF6F0', textDecoration: 'underline' }}>{label}</a></p>
                      ))}
                    </div>
                  ) : isLocalCompanion ? (
                    <div>
                      <p style={{ marginBottom: '8px' }}>💳 Credit or debit — +3% fee</p>
                      {LOCAL_COMPANION_STRIPE_LINKS.map(({ label, url }) => (
                        <p key={url} style={{ marginBottom: '6px', paddingLeft: '24px' }}>→ <a href={url} target="_blank" rel="noreferrer" style={{ color: '#FDF6F0', textDecoration: 'underline' }}>{label}</a></p>
                      ))}
                    </div>
                  ) : (
                    <div>
                      <p style={{ marginBottom: '8px' }}>💳 Stripe — +3% fee</p>
                      <p style={{ marginBottom: '6px', paddingLeft: '24px' }}>→ <a href="https://buy.stripe.com/eVqaEX2Z60R83Gw2nu2880n" target="_blank" rel="noreferrer" style={{ color: '#FDF6F0', textDecoration: 'underline' }}>Virtual Guidance $335</a></p>
                      <p style={{ marginBottom: '0', paddingLeft: '24px' }}>→ <a href="https://buy.stripe.com/6oUbJ1dDK0R81yoaU02880o" target="_blank" rel="noreferrer" style={{ color: '#FDF6F0', textDecoration: 'underline' }}>On the Ground Facilitation $779</a></p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </>
        )}

        <p style={{ marginTop: '28px', fontSize: '13px', fontStyle: 'italic', color: '#E8A598' }}>
          Your booking is confirmed once payment is received.
        </p>
      </div>
    </div>
  )
}
