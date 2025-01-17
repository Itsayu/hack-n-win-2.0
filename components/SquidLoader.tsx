// // components/SquidLoader.tsx
// 'use client'

// import { useEffect, useState } from 'react'

// export default function SquidLoader() {
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 2000)
//     return () => clearTimeout(timer)
//   }, [])

//   if (!loading) return null

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-darkBg dark:bg-white transition-colors duration-300">
//       <div className="relative w-32 h-32">
//         {/* Triangle */}
//         <div className="absolute inset-0 animate-spin">
//           <div className="w-0 h-0 
//             border-l-[60px] border-l-transparent
//             border-b-[104px] border-b-squidPink
//             border-r-[60px] border-r-transparent
//             mx-auto">
//           </div>
//         </div>
//         {/* Circle */}
//         <div className="absolute inset-0 flex items-center justify-center animate-pulse">
//           <div className="w-16 h-16 rounded-full border-4 border-squidTeal"></div>
//         </div>
//         {/* Square */}
//         <div className="absolute inset-0 flex items-center justify-center animate-bounce">
//           <div className="w-12 h-12 border-4 border-white dark:border-darkBg rotate-45"></div>
//         </div>
//       </div>
//     </div>
//   )
// }











// 'use client'

// import { useEffect, useState } from 'react'

// export default function SquidLoader() {
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 4000500) // 1.5 seconds for each symbol
//     return () => clearTimeout(timer)
//   }, [])

//   if (!loading) return null

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-darkBg dark:bg-white transition-colors duration-300">
//       <div className="flex space-x-4">
//         {/* Circle */}
//         <div className="relative w-[4.5rem] h-[4.5rem] flex justify-center">
//           <div className="w-[3.75rem] h-[3.75rem] rounded-full bg-squidTeal opacity-0 animate-drawCircle"></div>
//         </div>

//         {/* Triangle */}
//         <div className="relative h-[4.5rem]">
//           <div className="w-0 h-0 border-l-[32px] border-l-transparent border-b-[57px] border-b-squidPink border-r-[32px] border-r-transparent mx-auto opacity-0 animate-drawTriangle"></div>
//         </div>

//         {/* Square */}
//         <div className="relative w-[4.5rem] h-[4.5rem]">
//           <div className="w-[3.5rem] h-[3.5rem] bg-squidPink opacity-0 animate-drawSquare"></div>
//         </div>
//       </div>
//     </div>
//   )
// }





// 'use client'

// import { useEffect, useState } from 'react'

// export default function SquidLoader() {
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 4000) // Reduced to match the total time
//     return () => clearTimeout(timer)
//   }, [])

//   if (!loading) return null

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-darkBg dark:bg-white transition-colors duration-300">
//       <div className="flex space-x-6">
//         {/* Circle */}
//         <div className="relative w-[4.5rem] h-[4.5rem] flex justify-center">
//           <div className="w-[3.75rem] h-[3.75rem] rounded-full bg-squidTeal opacity-0 animate-drawCircle"></div>
//         </div>

//         {/* Triangle */}
//         <div className="relative h-[4.5rem]">
//           <div className="w-0 h-0 border-l-[32px] border-l-transparent border-b-[57px] border-b-squidPink border-r-[32px] border-r-transparent mx-auto opacity-0 animate-drawTriangle"></div>
//         </div>

//         {/* Square */}
//         <div className="relative w-[4.5rem] h-[4.5rem]">
//           <div className="w-[3.5rem] h-[3.5rem] bg-squidPink opacity-0 animate-drawSquare"></div>
//         </div>
//       </div>
//     </div>
//   )
// }





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
          <h2 className="text-3xl font-bold animate-typewriter">
            Hack-<span className='text-squidPink'>N</span>-Win <span className='text-[#3d85c6]'>2.0</span>
          </h2>
        </div>
      </div>
    </div>
  )
}
