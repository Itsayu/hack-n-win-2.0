
// "use client";

// import React from 'react';
// import Image from 'next/image';

// type Partner = {
//   name: string;
//   logo: string;
//   darkLogo: string;
//   website: string;
// };

// type PartnerSection = {
//   title: string;
//   partners: Partner[];
// };

// const partnersData: PartnerSection[] = [
//   {
//     title: "Title Sponsors",
//     partners: [
//       {
//         name: "D4",
//         logo: "/partners/d4b.png",
//         darkLogo: "/partners/d4b.png",
//         website: "https://example.com"
//       },
//     ]
//   },
//   {
//     title: "Venue Partners",
//     partners: [
//       {
//         name: "Venue A",
//         logo: "/partners/d4b.png",
//         darkLogo: "/partners/d4b.png",
//         website: "https://example.com"
//       },
//     ]
//   },
//   {
//     title: "Platinum Sponsors",
//     partners: [
//       {
//         name: "Platinum 1",
//         logo: "/partners/d4b.png",
//         darkLogo: "/partners/d4b.png",
//         website: "https://example.com"
//       },
//       {
//         name: "Platinum 2",
//         logo: "/partners/d4b.png",
//         darkLogo: "/partners/d4b.png",
//         website: "https://example.com"
//       },
//     ]
//   },
//   {
//     title: "Gold Sponsors",
//     partners: [
//       {
//         name: "Gold 1",
//         logo: "/partners/d4b.png",
//         darkLogo: "/partners/d4b.png",
//         website: "https://example.com"
//       },
//     ]
//   },
//   {
//     title: "Silver Sponsors",
//     partners: [
//       {
//         name: "Silver 1",
//         logo: "/partners/d4b.png",
//         darkLogo: "/partners/d4b.png",
//         website: "https://example.com"
//       },
//     ]
//   },
//   {
//     title: "Bronze Sponsors",
//     partners: [
//       {
//         name: "Bronze 1",
//         logo: "/partners/d4b.png",
//         darkLogo: "/partners/d4b.png",
//         website: "https://example.com"
//       },
//     ]
//   }
// ];

// const PartnerImage = ({ partner }: { partner: Partner }) => {
//   return (
//     <>
//       <Image
//         src={partner.logo}
//         alt={partner.name}
//         fill
//         className="object-contain p-4 transition-transform duration-300 group-hover:scale-110 dark:hidden"
//       />
//       <Image
//         src={partner.darkLogo}
//         alt={partner.name}
//         fill
//         className="object-contain p-4 transition-transform duration-300 group-hover:scale-110 hidden dark:block"
//       />
//     </>
//   );
// };

// const PartnerSection = ({ title, partners }: PartnerSection) => (
//   <div className="mb-16">
//     <h2 className="text-3xl font-bold mb-8 text-center">
//       <span className="bg-gradient-to-r from-squidPink via-purple-500 to-squidTeal bg-clip-text text-transparent">
//         {title}
//       </span>
//     </h2>
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {partners.map((partner, index) => (
//         <div 
//           key={index}
//           className="group hover:scale-105 transition-all duration-300 backdrop-blur-lg 
//                     dark:bg-white/5 bg-white/80 rounded-lg border dark:border-squidTeal/30 border-squidPink/30 
//                     dark:hover:border-squidPink/50 hover:border-squidTeal/50 shadow-lg hover:shadow-xl"
//           style={{
//             animation: 'fadeInUp 0.5s ease-out forwards',
//             animationDelay: `${index * 150}ms`
//           }}
//         >
//           <div className="p-6">
//             <a 
//               href={partner.website}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block aspect-video relative"
//             >
//               <PartnerImage partner={partner} />
//             </a>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// export default function PartnersPage() {
//   return (
//     <div className="min-h-screen">
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold">
//             <span className="bg-gradient-to-r from-squidPink via-purple-500 to-squidTeal bg-clip-text text-transparent">
//               Our Partners & Sponsors
//             </span>
//           </h1>
//           <div className="h-1 w-32 mx-auto mt-4 bg-gradient-to-r from-squidPink to-squidTeal rounded-full"></div>
//         </div>

//         {partnersData.map((section, index) => (
//           <PartnerSection
//             key={index}
//             title={section.title}
//             partners={section.partners}
//           />
//         ))}
//       </main>
//     </div>
//   );
// }









"use client";

import React from "react";
import Image from "next/image";

// Define types for partners
type Partner = {
  name: string;
  logo: string;
  darkLogo: string;
  website: string;
};

type PartnerSection = {
  title: string;
  partners: Partner[];
};

// Example partner data with image paths
const partnersData: PartnerSection[] = [
  {
    title: "Title Sponsors",
    partners: [
      {
        name: "D4",
        logo: "/partners/d4b.png",  
        darkLogo: "/partners/d4w.png", 
        website: "https://example.com",
      },
    ],
  },
  {
    title: "Venue Partners",
    partners: [
      {
        name: "Venue A",
        logo: "/partners/cgcjd.png",
        darkLogo: "/partners/cgcj.png",
        website: "https://example.com",
      },
    ],
  },
  {
    title: "Platinum Sponsors",
    partners: [
      {
        name: "Platinum 1",
        logo: "/partners/d4b.png",
        darkLogo: "/partners/d4w.png",
        website: "https://example.com",
      },
      {
        name: "Platinum 2",
        logo: "/partners/d4b.png",
        darkLogo: "/partners/d4w.png",
        website: "https://example.com",
      },
      {
        name: "Platinum 2",
        logo: "/partners/d4b.png",
        darkLogo: "/partners/d4w.png",
        website: "https://example.com",
      },
      {
        name: "Platinum 2",
        logo: "/partners/d4b.png",
        darkLogo: "/partners/d4w.png",
        website: "https://example.com",
      },
      {
        name: "Platinum 2",
        logo: "/partners/d4b.png",
        darkLogo: "/partners/d4w.png",
        website: "https://example.com",
      },
    ],
  },
  {
    title: "Community Partners",
    partners: [
      {
        name: "Community 1",
        logo: "/partners/d4b.png",
        darkLogo: "/partners/d4w.png",
        website: "https://example.com",
      },
    ],
  },
  {
    title: "Ticketing Partner",
    partners: [
      {
        name: "Devfolio",
        logo: "/partners/d4b.png",
        darkLogo: "/partners/d4w.png",
        website: "https://example.com",
      },
    ],
  },
  // Add other sections as needed
];

// Component for rendering partner images
const PartnerImage = ({ partner }: { partner: Partner }) => {
  return (
    <>
      <Image
        src={partner.logo}
        alt={partner.name}
        width={150}  // Fixed width for images
        height={100} // Fixed height for images
        className="object-contain p-4 transition-transform duration-300 group-hover:scale-110 dark:hidden"
        onError={(e) => {
          (e.target as HTMLImageElement).src = "https://via.placeholder.com/150"; // Placeholder image if the original image fails
        }}
      />
      <Image
        src={partner.darkLogo}
        alt={partner.name}
        width={150}  // Fixed width for dark logo
        height={100} // Fixed height for dark logo
        className="object-contain p-4 transition-transform duration-300 group-hover:scale-110 hidden dark:block"
        onError={(e) => {
          (e.target as HTMLImageElement).src = "https://via.placeholder.com/150"; // Placeholder if the dark logo fails
        }}
      />
    </>
  );
};

// Component for rendering a section of partners
const PartnerSection = ({ title, partners }: PartnerSection) => (
  <div className="mb-16">
    <h2 className="text-3xl font-bold mb-8 text-center">
      <span className="bg-gradient-to-r from-squidPink via-purple-500 to-squidTeal bg-clip-text text-transparent">
        {title}
      </span>
    </h2>
    <div className="flex flex-row flex-wrap justify-center">
      {partners.map((partner, index) => (
        <div
          key={index}
        >
          <div className="px-6 flex justify-center items-center">
            <a
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-video relative"
            >
              <PartnerImage partner={partner} />
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Main component rendering all partner sections
export default function PartnersPage() {
  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-squidPink via-purple-500 to-squidTeal bg-clip-text text-transparent">
              Our Partners & Sponsors
            </span>
          </h1>
          <div className="h-1 w-32 mx-auto mt-4 bg-gradient-to-r from-squidPink to-squidTeal rounded-full"></div>
        </div>

        {partnersData.map((section, index) => (
          <PartnerSection
            key={index}
            title={section.title}
            partners={section.partners}
          />
        ))}
      </main>
    </div>
  );
}
