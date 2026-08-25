// Vercel serverless function — handles contact form submissions.
//
// SECURITY: The Resend API key is read ONLY from environment variables.
// This file runs server-side and is never included in the browser bundle,
// so the key is never exposed to users.
//
// Set these in the Vercel project (Settings → Environment Variables):
//   RESEND_API_KEY      your Resend API key (starts with "re_")
//   CONTACT_TO_EMAIL    email address that receives submissions

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {}
    const { name, email, phone, hotel, videos, message, service } = body

    // Required by the front-end form + email content
    if (!name || !email || !phone || !message || !service) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const apiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_TO_EMAIL

    if (!apiKey || !toEmail) {
      console.error('Email service not configured: missing environment variables.')
      return res.status(500).json({ error: 'Email service not configured' })
    }

    const text = [
      'New tavonandtech inquiry',
      '',
      `Name:    ${name}`,
      `Email:   ${email}`,
      `Phone:   ${phone}`,
      `Hotel:   ${hotel || '-'}`,
      `Videos:  ${videos || '-'}`,
      `Service: ${service || '-'}`,
      '',
      'Message:',
      message
    ].join('\n')

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'tavonandtech <onboarding@resend.dev>',
        to: [toEmail],
        reply_to: email,
        subject: `New tavonandtech Inquiry — ${name}`,
        text
      })
    })

    if (!response.ok) {
      const detail = await response.text()
      console.error('Resend API error:', detail)
      return res.status(502).json({ error: 'Failed to send email' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return res.status(500).json({ error: 'Server error' })
  }
}
