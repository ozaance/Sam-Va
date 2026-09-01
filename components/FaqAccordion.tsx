'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export type FaqItem = { question: string; answer: string }

/**
 * Accordéon FAQ dédié, à la charte SAM (violet primaire, lila, DM Sans).
 * Composant distinct de UniqueAccordion (conçu pour des « étapes » numérotées).
 *
 * Les réponses restent TOUJOURS dans le DOM (repliées via grid-rows 0fr→1fr,
 * jamais démontées) : indispensable pour le référencement, puisque le contenu
 * doit être présent dans le HTML rendu côté serveur. Plusieurs questions
 * peuvent être ouvertes indépendamment.
 */
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<Set<number>>(new Set())

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = open.has(i)
        return (
          <div
            key={i}
            className={`overflow-hidden rounded-md border bg-white transition-colors ${
              isOpen ? 'border-violet-500/40' : 'border-gray-200 hover:border-violet-500/30'
            }`}
          >
            <h3 className="m-0">
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-trigger-${i}`}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              >
                <span className="text-[16px] font-bold text-navy-900">
                  {item.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-violet-500 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </h3>

            {/* grid-rows 0fr → 1fr : réponse toujours présente, repliée sans démontage. */}
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-trigger-${i}`}
              aria-hidden={!isOpen}
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-[15px] leading-[1.7] text-gray-600">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
