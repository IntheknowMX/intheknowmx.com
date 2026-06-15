import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, whatsapp, caseType, description } = await request.json()

    if (!name || !email || !caseType || !description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
    }

    const html = `
      <h2>New Case Inquiry — In The Know Mexico</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>WhatsApp:</strong> ${whatsapp || 'Not provided'}</p>
      <p><strong>Type of Case:</strong> ${caseType}</p>
      <p><strong>Description:</strong></p>
      <p style="white-space:pre-wrap">${description}</p>
    `

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'In The Know Mexico <noreply@intheknowmx.com>',
        to: 'lisa@intheknowmx.com',
        reply_to: email,
        subject: `New Case Inquiry — ${caseType}`,
        html,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('Resend error:', err)
      return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 })
  }
}
