import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Tokenomics from '@/components/Tokenomics'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Tokenomics />
      <Footer />
    </main>
  )
}