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
        website: "https://in.linkedin.com/company/d4community",
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
        website: "https://www.cgc.ac.in/",
      },
    ],
  },
  {
    title: "Platinum Sponsors",
    partners: [
      {
        name: "TechRBM",
        logo: "/partners/techrbm.png",
        darkLogo: "/partners/techrbm.png",
        website: "https://techrbm.com/",
      },
      {
        name: "appwrite",
        logo: "/partners/appwrite.png",
        darkLogo: "/partners/appwritew.png",
        website: "https://appwrite.io/",
      },
      {
        name: "CodeCrafter",
        logo: "/partners/code.png",
        darkLogo: "/partners/code.png",
        website: "https://codecrafters.io/",
      },
    ],
  },
  {
    title: "Gold Sponsors",
    partners: [
      {
        name: ".xyz",
        logo: "/partners/xyz.png",
        darkLogo: "/partners/xyz.png",
        website: "https://gen.xyz/",
      },
      
    ],
  },
  {
    title: "silver Sponsors",
    partners: [
      {
        name: "MongoDB",
        logo: "/partners/mongo.png",
        darkLogo: "/partners/mongo.png",
        website: "https://www.mongodb.com/community/user-groups/chandigarh/",
      },
      
    ],
  },
  {
    title: "Bronze Sponsors",
    partners: [
    
      {
        name: "Interview Buddy",
        logo: "/partners/interviewbuddy.png",
        darkLogo: "/partners/interviewbuddy.png",
        website: "https://interviewbuddy.net/",
      },
      {
        name: "Balsamiq",
        logo: "/partners/balsamiq.jpg",
        darkLogo: "/partners/balsamiq.jpg",
        website: "https://balsamiq.com/",
      },
      {
        name: "Proto.io",
        logo: "/partners/protoio.png",
        darkLogo: "/partners/protoio.png",
        website: "https://proto.io/",
      },
     
      
    ],
  },
  {
    title: "Other Sponsors",
    partners: [
      {
        name: "APTOPS",
        logo: "/partners/aptos.png",
        darkLogo: "/partners/aptos.png",
        website: "https://aptosfoundation.org/",
      },
      {
        name: "ETHIndia",
        logo: "/partners/eth.png",
        darkLogo: "/partners/eth.png",
        website: "https://x.com/ETHIndiaco",
      },
      {
        name: "polygon",
        logo: "/partners/polygon.png",
        darkLogo: "/partners/polygon.png",
        website: "https://polygon.technology/",
      },
      
    ],
  },
  
  {
    title: "Community Partners",
    partners: [
      {
        name: "GDG Jalandhar",
        logo: "/partners/gdgl.png",
        darkLogo: "/partners/gdgl.png",
        website: "https://gdg.community.dev/GDG-Jalandhar",
      }, {
        name: "DevLearn Community",
        logo: "/partners/dev.png",
        darkLogo: "/partners/dev.png",
        website: "https://www.instagram.com/devlearn_com/",
      },
      {
        name: "Gniot Open Developer Community",
        logo: "/partners/gnit.png",
        darkLogo: "/partners/gnit.png",
        website: "https://www.commudle.com/communities/gniot-open-developer-community",
      },
      {
        name: "GFG Student chapter CGCJ",
        logo: "/partners/gfgcgcj.png",
        darkLogo: "/partners/gfgcgcj.png",
        website: "https://www.instagram.com/gfg_sc_cgcj?igsh=bWlvbjdjcXZxNXIy",
      },
      
      
      
    ],
  },
  {
    title: "",
    partners: [
      {
        name: "Papaya Coders",
        logo: "/partners/papaya.png",
        darkLogo: "/partners/papaya.png",
        website: "https://papayacoders.in",
      },
      {
        name: "Owl Code ",
        logo: "/partners/owl.jpg",
        darkLogo: "/partners/owl.jpg",
        website: "",
      },
      
      {
        name: "Alexa Developers Community CU",
        logo: "/partners/alexa.png",
        darkLogo: "/partners/alexa.png",
        website: "alexadev.cu",
      },
      {
        name: "Open Source Chandigarh",
        logo: "/partners/open.png",
        darkLogo: "/partners/open.png",
        website: "https://in.linkedin.com/company/open-source-chandigarh",
      },
      
     
     
     
    ],
  },
  {
    title: "",
    partners: [
      {
        name: "Student Nexus ",
        logo: "/partners/student.png",
        darkLogo: "/partners/student.png",
        website: "https://bento.me/student-nexus",
      },
      {
        name: "GDG on Campus IIMT ",
        logo: "/partners/iimt.jpg",
        darkLogo: "/partners/iimt.jpg",
        website: "https://www.instagram.com/gdgoncampus_iimt?igsh=d3B0Y2wyaHhkeHdq",
      },
      {
        name: "C Square",
        logo: "/partners/csuqare.png",
        darkLogo: "/partners/csuqare.png",
        website: "https://www.linkedin.com/company/csquare-club/",
      },
      {
        name: "Eloquence Consortium",
        logo: "/partners/ec.png",
        darkLogo: "/partners/ec.png",
        website: "https://www.linkedin.com/company/eloquence-consortium-cu/",
      },
    ],
  },
  {
    title: "",
    partners: [
      {
        name: "TFUG Jalandhar",
        logo: "/partners/tufg.png",
        darkLogo: "/partners/tufg.png",
        website: "https://www.commudle.com/communities/tfug-jalandhar",
      },
      {
        name: "theDevArmy ",
        logo: "/partners/devarmy.png",
        darkLogo: "/partners/devarmy.png",
        website: "https://thedevarmy.com/socials",
      },
      {
        name: "WebForge ",
        logo: "/partners/WebForge.png",
        darkLogo: "/partners/WebForge.png",
        website: "https://bento.me/webforge",
      },
      {
        name: "Coding Bits ",
        logo: "/partners/coding.png",
        darkLogo: "/partners/coding.png",
        website: "https://www.linkedin.com/company/coding-bits/",
      },
    ],
  },
  {
    title: "",
    partners: [
      {
        name: "BFCET Hack",
        logo: "/partners/d4b.png",
        darkLogo: "/partners/BFCET.jpg",
        website: "https://www.instagram.com/bfcethack/",
      },
      {
        name: "GDG Ludhiana",
        logo: "/partners/gdglu.png",
        darkLogo: "/partners/gdglu.png",
        website: "http://gdg.community.dev/gdg-ludhiana",
      },
      {
        name: "GeeksForGeeks SRMIST Delhi-NCR Chapter",
        logo: "/partners/gfg.png",
        darkLogo: "/partners/gfg.png",
        website: "https://www.srmist-ncr-gfg.club/",
      },
      {
        name: "The Wiztron Club",
        logo: "/partners/wiztron.jpg",
        darkLogo: "/partners/wiztron.jpg",
        website: "",
      },
      
    ],
  },
  {
    title: "Incubation Partner",
    partners: [
      {
        name: "VentureNest:CGC Jhanjeri TBI Assosiation",
        logo: "/partners/venture.png",
        darkLogo: "/partners/venture.png",
        website: "https://www.linkedin.com/company/venturenest-cgc-jhanjeri-tbi-association?trk=public_post_feed-actor-name",
      },
      
    ],
  },
  {
    title: "Education Partner",
    partners: [
      {
        name: "Gane Acadmey",
        logo: "/partners/game.png",
        darkLogo: "/partners/game.png",
        website: "https://example.com",
      },
      
    ],
  },
  
  
  
      
 
  
  {
    title: "Ticketing Partner",
    partners: [
      {
        name: "Devfolio",
        logo: "/partners/devfolio.jpeg",
        darkLogo: "/partners/devfolio.jpeg",
        website: "https://devfolio.co/discover",
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
    <div className="flex flex-row flex-wrap justify-center items-center">
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
