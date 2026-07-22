import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-dm-sans',
  display: 'swap',
})

/**
 * Base absolue des métadonnées : sans elle, les URL Open Graph restent
 * relatives et les aperçus de partage (LinkedIn, Slack, WhatsApp) cassent.
 * Renseigner NEXT_PUBLIC_SITE_URL dans Vercel une fois le domaine définitif
 * connu ; à défaut on retombe sur l'URL de production fournie par Vercel.
 */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  /**
   * Icône servie depuis public/ et déclarée ici, plutôt que via la convention
   * app/icon.svg. Le chargeur de métadonnées de Next.js interpole le chemin du
   * fichier dans une chaîne JS sans échapper les apostrophes : le dossier
   * « Sam'Va » génère alors du code invalide et casse le build en local.
   * Voir le rapport de session. Ne pas remettre l'icône dans app/.
   */
  icons: { icon: '/icon.svg' },
  title: "SAM'va — L'agilité RH au service du collectif",
  description:
    "SAM'va (Solution d'Accompagnement Mutualisé) centralise les opportunités locales, automatise vos plannings et réunit une véritable communauté de professionnels engagés.",
  openGraph: {
    title: "SAM'va — L'agilité RH au service du collectif",
    description:
      "Écosystème RH collaboratif & réseau de territoire pour les établissements médico-sociaux et leur communauté de professionnels.",
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={dmSans.variable}>
      <body>{children}</body>
    </html>
  )
}
