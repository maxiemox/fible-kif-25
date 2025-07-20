"use client"

import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import FeaturesSection from "./components/FeaturesSection"
import Footer from "./components/Footer"
import Dashboard from "./components/Dashboard"
import AuthPage from "./components/AuthPage"

type ViewType = "landing" | "dashboard" | "signin" | "signup"

function App() {
  const [currentView, setCurrentView] = useState<ViewType>("landing")
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin")

  useEffect(() => {
    // Check if user is already authenticated
    const userData = localStorage.getItem("fible_user")
    if (userData) {
      const user = JSON.parse(userData)
      if (user.authenticated) {
        setCurrentView("dashboard")
      }
    }
  }, [])

  const handleGetStarted = () => {
    setCurrentView("signup")
    setAuthMode("signup")
  }

  const handleSignIn = () => {
    setCurrentView("signin")
    setAuthMode("signin")
  }

  const handleAuthSuccess = () => {
    setCurrentView("dashboard")
  }

  const handleSwitchAuthMode = (mode: "signin" | "signup") => {
    setAuthMode(mode)
    setCurrentView(mode)
  }

  const handleBackToHome = () => {
    setCurrentView("landing")
  }

  const handleLogout = () => {
    localStorage.removeItem("fible_user")
    setCurrentView("landing")
  }

  // Render based on current view
  if (currentView === "dashboard") {
    return <Dashboard onLogout={handleLogout} />
  }

  if (currentView === "signin" || currentView === "signup") {
    return (
      <AuthPage
        mode={authMode}
        onAuthSuccess={handleAuthSuccess}
        onSwitchMode={handleSwitchAuthMode}
        onBackToHome={handleBackToHome}
      />
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onGetStarted={handleGetStarted} onSignIn={handleSignIn} />
      <main>
        <HeroSection onGetStarted={handleGetStarted} />
        <AboutSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
