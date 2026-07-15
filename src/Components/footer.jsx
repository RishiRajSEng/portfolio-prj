import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaLinkedinIn, FaTiktok, FaFacebook } from 'react-icons/fa6'
import navLinks from '../constants/nav-link'

const socialLinks = [
{name: 'Facebook', icon: FaFacebook, href: 'https://facebook.com' },
  { name: 'Instagram', icon: FaInstagram, href: 'https://instagram.com' },
  { name: 'LinkedIn', icon: FaLinkedinIn, href: 'https://linkedin.com' },
  { name: 'TikTok', icon: FaTiktok, href: 'https://tiktok.com' },
]

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-slate-500/20 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 text-slate-100">
      <div className="pointer-events-none absolute -left-14 top-0 h-36 w-36 rounded-full bg-emerald-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-14 bottom-0 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1.6fr_1fr_auto] md:items-center">
        <div className="footer-fade-up [animation-delay:0ms]">
          <h3 className="text-xl font-black tracking-wide">Rishi Raj Pandey</h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-200/90 sm:text-base">
            I design and build highly scalable web applications using React and Tailwind CSS.
          </p>
        </div>

        <nav className="footer-fade-up [animation-delay:120ms]">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-slate-100/90">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="transition hover:text-emerald-200">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-fade-up flex items-center gap-3 [animation-delay:220ms]">
          {socialLinks.map((item) => {
            const Icon = item.icon

            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/35 bg-slate-200/10 text-base text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-200/15 hover:text-emerald-100"
              >
                <Icon />
              </a>
            )
          })}
        </div>
      </div>

      <div className="border-t border-slate-200/20 px-5 py-4 text-center text-xs font-medium tracking-wide text-slate-200/90 sm:px-8">
        @ All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
