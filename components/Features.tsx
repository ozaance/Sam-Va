import {
  CalendarDays,
  ChartLine,
  Fingerprint,
  FileSignature,
  Plug,
  UserSearch,
  UsersRound,
  Vault,
  type LucideIcon,
} from 'lucide-react'

type Feature = {
  icon: LucideIcon
  title: string
  body: string
  tone: 'violet' | 'orange'
}

/** Ordre et contenus fournis par le client. */
const FEATURES: Feature[] = [
  {
    icon: UserSearch,
    tone: 'violet',
    title: 'Recrutement',
    body: "Accédez à un vivier de compétences et pilotez l'ensemble de vos recrutements, de la diffusion des offres à la sélection des candidats.",
  },
  {
    icon: Vault,
    tone: 'orange',
    title: 'Coffre-fort SIRH',
    body: 'Un coffre-fort numérique unique pour centraliser, sécuriser et piloter tous les documents RH.',
  },
  {
    icon: UsersRound,
    tone: 'violet',
    title: 'Gestion des effectifs',
    body: 'Pilotez vos effectifs mobilisables, facilitez les échanges avec vos salariés pour assurer la continuité de service et préserver les repères des personnes accompagnées.',
  },
  {
    icon: CalendarDays,
    tone: 'orange',
    title: 'Planning réglementaire',
    body: 'Les plannings intègrent automatiquement les règles RH (temps de repos, durées maximales de travail, limites réglementaires) afin de garantir leur conformité.',
  },
  {
    icon: FileSignature,
    tone: 'violet',
    title: 'DPAE & contrats',
    body: 'Générez vos contrats prêts pour la signature électronique conforme eIDAS, avec DPAE automatisées.',
  },
  {
    icon: Plug,
    tone: 'orange',
    title: 'Liaison API paye',
    body: "SAM s'interface directement avec les logiciels de paie pour exporter les variables et supprimer la double saisie.",
  },
  {
    icon: ChartLine,
    tone: 'violet',
    title: 'Tableaux de bord',
    body: 'Des indicateurs clairs et actualisés en temps réel pour piloter efficacement vos budgets.',
  },
  {
    icon: Fingerprint,
    tone: 'orange',
    title: 'Sécurité & RGPD',
    body: 'Chiffrement rigoureux et stockage sécurisé pour la protection des données.',
  },
]

const ICON_TONE = {
  violet: 'bg-violet-tint14 text-violet-500',
  orange: 'bg-orange-tint14 text-orange-500',
} as const

export function Features() {
  return (
    <section id="features" className="section-pad bg-white">
      <div className="shell grid items-start gap-14 lg:grid-cols-[0.85fr_1.35fr]">
        <div className="lg:sticky lg:top-24">
          <span className="eyebrow inline-block rounded-full bg-cream px-3 py-1.5 text-orange-500">
            Fonctionnalités
          </span>
          <h2 className="mb-4 mt-3.5 text-[32px] font-extrabold leading-[1.1] text-navy-900 [text-wrap:balance] lg:text-h2">
            Un SIRH pensé pour le terrain
          </h2>
          <p className="mb-7 text-base leading-[1.7] text-gray-600">
            La garantie de gagner un temps précieux sur des activités
            chronophages et de sécuriser durablement les plannings, grâce à une
            gestion simplifiée des obligations légales.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-sm bg-violet-500 px-[26px] py-[13px] text-[15px] font-semibold text-white transition-colors hover:bg-violet-400"
          >
            Découvrir la plateforme
          </a>
          <p className="mt-3.5 text-[13px] text-gray-400">
            Démo adaptée à la taille de votre structure.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <article
                key={feature.title}
                className="rounded-md border border-gray-200 bg-white p-[26px] shadow-sm"
              >
                <div
                  className={`mb-4 flex h-11 w-11 items-center justify-center rounded-[10px] ${
                    ICON_TONE[feature.tone]
                  }`}
                >
                  <Icon size={20} />
                </div>
                <h3 className="mb-2 text-[17px] font-bold text-navy-900">
                  {feature.title}
                </h3>
                <p className="text-[13.5px] text-gray-600">{feature.body}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
