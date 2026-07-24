import { Handshake } from 'lucide-react'

/**
 * Bloc partenaire Melting, aux couleurs de la charte (carte violette, bouton
 * jaune crème à texte foncé — cf. maquettes marketing fournies).
 *
 * « coopérative » est employé ici à dessein : il décrit factuellement Melting
 * (SCIC / agence d'emploi coopérative), partenaire de SAM, et non SAM lui-même.
 */
export function MeltingPartner() {
  return (
    <section className="bg-white pb-[68px] lg:pb-[100px]">
      <div className="shell">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-violet-500 to-violet-deep px-8 py-10 text-white sm:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"
          />

          <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em]">
                <Handshake size={13} />
                Partenaire expert
              </span>
              <h3 className="mb-3 text-[26px] font-extrabold leading-[1.15] text-white">
                Notre partenaire : Melting
              </h3>
              <p className="text-[15px] leading-[1.7] text-white/85">
                SAM est aussi une passerelle auprès de la Solution Coopérative
                Pour l&apos;Emploi Melting. Vous n&apos;êtes pas encore inscrit
                au sein de l&apos;agence d&apos;emploi coopérative Melting ?
              </p>
            </div>

            <a
              href="mailto:contact@samva.io"
              className="shrink-0 rounded-sm bg-cream px-6 py-3.5 text-[15px] font-bold text-navy-900 transition-colors hover:bg-cream-hover"
            >
              Découvrir Melting
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
