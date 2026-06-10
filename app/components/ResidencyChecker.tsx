'use client'

import { useState } from 'react'

const questions = [
  {
    id: 'age',
    question: 'How old are you?',
    options: [
      { value: 'under45', label: 'Under 45' },
      { value: '45to59', label: '45 – 59' },
      { value: '60to69', label: '60 – 69' },
      { value: '70plus', label: '70 or older' },
    ],
  },
  {
    id: 'income',
    question: "What's your monthly income (pension, Social Security, investments, etc.)?",
    options: [
      { value: 'under1500', label: 'Under $1,500 / month' },
      { value: '1500to2500', label: '$1,500 – $2,500 / month' },
      { value: '2500to4000', label: '$2,500 – $4,000 / month' },
      { value: 'over4000', label: 'Over $4,000 / month' },
    ],
  },
  {
    id: 'savings',
    question: 'What are your liquid savings or investments?',
    options: [
      { value: 'under10k', label: 'Under $10,000' },
      { value: '10kto26k', label: '$10,000 – $26,000' },
      { value: '26kto87k', label: '$26,000 – $87,000' },
      { value: 'over87k', label: 'Over $87,000' },
    ],
  },
  {
    id: 'heritage',
    question: 'Do you have Mexican heritage?',
    options: [
      { value: 'parent', label: '🇲🇽 Yes — one or both parents are Mexican' },
      { value: 'grandparent', label: '🇲🇽 Yes — a grandparent is Mexican' },
      { value: 'spouse', label: '💍 My spouse or partner is Mexican' },
      { value: 'none', label: 'No Mexican heritage or family ties' },
    ],
  },
  {
    id: 'prior',
    question: 'Have you previously held Mexican temporary residency?',
    options: [
      { value: 'yes4plus', label: 'Yes — for 4 or more years' },
      { value: 'yes1to3', label: 'Yes — for 1 – 3 years' },
      { value: 'no', label: 'No, this would be my first time' },
    ],
  },
  {
    id: 'support',
    question: 'How much support do you want through the process?',
    options: [
      { value: 'full', label: '🤝 Full service — I want someone to handle everything' },
      { value: 'guided', label: '🗺️ Guided — I\'ll do the work with expert direction' },
      { value: 'consult', label: '💬 One consultation to understand my options' },
    ],
  },
]

type Result = {
  badge: string
  title: string
  description: string
  path: string
  color: string
}

function getResult(answers: string[]): Result {
  const [, income, savings, heritage, prior] = answers

  // Heritage citizenship / naturalization by descent
  if (heritage === 'parent' || heritage === 'grandparent') {
    return {
      badge: '🏆 STRONGEST PATH',
      title: 'Heritage Citizenship',
      description: "You may qualify to claim Mexican citizenship through descent — one of the most direct paths available. If a parent or grandparent was born in Mexico, you have the right to Mexican nationality. My team will verify your eligibility and guide you through the documentation process from start to finish.",
      path: 'Citizenship by Descent (Naturalization)',
      color: '#8B1A2A',
    }
  }

  // Family reunification / FM2 spouse
  if (heritage === 'spouse') {
    return {
      badge: '✅ CLEAR PATH',
      title: 'Family Reunification',
      description: "Having a Mexican spouse or partner is a recognized path to permanent residency through family ties. This is a well-established route with strong protections. My residency team will walk you through the spousal residency process and what documentation you'll need.",
      path: 'Permanent Residency via Family Ties',
      color: '#2E7D32',
    }
  }

  // Permanent residency — prior 4+ years of temp OR very high income/savings
  if (
    prior === 'yes4plus' ||
    (income === 'over4000' && savings === 'over87k') ||
    income === 'over4000' ||
    savings === 'over87k'
  ) {
    return {
      badge: '✅ STRONG QUALIFIER',
      title: 'Permanent Residency',
      description: "Based on your income, savings, or prior residency history, you appear to qualify directly for permanent residency — the most stable form of Mexican residency with no annual renewal. My team will confirm your specific numbers against the current Banco de México thresholds and prepare your complete application.",
      path: 'Permanent Residency (Residente Permanente)',
      color: '#2E7D32',
    }
  }

  // Temporary residency — meets income or savings threshold
  if (income === '2500to4000' || income === '1500to2500' || savings === '26kto87k') {
    return {
      badge: '✅ LIKELY QUALIFIER',
      title: 'Temporary Residency',
      description: "Your income and/or savings appear to meet Mexico's requirements for temporary residency — the standard first step for most expats. After four consecutive years, you can apply for permanent residency. My team will verify your exact figures against current consulate thresholds and guide you through every step.",
      path: 'Temporary Residency (Residente Temporal)',
      color: '#C4622D',
    }
  }

  // Borderline — prior residency or moderate savings
  if (prior === 'yes1to3' || savings === '10kto26k') {
    return {
      badge: '⚡ CLOSE — STRATEGY NEEDED',
      title: "You're Close — Let's Build a Plan",
      description: "Your situation is promising but may need a strategic approach. Prior temporary residency, combined savings, or supplemental income sources may push you over the threshold. My residency team specializes in finding pathways for applicants in exactly this position — don't count yourself out yet.",
      path: 'Strategy Session First',
      color: '#D4A017',
    }
  }

  // Doesn't clearly qualify yet
  return {
    badge: '💬 LET\'S TALK FIRST',
    title: "Let's Talk Before You Apply",
    description: "Based on what you've shared, the standard income/savings route may not be the right fit right now — but that doesn't mean Mexico is off the table. There are pathways most people don't know about, and my team has helped people in exactly your situation find a legal route forward. Let's have a real conversation.",
    path: "Exploratory Strategy Session",
    color: '#7D3B4E',
  }
}

export default function ResidencyChecker() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])

  const isResult = step >= questions.length
  const result = isResult ? getResult(answers) : null
  const progress = Math.round((step / questions.length) * 100)

  function handleAnswer(value: string) {
    setAnswers([...answers, value])
    setStep(step + 1)
  }

  function restart() {
    setStep(0)
    setAnswers([])
  }

  return (
    <section className="responsive-section" style={{ backgroundColor: '#FDF6F0' }}>
      <div className="content-wrapper" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 24px rgba(44,24,16,0.1)' }}>

          {/* Progress bar */}
          {!isResult && (
            <div style={{ height: '5px', backgroundColor: '#F0E0D6' }}>
              <div style={{ height: '100%', width: `${progress}%`, backgroundColor: '#8B1A2A', transition: 'width 0.3s ease' }} />
            </div>
          )}

          <div style={{ padding: '52px 56px' }}>
            {!isResult ? (
              <>
                <p style={{ fontSize: '11px', color: '#8B1A2A', letterSpacing: '4px', fontWeight: '700', marginBottom: '20px' }}>
                  QUESTION {step + 1} OF {questions.length}
                </p>
                <h3 style={{ fontSize: '26px', fontWeight: 'normal', color: '#2C1810', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '36px', lineHeight: '1.35' }}>
                  {questions[step].question}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {questions[step].options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleAnswer(opt.value)}
                      style={{
                        backgroundColor: '#FDF6F0',
                        border: '1.5px solid #E8A598',
                        borderRadius: '6px',
                        padding: '18px 24px',
                        textAlign: 'left',
                        fontSize: '15px',
                        color: '#2C1810',
                        cursor: 'pointer',
                        lineHeight: '1.5',
                        fontFamily: "var(--font-inter, 'Inter', sans-serif)",
                        transition: 'border-color 0.15s, background 0.15s',
                        width: '100%',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLButtonElement).style.borderColor = '#8B1A2A'
                        ;(e.currentTarget as HTMLButtonElement).style.backgroundColor = '#FAE8E0'
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLButtonElement).style.borderColor = '#E8A598'
                        ;(e.currentTarget as HTMLButtonElement).style.backgroundColor = '#FDF6F0'
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
                {step > 0 && (
                  <button
                    onClick={() => { setStep(step - 1); setAnswers(answers.slice(0, -1)) }}
                    style={{ background: 'none', border: 'none', color: '#7D3B4E', fontSize: '13px', cursor: 'pointer', marginTop: '24px', textDecoration: 'underline', padding: 0 }}
                  >
                    ← Back
                  </button>
                )}
              </>
            ) : (
              <>
                <div style={{ display: 'inline-block', backgroundColor: result!.color, color: 'white', fontSize: '11px', fontWeight: '700', letterSpacing: '2px', padding: '6px 14px', borderRadius: '20px', marginBottom: '24px' }}>
                  {result!.badge}
                </div>
                <h3 style={{ fontSize: '34px', fontWeight: 'normal', color: '#2C1810', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '20px', lineHeight: '1.2' }}>
                  {result!.title}
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '1.85', color: '#2C1810', marginBottom: '24px' }}>
                  {result!.description}
                </p>
                <div style={{ backgroundColor: '#FAE8E0', borderLeft: '3px solid #8B1A2A', padding: '14px 20px', borderRadius: '4px', marginBottom: '16px' }}>
                  <p style={{ fontSize: '13px', color: '#7D3B4E', fontWeight: '600', margin: 0 }}>
                    Suggested path: <span style={{ color: '#8B1A2A' }}>{result!.path}</span>
                  </p>
                </div>
                <div style={{ width: '48px', height: '2px', backgroundColor: '#D4A017', marginBottom: '32px' }} />

                <a
                  href="https://calendar.app.google/qfwutaFsrSaqWVkw7"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: '#C4622D', color: 'white', padding: '16px 32px', borderRadius: '4px', textDecoration: 'none', fontSize: '15px', fontWeight: '700', display: 'inline-block', marginBottom: '20px' }}
                >
                  ✦ Book a Strategy Session with My Residency Team
                </a>

                <p style={{ fontSize: '12px', color: '#7D3B4E', lineHeight: '1.7', marginBottom: '24px', fontStyle: 'italic' }}>
                  This is not legal advice. My residency team of licensed Mexican immigration attorneys and facilitators will give you the definitive answer for your specific situation.
                </p>

                <button
                  onClick={restart}
                  style={{ background: 'none', border: 'none', color: '#7D3B4E', fontSize: '13px', cursor: 'pointer', textDecoration: 'underline', padding: 0 }}
                >
                  Start over
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
