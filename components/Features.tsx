import {
  CalendarDays,
  ChartLine,
  Fingerprint,
  FileSignature,
  Plug,
  Vault,
  type LucideIcon,
} from 'lucide-react'

type Feature = {
  icon: LucideIcon
  title: string
  body: string
  tone: 'teal' | 'fuchsia'
}

const FEATURES: Feature[] = [
  {
    icon: CalendarDays,
    tone: 'teal',
    title: 'Planning réglementaire',
    body: "Les plannings se verrouillent selon les règles RH (repos obligatoires, plafonds d'heures) pour garantir la conformité.",
  },
  {
    icon: FileSignature,
    tone: 'fuchsia',
    title: 'Contrats & eIDAS',
    body: 'Générez vos contrats prêts pour la signature électronique conforme eIDAS, avec DPAE automatisées.',
  },
  {
    icon: Vault,
    tone: 'teal',
    title: 'Coffre-fort SIRH',
    body: 'Un espace unique où chaque membre consulte, signe ou refuse ses documents, avec un historique protégé.',
  },
  {
    icon: Plug,
    tone: 'fuchsia',
    title: 'Liaison API paye',
    body: "SAM'va s'interface directement avec vos logiciels de paie pour exporter vos variables et supprimer la double saisie.",
  },
  {
    icon: ChartLine,
    tone: 'teal',
    title: 'Tableaux de bord',
    body: 'Des indicateurs clairs et actualisés en temps réel pour piloter efficacement vos budgets de remplacement.',
  },
  {
    icon: Fingerprint,
    tone: 'fuchsia',
    title: 'Sécurité & RGPD',
    body: 'Chiffrement rigoureux et stockage hautement sécurisé pour la protection absolue des données de votre réseau.',
  },
]

const ICON_TONE = {
  teal: 'bg-teal-tint14 text-teal-500',
  fuchsia: 'bg-fuchsia-tint14 text-fuchsia-500',
} as const

export function Features() {
  return (
    <section id="features" className="section-pad bg-white">
      <div className="shell grid items-start gap-14 lg:grid-cols-[0.85fr_1.35fr]">
        <div className="lg:sticky lg:top-24">
          <span className="eyebrow text-teal-500">Fonctionnalités</span>
          <h2 className="mb-4 mt-3.5 text-[32px] font-extrabold leading-[1.1] text-navy-900 [text-wrap:balance] lg:text-h2">
            Un SIRH pensé pour le terrain
          </h2>
          <p className="mb-7 text-base leading-[1.7] text-gray-600">
            Automatisez les tâches administratives répétitives et sécurisez
            chaque action grâce à des outils conformes à la réglementation du
            temps de travail.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-sm bg-teal-500 px-[26px] py-[13px] text-[15px] font-semibold text-white transition-colors hover:bg-teal-400"
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
