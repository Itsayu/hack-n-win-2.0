// "use client";

// import { useTheme } from "@/components/ThemeProvider";
// import Image from "next/image";
// import { useMediaQuery } from "react-responsive";
// import { useState, useEffect } from "react";

// export default function Home() {
//   const { theme } = useTheme();
//   const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

//   // Words to rotate
//   const words = ["Challenge", "Test", "Trial", "Experiment", "Adventure", "Quest", "Feat"];
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);

//   // Rotate words every 1.5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
//     }, 2100);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <main className="pt-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <div className="text-center py-20">
//           <div className="mb-10 mt-16 flex justify-center items-center">
//             {/* Conditionally show logo based on theme */}
//             <Image
//               src={theme === "dark" ? "/hero-logo-white.png" : "/hero-logo-black.png"}
//               alt="Hack-n-Win 2.0"
//               width={isSmallScreen ? 300 : 390}
//               height={isSmallScreen ? 100 : 150}
//               unoptimized
//             />
//           </div>

//           {/* Dynamic word rotation */}
//           <p className="text-xl md:text-2xl dark:text-white light:text-black mb-8 pb-4 font-bold">
//             Will you survive the ultimate coding{" "}
//             <span className="relative inline-block pb-4">
//               <span className="z-10 animate-pulse text-3xl relative bg-gradient-to-r from-squidPink via-purple-500 to-squidTeal bg-clip-text text-transparent w-[250px]">
//                 {words[currentWordIndex]}
//               </span>
//               {/* Wavy underline with multiple colors */}
//               <span
//                 className="absolute bottom-0 left-0 w-full h-[23px] z-10 pb-4"
//                 style={{
//                   background: `repeating-linear-gradient(
//                     90deg,
//                     #2300ad,
//                     #6b21a8,
//                     #14a2b8
//                   )`,
//                   maskImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="12" viewBox="0 0 100 12"><path fill="none" stroke="black" stroke-width="5" d="M0,5 Q25,0 50,5 T100,5"></path></svg>')`,
//                   WebkitMaskImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="12" viewBox="0 0 100 12"><path fill="none" stroke="black" stroke-width="5" d="M0,5 Q25,0 50,5 T100,5"></path></svg>')`,
//                   maskRepeat: "repeat-x",
//                   WebkitMaskRepeat: "repeat-x",
//                 }}
//               ></span>
//             </span>
//             <span className="text-3xl">?</span>
//           </p>

//           <div className="sm:flex-row flex-col flex justify-center items-center gap-5">
//             <a
//               href="https://hacknwin-2-0.devfolio.co/"
//               className="bg-squidPink text-white px-8 py-3 rounded-lg hover:bg-pink-700 w-[230px]"
//             >
//               Join Game
//             </a>
//             <a
//               href="/agenda"
//               className="border-2 border-squidTeal dark:text-squidTeal px-8 py-3 rounded-lg hover:bg-squidPink hover:text-white light:text-black w-[230px]"
//             >
//               View Schedule
//             </a>
//           </div>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8 py-16">
//           <div className="bg-[#249f9c] p-6 rounded-lg">
//             <h3 className="text-white text-xl font-bold mb-4">600,000</h3>
//             <p className="text-squidTeal">Worth of prizes to be won</p>
//           </div>
//           <div className="bg-[#249f9c] p-6 rounded-lg">
//             <h3 className="text-white text-xl font-bold mb-4">1000+</h3>
//             <p className="text-squidTeal">Participating developers</p>
//           </div>
//           <div className="bg-[#249f9c] p-6 rounded-lg">
//             <h3 className="text-white text-xl font-bold mb-4">2</h3>
//             <p className="text-squidTeal">Challenging rounds</p>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";

import { useTheme } from "@/components/ThemeProvider";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";

export default function Home() {
  const { theme } = useTheme();
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  // Words to rotate
  const words = [
    "Challenge",
    "Test",
    "Trial",
    "Experiment",
    "Adventure",
    "Quest",
    "Feat",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Countdown state
  const eventDate = new Date("2024-03-01T00:00:00");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hrs: 0,
    min: 0,
    sec: 0,
  });

  // Rotate words every 1.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2100);

    return () => clearInterval(interval);
  }, []);

  // Countdown timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const eventDate = new Date("2025-03-01T00:00:00");
      const difference = eventDate.getTime() - now.getTime();

      if (difference > 0) {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days: d, hrs: h, min: m, sec: s });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const textColors = {
    dark: "text-white",
    light: "text-black",
  };

  return (
    <main className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center py-20">
          <div className="mb-10 mt-16 flex justify-center items-center">
            {/* Conditionally show logo based on theme */}
            <Image
              src={
                theme === "dark"
                  ? "/hero-logo-white.png"
                  : "/hero-logo-black.png"
              }
              alt="Hack-n-Win 2.0"
              width={isSmallScreen ? 300 : 390}
              height={isSmallScreen ? 100 : 150}
              unoptimized
            />
          </div>

          {/* Dynamic word rotation */}
          <p className="text-xl md:text-2xl dark:text-white light:text-black mb-8 pb-4 font-bold">
            Will you survive the ultimate coding{" "}
            <span className="relative inline-block pb-4">
              <span className="z-10 animate-pulse text-3xl relative bg-gradient-to-r from-squidPink via-purple-500 to-squidTeal bg-clip-text text-transparent w-[250px]">
                {words[currentWordIndex]}
              </span>
              {/* Wavy underline with multiple colors */}
              <span
                className="absolute bottom-0 left-0 w-full h-[23px] z-10 pb-4"
                style={{
                  background: `repeating-linear-gradient(
                    90deg,
                    #2300ad,
                    #6b21a8,
                    #14a2b8
                  )`,
                  maskImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="12" viewBox="0 0 100 12"><path fill="none" stroke="black" stroke-width="5" d="M0,5 Q25,0 50,5 T100,5"></path></svg>')`,
                  WebkitMaskImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="12" viewBox="0 0 100 12"><path fill="none" stroke="black" stroke-width="5" d="M0,5 Q25,0 50,5 T100,5"></path></svg>')`,
                  maskRepeat: "repeat-x",
                  WebkitMaskRepeat: "repeat-x",
                }}
              ></span>
            </span>
            <span className="text-3xl">?</span>
          </p>

          <div className="sm:flex-row flex-col flex justify-center items-center gap-5">
            <a
              href="https://hacknwin-2-0.devfolio.co/"
              className="bg-squidPink text-white px-8 py-3 rounded-lg hover:bg-pink-700 w-[230px]"
            >
              Join Game
            </a>
            <a
              href="/agenda"
              className="border-2 border-squidTeal dark:text-squidTeal px-8 py-3 rounded-lg hover:bg-squidPink hover:text-white light:text-black w-[230px]"
            >
              View Schedule
            </a>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="text-center my-8">
          <h2
            className={`text-2xl font-bold mb-4 ${textColors[theme]} bg-gradient-to-r from-squidPink via-purple-500 to-squidTeal bg-clip-text text-transparent`}
          >
            {/* Hack-n-Win 2.0 Starts In */}
          </h2>
          <div
            className={`grid grid-cols-4 gap-4 text-center mx-auto max-w-xl`}
          >
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className={`p-4 rounded-lg border border-gradient-to-r from-squidPink via-purple-500 to-squidTeal ${textColors[theme]}`}
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-squidPink via-purple-500 to-squidTeal bg-clip-text text-transparent">
                  {value}
                </div>
                <div className="text-sm capitalize">{unit}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 py-16">
          <div className="bg-[#249f9c] p-6 rounded-lg">
            <h3 className="text-white text-xl font-bold mb-4">600,000</h3>
            <p className="text-squidTeal">Worth of prizes to be won</p>
          </div>
          <div className="bg-[#249f9c] p-6 rounded-lg">
            <h3 className="text-white text-xl font-bold mb-4">1000+</h3>
            <p className="text-squidTeal">Participating developers</p>
          </div>
          <div className="bg-[#249f9c] p-6 rounded-lg">
            <h3 className="text-white text-xl font-bold mb-4">2</h3>
            <p className="text-squidTeal">Challenging rounds</p>
          </div>
        </div>
      </div>
    </main>
  );
}
