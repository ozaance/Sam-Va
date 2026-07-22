'use client'

import { useCallback, useState } from 'react'
import { ScrollVelocityRow } from '@/components/ui/scroll-velocity-text'

type Partner = {
  /** Nom de l'organisation — sert d'alt text et de repli si le fichier manque. */
  name: string
  /** Fichier dans public/logos/. */
  src: string
  /**
   * Correction optique, en multiple de la hauteur de base (44px).
   * Un logo quasi carré et dense paraît plus lourd qu'un logo large à hauteur
   * égale : on le réduit un peu pour équilibrer la rangée.
   */
  scale?: number
  /**
   * Le fichier source a un fond opaque au lieu d'être détouré. On l'encadre
   * alors en pastille pour que ça se lise comme un choix et non comme un bug.
   */
  boxed?: boolean
}


const PARTNERS: Partner[] = [
  { name: 'Melting', src: '/logos/melting.webp' },
  // Marges blanches incluses dans le fichier : paraît petit à hauteur nominale.
  { name: 'APEAI Ouest Hérault', src: '/logos/apeai-ouest-herault.png', scale: 1.2 },
  { name: 'ARSEAA — action solidaire', src: '/logos/arseaa.png' },
  { name: 'Croix-Rouge française', src: '/logos/croix-rouge-francaise.png' },
  { name: 'Les PEP 34', src: '/logos/pep34.png' },
  // Source basse définition (325x195) et fond non détouré : voir README.
  { name: 'GEM Gambetta Montpellier', src: '/logos/gem-gambetta.jpg', scale: 1.15, boxed: true },
  // Blanc sur aplat bleu : encadré en pastille, faute de version détourée.
  { name: 'MonSauveteur', src: '/logos/mon-sauveteur.png', scale: 0.9, boxed: true },
]

/**
 * Trois états plutôt que deux. Avec un simple booléen `failed`, chaque copie
 * dupliquée par le marquee monte un <img> neuf qui affiche l'icône d'image
 * cassée le temps d'échouer. Ici l'image reste masquée tant qu'elle n'a pas
 * abouti : on passe directement du nom en texte au logo, sans état cassé.
 */
function PartnerLogo({ partner }: { partner: Partner }) {
  const [status, setStatus] = useState<'pending' | 'ok' | 'failed'>('pending')

  /**
   * Le marquee duplique ses enfants : les copies montées après coup trouvent
   * l'image déjà en cache, `load` se déclenche donc AVANT que React n'attache
   * `onLoad` et l'état restait bloqué sur `pending` — une copie sur trois
   * affichait le nom en texte au lieu du logo. On relit `complete` au montage.
   */
  const settleFromCache = useCallback((node: HTMLImageElement | null) => {
    if (node?.complete) {
      setStatus(node.naturalWidth > 0 ? 'ok' : 'failed')
    }
  }, [])

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element -- ratios variables, normalisés par la hauteur */}
      <img
        ref={settleFromCache}
        src={partner.src}
        alt={partner.name}
        onLoad={() => setStatus('ok')}
        onError={() => setStatus('failed')}
        // Pas de loading="lazy" : la rangée mesure sa largeur à partir des
        // logos. Chargés paresseusement ils valent 0px et le marquee se
        // duplique mal. Un <img> en display:none charge quand même.
        decoding="async"
        // La hauteur vient de --logo-h, posée sur la section et réduite en
        // mobile : à 44px, un loge faisait 141px de large sur un écran de
        // 390px et deux logos saturaient la rangée.
        style={
          status === 'ok'
            ? { height: `calc(var(--logo-h) * ${partner.scale ?? 1})` }
            : undefined
        }
        className={
          status === 'ok'
            ? `mx-6 w-auto max-w-[160px] shrink-0 object-contain sm:mx-9 sm:max-w-[220px]${
                partner.boxed ? ' rounded-sm' : ''
              }`
            : 'hidden'
        }
      />
      {status !== 'ok' && (
        <span
          aria-hidden={status === 'pending'}
          className="mx-6 shrink-0 whitespace-nowrap text-[17px] font-bold tracking-[-0.02em] text-gray-600 sm:mx-9 sm:text-[22px]"
        >
          {partner.name}
        </span>
      )}
    </>
  )
}

export function PartnerMarquee() {
  return (
    <section className="overflow-hidden bg-white py-11 [--logo-h:32px] sm:[--logo-h:44px]">
      <div className="shell">
        <p className="mb-8 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-400">
          Ils construisent le réseau avec nous
        </p>
      </div>

      {/* Fondu sur les bords pour éviter la coupe nette en bord de viewport. */}
      <div className="[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <ScrollVelocityRow baseVelocity={2} direction={-1}>
          {PARTNERS.map((partner) => (
            <PartnerLogo key={partner.name} partner={partner} />
          ))}
        </ScrollVelocityRow>
      </div>
    </section>
  )
}
