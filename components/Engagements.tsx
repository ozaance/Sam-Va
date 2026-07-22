/**
 * Témoignages validés par leurs auteurs (Christophe, Melting — Quentin,
 * Mon Sauveteur) le 22 juillet 2026.
 *
 * Ces citations sont attribuées nommément à des personnes réelles : toute
 * modification ultérieure du texte doit repasser par leur accord.
 */
type Testimonial = {
  quote: string
  name: string
  role: string
  /** Filet d'accentuation au-dessus de l'attribution. */
  accent: 'teal' | 'fuchsia'
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'On passait des journées entières au téléphone à chercher un remplaçant pour trois heures de vacation. Les compétences existaient, souvent à quelques kilomètres. Il manquait simplement un endroit où le besoin et la disponibilité se rencontrent.',
    name: 'Christophe',
    role: 'Directeur, Melting',
    accent: 'teal',
  },
  {
    quote:
      'Aucun outil du marché ne traitait à la fois le planning réglementaire et la mise en relation locale. Nous avons préféré construire le nôtre, avec les établissements qui allaient s’en servir au quotidien.',
    name: 'Quentin',
    role: 'CEO, Mon Sauveteur',
    accent: 'fuchsia',
  },
]

const ACCENT = {
  teal: 'bg-teal-500',
  fuchsia: 'bg-fuchsia-500',
} as const

export function Engagements() {
  return (
    <section id="engagements" className="section-pad bg-white">
      <div className="shell">
        <div className="mx-auto mb-14 max-w-[640px] text-center">
          <span className="eyebrow text-fuchsia-500">Nos engagements</span>
          <h2 className="mt-3.5 text-[30px] font-extrabold text-navy-900 [text-wrap:balance] lg:text-[38px]">
            Une technologie née d&apos;un besoin de terrain
          </h2>
        </div>

        {/* Pas de cartes : deux colonnes de texte, filet d'accentuation et
            attribution. Les attributions sont poussées en pied (mt-auto) pour
            s'aligner malgré des citations de longueurs différentes. */}
        <div className="mx-auto grid max-w-[1000px] gap-x-16 gap-y-12 md:grid-cols-2">
          {TESTIMONIALS.map((item) => (
            <figure key={item.name} className="flex flex-col">
              <blockquote className="text-[19px] leading-[1.65] text-navy-900 [text-wrap:pretty]">
                «&nbsp;{item.quote}&nbsp;»
              </blockquote>

              <figcaption className="mt-auto pt-7">
                <div className={`mb-4 h-0.5 w-10 ${ACCENT[item.accent]}`} />
                <div className="text-[15px] font-bold text-navy-900">
                  {item.name}
                </div>
                <div className="text-sm text-gray-600">{item.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
