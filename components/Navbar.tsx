'use client'

import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';
import Image from 'next/image';
import { NavItems } from '@/types';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const handleMobileClick = () => {
    setIsOpen(false);
  };

  const navLinks: NavItems[] = [{
    href: "/",
    title: "Home"
  }, {
    href: "/mentors",
    title: "Mentors"
  }, {
    href: "/agenda",
    title: "Agenda"
  }, {
    href: "/teams",
    title: "Team"
  }, {
    href: "/profile-badge",
    title: "Get Profile Badge"
  }, {
    href: "/contact",
    title: "Contact"
  }, {
    href: "/faqs",
    title: "FAQs"
  }];

  return (
    <nav className="bg-white dark:bg-darkBg fixed w-full z-40 transition-colors duration-300 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-60 shadow-md dark:shadow-squidPink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 h-16">
          <Link href="/" className="text-squidPink text-2xl font-bold">
            <Image src="/logo.svg" alt="Hack-n-Win 2.0" width={220} height={70} unoptimized quality={100} className="max-w-[220px]" />
          </Link>

          <div className="lg:hidden flex items-center space-x-4">
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

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((prop, i) => {
              const isActive = pathname === prop.href;
              return (
                <Link 
                  href={prop.href} 
                  className={`
                    relative text-gray-800 dark:text-white hover:text-squidPink dark:hover:text-squidPink transition-colors
                    before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 
                    before:bg-squidPink before:transition-all before:duration-300
                    hover:before:w-full
                    ${isActive ? 'before:w-full' : ''}
                  `} 
                  key={i}
                >
                  {prop.title}
                </Link>
              );
            })}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-800 dark:text-white hover:text-squidPink dark:hover:text-squidPink transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-end gap-5 font-light">
              {navLinks.map((prop, i) => {
                const isActive = pathname === prop.href;
                return (
                  <Link 
                    href={prop.href} 
                    onClick={handleMobileClick} 
                    className={`
                      relative text-gray-800 dark:text-white hover:text-squidPink dark:hover:text-squidPink transition-colors
                      before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 
                      before:bg-squidPink before:transition-all before:duration-300
                      hover:before:w-full
                      ${isActive ? 'before:w-full' : ''}
                    `}
                    key={i}
                  >
                    {prop.title}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
