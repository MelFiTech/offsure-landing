import HeroSection from '@/app/components/HeroSection'
import FeaturesSection from '@/app/components/FeaturesSection'
import Header from '@/app/components/Header'
import WhyChooseUs from '@/app/components/WhyChooseUs'
import Solutions from '@/app/components/Solutions'
import Projects from '@/app/components/Projects'
import Work from '@/app/components/Work'
import Value from '@/app/components/Value'
import Testimonial from '@/app/components/Testimonial'
import Process from '@/app/components/Process'
import Startups from '@/app/components/Startups'
import Venture from '@/app/components/Venture'
import Portfolio from '@/app/components/Portfolio'
import Form from '@/app/components/Form'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Header />
      <HeroSection />
      <WhyChooseUs />
      <FeaturesSection />
      <Solutions />
      <Projects />
      <Work />
      <Value />
      <Testimonial />
      <Process />
      <Startups />
      <Venture />
      <Portfolio />
      <Form />
      <Footer />
    </main>
  )
}