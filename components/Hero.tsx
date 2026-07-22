import { CalendarDays, Check, CircleCheck } from 'lucide-react'
import { DashboardMockup } from './DashboardMockup'

/**
 * Positionnement logiciel RH, pas coopérative. Chaque bénéfice reste adossé à
 * une fonctionnalité réelle du produit : automatisation administrative,
 * plannings et conformité, tableaux de bord, CVthèque et contrats/DPAE.
 * Aucune promesse de service non fournie (accompagnement, conseil RH).
 */
const BENEFITS = [
  'Déchargez vos équipes RH de la saisie répétitive',
  'Fluidifiez vos process RH essentiels, sans complexité',
  'Pilotez vos effectifs et vos budgets en temps réel',
  'Recrutez, contractualisez et déclarez en quelques clics',
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-[56px] lg:pb-[72px] lg:pt-[80px]">
      {/* Formes organiques en fond. Teintes de la marque plutôt que le crème
          d'Eurécia, pour rester dans la palette SAM'va. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-40 top-10 h-[420px] w-[420px] bg-teal-50"
          style={{ borderRadius: '60% 40% 45% 55% / 55% 50% 50% 45%' }}
        />
        <div
          className="absolute -right-32 -top-24 h-[380px] w-[380px] bg-fuchsia-100/50"
          style={{ borderRadius: '45% 55% 60% 40% / 50% 45% 55% 50%' }}
        />
        {/* Ancrée en bas à gauche et largement hors cadre : centrée, son arc
            remontait au milieu du hero et se lisait comme un cercle égaré. */}
        <div
          className="absolute -bottom-48 -left-24 h-[340px] w-[520px] bg-teal-tint12/50"
          style={{ borderRadius: '55% 45% 40% 60% / 45% 55% 45% 55%' }}
        />
      </div>

      <div className="relative">
        <div className="shell grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          <div>
            <h1 className="mb-7 text-[38px] font-extrabold leading-[1.08] text-navy-900 [text-wrap:balance] lg:text-[52px]">
              L&apos;agilité RH au service de{' '}
              <span className="text-teal-500">vos équipes</span>.
            </h1>

            {/* Liste d'arguments : c'est le vrai apport de la référence, elle
                donne quatre raisons lisibles au lieu d'un paragraphe. */}
            <ul className="mb-9 flex list-none flex-col gap-3.5 p-0">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-md bg-teal-tint14 text-teal-500">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span className="text-[15px] leading-[1.55] text-gray-600">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:contact@samva.io"
                className="inline-flex items-center gap-2 rounded-sm bg-teal-500 px-6 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-teal-500/25 transition-all hover:-translate-y-0.5 hover:bg-teal-400 hover:shadow-xl hover:shadow-teal-500/30"
              >
                <CalendarDays size={17} />
                Planifier une démo
              </a>
              <a
                href="#reseau"
                className="rounded-sm border-[1.5px] border-fuchsia-500 px-5 py-[13px] text-[15px] font-semibold text-fuchsia-500 transition-colors hover:bg-fuchsia-100"
              >
                Créer mon profil professionnel
              </a>
            </div>

            {/* Emplacement de la note Trustpilot chez Eurécia. On n'a pas de
                note tierce à afficher : ligne de réassurance à la place. */}
            <p className="mt-5 flex items-center gap-1.5 text-[13px] text-gray-400">
              <CircleCheck size={14} className="shrink-0 text-teal-500" />
              Présentation en ligne personnalisée
            </p>
          </div>

          <DashboardMockup />
        </div>
      </div>
    </section>
  )
}
