'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-[#F5F5F7]/80 backdrop-blur-md border-b border-[#D0D3DA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-mono text-sm font-medium hover:opacity-70 transition-opacity"
          >
            cyruseslahi.me
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/projects"
              className="text-sm hover:opacity-70 transition-opacity"
            >
              Projects
            </Link>
            <Link
              href="/experiments"
              className="text-sm hover:opacity-70 transition-opacity"
            >
              Experiments
            </Link>
            <Link
              href="/about"
              className="text-sm hover:opacity-70 transition-opacity"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm hover:opacity-70 transition-opacity"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:opacity-70 transition-opacity"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#D0D3DA] bg-[#F5F5F7]/95 backdrop-blur-md">
          <div className="px-6 py-4 space-y-4">
            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm hover:opacity-70 transition-opacity"
            >
              Projects
            </Link>
            <Link
              href="/experiments"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm hover:opacity-70 transition-opacity"
            >
              Experiments
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm hover:opacity-70 transition-opacity"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm hover:opacity-70 transition-opacity"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

