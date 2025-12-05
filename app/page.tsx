'use client'

import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 sm:px-8 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-sm text-[#050608]/60 font-medium uppercase tracking-wide">
                  Cyrus Eslahi — Builder & Student
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Designing clean products, tools, and experiments.
                </h1>
                <p className="text-lg sm:text-xl text-[#050608]/70 leading-relaxed max-w-xl">
                  I build apps, AI tools, and hardware projects with a focus on minimal design and clear purpose.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/projects"
                  className="px-6 py-3 bg-[#007AFF] text-white rounded-full font-medium hover:opacity-90 transition-all duration-200 shadow-sm hover:shadow-md text-center"
                >
                  View projects
                </Link>
                <a
                  href="/Cyrus-Eslahi-Resume.pdf"
                  className="px-6 py-3 bg-transparent border border-[#D0D3DA] text-[#050608] rounded-full font-medium hover:bg-[#050608]/5 transition-all duration-200 text-center"
                >
                  Download resume
                </a>
              </div>
            </div>

            {/* Right Column - Glass Card */}
            <div className="order-2 lg:order-none">
              <div className="bg-white/60 backdrop-blur-xl border border-[#D0D3DA]/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#050608]/50 font-medium mb-2">
                      Latest build
                    </p>
                    <p className="text-lg font-semibold">AI Study Coach</p>
                  </div>
                  <div className="h-px bg-[#D0D3DA]"></div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#050608]/50 font-medium mb-2">
                      Focus
                    </p>
                    <p className="text-base">Front-end, AI, Robotics</p>
                  </div>
                  <div className="h-px bg-[#D0D3DA]"></div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#050608]/50 font-medium mb-2">
                      Currently learning
                    </p>
                    <p className="text-base">TypeScript • Next.js • Edge AI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 sm:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Selected projects</h2>
            <p className="text-lg text-[#050608]/70 max-w-2xl mx-auto">
              A collection of projects that showcase clean design and thoughtful engineering.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Project Card 1 */}
            <div className="bg-white border border-[#D0D3DA] rounded-3xl p-8 hover:border-[#007AFF]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-[#007AFF]/10 text-[#007AFF] text-xs font-medium rounded-full">
                    Web
                  </span>
                  <span className="px-3 py-1 bg-[#007AFF]/10 text-[#007AFF] text-xs font-medium rounded-full">
                    AI
                  </span>
                </div>
                <h3 className="text-xl font-semibold">WhisperNotes</h3>
                <p className="text-[#050608]/70">
                  An AI-powered note-taking app that transcribes and organizes your thoughts in real-time.
                </p>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white border border-[#D0D3DA] rounded-3xl p-8 hover:border-[#007AFF]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-[#007AFF]/10 text-[#007AFF] text-xs font-medium rounded-full">
                    Web
                  </span>
                </div>
                <h3 className="text-xl font-semibold">FocusGrid</h3>
                <p className="text-[#050608]/70">
                  A minimalist productivity dashboard that helps you stay focused on what matters most.
                </p>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white border border-[#D0D3DA] rounded-3xl p-8 hover:border-[#007AFF]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-[#007AFF]/10 text-[#007AFF] text-xs font-medium rounded-full">
                    Hardware
                  </span>
                  <span className="px-3 py-1 bg-[#007AFF]/10 text-[#007AFF] text-xs font-medium rounded-full">
                    Robotics
                  </span>
                </div>
                <h3 className="text-xl font-semibold">Toyama Desk Robot</h3>
                <p className="text-[#050608]/70">
                  An autonomous desk companion that helps organize your workspace and keep you on track.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiments Section */}
      <section id="experiments" className="px-6 sm:px-8 py-24 bg-white/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Small experiments</h2>
            <p className="text-lg text-[#050608]/70 max-w-2xl mx-auto">
              Quick prototypes and ideas exploring new technologies and design patterns.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Experiment Card 1 */}
            <div className="bg-white border border-[#D0D3DA] rounded-3xl p-6 hover:border-[#007AFF]/30 hover:shadow-lg transition-all duration-300">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-[#007AFF]/10 text-[#007AFF] text-xs font-medium rounded-full">
                    Prototype
                  </span>
                </div>
                <h3 className="text-lg font-semibold">Voice Command Interface</h3>
                <p className="text-sm text-[#050608]/70">
                  Exploring natural language interactions for web applications.
                </p>
              </div>
            </div>

            {/* Experiment Card 2 */}
            <div className="bg-white border border-[#D0D3DA] rounded-3xl p-6 hover:border-[#007AFF]/30 hover:shadow-lg transition-all duration-300">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-[#007AFF]/10 text-[#007AFF] text-xs font-medium rounded-full">
                    In progress
                  </span>
                </div>
                <h3 className="text-lg font-semibold">3D Web Components</h3>
                <p className="text-sm text-[#050608]/70">
                  Building interactive 3D elements using WebGL and React.
                </p>
              </div>
            </div>

            {/* Experiment Card 3 */}
            <div className="bg-white border border-[#D0D3DA] rounded-3xl p-6 hover:border-[#007AFF]/30 hover:shadow-lg transition-all duration-300">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-[#007AFF]/10 text-[#007AFF] text-xs font-medium rounded-full">
                    Idea
                  </span>
                </div>
                <h3 className="text-lg font-semibold">AI Code Review Assistant</h3>
                <p className="text-sm text-[#050608]/70">
                  An intelligent tool that helps improve code quality and readability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 sm:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Column - Bio */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">About Cyrus</h2>
              <div className="space-y-4 text-lg text-[#050608]/80 leading-relaxed">
                <p>
                  I'm a junior high student passionate about coding, AI, and building things that matter. 
                  I love turning ideas into reality through clean code and thoughtful design.
                </p>
                <p>
                  Whether it's a web app, an AI tool, or a hardware project, I approach each build with 
                  curiosity and a focus on creating something both functional and beautiful.
                </p>
              </div>
            </div>

            {/* Right Column - Info List */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-[#050608]/50 font-medium mb-1">
                    Location
                  </p>
                  <p className="text-base">United States</p>
                </div>
                <div className="h-px bg-[#D0D3DA]"></div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-[#050608]/50 font-medium mb-1">
                    Focus areas
                  </p>
                  <p className="text-base">Front-end development, AI applications, Robotics</p>
                </div>
                <div className="h-px bg-[#D0D3DA]"></div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-[#050608]/50 font-medium mb-1">
                    Tools & stack
                  </p>
                  <p className="text-base">
                    TypeScript, Next.js, Python, Roblox Lua, Arduino
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 sm:px-8 py-24 bg-white/30">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Let's build something</h2>
            <p className="text-lg text-[#050608]/70">
              For collaborations, ideas, or questions, reach out anytime.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@cyruseslahi.me"
              className="px-8 py-3 bg-[#007AFF] text-white rounded-full font-medium hover:opacity-90 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              hello@cyruseslahi.me
            </a>
          </div>
          <div className="pt-8 space-y-2">
            <p className="text-sm text-[#050608]/50">
              GitHub • YouTube
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 sm:px-8 py-12 border-t border-[#D0D3DA]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-[#050608]/50 font-mono">
            © {new Date().getFullYear()} cyruseslahi.me
          </p>
        </div>
      </footer>
    </main>
  )
}

