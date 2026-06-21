'use client'

import { useState } from 'react'

const questions = [
  {
    id: 'journey',
    question: 'Where are you in your Mexico journey?',
    options: [
      { value: 'dreaming', label: '✨ Just dreaming about it' },
      { value: 'planning', label: '📋 Actively planning my move' },
      { value: 'moving', label: '📦 Moving soon or in progress' },
      { value: 'here', label: '🌮 Already living in Mexico' },
    ],
  },
  {
    id: 'concern',
    question: "What's your biggest concern right now?",
    options: [
      { value: 'legal', label: '🛂 Visas, residency & legal stuff' },
      { value: 'home', label: '🏠 Finding the right place to live' },
      { value: 'daily', label: '☀️ Setting up my daily life' },
      { value: 'away', label: '🔑 Managing my home when I\'m away' },
    ],
  },
  {
    id: 'pets',
    question: 'Are you bringing pets?',
    options: [
      { value: 'yes', label: '🐾 Yes, my pets are coming with me' },
      { value: 'no', label: '🚫 No pets' },
      { value: 'maybe', label: '🤔 Maybe / not sure yet' },
    ],
  },
  {
    id: 'type',
    question: 'Which best describes you?',
    options: [
      { value: 'retiree', label: '🌅 Retiree relocating full-time' },
      { value: 'remote', label: '💻 Remote worker / digital nomad' },
      { value: 'snowbird', label: '❄️ Part-time / snowbird' },
      { value: 'senior', label: '🧳 Solo traveler or senior expat' },
    ],
  },
  {
    id: 'timeline',
    question: "What's your timeline?",
    options: [
      { value: 'now', label: '🚀 I\'m ready to move now' },
      { value: 'thisyear', label: '📅 This year' },
      { value: 'nextyear', label: '🗓️ Next year' },
      { value: 'exploring', label: '🔭 Just exploring for now' },
    ],
  },
]

type Result = {
  title: string
  description: string
  service: string
  cta: string
}

function getResult(answers: string[]): Result {
  const [journey, concern, , type, timeline] = answers

  if (concern === 'legal') {
    return {
      title: "Let's Get Your Residency Sorted",
      description: "The legal side of moving to Mexico doesn't have to be stressful. My residency team works hand-in-hand with you — I connect you directly, coordinate every step, and even show up with you. Temporary residency, permanent residency, or heritage citizenship — navigated together.",
      service: "Mexican Residency, Sorted",
      cta: "Book a Strategy Session",
    }
  }
  if (concern === 'away' || type === 'snowbird') {
    return {
      title: "Peace of Mind While You're Away",
      description: "I'll be your eyes, your voice, and your trusted presence on the ground. Pipes, pets, plants, payments, staff — handled. You travel freely knowing your Mexico life is in good hands.",
      service: "Property & Pet Care",
      cta: "Book a Strategy Session",
    }
  }
  if (concern === 'home' || journey === 'planning') {
    return {
      title: "Your Perfect Home is Out There",
      description: "Finding the right rental in Mexico takes local knowledge the internet doesn't have. I pre-screen every property, escort you through every showing, review your lease line by line, and negotiate on your behalf. The best homes are never publicly listed — but I know where they are.",
      service: "Rental Agent Services",
      cta: "Book a Strategy Session",
    }
  }
  if (concern === 'daily' || journey === 'here') {
    return {
      title: "Your Daily Life, Handled",
      description: "You're here — now let's make it feel like home. From bank accounts to bill payments, SIM cards to shopping guidance, post-surgery support to staff oversight, I handle the practical side so you can actually enjoy Mexico.",
      service: "newcomer concierge support",
      cta: "Book a Strategy Session",
    }
  }
  if (journey === 'moving' || timeline === 'now' || timeline === 'thisyear') {
    return {
      title: "Let's Build Your Full Mexico Plan",
      description: "You're close — and this is exactly when having someone who knows every step makes all the difference. From shipping logistics to lease signing, banking to your first cup of coffee at your favorite spot, I walk beside you so nothing falls through the cracks.",
      service: "newcomer concierge support",
      cta: "Book a Strategy Session",
    }
  }
  return {
    title: "Your Roadmap Starts Here",
    description: "Whether you're dreaming or exploring, the best thing you can do right now is get clear. A focused strategy session gives you a real picture of what moving to Mexico looks like for your specific situation — timelines, costs, neighborhoods, visas, and more.",
    service: "1-Hour Strategy Session",
    cta: "Book a Strategy Session",
  }
}

export default function MexicoPathQuiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])

  const isResult = step >= questions.length
  const result = isResult ? getResult(answers) : null
  const progress = Math.round((step / questions.length) * 100)

  function handleAnswer(value: string) {
    const next = [...answers, value]
    setAnswers(next)
    setStep(step + 1)
  }

  function restart() {
    setStep(0)
    setAnswers([])
  }

  return (
    <section id="find-your-path" className="responsive-section" style={{ backgroundColor: '#FDF6F0' }}>
      <div className="content-wrapper" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <p style={{ color: '#D4A017', fontSize: '11px', letterSpacing: '5px', fontWeight: '700', marginBottom: '16px', textAlign: 'center' }}>FIND YOUR PATH</p>
        <h2 style={{ fontSize: '40px', fontWeight: 'normal', color: '#2C1810', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", textAlign: 'center', marginBottom: '12px', lineHeight: '1.2' }}>
          Find Your Mexico Path
        </h2>
        <p style={{ fontSize: '16px', color: '#5C3A2E', textAlign: 'center', marginBottom: '48px', lineHeight: '1.7' }}>
          Not sure where to start? Answer 5 questions and we&rsquo;ll point you to the right help.
        </p>

        <div style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 20px rgba(44,24,16,0.08)' }}>
          {/* Progress bar */}
          {!isResult && (
            <div style={{ height: '4px', backgroundColor: '#F0E0D6' }}>
              <div style={{ height: '100%', width: `${progress}%`, backgroundColor: '#8B1A2A', transition: 'width 0.3s ease' }} />
            </div>
          )}

          <div style={{ padding: '52px 56px' }}>
            {!isResult ? (
              <>
                <p style={{ fontSize: '12px', color: '#8B1A2A', letterSpacing: '3px', fontWeight: '700', marginBottom: '20px' }}>
                  QUESTION {step + 1} OF {questions.length}
                </p>
                <h3 style={{ fontSize: '26px', fontWeight: 'normal', color: '#2C1810', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '36px', lineHeight: '1.3' }}>
                  {questions[step].question}
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                  {questions[step].options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleAnswer(opt.value)}
                      style={{
                        backgroundColor: '#FDF6F0',
                        border: '1.5px solid #E8A598',
                        borderRadius: '6px',
                        padding: '18px 20px',
                        textAlign: 'left',
                        fontSize: '15px',
                        color: '#2C1810',
                        cursor: 'pointer',
                        lineHeight: '1.5',
                        fontFamily: "var(--font-inter, 'Inter', sans-serif)",
                        transition: 'border-color 0.15s, background 0.15s',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLButtonElement).style.borderColor = '#C4622D'
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
              </>
            ) : (
              <>
                <div style={{ width: '48px', height: '2px', backgroundColor: '#D4A017', marginBottom: '28px' }} />
                <p style={{ fontSize: '12px', color: '#8B1A2A', letterSpacing: '3px', fontWeight: '700', marginBottom: '16px' }}>YOUR RESULT</p>
                <h3 style={{ fontSize: '32px', fontWeight: 'normal', color: '#2C1810', fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)", marginBottom: '20px', lineHeight: '1.2' }}>
                  {result!.title}
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '1.85', color: '#2C1810', marginBottom: '28px', maxWidth: '680px' }}>
                  {result!.description}
                </p>
                <div style={{ backgroundColor: '#FAE8E0', borderLeft: '3px solid #C4622D', padding: '16px 20px', borderRadius: '4px', marginBottom: '36px', display: 'inline-block' }}>
                  <p style={{ fontSize: '13px', color: '#7D3B4E', fontWeight: '600', margin: 0 }}>Recommended service: <span style={{ color: '#C4622D' }}>{result!.service}</span></p>
                </div>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <a
                    href="https://calendar.app.google/qfwutaFsrSaqWVkw7"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ backgroundColor: '#C4622D', color: 'white', padding: '16px 36px', borderRadius: '4px', textDecoration: 'none', fontSize: '15px', fontWeight: '700', display: 'inline-block' }}
                  >
                    ✦ {result!.cta}
                  </a>
                  <button
                    onClick={restart}
                    style={{ background: 'none', border: 'none', color: '#7D3B4E', fontSize: '14px', cursor: 'pointer', textDecoration: 'underline', padding: '0' }}
                  >
                    Start over
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
