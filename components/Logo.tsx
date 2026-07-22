import Link from 'next/link'

/**
 * "SAM'" in navy (or white on dark surfaces), "va" always in fuchsia.
 * The `va` uses <em> with normal font-style, matching the design file.
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
      aria-label="SAM'va — accueil"
      // inline-flex + hauteur mini : au doigt, le lien ne faisait que la
      // hauteur de la ligne de texte (42px en tête, 26px en pied).
      className={`inline-flex min-h-[44px] items-center font-extrabold tracking-[-0.04em] ${
        tone === 'white' ? 'text-white' : 'text-navy-900'
      } ${className}`}
      style={{ fontSize: `${size}px` }}
    >
      SAM&apos;
      <em className="font-bold not-italic text-fuchsia-500">va</em>
    </Link>
  )
}
