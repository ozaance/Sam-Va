import Link from 'next/link'

/**
 * Logo SAM officiel (wordmark violet, fichier public/logo-sam.png détouré).
 * Affiché à hauteur fixe, largeur automatique pour préserver le ratio (~3,9:1).
 * Sur fond foncé (footer, tone="white"), le wordmark violet est rendu blanc
 * par filtre CSS (brightness-0 + invert) faute de version blanche fournie.
 */
export function Logo({
  size = 26,
  tone = 'navy',
  className = '',
}: {
  size?: number
  tone?: 'navy' | 'white'
  className?: string
}) {
  return (
    <Link
      href="/"
      aria-label="SAM, accueil"
      className={`inline-flex min-h-[44px] items-center ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- logo local, hauteur fixe */}
      <img
        src="/logo-sam.png"
        alt="SAM"
        style={{ height: `${size}px` }}
        className={`w-auto ${tone === 'white' ? 'brightness-0 invert' : ''}`}
      />
    </Link>
  )
}
