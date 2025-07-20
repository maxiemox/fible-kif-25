import { Brain, Heart, BarChart3, Download } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturesSection() {
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
            <Card
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 group"
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="h-6 w-6 text-black" />
                </div>
                <CardTitle className="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional feature highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-black">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-white">Lightning Fast</h3>
            <p className="text-gray-400">Generate comprehensive music briefs in seconds, not hours</p>
          </div>

          <div className="space-y-4">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-black">🎯</span>
            </div>
            <h3 className="text-xl font-semibold text-white">Precision Accuracy</h3>
            <p className="text-gray-400">99% accuracy in emotional tone and musical recommendations</p>
          </div>

          <div className="space-y-4">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-black">🔄</span>
            </div>
            <h3 className="text-xl font-semibold text-white">Seamless Integration</h3>
            <p className="text-gray-400">Works with your existing workflow and creative process</p>
          </div>
        </div>
      </div>
    </section>
  )
}
