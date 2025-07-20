"use client"

import { Music, Brain, FileText, ExternalLink } from "lucide-react"

export default function AboutSection() {
  const handleTryApp = () => {
    window.open("https://app--scene-symphony-706f27f3.base44.app", "_blank")
  }

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Fible</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Fible revolutionizes the way filmmakers, content creators, and music supervisors approach music direction.
            Our AI-powered platform analyzes your scenes and generates comprehensive music briefs that capture the
            perfect emotional essence for your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <Brain className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">AI-Powered Analysis</h3>
                <p className="text-gray-400">
                  Our advanced AI understands the emotional nuances of your scenes, analyzing dialogue, action, and
                  context to suggest the perfect musical direction.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <Music className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Professional Briefs</h3>
                <p className="text-gray-400">
                  Generate industry-standard music direction briefs that include tempo, instruments, emotions, pacing,
                  and structural recommendations.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <FileText className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Instant Export</h3>
                <p className="text-gray-400">
                  Download your music briefs as professional PDF documents ready to share with composers, music
                  supervisors, and your creative team.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={handleTryApp}
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 font-semibold px-6 py-3 rounded-md transition-all group inline-flex items-center"
              >
                Try Scene Symphony
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-yellow-500/20 cursor-pointer hover:border-yellow-500/40 transition-all duration-300 group"
              onClick={handleTryApp}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-yellow-400 font-semibold">Scene Analysis</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-yellow-400 transition-colors" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-black/50 rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-2">Detected Emotions</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-sm">Tension</span>
                      <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-sm">Mystery</span>
                      <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-sm">
                        Anticipation
                      </span>
                    </div>
                  </div>

                  <div className="bg-black/50 rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-2">Recommended Tempo</div>
                    <div className="text-2xl font-bold text-white">85-95 BPM</div>
                  </div>

                  <div className="bg-black/50 rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-2">Key Instruments</div>
                    <div className="text-white">Strings, Piano, Subtle Percussion</div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <span className="text-yellow-400 text-sm font-medium group-hover:text-yellow-300 transition-colors">
                    Click to explore in Scene Symphony →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
