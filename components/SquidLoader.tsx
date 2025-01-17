
'use client'

import { useEffect, useState } from 'react'

export default function SquidLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500) // Adjust to match the total time
    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-darkBg dark:bg-white transition-colors duration-300">
      <div className="flex flex-col items-center space-y-6">
        {/* Loader shapes */}
        <div className="flex space-x-4"> {/* Reduced gap between shapes */}
          {/* Circle */}
          <div className="relative w-[4.5rem] h-[4.5rem] flex justify-center">
            <div className="w-[3.75rem] h-[3.75rem] rounded-full bg-[#249f9c] opacity-0 animate-drawCircle border-none"></div>
          </div>

          {/* Triangle */}
          <div className="relative h-[4.5rem]">
            <div className="w-0 h-0 border-l-[32px] border-l-transparent border-b-[57px] border-b-squidPink border-r-[32px] border-r-transparent mx-auto opacity-0 animate-drawTriangle"></div>
          </div>

          {/* Square */}
          <div className="relative w-[4.5rem] h-[4.5rem]">
            <div className="w-[3.5rem] h-[3.5rem] bg-squidPink opacity-0 animate-drawSquare"></div>
          </div>
        </div>

        {/* Title and Subtitle */}
        <div className="text-center">
          <h4 className="text-[#249f9c]">D4 Community Presents</h4>
          {/* <h2 className="text-3xl font-bold animate-typewriter dark:text-black light:text-light">
            Hack-<span className='text-squidPink'>N</span>-Win <span className='text-[#3d85c6]'>2.0</span>
          </h2> */}
          <h2 className="text-3xl font-bold animate-typewriter dark:text-white light:text-black">
            Hack-<span className='text-squidPink'>N</span>-Win <span className='text-[#3d85c6]'>2.0</span>
          </h2>
        </div>
      </div>
    </div>
  )
}
