'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'

const NAV_LINKS = [
  { href: '#features', label: 'Fonctionnalités' },
  { href: '#reseau', label: 'Le réseau' },
  { href: '#engagements', label: 'Nos engagements' },
  { href: '#contact', label: 'Connexion' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  // The mobile panel is an overlay — lock the page behind it.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <header className="sticky top-0 z-[100] border-b border-gray-200 bg-white/[0.92] backdrop-blur-[10px]">
      <div className="shell flex h-[68px] items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-[30px] lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy-900/[0.85] transition-colors hover:text-teal-500"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-sm bg-teal-500 px-[22px] py-[10px] text-sm font-bold text-white transition-colors hover:bg-teal-400"
          >
            Espace Employeur
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="-mr-2.5 flex h-11 w-11 items-center justify-center rounded-sm text-navy-900 lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-full border-b border-gray-200 bg-white shadow-lg lg:hidden"
        >
          <nav className="shell flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-sm px-2 py-3 text-[15px] font-medium text-navy-900/[0.85] hover:bg-gray-100"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-sm bg-teal-500 px-[22px] py-3 text-center text-sm font-bold text-white"
            >
              Espace Employeur
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
