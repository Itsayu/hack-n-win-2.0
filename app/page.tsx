"use client";

import { useTheme } from "@/components/ThemeProvider";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import { Download, Handshake, Users, Clock, Calendar } from "lucide-react";

export default function Home() {
  const { theme } = useTheme();
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const isMediumScreen = useMediaQuery({ query: "(max-width: 1024px)" });

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
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hrs: 0,
    min: 0,
    sec: 0,
  });

  // Rotate words every 2.1 seconds
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

  // Cards data
  const cardData = [
    {
      icon: Download,
      time: "12:00",
      category: "Brochure",
      title: "Download Brochure",
      description: "Get complete event details and information",
      link: "/brochure.pdf",
      linkText: "Download PDF",
      iconColor: "text-squidTeal"
    },
    {
      icon: Handshake,
      time: "12:00",
      category: "Sponsorship",
      title: "Become a Sponsor",
      description: "Support innovation and gain visibility",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7289543290209603584",
      linkText: "Explore Options",
      iconColor: "text-squidPink"
    },
    {
      icon: Users,
      time: "12:00",
      category: "Partnerships",
      title: "Community Partners",
      description: "Join our collaborative network and ecosystem",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScRivUDY_jxraddIaFCtVPXF3gbQU-o8GxZeuVWlM-9wEV38A/viewform",
      linkText: "Apply Now",
      iconColor: "text-purple-500"
    }
  ];

  return (
    <main className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Hero Section */}
        <div className="text-center py-20">
          <div className="mb-10 mt-16 flex justify-center items-center">
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

          {/* Call to Action Buttons */}
          <div className="sm:flex-row flex-col flex justify-center items-center gap-5">
            <a
              href="https://hacknwin-2-0.devfolio.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-squidPink text-white px-8 py-3 rounded-lg hover:bg-pink-700 w-[230px]"
            >
              Join Game
            </a>
            <a
              href="/agenda"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-squidTeal dark:text-squidTeal px-8 py-3 rounded-lg hover:bg-squidPink hover:text-white light:text-black w-[230px]"
            >
              View Schedule
            </a>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="text-center my-8">
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

        {/* Cards Section */}
        <div className={`grid ${isSmallScreen ? 'grid-cols-1' : isMediumScreen ? 'grid-cols-2' : 'grid-cols-3'} gap-8 py-16`}>
          {cardData.map((card, index) => (
            <div 
              key={index} 
              className="flex"
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-squidTeal/50 p-6 hover:border-squidPink/50 transition-colors duration-300 flex flex-col justify-between w-full">
                <div>
                  <div className="flex flex-wrap gap-4 mb-4 md:justify-end">
                    <div className={`flex items-center space-x-2 ${card.iconColor}`}>
                      <Clock className="w-5 h-5 animate-pulse" />
                      <span className="font-mono">{card.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-squidPink">
                      <Calendar className="w-5 h-5" />
                      <span className="font-mono">20/02/2025</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 md:flex md:flex-col md:items-end">
                    <div className="inline-block px-3 py-1 rounded-full bg-squidTeal/20 text-squidTeal text-sm font-medium">
                      {card.category}
                    </div>
                    <h3 className="text-2xl font-bold text-squidPink transition-colors duration-300">
                      {card.title}
                    </h3>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-gray-300 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 md:text-right">
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-squidTeal hover:text-squidPink transition-colors"
                  >
                    <card.icon className="w-5 h-5" />
                    <span>{card.linkText}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}