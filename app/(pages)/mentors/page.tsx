"use client"

import { useState } from 'react';
import Image from 'next/image';
import { Mentor } from '@/types';

const mentors: Mentor[] = [
  {
    name: "Frontman",
    expertise: "software Engineer",
    designation: "software Engineer at Google",
    bio: "Frontman is a software Engineer by profession having 4+ years of experience in the corporate field. Learning new technology and implementing them is his goal. Along with his daily life, he also tries to give back to society by sharing information with peers.",
    image: "/mentors/frontman.jpg",
    linkedin: "https://linkedin.com/in/Frontman"
  },
  // Add more mentors as needed
];

export default function MentorsPage() {
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);

  const openModal = (mentor: Mentor) => setSelectedMentor(mentor);
  const closeModal = () => setSelectedMentor(null);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24 relative">
      <h1 className="text-4xl font-bold text-center text-squidPink mb-12">Game Masters</h1>

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
                  href={selectedMentor.linkedin} 
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

