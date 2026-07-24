import { PieChart } from 'lucide-react'

const METRICS = [
  { value: '128', label: 'Offres actives', tone: 'text-orange-500', bg: 'bg-cream/50' },
  { value: '94%', label: 'Couverture', tone: 'text-violet-500', bg: 'bg-gray-100' },
  { value: '312', label: 'Profils', tone: 'text-navy-900', bg: 'bg-gray-100' },
]

/** Bar heights and tints are fixed values from the design file, not data.
 *  Une barre chaude (orange) ponctue la série violette. */
const BARS = [
  { height: '48%', fill: 'bg-violet-tint30' },
  { height: '70%', fill: 'bg-violet-tint55' },
  { height: '40%', fill: 'bg-orange-tint40' },
  { height: '88%', fill: 'bg-violet-500' },
  { height: '60%', fill: 'bg-violet-tint45' },
  { height: '78%', fill: 'bg-violet-tint55' },
]

const SIDEBAR_ROWS = [
  { width: '80%', fill: 'bg-violet-tint22' },
  { width: '62%', fill: 'bg-skeleton' },
  { width: '70%', fill: 'bg-skeleton' },
  { width: '55%', fill: 'bg-skeleton' },
  { width: '66%', fill: 'bg-skeleton' },
]

export function DashboardMockup() {
  return (
    <div className="relative" aria-hidden="true">
      {/* Offset tinted plate behind the browser card. */}
      <div className="absolute -bottom-[22px] -right-[18px] left-7 top-[22px] rounded-md bg-violet-deep opacity-[0.14]" />

      <div className="relative overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg">
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 border-b border-hairline bg-surface px-[18px] py-[14px]">
          <span className="h-[11px] w-[11px] rounded-full bg-chrome-red" />
          <span className="h-[11px] w-[11px] rounded-full bg-chrome-amber" />
          <span className="h-[11px] w-[11px] rounded-full bg-chrome-green" />
          <span className="ml-2.5 text-xs font-medium text-gray-400">
            app.sam.io
          </span>
        </div>

        <div className="grid min-h-[300px] grid-cols-[108px_1fr]">
          {/* Sidebar */}
          <div className="flex flex-col gap-3 border-r border-hairline bg-violet-tint7 px-[14px] py-[18px]">
            <div className="text-xs font-extrabold text-violet-500">SAM</div>
            {SIDEBAR_ROWS.map((row, i) => (
              <div
                key={i}
                className={`h-[9px] rounded-xs ${row.fill}`}
                style={{ width: row.width }}
              />
            ))}
          </div>

          {/* Main panel */}
          <div className="p-[18px]">
            <div className="mb-[14px] flex items-center gap-1.5 text-[13px] font-bold text-navy-900">
              <PieChart size={13} className="text-violet-500" />
              Vue d&apos;ensemble du réseau
            </div>

            <div className="mb-4 grid grid-cols-3 gap-2.5">
              {METRICS.map((metric) => (
                <div key={metric.label} className={`rounded-[10px] p-2.5 ${metric.bg}`}>
                  <div className={`text-[17px] font-extrabold ${metric.tone}`}>
                    {metric.value}
                  </div>
                  <div className="text-[10px] text-gray-400">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="flex h-[92px] items-end gap-2 rounded-[10px] bg-gray-100 p-3">
              {BARS.map((bar, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-xs ${bar.fill}`}
                  style={{ height: bar.height }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
