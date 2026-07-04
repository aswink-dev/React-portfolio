import { FiArrowUp } from 'react-icons/fi'
import { profile, socialLinks } from '../data/portfolioData'

const Footer = () => {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-center sm:flex-row">
        <p className="text-sm text-slate-400">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-300 transition hover:border-blue-400 hover:text-blue-400"
                aria-label={link.label}
              >
                <Icon size={19} aria-hidden="true" />
              </a>
            )
          })}
          <a
            href="#home"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-white transition hover:bg-blue-400"
            aria-label="Back to top"
          >
            <FiArrowUp size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
