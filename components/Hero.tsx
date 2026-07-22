import { CircleCheck } from 'lucide-react'
import { DashboardMockup } from './DashboardMockup'

export function Hero() {
  return (
    <section className="bg-hero-glow py-[64px] lg:pb-[72px] lg:pt-[84px]">
      <div className="shell grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <span className="mb-[22px] inline-block rounded-full bg-teal-tint14 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-teal-500">
            Écosystème RH collaboratif &amp; réseau de territoire
          </span>

          <h1 className="mb-[22px] text-[40px] font-extrabold leading-[1.06] text-navy-900 [text-wrap:balance] lg:text-display">
            L&apos;agilité RH au service du{' '}
            <span className="text-teal-500">collectif</span>.
          </h1>

          <p className="mb-8 max-w-[500px] text-[18px] leading-[1.7] text-gray-600">
            SAM&apos;va (Solution d&apos;Accompagnement Mutualisé) centralise
            les opportunités locales, automatise vos plannings et réunit une
            véritable communauté de professionnels engagés.
          </p>

          <div className="flex flex-wrap items-center gap-3.5">
            <a
              href="#contact"
              className="rounded-sm bg-teal-500 px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-teal-400"
            >
              Démo Établissement
            </a>
            <a
              href="#reseau"
              className="rounded-sm border-[1.5px] border-fuchsia-500 px-[26px] py-[13px] text-[15px] font-semibold text-fuchsia-500 transition-colors hover:bg-fuchsia-100"
            >
              Rejoindre la Communauté
            </a>
          </div>

          <p className="mt-4 flex items-center gap-1.5 text-[13px] text-gray-400">
            <CircleCheck size={14} className="shrink-0 text-teal-500" />
            Présentation en ligne personnalisée
          </p>
        </div>

        <DashboardMockup />
      </div>
    </section>
  )
}
