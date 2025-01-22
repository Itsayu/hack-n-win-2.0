"use client";

import { useTheme } from "@/components/ThemeProvider";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";

export default function Home() {
  const { theme } = useTheme();
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  // Words to rotate
  const words = ["Challenge", "Test", "Trial", "Experiment", "Adventure", "Quest", "Feat"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Rotate words every 1.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2100);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center py-20">
          <div className="mb-10 mt-16 flex justify-center items-center">
            {/* Conditionally show logo based on theme */}
            <Image
              src={theme === "dark" ? "/hero-logo-white.png" : "/hero-logo-black.png"}
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
              <span className="z-10 animate-pulse text-3xl bg-gradient-to-r from-squidPink via-purple-500 to-squidTeal bg-clip-text text-transparent">
                {words[currentWordIndex]}
              </span>
              {/* Wavy underline with multiple colors */}
              <span
                className="absolute bottom-0 left-0 w-full h-[23px] -z-10 pb-4"
                style={{
                  background: `repeating-linear-gradient(
                    90deg,
                    #2300ad,
                    #6b21a8,
                    #14a2b8
                  )`,
                  // maskImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="8" viewBox="0 0 100 8"><path fill="none" stroke="black" stroke-width="2" d="M0,4 Q25,0 50,4 T100,4"></path></svg>')`,
                  // WebkitMaskImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="8" viewBox="0 0 100 8"><path fill="none" stroke="black" stroke-width="2" d="M0,4 Q25,0 50,4 T100,4"></path></svg>')`,
                  // maskRepeat: "repeat-x",
                  // WebkitMaskRepeat: "repeat-x",

                  maskImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="12" viewBox="0 0 100 12"><path fill="none" stroke="black" stroke-width="5" d="M0,5 Q25,0 50,5 T100,5"></path></svg>')`,
                  WebkitMaskImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="12" viewBox="0 0 100 12"><path fill="none" stroke="black" stroke-width="5" d="M0,5 Q25,0 50,5 T100,5"></path></svg>')`,
                  maskRepeat: "repeat-x",
                  WebkitMaskRepeat: "repeat-x",
                }}
              ></span>
            </span>
            <span>?</span>
          </p>

          <div className="space-x-4">
            <a
              href="/teams"
              className="bg-squidPink text-white px-8 py-3 rounded-lg hover:bg-pink-700"
            >
              Join Game
            </a>
            <a
              href="/agenda"
              className="border-2 border-squidTeal dark:text-squidTeal px-8 py-3 rounded-lg hover:bg-squidTeal hover:text-white light:text-black"
            >
              View Schedule
            </a>
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
