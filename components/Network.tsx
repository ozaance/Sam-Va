'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {
  Baby,
  BriefcaseMedical,
  CalendarDays,
  CircleUserRound,
  FileText,
  FolderLock,
  Stethoscope,
  type LucideIcon,
} from 'lucide-react'
import {
  UniqueAccordion,
  type AccordionItem,
} from '@/components/ui/interactive-accordion'
import { TiltCard } from '@/components/ui/tilt-card'

/**
 * 4 étapes fournies par le client. Chaque étape pilote le visuel de gauche
 * (accordéon non repliable : un item reste toujours ouvert, donc une image
 * toujours affichée).
 */
const STEPS: AccordionItem[] = [
  {
    id: 'centraliser',
    number: '01',
    title: 'Centralisez vos données et vos documents',
    content:
      'Regroupez l’ensemble des informations RH dans un espace unique et sécurisé : dossiers salariés, contrats, habilitations, plannings et documents administratifs. Fini les recherches dans plusieurs outils ou dossiers.',
  },
  {
    id: 'automatiser',
    number: '02',
    title: 'Automatisez les tâches à faible valeur ajoutée',
    content:
      'Générez automatiquement vos contrats, suivez les signatures électroniques, réalisez les DPAE, gérez les renouvellements et recevez des alertes sur les échéances importantes.',
  },
  {
    id: 'simplifier',
    number: '03',
    title: 'Simplifiez la gestion de vos ressources humaines',
    content:
      'Identifiez rapidement les compétences disponibles, pilotez vos recrutements, constituez votre vivier de professionnels mobilisables et ajustez vos plannings en toute conformité RH.',
  },
  {
    id: 'humain',
    number: '04',
    title: 'Recentrez vos équipes sur l’humain',
    content:
      'Consacrez moins de temps à l’administratif et davantage à vos missions d’accompagnement, au management de proximité et à la qualité de service auprès de vos usagers.',
  },
]

/* ---------- Maquettes (mode maquette : aucune capture réelle) ---------- */

function MockShell({
  title,
  icon: Icon,
  children,
}: {
  title: string
  icon: LucideIcon
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-1.5 text-[13px] font-bold text-navy-900">
        <Icon size={13} className="text-violet-500" />
        {title}
      </div>
      {children}
    </div>
  )
}

function Line({ w, strong }: { w: string; strong?: boolean }) {
  return (
    <div
      className={`h-2 rounded-xs ${strong ? 'bg-skeleton-strong' : 'bg-gray-200'}`}
      style={{ width: w }}
    />
  )
}

/** 1. Dossier admin — pile de documents. */
function VisualDossier() {
  const docs = [
    { label: 'Contrat CDI', icon: FileText, badge: 'Signé', tone: 'violet' as const },
    { label: 'Habilitation', icon: FolderLock, badge: 'À jour', tone: 'violet' as const },
    { label: 'DPAE', icon: FileText, badge: 'Envoyée', tone: 'orange' as const },
    { label: 'Planning', icon: CalendarDays, badge: 'Validé', tone: 'violet' as const },
  ]
  return (
    <MockShell title="Dossier administratif" icon={FolderLock}>
      <div className="flex flex-col gap-2.5">
        {docs.map((d) => {
          const Icon = d.icon
          return (
            <div
              key={d.label}
              className="flex items-center gap-3 rounded-[10px] bg-gray-100 p-2.5"
            >
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${
                  d.tone === 'violet'
                    ? 'bg-violet-tint20 text-violet-500'
                    : 'bg-orange-tint20 text-orange-500'
                }`}
              >
                <Icon size={14} />
              </div>
              <div className="flex-1 text-[12px] font-medium text-navy-900">
                {d.label}
              </div>
              <span
                className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold ${
                  d.tone === 'violet'
                    ? 'bg-violet-tint12 text-violet-500'
                    : 'bg-orange-tint12 text-orange-500'
                }`}
              >
                {d.badge}
              </span>
            </div>
          )
        })}
      </div>
    </MockShell>
  )
}

/** 2. Planning établissement — mini grille semaine. */
function VisualPlanning() {
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  // Motif fixe de créneaux (violet = travaillé, orange = renfort, vide = repos).
  const grid = [
    [1, 1, 0, 1, 2, 0, 0],
    [1, 0, 1, 1, 1, 2, 0],
    [2, 1, 1, 0, 1, 1, 0],
  ]
  return (
    <MockShell title="Planning établissement" icon={CalendarDays}>
      <div className="rounded-[10px] bg-gray-100 p-3">
        <div className="mb-2 grid grid-cols-7 gap-1.5">
          {days.map((d, i) => (
            <div
              key={i}
              className="text-center text-[10px] font-semibold text-gray-400"
            >
              {d}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1.5">
          {grid.map((row, ri) => (
            <div key={ri} className="grid grid-cols-7 gap-1.5">
              {row.map((cell, ci) => (
                <div
                  key={ci}
                  className={`h-6 rounded-[5px] ${
                    cell === 1
                      ? 'bg-violet-tint40'
                      : cell === 2
                        ? 'bg-orange-tint40'
                        : 'bg-white'
                  }`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 flex items-center gap-4 text-[10px] text-gray-400">
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-[3px] bg-violet-tint40" /> Travaillé
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-[3px] bg-orange-tint40" /> Renfort
        </span>
      </div>
    </MockShell>
  )
}

/** 3. Prochaines interventions & propositions. */
function VisualInterventions() {
  const rows = [
    { icon: Stethoscope, badge: 'Confirmée', tone: 'violet' as const, w: ['60%', '40%'] },
    { icon: BriefcaseMedical, badge: 'Proposée', tone: 'orange' as const, w: ['70%', '46%'] },
    { icon: Baby, badge: 'Confirmée', tone: 'violet' as const, w: ['54%', '38%'] },
  ]
  return (
    <MockShell title="Prochaines interventions" icon={CalendarDays}>
      <div className="flex flex-col gap-2.5">
        {rows.map((r, i) => {
          const Icon = r.icon
          return (
            <div
              key={i}
              className="flex items-center gap-3 rounded-[10px] bg-gray-100 p-3"
            >
              <div
                className={`flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full ${
                  r.tone === 'violet'
                    ? 'bg-violet-tint20 text-violet-500'
                    : 'bg-orange-tint20 text-orange-500'
                }`}
              >
                <Icon size={14} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-1.5">
                  <Line w={r.w[0]} strong />
                </div>
                <Line w={r.w[1]} />
              </div>
              <span
                className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold ${
                  r.tone === 'violet'
                    ? 'bg-violet-tint12 text-violet-500'
                    : 'bg-orange-tint12 text-orange-500'
                }`}
              >
                {r.badge}
              </span>
            </div>
          )
        })}
      </div>
    </MockShell>
  )
}

/** 4. Profil salarié. */
function VisualProfil() {
  const skills = ['Aide-soignant', 'Nuit', 'CDD', 'Permis B']
  return (
    <MockShell title="Profil salarié" icon={CircleUserRound}>
      <div className="rounded-[10px] bg-gray-100 p-4">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-violet-tint20 text-violet-500">
            <CircleUserRound size={22} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="mb-1.5 h-2.5 w-[55%] rounded-xs bg-skeleton-strong" />
            <div className="h-2 w-[38%] rounded-xs bg-gray-200" />
          </div>
          <span className="shrink-0 rounded-full bg-violet-tint12 px-2.5 py-1 text-[10px] font-bold text-violet-500">
            Disponible
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {skills.map((s, i) => (
            <span
              key={s}
              className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                i % 3 === 1
                  ? 'bg-orange-tint12 text-orange-500'
                  : 'bg-violet-tint12 text-violet-500'
              }`}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </MockShell>
  )
}

const VISUALS: Record<string, React.ReactNode> = {
  centraliser: <VisualDossier />,
  automatiser: <VisualPlanning />,
  simplifier: <VisualInterventions />,
  humain: <VisualProfil />,
}

export function Network() {
  const [activeId, setActiveId] = useState<string>(STEPS[0].id)

  return (
    <section id="solution" className="section-pad bg-lila-light">
      <div className="shell grid items-center gap-x-[60px] gap-y-14 lg:grid-cols-2">
        <TiltCard className="relative">
          <div
            aria-hidden="true"
            className="absolute -bottom-6 -left-5 right-7 top-6 rounded-md bg-violet-deep opacity-[0.14]"
          />

          <div className="relative min-h-[300px] rounded-md border border-gray-200 bg-white p-[22px] shadow-lg">
            {/* Chrome navigateur, cohérent avec les autres maquettes. */}
            <div className="mb-4 flex items-center gap-1.5 border-b border-hairline pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-chrome-red" />
              <span className="h-2.5 w-2.5 rounded-full bg-chrome-amber" />
              <span className="h-2.5 w-2.5 rounded-full bg-chrome-green" />
              <span className="ml-2 text-[11px] font-medium text-gray-400">
                app.sam.io
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
              >
                {VISUALS[activeId]}
              </motion.div>
            </AnimatePresence>
          </div>
        </TiltCard>

        <div>
          <h2 className="mb-3.5 text-[32px] font-extrabold leading-[1.1] text-navy-900 [text-wrap:balance] lg:text-h2">
            Gagnez du temps, valorisez l&apos;humain.
          </h2>
          <p className="mb-6 text-base leading-[1.7] text-gray-600">
            Réduisez les tâches administratives, sécurisez vos processus RH et
            redonnez du temps à ce qui compte vraiment : l&apos;humain.
          </p>

          <div className="lg:min-h-[360px]">
            <UniqueAccordion
              items={STEPS}
              collapsible={false}
              onActiveChange={(id) => id && setActiveId(id)}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
