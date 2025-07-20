"use client"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="border-b border-yellow-500/20 bg-black/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Fible Dashboard
            </h1>
            <button
              onClick={() => (window.location.href = "/")}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>

      {/* Embedded Scene Symphony App */}
      <div className="w-full h-[calc(100vh-80px)]">
        <iframe
          src="https://app--scene-symphony-c9f80f68.base44.app"
          className="w-full h-full border-0"
          title="Scene Symphony Dashboard"
          allow="camera; microphone; fullscreen"
        />
      </div>
    </div>
  )
}
