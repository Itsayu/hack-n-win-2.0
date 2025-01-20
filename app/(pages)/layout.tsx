// import HeroSectionBread from "@/components/HeroSectionBread";
// import { ReactNode } from "react";

// export default function pageRootLayout ({children}: {children: React.ReactNode}) {
//     return (
//         <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24 relative">
//             <HeroSectionBread />
//             {children}
//         </main>
//     )
// }


import HeroSectionBread from "@/components/HeroSectionBread";
import { ReactNode } from "react";

export default function pageRootLayout ({children}: {children: React.ReactNode}) {
    return (
        <main className="relative pt-16">
            <HeroSectionBread />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 pt-4"></div>
            {children}
        </main>
    )
}

