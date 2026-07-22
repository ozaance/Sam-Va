import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
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
