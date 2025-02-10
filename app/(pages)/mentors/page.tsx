// "use client"

// import { useState } from 'react';
// import Image from 'next/image';
// import { Mentor } from '@/types';

// const mentors: Mentor[] = [
//   {
//     name: "Frontman",
//     expertise: "software Engineer",
//     designation: "software Engineer at Google",
//     bio: "Frontman is a software Engineer by profession having 4+ years of experience in the corporate field. Learning new technology and implementing them is his goal. Along with his daily life, he also tries to give back to society by sharing information with peers.",
//     image: "/mentors/frontman.jpg",
//     connect: "https://linkedin.com/in/Frontman"
//   },
//   // Add more mentors as needed
// ];

// export default function MentorsPage() {
//   const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);

//   const openModal = (mentor: Mentor) => setSelectedMentor(mentor);
//   const closeModal = () => setSelectedMentor(null);

//   return (
//     <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
//       {/* <h1 className="text-4xl font-bold text-center text-squidPink mb-12">Game Masters</h1> */}
      
//         {/* Header */}
//         <div className="mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-center">
//             <span className="bg-gradient-to-r from-squidPink via-purple-500 to-squidTeal bg-clip-text text-transparent">
//               Game Masters
//             </span>
//           </h1>
//           <div className="h-1 w-32 mx-auto mt-4 bg-gradient-to-r from-squidPink to-squidTeal rounded-full"></div>
//         </div>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {mentors.map((mentor, index) => (
//           <div 
//             key={index} 
//             className="bg-[#249f9c] rounded-lg p-6 cursor-pointer" 
//             onClick={() => openModal(mentor)}
//           >
//             <div className="relative h-48 w-48 mx-auto mb-4 rounded-full overflow-hidden">
//               <Image
//                 src={mentor.image}
//                 alt={mentor.name}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <h3 className="text-xl font-bold text-white text-center">{mentor.name}</h3>
//             <p className="text-squidTeal text-center">{mentor.expertise}</p>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {selectedMentor && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-8 relative">
//             {/* Close Button */}
//             <button 
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
//               onClick={closeModal}
//             >
//               &#x2715;
//             </button>

//             <div className="flex items-center gap-6">
//               {/* Profile Image */}
//               <div className="relative h-24 w-24 rounded-full overflow-hidden">
//                 <Image
//                   src={selectedMentor.image}
//                   alt={selectedMentor.name}
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               {/* Details */}
//               <div>
//                 <h3 className="text-2xl font-bold">{selectedMentor.name}</h3>
//                 <p className="text-gray-600">{selectedMentor.designation}</p>
//                 <a 
//                   href={selectedMentor.connect} 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="text-blue-500 hover:underline inline-flex items-center mt-2"
//                 >
//                   LinkedIn
//                 </a>
//               </div>
//             </div>

//             {/* Bio */}
//             <p className="mt-6 text-gray-700">{selectedMentor.bio}</p>

//             {/* Close Button at Bottom */}
//             <button 
//               className="mt-6 px-6 py-2 bg-squidPink text-white rounded-lg hover:bg-gray-700"
//               onClick={closeModal}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }








"use client"

import { useState } from 'react';
import Image from 'next/image';
import { Mentor } from '@/types';

const mentors: Mentor[] = [
  {
    name: "Pranav Kumar Verma",
    expertise: "Web , Backend , Database , Cloud, AI",
    designation: "Associate Staff Engineer",
    bio: "Innovative IT professional with a proven track record of over 7 years in the industry, fueling business success through cutting-edge solutions. My expertise lies in Microsoft technologies, including MVC, NET Core, and Azure, coupled with a solid grasp of frontend technologies like Angular and React. I thrive on automating processes to streamline operations and enhance efficiency, utilizing a range of frameworks such as C# Selenium, Protractor, Cypress, and Mocha. ",
    image: "/mentors/pranv kumar.jpg",
    connect: "https://www.linkedin.com/in/pranav-kumar-verma/"
  },
  {
    name: "Ashwani Kumar ",
    expertise: "Cybersecurity ",
    designation: "Security Operation Analyst ",
    bio: "Security Operation Analyst who detects and respond to cyber attacks. And research the latest tactics and techniques of APT Groups, thus helps in maintaining the secure infrastructure ,Apart from that, I am cybersec speaker who loves to share knowledge with students and cybersec ethusiast. ",
    image: "/mentors/ashwani.png",
    connect: "https://www.linkedin.com/in/akumar07/"
  },
  {
    name: "Amanpreet Kaur ",
    expertise: "Android ",
    designation: "Mobile App Developer ",
    bio: "Amanpreet Kaur is an experienced Android Application Developer with over six years of expertise in creating impactful applications. A Google Cohort 23 Graduate, Women Techmaker Ambassador, and core team member of GDG Jalandhar, she is deeply passionate about community building and knowledge-sharing. Amanpreet has delivered tech talks on various topics at universities, colleges, and major tech events. As a mentor, she is excited to guide participants in building innovative solutions during this hackathon.",
    image: "/mentors/amanpreet.png",
    connect: "https://www.linkedin.com/in/kauramanp/"
  },
  {
    name: "Sajal jain",
    expertise: "Android ",
    designation: "Senior development engineer - 2 (Android )",
    bio: "Hi, I'm sajal senior android developer at astrotalk .Turning ideas into smooth, high-performance Android apps.",
    image: "/mentors/sajal jain.jpg",
    connect: "https://www.linkedin.com/in/sajal-jain-340b61161/"
  },
  {
    name: "Pranav Singh Parmar",
    expertise: "iOS, Flutter, Android & React Native",
    designation: "Mobile App Developer",
    bio: "Experienced Mobile App Developer proficient in iOS, Android, Flutter, and React Native. Skilled in crafting efficient code with a focus on proper implementation and thorough documentation. A passionate Technical Speaker who enjoys sharing knowledge and insights with peers and aspiring developers. Committed to staying abreast of the latest updates and advancements in the field, ensuring the delivery of cutting-edge solutions.",
    image: "/mentors/pranav singh.jpg",
    connect: "https://www.linkedin.com/in/pranav-singh-parmar/"
  },
  {
    name: "Simar Preet Singh",
    expertise: "Web Technologies (React, Angular, Firebase, Nodejs, Ionic and more)",
    designation: "Front-end Engineer",
    bio: "Meet Simar Preet Singh — Engineer, Community Builder & Sustainability Advocate! 🚀With 6+ years in software engineering, Simar Preet has built cutting-edge solutions for clients across the UK, US, Australia, and Germany—all from the vibrant tech hub of Mohali, Punjab. Specializing in React.js, Angular, Node.js, Firebase, and more, he turns ideas into reality with seamless digital experiences.Currently at Redaptive Inc., he’s crafting smart tools that cut energy costs and drive sustainability. But his impact doesn’t stop at coding—he’s also the organizer of GDG Jalandhar, empowering Punjab’s tech community through workshops, conferences, and mentorship.A firm believer that tech is the key to a sustainable and thriving future, he’s always up for collaborations, conversations, and coffee chats! ☕📩 Let’s connect and build something amazing! 🚀",
    image: "/mentors/simarpreet.jpg",
    connect: "https://www.linkedin.com/in/programmersingh/"
  },
  {
    name: "Loveleen Kaur",
    expertise: "Android",
    designation: "Senior Software Engineer ",
    bio: "Loveleen Kaur, a bundle of positivity and happiness, this tech-savvy gir l loves mountains and works wonders with technology. She is working as Senior Engineer with 6 years of experience. She is MongoDBUser Group Chandigarh Leader and organizer of TFUG Delhi. She is WTM Ambassador and Google Android Educator. Hailing from the technology field, she loves logic, but also has a passion for creativity. In her free time, She loves to mentor people to help them learn and grow in their career..",
    image: "/mentors/lovleen.jpg",
    connect: "https://www.linkedin.com/in/loveleen-kaur/"
  },
  {
    name: "Chhavi Garg",
    expertise: "Web, AI, AR, VR",
    designation: "Co-Founder",
    bio: "Chhavi Garg is the co-founder of Arexa and Bharat XR, specializing in AR, VR, and immersive technologies. She has led multiple XR initiatives, organized tech events, and collaborated with brands like Snapchat to create innovative digital experiences..",
    image: "/mentors/chhavi.jpg",
    connect: "https://www.linkedin.com/in/chhavigg/"
  },
  {
    name: "Veer Pratap Singh",
    expertise: "Full stack , web3",
    designation: "Tech Lead",
    bio: "As a Team Lead at Antier Solutions, I provide architectural guidance, solve complex technical challenges, and make informed decisions for software projects. I also mentor and coach team members on technical skills and career development, and contribute to performance evaluations and career growth plans. With a Bachelor of Engineering degree in Computer Science and multiple certifications in web development, I have built production-ready applications for startups and local businesses using React, Next, Node, Express, MongoDB, and other technologies. I am also the founder of JS Punjab, a community of JavaScript enthusiasts, and a core team member of Google Developer Groups Jalandhar, where I share my knowledge and experience as a tech speaker. I am passionate about learning new skills, collaborating with cross-functional teams, and delivering high-quality solutions.",
    image: "/mentors/veerpratap.jpg",
    connect: "https://www.linkedin.com/in/veer-pratap-singh/"
  },
  {
    name: "Udayveer Singh ",
    expertise: "Blockchain, Web3",
    designation: "Blockchain developer ",
    bio: "A senior blockchain developer with 3+ years of experience in developing web3 products. He has consulted multiple clients to make plans and architecture for their products. .",
    image: "/mentors/udayveer.png",
    connect: "https://www.linkedin.com/in/udayveer-singh/"
  },
  // Add more mentors as needed
];

export default function MentorsPage() {
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);

  const openModal = (mentor: Mentor) => setSelectedMentor(mentor);
  const closeModal = () => setSelectedMentor(null);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      {/* <h1 className="text-4xl font-bold text-center text-squidPink mb-12">Game Masters</h1> */}
      
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            <span className="bg-gradient-to-r from-squidPink via-purple-500 to-squidTeal bg-clip-text text-transparent">
              Game Masters
            </span>
          </h1>
          <div className="h-1 w-32 mx-auto mt-4 bg-gradient-to-r from-squidPink to-squidTeal rounded-full"></div>
        </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mentors.map((mentor, index) => (
          <div 
            key={index} 
            className="bg-[#249f9c] rounded-lg p-6 cursor-pointer" 
            onClick={() => openModal(mentor)}
          >
            <div className="relative h-48 w-48 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src={mentor.image}
                alt={mentor.name}
                fill
                className="object-cover"

              />
            </div>
            <h3 className="text-xl font-bold text-white text-center">{mentor.name}</h3>
            <p className="text-squidTeal text-center">{mentor.expertise}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedMentor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-8 relative">
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
              onClick={closeModal}
            >
              &#x2715;
            </button>

            <div className="flex items-center gap-6">
              {/* Profile Image */}
              <div className="relative h-24 w-24 rounded-full overflow-hidden">
                <Image
                  src={selectedMentor.image}
                  alt={selectedMentor.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Details */}
              <div>
                <h3 className="text-2xl font-bold">{selectedMentor.name}</h3>
                <p className="text-gray-600">{selectedMentor.designation}</p>
                <a 
                  href={selectedMentor.connect} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline inline-flex items-center mt-2"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Bio */}
            <p className="mt-6 text-gray-700">{selectedMentor.bio}</p>

            {/* Close Button at Bottom */}
            <button 
              className="mt-6 px-6 py-2 bg-squidPink text-white rounded-lg hover:bg-gray-700"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

