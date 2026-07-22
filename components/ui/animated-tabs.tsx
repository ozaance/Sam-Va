'use client'

import React, { useState } from 'react'
// `motion/react` et non `framer-motion` : même bibliothèque, nouveau nom de
// paquet. En installer un second embarquerait une copie en double et casserait
// les animations partagées par layoutId (contextes LayoutGroup distincts).
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

export interface Tab {
  id: string
  label: string
  content: React.ReactNode
}

interface AnimatedTabsProps {
  tabs: Tab[]
  defaultTab?: string
  className?: string
  /** Hauteur mini du panneau, pour éviter un saut de mise en page au changement. */
  minContentHeight?: number
}

/**
 * Version claire du composant : l'original était pensé pour un fond sombre
 * (glassmorphism `#11111198`, texte blanc), illisible sur les surfaces
 * SAM'va. L'API et les animations (pastille `layoutId`, entrée en flou) sont
 * conservées telles quelles.
 */
export function AnimatedTabs({
  tabs,
  defaultTab,
  className,
  minContentHeight = 188,
}: AnimatedTabsProps) {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs[0]?.id)

  if (!tabs?.length) return null

  return (
    <div className={cn('flex w-full flex-col gap-3', className)}>
      <div
        role="tablist"
        aria-label="Vues de la mise en relation"
        className="flex flex-wrap gap-1 rounded-[10px] bg-gray-100 p-1"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                // 44px de haut au doigt (recommandation Apple HIG / WCAG 2.5.8),
                // ramené à la compacité d'origine dès le pointeur fin.
                'relative inline-flex min-h-[44px] items-center justify-center rounded-sm px-3.5 text-[13px] font-semibold outline-none transition-colors',
                'sm:min-h-0 sm:px-3 sm:py-1.5 sm:text-[12px]',
                'focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-1',
                isActive ? 'text-teal-500' : 'text-gray-600 hover:text-navy-900',
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="samva-active-tab"
                  className="absolute inset-0 rounded-sm bg-white shadow-xs"
                  transition={{ type: 'spring', duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          )
        })}
      </div>

      <div style={{ minHeight: minContentHeight }}>
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <motion.div
                key={tab.id}
                id={`panel-${tab.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${tab.id}`}
                initial={{ opacity: 0, scale: 0.98, x: -8, filter: 'blur(8px)' }}
                animate={{ opacity: 1, scale: 1, x: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.4, ease: 'circInOut' }}
              >
                {tab.content}
              </motion.div>
            ),
        )}
      </div>
    </div>
  )
}
