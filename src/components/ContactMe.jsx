import { useState } from 'react'
import { contactEmails, defaultMailto } from '../data/contact'
import ScrollReveal from './ScrollReveal'

const fieldClasses = [
  'w-full rounded-xl border border-slate-200/80 bg-white px-4 py-2.5 text-sm text-slate-800',
  'placeholder:text-slate-400 transition-colors',
  'focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20',
  'dark:border-white/10 dark:bg-slate-800/80 dark:text-slate-100 dark:placeholder:text-slate-500',
].join(' ')

const labelClasses = 'mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300'

export default function ContactMe() {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const body = `From: ${email}\n\n${message}`
    const mailto = `mailto:${defaultMailto}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
  }

  return (
    <div className="mx-auto max-w-6xl">
      <ScrollReveal className="mb-8 text-left">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          Get in touch
        </p>
        <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white md:text-3xl">
          Contact Me
        </h2>
        <div className="section-divider mb-4" />
        <p className="max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
          Have a question, opportunity, or collaboration in mind? Send me a message and I&apos;ll get back to you as soon as I can.
        </p>
      </ScrollReveal>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-start">
        <ScrollReveal variant="left" delay={100} className="h-full">
          <div className="h-full rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-800/80">
            <p className="mb-4 text-sm font-semibold text-slate-900 dark:text-white">Email me directly</p>
            <ul className="space-y-3">
              {contactEmails.map(({ label, address }) => (
                <li key={address}>
                  <p className="mb-0.5 text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {label}
                  </p>
                  <a
                    href={`mailto:${address}`}
                    className="text-sm font-medium text-indigo-600 no-underline transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    {address}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="right" delay={180} className="h-full">
          <form
            onSubmit={handleSubmit}
            className="h-full rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-800/80"
          >
            <div className="mb-4">
              <label htmlFor="contact-email" className={labelClasses}>
                Your email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className={fieldClasses}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="contact-subject" className={labelClasses}>
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                required
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                placeholder="What is this about?"
                className={fieldClasses}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="contact-message" className={labelClasses}>
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Write your message here..."
                className={`${fieldClasses} resize-y min-h-[120px]`}
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:-translate-y-0.5 hover:bg-indigo-500 hover:shadow-indigo-500/40 sm:w-auto"
            >
              Send message
            </button>
          </form>
        </ScrollReveal>
      </div>
    </div>
  )
}
