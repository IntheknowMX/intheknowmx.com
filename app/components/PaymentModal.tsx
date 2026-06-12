'use client'

type PaymentModalProps = {
  open: boolean
  onClose: () => void
  service?: string
}

const STRIPE_LINKS: Record<string, string> = {
  'The Relocation Planning Call': 'https://buy.stripe.com/bJeeVddDK0R84KAd282880j',
  'From Dream to Action Plan': 'https://buy.stripe.com/aFabJ1fLS43k3Gw9PW2880k',
  'Moving Through Fear': 'https://buy.stripe.com/3cIbJ1czG7fw1yoaU02880l',
  'Rental Showing Day': 'https://buy.stripe.com/14A8wPgPWeHYcd26DK2880m',
}

const RESIDENCY_SERVICES = [
  'Mexican Residency, Sorted',
  'Residency Planning Call',
  'Residency Guided Package',
  'Full Residency Concierge',
]

export default function PaymentModal({ open, onClose, service }: PaymentModalProps) {
  if (!open) return null

  const stripeUrl = service ? STRIPE_LINKS[service] : undefined
  const isResidency = service ? RESIDENCY_SERVICES.includes(service) : false

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
          <p style={{ marginBottom: '12px' }}>✅ Wise — no fee → <strong>Contact Lisa via WhatsApp for banking details</strong></p>
          <p style={{ marginBottom: '12px' }}>📱 Venmo — +2% fee → <a href="https://venmo.com/code?user_id=3758990584448601525&created=1781206512" target="_blank" rel="noreferrer" style={{ color: '#FDF6F0', textDecoration: 'underline' }}>https://venmo.com/code?user_id=3758990584448601525&created=1781206512</a></p>
          <p style={{ marginBottom: isResidency ? '0' : '12px' }}>💻 PayPal — +3% fee → <a href="https://paypal.com/paypalme/lisaMayCo" target="_blank" rel="noreferrer" style={{ color: '#FDF6F0', textDecoration: 'underline' }}>https://paypal.com/paypalme/lisaMayCo</a></p>
          {!isResidency && (
            <p>
              {stripeUrl ? (
                <>💳 Stripe — +3% fee → <a href={stripeUrl} target="_blank" rel="noreferrer" style={{ color: '#FDF6F0', textDecoration: 'underline' }}>Pay now with Stripe →</a></>
              ) : (
                <>💳 Stripe — +3% fee → <em>Link coming soon — contact Lisa via WhatsApp</em></>
              )}
            </p>
          )}
        </div>
        <p style={{ marginTop: '28px', fontSize: '13px', fontStyle: 'italic', color: '#E8A598' }}>
          Your booking is confirmed once payment is received.
        </p>
      </div>
    </div>
  )
}
