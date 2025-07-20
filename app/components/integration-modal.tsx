"use client"
import { X } from "lucide-react"

interface IntegrationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function IntegrationModal({ isOpen, onClose }: IntegrationModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-6xl h-[90vh] mx-4 bg-gray-900 rounded-lg border border-yellow-500/20 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-yellow-500/20">
          <h2 className="text-xl font-bold text-white">Scene Symphony Dashboard</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Embedded App */}
        <iframe
          src="https://app--scene-symphony-c9f80f68.base44.app"
          className="w-full h-[calc(100%-60px)] border-0"
          title="Scene Symphony App"
          allow="camera; microphone; fullscreen"
        />
      </div>
    </div>
  )
}
