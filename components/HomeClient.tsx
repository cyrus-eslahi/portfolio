'use client'

import React from 'react'
import Link from 'next/link'
import EditableText from './EditableText'

interface HomeClientProps {
  content: Record<string, string>
}

export default function HomeClient({ content }: HomeClientProps) {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 sm:px-8 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="space-y-6">
                <EditableText
                  id="hero_label"
                  initialValue={content.hero_label || 'Cyrus Eslahi — Builder & Student'}
                  as="p"
                  className="text-sm text-[#050608]/60 font-medium uppercase tracking-wide"
                />
                <EditableText
                  id="hero_title"
                  initialValue={content.hero_title || 'Designing clean products, tools, and experiments.'}
                  as="h1"
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                />
                <EditableText
                  id="hero_subtitle"
                  initialValue={content.hero_subtitle || 'I build apps, AI tools, and hardware projects with a focus on minimal design and clear purpose.'}
                  as="p"
                  className="text-lg sm:text-xl text-[#050608]/70 leading-relaxed max-w-xl"
                  multiline
                />
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
                    <EditableText
                      id="hero_latest_build"
                      initialValue={content.hero_latest_build || 'AI Camera Tracker'}
                      as="p"
                      className="text-lg font-semibold"
                    />
                  </div>
                  <div className="h-px bg-[#D0D3DA]"></div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#050608]/50 font-medium mb-2">
                      Focus
                    </p>
                    <EditableText
                      id="hero_focus"
                      initialValue={content.hero_focus || 'Front-end, AI, Robotics'}
                      as="p"
                      className="text-base"
                    />
                  </div>
                  <div className="h-px bg-[#D0D3DA]"></div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#050608]/50 font-medium mb-2">
                      Currently learning
                    </p>
                    <EditableText
                      id="hero_learning"
                      initialValue={content.hero_learning || 'TypeScript • Next.js • Edge AI'}
                      as="p"
                      className="text-base"
                    />
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
                  <EditableText
                    id="project1_tag1"
                    initialValue={content.project1_tag1 || 'Machine Learning (ML)'}
                    as="span"
                    className="px-3 py-1 bg-[#007AFF]/10 text-[#007AFF] text-xs font-medium rounded-full inline-block"
                  />
                  <EditableText
                    id="project1_tag2"
                    initialValue={content.project1_tag2 || 'AI'}
                    as="span"
                    className="px-3 py-1 bg-[#007AFF]/10 text-[#007AFF] text-xs font-medium rounded-full inline-block"
                  />
                </div>
                <EditableText
                  id="project1_title"
                  initialValue={content.project1_title || 'AI Camera Tracker'}
                  as="h3"
                  className="text-xl font-semibold"
                />
                <EditableText
                  id="project1_description"
                  initialValue={content.project1_description || 'An AI-powered tracker that follows your face in real-time and detects your expressions and objects in the background.'}
                  as="p"
                  className="text-[#050608]/70"
                  multiline
                />
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white border border-[#D0D3DA] rounded-3xl p-8 hover:border-[#007AFF]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <EditableText
                    id="project2_tag1"
                    initialValue={content.project2_tag1 || 'Virus'}
                    as="span"
                    className="px-3 py-1 bg-[#007AFF]/10 text-[#007AFF] text-xs font-medium rounded-full inline-block"
                  />
                </div>
                <EditableText
                  id="project2_title"
                  initialValue={content.project2_title || 'Computer Blocker'}
                  as="h3"
                  className="text-xl font-semibold"
                />
                <EditableText
                  id="project2_description"
                  initialValue={content.project2_description || 'An app that block your computer from being used, only way out is if you put the password in.'}
                  as="p"
                  className="text-[#050608]/70"
                  multiline
                />
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white border border-[#D0D3DA] rounded-3xl p-8 hover:border-[#007AFF]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <EditableText
                    id="project3_tag1"
                    initialValue={content.project3_tag1 || 'Hardware'}
                    as="span"
                    className="px-3 py-1 bg-[#007AFF]/10 text-[#007AFF] text-xs font-medium rounded-full inline-block"
                  />
                  <EditableText
                    id="project3_tag2"
                    initialValue={content.project3_tag2 || 'Robotics'}
                    as="span"
                    className="px-3 py-1 bg-[#007AFF]/10 text-[#007AFF] text-xs font-medium rounded-full inline-block"
                  />
                </div>
                <EditableText
                  id="project3_title"
                  initialValue={content.project3_title || 'Toyama Desk Robot'}
                  as="h3"
                  className="text-xl font-semibold"
                />
                <EditableText
                  id="project3_description"
                  initialValue={content.project3_description || 'An autonomous desk companion that helps organize your workspace and keep you on track.'}
                  as="p"
                  className="text-[#050608]/70"
                  multiline
                />
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
                  I'm a junior high student that loves to code and build things, from simple websites to complex AI tools and hardware projects.
                </p>
                <p>
                  Whether its just for fun or to help me learn, I love to build things and see them come to life.
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
              For collaborations, ideas, or questions, reach out anytime. I build and program things and would love to help you build yours.
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

