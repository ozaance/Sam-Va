import { Logo } from './Logo'

const LINKS = ['Mentions légales', 'Protection des données (RGPD)']

export function Footer() {
  return (
    <footer className="bg-navy-900 py-8 text-[13px] text-white/50">
      <div className="shell flex flex-wrap items-center justify-between gap-5">
        <div>
          <Logo size={20} tone="white" />
          <p className="mt-2 text-[13px] leading-relaxed opacity-70">
            © 2026 SAM&apos;va. Tous droits réservés.
          </p>
        </div>
        {/* gap-x réduit et hauteur mini de 44px : au doigt, ces liens ne
            faisaient que 21px de haut. */}
        <nav className="flex flex-wrap gap-x-6">
          {LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="inline-flex min-h-[44px] items-center text-white/50 transition-colors hover:text-white"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
