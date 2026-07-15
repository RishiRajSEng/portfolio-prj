import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineMenu } from 'react-icons/hi'
import navLinks from '../constants/nav-link'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#10c24d] text-white shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 font-semibold tracking-wide">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/15 text-sm font-bold uppercase">
            RRP
          </span>
          <span className="text-base sm:text-lg">Rishi</span>
        </Link>

        <nav className="hidden items-center gap-10 text-[15px] font-semibold md:flex">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="transition hover:text-black/70">
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/10 text-xl md:hidden"
          aria-label="Open menu"
        >
          <HiOutlineMenu />
        </button>
      </div>
    </header>
  )
}

export default Navbar
