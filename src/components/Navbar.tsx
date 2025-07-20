"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Button from "./ui/Button"

interface NavbarProps {
  onGetStarted?: () => void
  onSignIn?: () => void
}

export default function Navbar({ onGetStarted, onSignIn }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Fible
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-white hover:text-yellow-400 transition-colors duration-200">
                Home
              </a>
              <a href="#about" className="text-white hover:text-yellow-400 transition-colors duration-200">
                About
              </a>
              <a href="#features" className="text-white hover:text-yellow-400 transition-colors duration-200">
                Features
              </a>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={onSignIn}
              variant="ghost"
              className="text-white hover:text-yellow-400 hover:bg-yellow-400/10"
            >
              Sign In
            </Button>
            <Button
              onClick={onGetStarted}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 font-semibold"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-yellow-400 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-sm">
              <a
                href="#home"
                className="block px-3 py-2 text-white hover:text-yellow-400 transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-white hover:text-yellow-400 transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#features"
                className="block px-3 py-2 text-white hover:text-yellow-400 transition-colors duration-200"
              >
                Features
              </a>
              <div className="pt-4 pb-3 border-t border-yellow-500/20">
                <div className="flex flex-col space-y-2">
                  <Button
                    onClick={onSignIn}
                    variant="ghost"
                    className="text-white hover:text-yellow-400 hover:bg-yellow-400/10 justify-start"
                  >
                    Sign In
                  </Button>
                  <Button
                    onClick={onGetStarted}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 font-semibold"
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
