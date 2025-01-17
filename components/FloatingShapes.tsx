// components/FloatingShapes.tsx
// 'use client'

// export default function FloatingShapes() {
//   return (
//     <div className="fixed inset-0 pointer-events-none overflow-hidden">
//       <div className="absolute top-40 left-10 w-16 h-16 border-4 border-[#c2346f80] rotate-60 animate-float-slow"></div>
//       <div className="absolute top-60 right-20 w-16 h-16 rounded-full border-4 border-[#249f9c8a] animate-float-medium"></div>
//       <div className="absolute bottom-20 left-1/4 w-0 h-0 
//         border-l-[30px] border-l-transparent
//         border-b-[52px] border-b-[#c2346f80] dark:border-b-[#c2346f80]
//         border-r-[30px] border-r-transparent animate-float-medium">
//       </div>
//     </div>
//   )
// }




// 'use client'

// import React from 'react';

// export default function FloatingShapes() {
//   return (
//     <div className="fixed inset-0 pointer-events-none overflow-hidden">
//       {/* Circle - Player Tag */}
//       <div className="absolute top-40 left-10 w-16 h-16 rounded-full 
//         bg-[#ff2d5580] dark:bg-[#ff2d5540]
//         backdrop-blur-sm animate-float-rotate-slow
//         shadow-lg transition-all duration-500
//         motion-reduce:animate-none">
//       </div>

//       {/* Square - Guard Mask */}
//       <div className="absolute top-60 right-20 w-16 h-16 
//         bg-[#249f9c80] dark:bg-[#249f9c40]
//         backdrop-blur-sm animate-float-rotate-medium
//         shadow-lg transition-all duration-500
//         motion-reduce:animate-none">
//       </div>

//       {/* Triangle - Front Man Mask */}
//       <div className="absolute bottom-20 left-1/4 w-16 h-16
//         bg-[#c2346f80] dark:bg-[#c2346f40]
//         clip-path-triangle backdrop-blur-sm animate-float-rotate-fast
//         shadow-lg transition-all duration-500
//         motion-reduce:animate-none">
//       </div>

//       {/* Star */}
//       <div className="absolute top-32 right-1/3 w-16 h-16
//         bg-[#ff2d5580] dark:bg-[#ff2d5540]
//         clip-path-star backdrop-blur-sm animate-zigzag-slow
//         shadow-lg transition-all duration-500
//         motion-reduce:animate-none">
//       </div>

//       {/* Umbrella shape */}
//       <div className="absolute bottom-40 right-1/4 w-16 h-16
//         bg-[#249f9c80] dark:bg-[#249f9c40]
//         clip-path-umbrella backdrop-blur-sm animate-zigzag-medium
//         shadow-lg transition-all duration-500
//         motion-reduce:animate-none">
//       </div>

//       {/* Pentagon */}
//       <div className="absolute top-1/2 left-1/3 w-16 h-16
//         bg-[#c2346f80] dark:bg-[#c2346f40]
//         clip-path-pentagon backdrop-blur-sm animate-float-rotate-fast
//         shadow-lg transition-all duration-500
//         motion-reduce:animate-none">
//       </div>

//       {/* Diamond */}
//       <div className="absolute top-20 left-1/2 w-16 h-16
//         bg-[#ff2d5580] dark:bg-[#ff2d5540]
//         rotate-45 backdrop-blur-sm animate-zigzag-fast
//         shadow-lg transition-all duration-500
//         motion-reduce:animate-none">
//       </div>
//     </div>
//   );
// }





'use client';

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Glass-effect Circle */}
      <div className="absolute top-40 left-10 w-16 h-16 rounded-full bg-squidPink/20 backdrop-blur-lg shadow-xl animate-float-slow"></div>

      {/* Glass-effect Square */}
      <div className="absolute top-60 right-20 w-16 h-16 bg-squidTeal/20 backdrop-blur-lg shadow-xl animate-float-slow"></div>

      {/* Glass-effect Triangle */}
      <div className="absolute top-20 left-1/4 w-0 h-0 
        border-l-[30px] border-l-transparent
        border-b-[52px] border-b-squidPink/20 dark:border-b-squidPink/30
        border-r-[30px] border-r-transparent backdrop-blur-lg  animate-float-slow">
      </div>

      {/* Glass-effect Triangle */}
      <div className="absolute bottom-60 left-1/4 w-0 h-0 
        border-l-[30px] border-l-transparent
        border-b-[52px] border-b-squidPink/20 dark:border-b-squidPink/30
        border-r-[30px] border-r-transparent backdrop-blur-lg animate-float-medium">
      </div>

      {/* Glass-effect Star */}
      <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-squidPink/20 backdrop-blur-md clip-star shadow-xl animate-float-slow"></div>

      {/* Glass-effect Hexagon */}
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-squidTeal/30 backdrop-blur-md clip-hexagon shadow-xl animate-float-slow"></div>

      {/* Additional Circle with a Ring */}
      <div className="absolute top-20 left-1/2 w-20 h-20 rounded-full bg-squidPink/20 backdrop-blur-md shadow-2xl animate-float-medium"></div>

      {/* Diamond */}
      <div className="absolute bottom-10 right-20 w-16 h-16 bg-squidPink/20 backdrop-blur-sm clip-diamond shadow-lg animate-float-slow"></div>
    </div>
  );
}
