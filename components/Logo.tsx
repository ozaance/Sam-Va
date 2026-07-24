import Link from 'next/link'

/**
 * Marque « SAM » (on n'utilise plus « SAM'va »). Le « M » reçoit l'accent
 * violet de la charte. En attendant le logo image définitif fourni par le
 * client, on garde une marque typographique.
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
      href="#"
      aria-label="SAM — accueil"
      // inline-flex + hauteur mini : au doigt, le lien ne faisait que la
      // hauteur de la ligne de texte.
      className={`inline-flex min-h-[44px] items-center font-extrabold tracking-[-0.04em] ${
        tone === 'white' ? 'text-white' : 'text-navy-900'
      } ${className}`}
      style={{ fontSize: `${size}px` }}
    >
      SA<span className="text-violet-500">M</span>
    </Link>
  )
}
