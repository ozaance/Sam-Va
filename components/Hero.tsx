import { CalendarDays, Check, CircleCheck } from 'lucide-react'
import { DashboardMockup } from './DashboardMockup'

/** Arguments fournis par le client. Un bénéfice par ligne, verbe d'action. */
const BENEFITS = [
  'Identifiez rapidement les compétences disponibles.',
  'Recrutez, contractualisez et déclarez en quelques clics.',
  'Développez un réseau de professionnels mobilisables pour garantir la continuité de service.',
  'Planifiez efficacement vos ressources dans le respect de vos obligations RH.',
  'Automatisez vos démarches administratives et réduisez les tâches chronophages.',
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-[56px] lg:pb-[72px] lg:pt-[80px]">
      {/* Formes organiques de fond, aux teintes de la charte SAM. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Deux formes fraîches (lila / violet) équilibrées par une forme
            chaude (crème) pour réchauffer la palette sans la surcharger. */}
        <div
          className="absolute -left-40 top-10 h-[420px] w-[420px] bg-lila-light"
          style={{ borderRadius: '60% 40% 45% 55% / 55% 50% 50% 45%' }}
        />
        <div
          className="absolute -right-32 -top-24 h-[380px] w-[380px] bg-violet-tint12/60"
          style={{ borderRadius: '45% 55% 60% 40% / 50% 45% 55% 50%' }}
        />
        <div
          className="absolute -bottom-48 -left-24 h-[340px] w-[520px] bg-cream/60"
          style={{ borderRadius: '55% 45% 40% 60% / 45% 55% 45% 55%' }}
        />
      </div>

      <div className="relative">
        <div className="shell grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          <div>
            <h1 className="mb-7 text-[34px] font-extrabold leading-[1.1] text-navy-900 [text-wrap:balance] lg:text-[48px]">
              SAM s&apos;occupe de tout,{' '}
              <span className="text-violet-500">vous vous occupez d&apos;eux</span>.
            </h1>

            <ul className="mb-9 flex list-none flex-col gap-3.5 p-0">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-md bg-violet-tint14 text-violet-500">
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
                className="inline-flex items-center gap-2 rounded-sm bg-violet-500 px-6 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-violet-500/25 transition-all hover:-translate-y-0.5 hover:bg-violet-400 hover:shadow-xl hover:shadow-violet-500/30"
              >
                <CalendarDays size={17} />
                Planifier une démo
              </a>
              <a
                href="#solution"
                className="rounded-sm border-[1.5px] border-violet-500 px-5 py-[13px] text-[15px] font-semibold text-violet-500 transition-colors hover:bg-violet-50"
              >
                Créer mon profil professionnel
              </a>
            </div>

            <p className="mt-5 flex items-center gap-1.5 text-[13px] text-gray-400">
              <CircleCheck size={14} className="shrink-0 text-violet-500" />
              Présentation en ligne personnalisée
            </p>
          </div>

          <DashboardMockup />
        </div>
      </div>
    </section>
  )
}
