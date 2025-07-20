import Navbar from "./components/navbar"
import HeroSection from "./components/hero-section"
import AboutSection from "./components/about-section"
import FeaturesSection from "./components/features-section"
import Footer from "./components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  )
}
