// components/FloatingShapes.tsx
'use client'

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-40 left-10 w-16 h-16 border-4 border-squidPink rotate-60 animate-float-slow"></div>
      <div className="absolute top-60 right-20 w-16 h-16 rounded-full border-4 border-squidTeal animate-float-medium"></div>
      <div className="absolute bottom-20 left-1/4 w-0 h-0 
        border-l-[30px] border-l-transparent
        border-b-[52px] border-b-squidPink dark:border-b-squidPink
        border-r-[30px] border-r-transparent animate-float-medium">
      </div>
    </div>
  )
}




// 'use client'

// export default function FloatingShapes() {
//   return (
//     <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
//       {/* Square Shape with Glass Effect */}
//       <div className="absolute top-40 left-10 w-16 h-16 border-4 border-squidPink rotate-60 animate-float-slow backdrop-blur-lg bg-white/10 dark:bg-white/10 bg-opacity-10 border-white/20 glass-effect z-0"></div>
      
//       {/* Circle Shape with Glass Effect */}
//       <div className="absolute top-60 right-20 w-16 h-16 rounded-full border-4 border-squidTeal animate-float-medium backdrop-blur-lg bg-white/10 dark:bg-white/10 bg-opacity-10 border-white/20 glass-effect z-0"></div>
      
//       {/* Triangle Shape with Glass Effect */}
//       <div className="absolute bottom-20 left-1/4 w-0 h-0 
//         border-l-[30px] border-l-squidPink
//         border-b-[52px] border-b-squidPink dark:border-b-squidPink
//         border-r-[30px] border-r-squidPink animate-float-fast backdrop-blur-lg bg-white/10 dark:bg-white/10 bg-opacity-10 border-white/20 glass-effect z-0">
//       </div>
//     </div>
//   );
// }
