"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, Eye, EyeOff, Mail, Lock, User } from "lucide-react"
import Button from "./ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card"

interface AuthPageProps {
  mode: "signin" | "signup"
  onAuthSuccess: () => void
  onSwitchMode: (mode: "signin" | "signup") => void
  onBackToHome: () => void
}

export default function AuthPage({ mode, onAuthSuccess, onSwitchMode, onBackToHome }: AuthPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (mode === "signup" && !formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    if (mode === "signup") {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password"
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    try {
      // Simulate API call - replace with actual authentication
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Mock successful authentication
      localStorage.setItem(
        "fible_user",
        JSON.stringify({
          name: formData.name || "User",
          email: formData.email,
          authenticated: true,
          loginTime: new Date().toISOString(),
        }),
      )

      onAuthSuccess()
    } catch (error) {
      console.error("Authentication error:", error)
      setErrors({ general: "Authentication failed. Please try again." })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-30">
          <source
            src="/placeholder.mp4?height=1080&width=1920&query=cinematic+dark+abstract+golden+particles+floating+in+black+space"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Golden accent elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-yellow-600/10 rounded-full blur-2xl" />

      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <button
            onClick={onBackToHome}
            className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent hover:from-yellow-300 hover:to-yellow-500 transition-all duration-200"
          >
            Fible
          </button>
          <p className="text-gray-400 mt-2">Transform Your Scenes Into Music Direction Briefs</p>
        </div>

        <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-yellow-500/20 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-white">
              {mode === "signin" ? "Welcome Back" : "Create Account"}
            </CardTitle>
            <CardDescription className="text-gray-400">
              {mode === "signin"
                ? "Sign in to access your Fible dashboard"
                : "Join Fible and start creating music briefs"}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name field for signup */}
              {mode === "signup" && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 ${
                        errors.name ? "border-red-500" : "border-gray-600"
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>
              )}

              {/* Email field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 ${
                      errors.email ? "border-red-500" : "border-gray-600"
                    }`}
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Password field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-12 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 ${
                      errors.password ? "border-red-500" : "border-gray-600"
                    }`}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
              </div>

              {/* Confirm Password field for signup */}
              {mode === "signup" && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-12 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 ${
                        errors.confirmPassword ? "border-red-500" : "border-gray-600"
                      }`}
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  {errors.confirmPassword && <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>}
                </div>
              )}

              {/* General error */}
              {errors.general && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                  <p className="text-red-400 text-sm">{errors.general}</p>
                </div>
              )}

              {/* Submit button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 font-semibold py-3 group"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                    {mode === "signin" ? "Signing In..." : "Creating Account..."}
                  </>
                ) : (
                  <>
                    {mode === "signin" ? "Sign In" : "Create Account"}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>

            {/* Switch mode */}
            <div className="mt-6 text-center">
              <p className="text-gray-400">
                {mode === "signin" ? "Don't have an account?" : "Already have an account?"}{" "}
                <button
                  onClick={() => onSwitchMode(mode === "signin" ? "signup" : "signin")}
                  className="text-yellow-400 hover:text-yellow-300 font-medium transition-colors duration-200"
                >
                  {mode === "signin" ? "Sign Up" : "Sign In"}
                </button>
              </p>
            </div>

            {/* Demo access */}
            <div className="mt-4 text-center">
              <p className="text-gray-500 text-sm">
                Want to try first?{" "}
                <button
                  onClick={onAuthSuccess}
                  className="text-yellow-400 hover:text-yellow-300 font-medium transition-colors duration-200"
                >
                  Continue as Guest
                </button>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Features preview */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm mb-4">Join thousands of music professionals using Fible</p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-black/20 backdrop-blur-sm rounded-lg p-3">
              <div className="text-yellow-400 font-bold text-lg">10K+</div>
              <div className="text-gray-400 text-xs">Scenes Analyzed</div>
            </div>
            <div className="bg-black/20 backdrop-blur-sm rounded-lg p-3">
              <div className="text-yellow-400 font-bold text-lg">500+</div>
              <div className="text-gray-400 text-xs">Happy Users</div>
            </div>
            <div className="bg-black/20 backdrop-blur-sm rounded-lg p-3">
              <div className="text-yellow-400 font-bold text-lg">99%</div>
              <div className="text-gray-400 text-xs">Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
