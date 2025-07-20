"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Download, FileText, Music, Brain, Clock, Zap, Volume2, LogOut, User } from "lucide-react"
import Button from "./ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card"
import { Textarea } from "./ui/Textarea"
import { generatePDF } from "../lib/pdfGenerator"

interface MusicBrief {
  primaryEmotions: string[]
  secondaryEmotions: string[]
  scenePacing: string
  dominantMood: string
  suggestedInstruments: string[]
  recommendedTempo: string
  musicStructure: string[]
  rhythmicStyle: string
  keyMusicalCues: string[]
  genreStyle: string
  soundTexture: string
  audioSpatialization: string[]
  referenceTrackSuggestions: string[]
  sceneTitle?: string
  generatedAt: string
}

interface DashboardProps {
  onLogout: () => void
}

export default function Dashboard({ onLogout }: DashboardProps) {
  const [sceneDescription, setSceneDescription] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [musicBrief, setMusicBrief] = useState<MusicBrief | null>(null)
  const [sceneTitle, setSceneTitle] = useState("")
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    // Get user info from localStorage
    const userData = localStorage.getItem("fible_user")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const handleGenerateBrief = async () => {
    if (!sceneDescription.trim()) return

    setIsGenerating(true)

    try {
      // Simulate API call - replace with actual FastAPI endpoint
      await new Promise((resolve) => setTimeout(resolve, 3000))

      // Mock response - replace with actual API response
      const mockBrief: MusicBrief = {
        primaryEmotions: ["Tension", "Anticipation", "Mystery"],
        secondaryEmotions: ["Curiosity", "Unease"],
        scenePacing: "Moderate to Fast",
        dominantMood: "Suspenseful",
        suggestedInstruments: [
          "Strings (Violins, Cellos)",
          "Piano",
          "Subtle Percussion",
          "Low Brass",
          "Electronic Pads",
        ],
        recommendedTempo: "85-95 BPM",
        musicStructure: ["Intro (8 bars)", "Build-up (16 bars)", "Climax (8 bars)", "Resolution (8 bars)"],
        rhythmicStyle: "Syncopated with irregular accents",
        keyMusicalCues: ["Entrance of character", "Discovery moment", "Revelation", "Emotional peak"],
        genreStyle: "Cinematic Thriller / Neo-Noir",
        soundTexture: "Dark, layered, with subtle dissonance",
        audioSpatialization: ["Wide stereo field", "Reverb for depth", "Panning for movement"],
        referenceTrackSuggestions: [
          "Hans Zimmer - Inception",
          "Trent Reznor - Gone Girl",
          "Clint Mansell - Black Swan",
        ],
        sceneTitle: sceneTitle || "Untitled Scene",
        generatedAt: new Date().toISOString(),
      }

      setMusicBrief(mockBrief)
    } catch (error) {
      console.error("Error generating brief:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleDownloadPDF = () => {
    if (musicBrief) {
      generatePDF(musicBrief)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("fible_user")
    onLogout()
  }

  const sampleScenes = [
    {
      title: "Thriller Scene",
      description:
        "A detective slowly opens a creaky door in an abandoned warehouse. The camera follows behind as shadows dance across broken windows. Suddenly, a figure moves in the darkness. The detective's breathing becomes heavy as footsteps echo from somewhere unseen.",
    },
    {
      title: "Romance Scene",
      description:
        "Two lovers meet on a moonlit beach. Waves gently crash against the shore as they walk hand in hand. The woman laughs softly at something he whispers. They stop and face each other, the ocean breeze moving through her hair.",
    },
    {
      title: "Action Scene",
      description:
        "Cars race through narrow city streets. Tires screech as the protagonist takes a sharp turn, barely missing pedestrians. Gunshots ring out from the pursuing vehicle. Glass shatters as bullets hit the rear window.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Header */}
      <div className="border-b border-yellow-500/20 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Fible Dashboard
              </h1>
              <p className="text-gray-400 mt-1">Transform your scenes into professional music direction briefs</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-white font-medium flex items-center">
                  <User className="mr-2 h-4 w-4 text-yellow-400" />
                  Welcome back, {user?.name || "User"}!
                </p>
                <p className="text-gray-400 text-sm">{user?.email}</p>
              </div>
              <Button
                onClick={handleLogout}
                variant="ghost"
                className="text-gray-400 hover:text-white hover:bg-red-500/10 border border-gray-600 hover:border-red-500/30"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-yellow-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-yellow-400" />
                  Scene Description
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Describe your scene in detail to generate a comprehensive music brief
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label htmlFor="sceneTitle" className="block text-sm font-medium text-gray-300 mb-2">
                    Scene Title (Optional)
                  </label>
                  <input
                    id="sceneTitle"
                    type="text"
                    value={sceneTitle}
                    onChange={(e) => setSceneTitle(e.target.value)}
                    placeholder="e.g., Opening Chase Scene"
                    className="w-full px-3 py-2 bg-black/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="sceneDescription" className="block text-sm font-medium text-gray-300 mb-2">
                    Scene Description *
                  </label>
                  <Textarea
                    id="sceneDescription"
                    value={sceneDescription}
                    onChange={(e) => setSceneDescription(e.target.value)}
                    placeholder="Describe your scene in detail... Include setting, characters, actions, emotions, and atmosphere."
                    className="min-h-[200px] bg-black/50 border-gray-600 text-white placeholder-gray-400 focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>

                <Button
                  onClick={handleGenerateBrief}
                  disabled={!sceneDescription.trim() || isGenerating}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 font-semibold py-3 group"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                      Generating Brief...
                    </>
                  ) : (
                    <>
                      Generate Music Brief
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Sample Scenes */}
            <Card className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 border-yellow-500/10">
              <CardHeader>
                <CardTitle className="text-white text-lg">Sample Scenes</CardTitle>
                <CardDescription className="text-gray-400">Try these examples to see Fible in action</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {sampleScenes.map((scene, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSceneDescription(scene.description)
                        setSceneTitle(scene.title)
                      }}
                      className="w-full text-left p-3 rounded-lg bg-black/30 hover:bg-black/50 border border-gray-700 hover:border-yellow-500/30 transition-all duration-200"
                    >
                      <div className="font-medium text-yellow-400 text-sm">{scene.title}</div>
                      <div className="text-gray-400 text-xs mt-1 line-clamp-2">{scene.description}</div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {musicBrief ? (
              <div className="space-y-4">
                {/* Header with Download */}
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white">Music Brief</h2>
                  <Button
                    onClick={handleDownloadPDF}
                    className="bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </div>

                {/* Brief Results */}
                <div className="space-y-4 max-h-[800px] overflow-y-auto pr-2">
                  {/* Emotions */}
                  <Card className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 border-purple-500/30">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-white flex items-center text-lg">
                        <Brain className="mr-2 h-5 w-5 text-purple-400" />
                        Emotions
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <h4 className="text-purple-300 font-medium mb-2">Primary Emotions</h4>
                        <div className="flex flex-wrap gap-2">
                          {musicBrief.primaryEmotions.map((emotion, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                            >
                              {emotion}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-purple-300 font-medium mb-2">Secondary Emotions</h4>
                        <div className="flex flex-wrap gap-2">
                          {musicBrief.secondaryEmotions.map((emotion, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-purple-400/10 text-purple-400 rounded-full text-sm"
                            >
                              {emotion}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Pacing & Mood */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 border-blue-500/30">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-white flex items-center text-lg">
                          <Clock className="mr-2 h-5 w-5 text-blue-400" />
                          Scene Pacing
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-blue-300 font-medium">{musicBrief.scenePacing}</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-indigo-900/20 to-indigo-800/20 border-indigo-500/30">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-white flex items-center text-lg">
                          <Zap className="mr-2 h-5 w-5 text-indigo-400" />
                          Dominant Mood
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-indigo-300 font-medium">{musicBrief.dominantMood}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Instruments & Tempo */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/20 border-yellow-500/30">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-white flex items-center text-lg">
                          <Music className="mr-2 h-5 w-5 text-yellow-400" />
                          Suggested Instruments
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-1">
                          {musicBrief.suggestedInstruments.map((instrument, index) => (
                            <li key={index} className="text-yellow-300 text-sm">
                              • {instrument}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-green-900/20 to-green-800/20 border-green-500/30">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-white flex items-center text-lg">
                          <Volume2 className="mr-2 h-5 w-5 text-green-400" />
                          Recommended Tempo
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-green-300 font-medium text-xl">{musicBrief.recommendedTempo}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Music Structure */}
                  <Card className="bg-gradient-to-br from-orange-900/20 to-orange-800/20 border-orange-500/30">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-white flex items-center text-lg">
                        <FileText className="mr-2 h-5 w-5 text-orange-400" />
                        Music Structure
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {musicBrief.musicStructure.map((structure, index) => (
                          <div key={index} className="text-orange-300 text-sm">
                            • {structure}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Additional Details */}
                  <div className="space-y-4">
                    <Card className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 border-gray-500/30">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-white text-lg">Additional Details</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="text-gray-300 font-medium mb-2">Rhythmic Style</h4>
                          <p className="text-gray-400">{musicBrief.rhythmicStyle}</p>
                        </div>

                        <div>
                          <h4 className="text-gray-300 font-medium mb-2">Genre/Style</h4>
                          <p className="text-gray-400">{musicBrief.genreStyle}</p>
                        </div>

                        <div>
                          <h4 className="text-gray-300 font-medium mb-2">Sound Texture</h4>
                          <p className="text-gray-400">{musicBrief.soundTexture}</p>
                        </div>

                        <div>
                          <h4 className="text-gray-300 font-medium mb-2">Key Musical Cues</h4>
                          <ul className="space-y-1">
                            {musicBrief.keyMusicalCues.map((cue, index) => (
                              <li key={index} className="text-gray-400 text-sm">
                                • {cue}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-gray-300 font-medium mb-2">Audio Spatialization</h4>
                          <ul className="space-y-1">
                            {musicBrief.audioSpatialization.map((spatial, index) => (
                              <li key={index} className="text-gray-400 text-sm">
                                • {spatial}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-gray-300 font-medium mb-2">Reference Track Suggestions</h4>
                          <ul className="space-y-1">
                            {musicBrief.referenceTrackSuggestions.map((track, index) => (
                              <li key={index} className="text-gray-400 text-sm">
                                • {track}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ) : (
              <Card className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 border-gray-500/20">
                <CardContent className="flex flex-col items-center justify-center py-16">
                  <Music className="h-16 w-16 text-gray-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-400 mb-2">No Brief Generated Yet</h3>
                  <p className="text-gray-500 text-center max-w-md">
                    Enter a scene description and click "Generate Music Brief" to see your AI-powered music direction
                    brief appear here.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
