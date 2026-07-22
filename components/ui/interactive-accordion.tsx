'use client'

import { useState } from 'react'
// Voir animated-tabs.tsx : `motion/react`, pas `framer-motion`.
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'

export interface AccordionItem {
  id: string
  number: string
  title: string
  content: string
}

/**
 * L'original s'appuyait sur les tokens shadcn (`var(--foreground)`,
 * `bg-border`, `text-muted-foreground`) absents de ce projet : les couleurs
 * seraient tombées en `transparent`. Elles sont ici résolues sur la palette
 * SAM'va. Les animations sont inchangées.
 */
/**
 * Deux écarts par rapport à l'original, tous deux constatés au rendu :
 *
 * 1. Les couleurs passent par des classes Tailwind + `transition-colors`, pas
 *    par `animate={{ color }}`. Motion n'écrivait jamais la propriété (seul
 *    `transform` apparaissait dans le style inline), donc les titres restaient
 *    à la couleur héritée. Motion ne gère plus que les transformations.
 *
 * 2. Les items repliés étaient en `muted-foreground`. Sur le fond #F7F8FA de
 *    la section, #9AA0B4 tombe à 2,5:1 — sous le seuil WCAG AA de 3:1 en gros
 *    texte : deux arguments sur trois passaient pour désactivés. `navy-700`
 *    tient 10,8:1. L'état actif reste porté par la pastille teal, le
 *    soulignement et la rotation de l'icône.
 */

export function UniqueAccordion({
  items,
  defaultOpenId,
  className,
}: {
  items: AccordionItem[]
  defaultOpenId?: string | null
  className?: string
}) {
  const [activeId, setActiveId] = useState<string | null>(
    defaultOpenId === undefined ? (items[0]?.id ?? null) : defaultOpenId,
  )
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className={cn('w-full', className)}>
      {items.map((item) => {
        const isActive = activeId === item.id
        const isHovered = hoveredId === item.id

        return (
          <div key={item.id}>
            <motion.button
              type="button"
              onClick={() => setActiveId(isActive ? null : item.id)}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              aria-expanded={isActive}
              aria-controls={`acc-${item.id}`}
              className="group relative w-full outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              initial={false}
            >
              <div className="flex items-center gap-5 px-1 py-5">
                <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-teal-500"
                    initial={false}
                    animate={{
                      scale: isActive ? 1 : isHovered ? 0.85 : 0,
                      opacity: isActive ? 1 : isHovered ? 0.12 : 0,
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  />
                  <span
                    className={cn(
                      'relative z-10 text-[13px] font-semibold tracking-wide transition-colors duration-200',
                      isActive ? 'text-white' : 'text-gray-600',
                    )}
                  >
                    {item.number}
                  </span>
                </div>

                <motion.h3
                  className={cn(
                    'text-left text-[19px] font-bold tracking-[-0.02em] transition-colors duration-200',
                    isActive || isHovered ? 'text-navy-900' : 'text-navy-700',
                  )}
                  animate={{ x: isActive || isHovered ? 4 : 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                >
                  {item.title}
                </motion.h3>

                <div className="ml-auto flex items-center">
                  <motion.div
                    className="flex h-8 w-8 items-center justify-center"
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <motion.svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                      className={cn(
                        'transition-colors duration-200',
                        isActive ? 'text-teal-500' : 'text-navy-900',
                      )}
                      animate={{ opacity: isActive || isHovered ? 1 : 0.4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path
                        d="M8 1V15M1 8H15"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </motion.svg>
                  </motion.div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200" />
              <motion.div
                className="absolute bottom-0 left-0 h-px origin-left bg-teal-500"
                style={{ width: '100%' }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isActive ? 1 : isHovered ? 0.3 : 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            </motion.button>

            <AnimatePresence mode="wait">
              {isActive && (
                <motion.div
                  id={`acc-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: 'auto',
                    opacity: 1,
                    transition: {
                      height: { type: 'spring', stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2, delay: 0.1 },
                    },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { type: 'spring', stiffness: 300, damping: 30 },
                      opacity: { duration: 0.1 },
                    },
                  }}
                  className="overflow-hidden"
                >
                  <motion.p
                    className="py-5 pl-[60px] pr-10 text-sm leading-[1.7] text-gray-600"
                    initial={{ y: -10 }}
                    animate={{ y: 0 }}
                    exit={{ y: -10 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  >
                    {item.content}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
