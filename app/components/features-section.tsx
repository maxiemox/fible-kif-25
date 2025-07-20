"use client"

import { Brain, Heart, BarChart3, Download, ExternalLink } from "lucide-react"

export default function FeaturesSection() {
  const handleTryFeature = () => {
    window.open("https://app--scene-symphony-706f27f3.base44.app", "_blank")
  }

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Music Suggestions",
      description:
        "Advanced AI analyzes your scenes to suggest the perfect musical elements, from genre to specific instruments that match your narrative.",
      gradient: "from-yellow-400 to-yellow-600",
    },
    {
      icon: Heart,
      title: "Scene-Based Emotion Analysis",
      description:
        "Deep emotional understanding of your content to identify the precise mood and atmosphere your music should convey.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: BarChart3,
      title: "Dashboard with History",
      description:
        "Track all your previous briefs, analyze patterns, and build a comprehensive library of your music direction projects.",
      gradient: "from-orange-400 to-red-500",
    },
    {
      icon: Download,
      title: "Downloadable PDF Briefs",
      description:
        "Export professional, industry-standard music direction briefs as PDF documents ready for your team and collaborators.",
      gradient: "from-red-400 to-pink-500",
    },
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to create professional music direction briefs that bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 group rounded-lg shadow-sm cursor-pointer"
              onClick={handleTryFeature}
            >
              <div className="flex flex-col space-y-1.5 p-6 pb-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="h-6 w-6 text-black" />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-yellow-400 transition-colors duration-300" />
                </div>
              </div>
              <div className="p-6 pt-0">
                <p className="text-gray-400 text-base leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional feature highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4 cursor-pointer group" onClick={handleTryFeature}>
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold text-black">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors">
              Lightning Fast
            </h3>
            <p className="text-gray-400">Generate comprehensive music briefs in seconds, not hours</p>
          </div>

          <div className="space-y-4 cursor-pointer group" onClick={handleTryFeature}>
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold text-black">🎯</span>
            </div>
            <h3 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors">
              Precision Accuracy
            </h3>
            <p className="text-gray-400">99% accuracy in emotional tone and musical recommendations</p>
          </div>

          <div className="space-y-4 cursor-pointer group" onClick={handleTryFeature}>
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold text-black">🔄</span>
            </div>
            <h3 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors">
              Seamless Integration
            </h3>
            <p className="text-gray-400">Works with your existing workflow and creative process</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button
            onClick={handleTryFeature}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 font-semibold text-lg px-8 py-4 rounded-md shadow-2xl transition-all group inline-flex items-center"
          >
            Experience Scene Symphony Now
            <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
