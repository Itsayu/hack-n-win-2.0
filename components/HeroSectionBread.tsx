'use client'

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "./ThemeProvider";

export default function HeroSectionBread() {
    const { theme } = useTheme();
    const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
    return (
        <div className="h-[400px] dark:text-squidPink text-black rounded-md border-squidTeal border-2 backdrop-blur-md flex items-center justify-center">
            <div className="flex w-[100%] justify-between items-center p-5">
                <div className="flex flex-col">
                    <h1 className="text-[35px] text-squidPink font-bold">Hack-N-Win 2.0 | D4 Community</h1>
                    <p className="font-medium dark:text-gray-200 text-black">Hack-N-Win <span className="text-squidPink w-[500px]">{usePathname().toUpperCase()}</span></p>
                </div>
                <div>
                    <Image
                        src={theme === "dark" ? "/hero-logo-white.png" : "/hero-logo-black.png"}
                        alt="Hack-n-Win 2.0"
                        width={isSmallScreen ? 300 : 390}
                        height={isSmallScreen ? 100 : 150}
                        unoptimized
                        className="md:block hidden"
                    />
                </div>
            </div>
        </div>
    )
}