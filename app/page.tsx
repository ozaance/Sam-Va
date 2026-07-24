import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PartnerMarquee } from '@/components/PartnerMarquee'
import { Features } from '@/components/Features'
import { Network } from '@/components/Network'
import { Histoire } from '@/components/Histoire'
import { MeltingPartner } from '@/components/MeltingPartner'
import { Pricing } from '@/components/Pricing'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PartnerMarquee />
        <Features />
        <Network />
        <Histoire />
        <MeltingPartner />
        <Pricing />
      </main>
      <Footer />
    </>
  )
}
