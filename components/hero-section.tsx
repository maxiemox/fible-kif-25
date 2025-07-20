import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source
            src="/placeholder.mp4?height=1080&width=1920&query=cinematic+dark+abstract+golden+particles+floating+in+black+space"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/40" />

      {/* Golden accent elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-yellow-600/10 rounded-full blur-2xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-2xl">
              Fible
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Transform Your Scenes Into Music Direction Briefs
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
            Harness the power of AI to analyze your scenes and generate professional music direction briefs that capture
            the perfect emotional tone for your project.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 font-semibold text-lg px-8 py-4 group shadow-2xl"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
            <div className="text-center bg-black/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 drop-shadow-lg">10K+</div>
              <div className="text-gray-200 mt-2">Scenes Analyzed</div>
            </div>
            <div className="text-center bg-black/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 drop-shadow-lg">500+</div>
              <div className="text-gray-200 mt-2">Happy Creators</div>
            </div>
            <div className="text-center bg-black/20 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 drop-shadow-lg">99%</div>
              <div className="text-gray-200 mt-2">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
