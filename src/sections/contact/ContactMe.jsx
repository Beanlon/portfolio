import { useState } from 'react'
import ScrollReveal from '../../components/ScrollReveal'
import { contactEmails, defaultMailto, github, linkedIn } from '../../data/contact'

const fieldClasses = [
  'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-100',
  'placeholder:text-slate-500 transition-colors',
  'focus:border-orange-500/50 focus:outline-none focus:ring-2 focus:ring-orange-500/20',
].join(' ')

const labelClasses = 'mb-1.5 block text-sm font-medium text-slate-300'

export default function ContactMe() {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const body = [`From: ${email}`, '', message].join('\n')
    const mailto = `mailto:${defaultMailto}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
  }

  return (
    <section id="contact" className="contact-section-bg scroll-mt-28">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <ScrollReveal className="mb-10 text-left">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
            Get in touch
          </p>
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-white md:text-3xl">
            Contact Me
          </h2>
          <div className="section-divider mb-4" />
          <p className="max-w-2xl text-base leading-relaxed text-slate-400">
            Have a question or want to work together? Send a message or reach out through any of
            the links below.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ScrollReveal delay={80}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm">
              <p className="mb-4 text-sm font-semibold text-white">Email me directly</p>
              <ul className="space-y-4">
                {contactEmails.map(({ label, address }) => (
                  <li key={address}>
                    <p className="mb-0.5 text-xs font-medium uppercase tracking-wider text-slate-500">
                      {label}
                    </p>
                    <a
                      href={`mailto:${address}`}
                      className="text-sm font-medium text-orange-400 no-underline transition-colors hover:text-orange-300"
                    >
                      {address}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
                <a
                  href={github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm font-medium text-slate-300 no-underline transition-colors hover:text-orange-400"
                >
                  GitHub · {github.label}
                </a>
                <a
                  href={linkedIn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm font-medium text-slate-300 no-underline transition-colors hover:text-orange-400"
                >
                  LinkedIn · {linkedIn.label}
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={140}>
            <form
              onSubmit={handleSubmit}
              className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm"
            >
              <div className="mb-4">
                <label htmlFor="contact-email" className={labelClasses}>
                  Your email
                </label>
                <input
                  id="contact-email"
                  type="email"
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
                  required
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                  placeholder="Project inquiry"
                  className={fieldClasses}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="contact-message" className={labelClasses}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Tell me about your project or question..."
                  className={`${fieldClasses} resize-y min-h-[120px]`}
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-orange-500 sm:w-auto"
              >
                Send message
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
