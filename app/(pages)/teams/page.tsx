'use client'

import TeamCard from "@/components/TeamCard";
import { useState } from "react";
import { Mentor } from '@/types';
import Image from "next/image";

const team: Mentor[] = [
    {
        name: "Ayush Anshu",
        expertise: "Nigadga Engineer",
        designation: "Web Team Lead",
        bio: "Frontman is a software Engineer by profession having 4+ years of experience in the corporate field. Learning new technology and implementing them is his goal. Along with his daily life, he also tries to give back to society by sharing information with peers.",
        image: "/team/naruto.png",
        linkedin: "https://linkedin.com/in/Frontman"
    },
    {
        name: "Ayush Anshu",
        expertise: "Niggadsa Engineer",
        designation: "Web Team Lead",
        bio: "Frontman is a software Engineer by profession having 4+ years of experience in the corporate field. Learning new technology and implementing them is his goal. Along with his daily life, he also tries to give back to society by sharing information with peers.",
        image: "/team/naruto.png",
        linkedin: "https://linkedin.com/in/Frontman"
    },
    {
        name: "Ayush Anshu",
        expertise: "Nasa Engineer",
        designation: "Web Team Lead",
        bio: "Frontman is a software Engineer by profession having 4+ years of experience in the corporate field. Learning new technology and implementing them is his goal. Along with his daily life, he also tries to give back to society by sharing information with peers.",
        image: "/team/naruto.png",
        linkedin: "https://linkedin.com/in/Frontman"
    },
    {
        name: "Ayush Andfs",
        expertise: "adas Engineer",
        designation: "Web Team Lead",
        bio: "Frontman is a software Engineer by profession having 4+ years of experience in the corporate field. Learning new technology and implementing them is his goal. Along with his daily life, he also tries to give back to society by sharing information with peers.",
        image: "/team/naruto.png",
        linkedin: "https://linkedin.com/in/Frontman"
    },
    
    // Add more mentors as needed
];

export default function TeamsPage() {
    const [selectedTeam, setSelectedTeam] = useState<Mentor | null>(null);

    const openModal = (mentor: Mentor) => setSelectedTeam(mentor);
    const closeModal = () => setSelectedTeam(null);
    return (
        <main className="min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-center">
                        <span className="bg-gradient-to-r from-squidPink via-purple-500 to-squidTeal bg-clip-text text-transparent">
                            Team
                        </span>
                    </h1>
                    <div className="h-1 w-32 mx-auto mt-4 bg-gradient-to-r from-squidPink to-squidTeal rounded-full"></div>
                </div>


                {/* <div className="flex">
                    <TeamCard />
                </div>                 */}

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    {team.map((team, index) => (
                        <div
                            key={index}
                            className="bg-black/5 rounded-xl border-[2px] dark:border-squidTeal/50 border-squidPink/50 hover:dark:border-squidPink/50 hover:border-squidTeal/50 transition-colors duration-300 backdrop-blur-lg border-squidPink dark:text-white text-black py-12 cursor-pointer"
                            onClick={() => openModal(team)}
                        >
                            <div className="relative h-28 w-28 mx-auto mb-4 rounded-full overflow-hidden border-[1px] dark:border-squidTeal border-squidPink">
                                <Image
                                    src={team.image}
                                    alt={team.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-center">{team.name}</h3>
                            <p className="text-squidPink text-center">{team.expertise}</p>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {selectedTeam && (
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
                                        src={selectedTeam.image}
                                        alt={selectedTeam.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Details */}
                                <div>
                                    <h3 className="text-2xl font-bold">{selectedTeam.name}</h3>
                                    <p className="text-gray-600">{selectedTeam.designation}</p>
                                    <a
                                        href={selectedTeam.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline inline-flex items-center mt-2"
                                    >
                                        LinkedIn
                                    </a>
                                </div>
                            </div>

                            {/* Bio */}
                            <p className="mt-6 text-gray-700">{selectedTeam.bio}</p>

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
            </div>
        </main>
    )
}