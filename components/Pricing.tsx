import Image from 'next/image'
import { ArrowRight, BadgeCheck, Building2 } from 'lucide-react'

/**
 * ⚠️ PREUVE SOCIALE — NE PAS INVENTER DE CHIFFRE.
 *
 * Une mention type « Déjà +120 établissements nous font confiance » ou une note
 * Trustpilot est une affirmation factuelle envers des prospects. Je n'ai aucun
 * moyen de connaître ces valeurs, donc rien n'est inventé ici.
 *
 * Par défaut la section affiche les logos partenaires : c'est vrai, vérifiable,
 * et les fichiers existent déjà. Pour basculer sur un chiffre, renseigne
 * `establishmentCount` avec la valeur réelle.
 */
const SOCIAL_PROOF: { establishmentCount: number | null } = {
  establishmentCount: null,
}

const PROOF_LOGOS = [
  { src: '/logos/melting.webp', alt: 'Melting' },
  { src: '/logos/croix-rouge-francaise.png', alt: 'Croix-Rouge française' },
  { src: '/logos/arseaa.png', alt: 'ARSEAA' },
  { src: '/logos/apeai-ouest-herault.png', alt: 'APEAI Ouest Hérault' },
]

/**
 * Photo Unsplash : soignant consultant son téléphone. Choisie cadrée sans
 * visage — une photo de banque d'images montrant un visage souriant, présentée
 * sous « rejoignez le réseau », laisserait croire que cette personne en est
 * membre. Ici l'image reste illustrative.
 */
const PHOTO =
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=900&auto=format&fit=crop'

export function Pricing() {
  return (
    <section id="contact" className="section-pad bg-gray-100">
      <div className="shell">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-teal-50 via-white to-fuchsia-100 px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
          {/* Halo diffus, très léger, pour éviter le dégradé plat. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl"
          />

          <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* ---------- Colonne texte ---------- */}
            <div>
              <h2 className="text-[32px] font-extrabold leading-[1.1] text-navy-900 [text-wrap:balance] lg:text-[44px]">
                Prêt à rejoindre le réseau ?
              </h2>
              <p className="mt-4 max-w-md text-[17px] leading-[1.7] text-gray-600">
                Établissement ou professionnel : choisissez votre accès.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:contact@samva.io"
                  className="group inline-flex items-center gap-2 rounded-sm bg-teal-500 px-6 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-teal-500/25 transition-all hover:-translate-y-0.5 hover:bg-teal-400 hover:shadow-xl hover:shadow-teal-500/30"
                >
                  Demander une démo
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
                <a
                  href="mailto:contact@samva.io"
                  className="rounded-sm border-[1.5px] border-fuchsia-500 px-5 py-[13px] text-[15px] font-semibold text-fuchsia-500 transition-colors hover:bg-fuchsia-100"
                >
                  Créer mon profil professionnel
                </a>
              </div>

              {/* ---------- Preuve sociale ---------- */}
              <div className="mt-10">
                {SOCIAL_PROOF.establishmentCount ? (
                  <p className="text-[13px] text-gray-600">
                    Déjà{' '}
                    <span className="font-bold text-navy-900">
                      {SOCIAL_PROOF.establishmentCount} établissements
                    </span>{' '}
                    du territoire nous font confiance.
                  </p>
                ) : (
                  <>
                    <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-400">
                      Ils construisent le réseau avec nous
                    </p>
                    <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
                      {PROOF_LOGOS.map((logo) => (
                        // eslint-disable-next-line @next/next/no-img-element -- ratios variables, normalisés par la hauteur
                        <img
                          key={logo.src}
                          src={logo.src}
                          alt={logo.alt}
                          className="h-6 w-auto max-w-[110px] object-contain opacity-60"
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* ---------- Collage visuel ---------- */}
            <div
              aria-hidden="true"
              className="relative h-[340px] sm:h-[400px] lg:h-[440px]"
            >
              {/* Photo, légèrement inclinée */}
              <div className="absolute left-0 top-2 w-[62%] -rotate-3 overflow-hidden rounded-lg shadow-xl ring-1 ring-navy-900/5">
                <Image
                  src={PHOTO}
                  alt=""
                  width={900}
                  height={600}
                  unoptimized
                  className="h-full w-full object-cover"
                  style={{ aspectRatio: '4 / 5' }}
                />
              </div>

              {/* Carte UI construite en HTML plutôt qu'une capture d'écran
                  d'un produit tiers : c'est le vrai langage visuel du site. */}
              <div className="absolute bottom-4 right-0 w-[68%] rotate-2 rounded-lg border border-gray-200 bg-white p-4 shadow-xl">
                <div className="mb-3 flex items-center gap-1.5 text-[11px] font-bold text-navy-900">
                  <Building2 size={12} className="text-teal-500" />
                  Nouvelle mission
                </div>
                <div className="flex items-center gap-2.5 rounded-[10px] bg-gray-100 p-2.5">
                  <div className="h-7 w-7 shrink-0 rounded-full bg-teal-tint20" />
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 h-1.5 w-[62%] rounded-xs bg-skeleton-strong" />
                    <div className="h-1.5 w-[40%] rounded-xs bg-gray-200" />
                  </div>
                  <span className="shrink-0 rounded-full bg-teal-tint12 px-2 py-0.5 text-[9px] font-bold text-teal-500">
                    Disponible
                  </span>
                </div>
              </div>

              {/* Pastille flottante */}
              <div className="absolute right-[6%] top-0 flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 shadow-lg ring-1 ring-navy-900/5">
                <BadgeCheck size={13} className="text-teal-500" />
                <span className="text-[11px] font-bold text-navy-900">
                  Contrat signé
                </span>
              </div>

              {/* Reprise du contenu de l'ancienne 3ᵉ carte, qui aurait
                  disparu avec la refonte. Placée à droite : posée sur la photo,
                  elle en masquait le sujet (les mains et le téléphone). */}
              <div className="absolute right-0 top-[22%] max-w-[196px] rounded-lg bg-navy-900 px-4 py-3 shadow-xl">
                <div className="text-[12px] font-medium leading-snug text-white">
                  Déléguez un besoin non couvert, en un clic.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
