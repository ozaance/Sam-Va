/**
 * « Notre histoire » — contenu simplifié à partir du HTML d'origine
 * (SITE INTERNET SAM.html). L'angle coopératif n'est conservé que là où il
 * décrit factuellement les partenaires fondateurs (Melting, Mon Sauveteur),
 * pas le positionnement de SAM.
 *
 * Témoignages validés par leurs auteurs le 22 juillet 2026 : toute
 * modification du texte doit repasser par leur accord.
 */
type Testimonial = {
  quote: string
  name: string
  role: string
  accent: 'violet' | 'orange'
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'On passait des journées entières au téléphone à chercher un remplaçant pour trois heures de vacation. Les compétences existaient, souvent à quelques kilomètres. Il manquait simplement un endroit où le besoin et la disponibilité se rencontrent.',
    name: 'Christophe',
    role: 'Directeur, Melting',
    accent: 'violet',
  },
  {
    quote:
      'Aucun outil du marché ne traitait à la fois le planning réglementaire et la mise en relation locale. Nous avons préféré construire le nôtre, avec les établissements qui allaient s’en servir au quotidien.',
    name: 'Quentin',
    role: 'CEO, Mon Sauveteur',
    accent: 'orange',
  },
]

const ORIGINS = [
  {
    title: 'Un outil forgé sur le terrain',
    body: 'Le projet est né aux côtés de Melting, engagée auprès du médico-social, et de Mon Sauveteur. Objectif : sécuriser les plannings, fluidifier les remplacements et alléger la charge administrative des équipes.',
  },
  {
    title: 'Adaptable à chaque structure',
    body: 'Face à des contraintes budgétaires croissantes, SAM a été pensé comme une solution souple, capable de s’ajuster à la taille et à l’organisation de chaque établissement, dans tous les secteurs d’activité.',
  },
]

const ACCENT = {
  violet: 'bg-violet-500',
  orange: 'bg-orange-500',
} as const

export function Histoire() {
  return (
    <section id="histoire" className="section-pad bg-white">
      <div className="shell">
        <div className="mx-auto mb-12 max-w-[680px] text-center">
          <span className="eyebrow inline-block rounded-full bg-cream px-3 py-1.5 text-orange-500">
            Notre histoire
          </span>
          <h2 className="mt-3.5 text-[30px] font-extrabold text-navy-900 [text-wrap:balance] lg:text-[38px]">
            Née d&apos;un besoin de terrain
          </h2>
          <p className="mt-4 text-base leading-[1.7] text-gray-600">
            SAM est née d&apos;un constat partagé par les acteurs du
            médico-social : trop de temps passé sur l&apos;administratif et la
            recherche de remplaçants, au détriment de l&apos;accompagnement des
            personnes.
          </p>
        </div>

        {/* Origines */}
        <div className="mx-auto mb-14 grid max-w-[900px] gap-6 md:grid-cols-2">
          {ORIGINS.map((o, i) => (
            <div
              key={o.title}
              className={`rounded-lg border p-7 ${
                i % 2 === 0
                  ? 'border-lila bg-lila-light/60'
                  : 'border-cream bg-cream/30'
              }`}
            >
              <h3 className="mb-2 text-[18px] font-bold text-navy-900">
                {o.title}
              </h3>
              <p className="text-sm leading-[1.7] text-gray-600">{o.body}</p>
            </div>
          ))}
        </div>

        {/* Voix des fondateurs */}
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
