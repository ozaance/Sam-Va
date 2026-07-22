import {
  ArrowRightLeft,
  Baby,
  BriefcaseMedical,
  CircleCheck,
  Clock,
  FileSignature,
  FileText,
  ShieldCheck,
  Stethoscope,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { AnimatedTabs, type Tab } from '@/components/ui/animated-tabs'
import {
  UniqueAccordion,
  type AccordionItem,
} from '@/components/ui/interactive-accordion'
import { TiltCard } from '@/components/ui/tilt-card'

type Row = {
  icon: LucideIcon
  tone: 'teal' | 'fuchsia'
  badge: string
  /** Largeurs des lignes de texte simulé — géométrie issue du fichier de design. */
  lines: [string, string]
}

const AVATAR_TONE = {
  teal: 'bg-teal-tint20 text-teal-500',
  fuchsia: 'bg-fuchsia-tint20 text-fuchsia-500',
} as const

const BADGE_TONE = {
  teal: 'bg-teal-tint12 text-teal-500',
  fuchsia: 'bg-fuchsia-tint12 text-fuchsia-500',
} as const

function MockRows({ rows }: { rows: Row[] }) {
  return (
    <div className="flex flex-col gap-3" aria-hidden="true">
      {rows.map((row, i) => {
        const Icon = row.icon
        return (
          <div
            key={i}
            className="flex items-center gap-3 rounded-[10px] bg-gray-100 p-3"
          >
            <div
              className={`flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full ${
                AVATAR_TONE[row.tone]
              }`}
            >
              <Icon size={14} />
            </div>
            <div className="min-w-0 flex-1">
              <div
                className="mb-1.5 h-2 rounded-xs bg-skeleton-strong"
                style={{ width: row.lines[0] }}
              />
              <div
                className="h-[7px] rounded-xs bg-gray-200"
                style={{ width: row.lines[1] }}
              />
            </div>
            <span
              className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold ${
                BADGE_TONE[row.tone]
              }`}
            >
              {row.badge}
            </span>
          </div>
        )
      })}
    </div>
  )
}

const TABS: Tab[] = [
  {
    id: 'disponibilites',
    label: 'Disponibilités',
    content: (
      <MockRows
        rows={[
          { icon: Stethoscope, tone: 'teal', badge: 'Disponible', lines: ['60%', '40%'] },
          { icon: BriefcaseMedical, tone: 'fuchsia', badge: 'CDD', lines: ['70%', '46%'] },
          { icon: Baby, tone: 'teal', badge: 'Validé', lines: ['54%', '38%'] },
        ]}
      />
    ),
  },
  {
    id: 'offres',
    label: 'Offres',
    content: (
      <MockRows
        rows={[
          { icon: FileText, tone: 'teal', badge: 'Publiée', lines: ['66%', '42%'] },
          { icon: Users, tone: 'fuchsia', badge: '12 candidats', lines: ['52%', '36%'] },
          { icon: CircleCheck, tone: 'teal', badge: 'Pourvue', lines: ['74%', '48%'] },
        ]}
      />
    ),
  },
  {
    id: 'contrats',
    label: 'Contrats',
    content: (
      <MockRows
        rows={[
          { icon: FileSignature, tone: 'teal', badge: 'Signé', lines: ['58%', '44%'] },
          { icon: Clock, tone: 'fuchsia', badge: 'En attente', lines: ['68%', '38%'] },
          { icon: ShieldCheck, tone: 'teal', badge: 'DPAE OK', lines: ['62%', '46%'] },
        ]}
      />
    ),
  },
]

const POINTS: AccordionItem[] = [
  {
    id: 'cvtheque',
    number: '01',
    title: 'CVthèque du territoire',
    content:
      'Consultez instantanément les compétences disponibles au sein du réseau local pour couvrir vos besoins sereinement.',
  },
  {
    id: 'diffusion',
    number: '02',
    title: 'Diffusion d’offres & suivi en ligne',
    content:
      'Publiez vos opportunités et pilotez chaque étape de recrutement depuis un tableau de bord unique.',
  },
  {
    id: 'autonomie',
    number: '03',
    title: 'Autonomie & flexibilité',
    content:
      'Les intervenants consultent leur planning, renseignent leurs disponibilités et acceptent les offres en instantané.',
  },
]

export function Network() {
  return (
    <section id="reseau" className="section-pad bg-gray-100">
      <div className="shell grid items-center gap-x-[60px] gap-y-14 lg:grid-cols-2">
        {/* Le calque teal est à l'intérieur du TiltCard pour s'incliner avec la
            carte : resté statique, il aurait trahi l'effet de profondeur. */}
        <TiltCard className="relative">
          <div
            aria-hidden="true"
            className="absolute -bottom-6 -left-5 right-7 top-6 rounded-md bg-teal-deep opacity-[0.14]"
          />

          <div className="relative rounded-md border border-gray-200 bg-white p-[22px] shadow-lg">
            <div className="mb-4 flex items-center gap-1.5 text-[13px] font-bold text-navy-900">
              <ArrowRightLeft size={13} className="text-fuchsia-500" />
              Mise en relation territoriale
            </div>
            <AnimatedTabs tabs={TABS} minContentHeight={198} />
          </div>
        </TiltCard>

        <div>
          <h2 className="mb-3.5 text-[32px] font-extrabold leading-[1.1] text-navy-900 [text-wrap:balance] lg:text-h2">
            Fluidifiez la mise en relation
          </h2>
          <p className="mb-6 text-base leading-[1.7] text-gray-600">
            SAM&apos;va s&apos;adapte précisément aux besoins des établissements
            comme des professionnels de terrain.
          </p>

          {/* Hauteur mini : absorbe l'ouverture/fermeture d'un panneau pour que
              la carte de gauche ne se recentre pas à chaque clic. */}
          <div className="lg:min-h-[340px]">
            <UniqueAccordion items={POINTS} />
          </div>
        </div>
      </div>
    </section>
  )
}
