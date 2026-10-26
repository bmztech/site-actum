import { Eligibility } from './components/Eligibility'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { IntervalSection } from './components/IntervalSection'
import { Security } from './components/Security'
import { Services } from './components/Services'
import { StickyCta } from './components/StickyCta'
import { useRevealOnScroll } from './hooks/useRevealOnScroll'

export default function App() {
  useRevealOnScroll()

  return (
    <>
      <Header />
      <Hero />
      <IntervalSection />
      <HowItWorks />
      <Services />
      <Security />
      <Eligibility />
      <Footer />
      <StickyCta />
    </>
  )
}
