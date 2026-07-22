'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Dérivé de `card-7` (InteractiveProductCard), réduit à son mécanisme utile :
 * l'inclinaison 3D au survol. La coquille e-commerce (photo plein cadre, tag
 * de prix, points de pagination) n'avait pas d'équivalent ici et a été
 * abandonnée — ce composant enveloppe n'importe quel contenu.
 *
 * Trois écarts par rapport à l'original, tous délibérés :
 *
 * 1. L'original écrivait la transformation via `useState` à chaque `mousemove`,
 *    soit ~60 rendus React par seconde pendant le survol — ici cela
 *    re-rendrait tout le panneau d'onglets animé. On écrit directement dans le
 *    DOM par une ref : aucun rendu.
 *
 * 2. L'original s'appuyait sur la classe `transform-style-3d`, qui n'existe
 *    pas en Tailwind 3 (elle est arrivée en v4 sous le nom `transform-3d`).
 *    `preserve-3d` est donc posé en style inline, sinon la profondeur est
 *    silencieusement ignorée.
 *
 * 3. Ajout du respect de `prefers-reduced-motion`, absent de l'original.
 */
interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  /** Inclinaison maximale en degrés, sur chaque axe. */
  maxTilt?: number
  /** Agrandissement au survol. L'original était à 1,05 — trop marqué pour une
   *  carte large, qui empiétait alors sur la colonne voisine. */
  hoverScale?: number
}

export function TiltCard({
  children,
  className,
  maxTilt = 8,
  hoverScale = 1.02,
  ...props
}: TiltCardProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const reducedMotion = React.useRef(false)

  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => {
      reducedMotion.current = mq.matches
    }
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const node = ref.current
    if (!node || reducedMotion.current) return

    const { left, top, width, height } = node.getBoundingClientRect()
    const rotateX = ((e.clientY - top - height / 2) / (height / 2)) * -maxTilt
    const rotateY = ((e.clientX - left - width / 2) / (width / 2)) * maxTilt

    node.style.transition = 'transform 0.1s ease-out'
    node.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${hoverScale}, ${hoverScale}, ${hoverScale})`
  }

  const handleMouseLeave = () => {
    const node = ref.current
    if (!node) return
    node.style.transition = 'transform 0.4s ease-in-out'
    node.style.transform =
      'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d' }}
      className={cn('will-change-transform', className)}
      {...props}
    >
      {children}
    </div>
  )
}
