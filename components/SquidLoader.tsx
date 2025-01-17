// components/SquidLoader.tsx
'use client'

import { useEffect, useState } from 'react'

export default function SquidLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-darkBg dark:bg-white transition-colors duration-300">
      <div className="relative w-32 h-32">
        {/* Triangle */}
        <div className="absolute inset-0 animate-spin">
          <div className="w-0 h-0 
            border-l-[60px] border-l-transparent
            border-b-[104px] border-b-squidPink
            border-r-[60px] border-r-transparent
            mx-auto">
          </div>
        </div>
        {/* Circle */}
        <div className="absolute inset-0 flex items-center justify-center animate-pulse">
          <div className="w-16 h-16 rounded-full border-4 border-squidTeal"></div>
        </div>
        {/* Square */}
        <div className="absolute inset-0 flex items-center justify-center animate-bounce">
          <div className="w-12 h-12 border-4 border-white dark:border-darkBg rotate-45"></div>
        </div>
      </div>
    </div>
  )
}