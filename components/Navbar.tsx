'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useTheme } from './ThemeProvider'
import { Sun, Moon } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  // New function to handle mobile link clicks
  const handleMobileClick = () => {
    setIsOpen(false)
  }

  return (
    <nav className="bg-white dark:bg-darkBg fixed w-full z-40 transition-colors duration-300 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-squidPink text-2xl font-bold hover:scale-105 transition-transform">
            Hack-n-Win
          </Link>
          
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-800 dark:text-white hover:text-squidPink dark:hover:text-squidPink transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 dark:text-white p-2 hover:text-squidPink dark:hover:text-squidPink transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 dark:text-white hover:text-squidPink dark:hover:text-squidPink transition-colors">Home</Link>
            <Link href="/mentors" className="text-gray-800 dark:text-white hover:text-squidPink dark:hover:text-squidPink transition-colors">Mentors</Link>
            <Link href="/agenda" className="text-gray-800 dark:text-white hover:text-squidPink dark:hover:text-squidPink transition-colors">Agenda</Link>
            <Link href="/teams" className="text-gray-800 dark:text-white hover:text-squidPink dark:hover:text-squidPink transition-colors">Teams</Link>
            <Link href="/profile-badge" className="text-gray-800 dark:text-white hover:text-squidPink dark:hover:text-squidPink transition-colors">Get profile badge</Link>
            <Link href="/contact" className="text-gray-800 dark:text-white hover:text-squidPink dark:hover:text-squidPink transition-colors">Contact</Link>
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-800 dark:text-white hover:text-squidPink dark:hover:text-squidPink transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" onClick={handleMobileClick} className="block text-gray-800 dark:text-white hover:text-squidPink dark:hover:text-squidPink transition-colors py-2">Home</Link>
              <Link href="/mentors" onClick={handleMobileClick} className="block text-gray-800 dark:text-white hover:text-squidPink dark:hover:text-squidPink transition-colors py-2">Mentors</Link>
              <Link href="/agenda" onClick={handleMobileClick} className="block text-gray-800 dark:text-white hover:text-squidPink dark:hover:text-squidPink transition-colors py-2">Agenda</Link>
              <Link href="/teams" onClick={handleMobileClick} className="block text-gray-800 dark:text-white hover:text-squidPink dark:hover:text-squidPink transition-colors py-2">Teams</Link>
              <Link href="/profile-badge" onClick={handleMobileClick} className="block text-gray-800 dark:text-white hover:text-squidPink dark:hover:text-squidPink transition-colors py-2">Get profile badge</Link>
              <Link href="/contact" onClick={handleMobileClick} className="block text-gray-800 dark:text-white hover:text-squidPink dark:hover:text-squidPink transition-colors py-2">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}