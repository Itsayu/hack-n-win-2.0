'use client'

import TeamCard from "@/components/TeamCard";
import { useState } from "react";
import { Mentor } from '@/types';
import Image from "next/image";

const team: Mentor[] = [
    {
        name: "Dhairya Ahuja",
        expertise: "Java developer ",
        designation: "Social Media Team Lead",
        bio: "Java Developer",
        image: "/team/dhairya.png",
        connect: "https://www.linkedin.com/in/dhairya-ahuja-1b3b74286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        name: "Ayush Anshu",
        expertise: "Web Developer",
        designation: "Web Team Lead",
        bio: "your friendly neighborhood web developer",
        image: "/team/ayushanshu.png",
        connect: "https://portfolio-ayush24k.vercel.app/"
    },
    {
        name: "Devansh Srivastava",
        expertise: "DSA",
        designation: "Management Lead",
        bio: "Devansh is a passionate and self-motivated individual currently in the final year of graduation, with a strong foundation in Python and experience working with NoSQL databases. Proficient in Python frameworks like Django, with hands-on knowledge of PHP and other backend technologies. Currently serving as the Management Lead at D4 Community, showcasing strong managerial skills and driving initiatives focused on community growth and collaboration. A keen learner with a curiosity to explore and adapt to new technologies, driven to solve problems and build efficient solutions.",
        image: "/team/devansh.png",
        connect: "www.linkedin.com/in/devansh-srivastava-95a343204"
    },
    {
        name: "Bhumika Varshney",
        expertise: "DSA",
        designation: "Social Media Team Lead",
        bio: "A passionate and motivated second-year B.Tech Computer Science student with fundamental skills inprogramming and a keen interest in software engineering, seeking an internship opportunity in Google's STEP program to further develop technical skills and gain hands-on experience in software developm",
        image: "/team/bhumika.png",
        connect: "https://www.linkedin.com/in/bhumika-varshney-90ba64295"
    },
    {
        name: "Mukul",
        expertise: "Web Development",
        designation: "Web Dev co-lead",
        bio: "A passionate tech enthusiast skilled in React.js, problem-solving in C++, and exploring the realms of AI and ML.Driven to innovate, learn, and contribute to the tech community through impactful projects and solutions.",
        image: "/team/mukul.png",
        connect: "https://www.linkedin.com/in/cloudmukul?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        name: "Qazi Zaid",
        expertise: "Graphic Designing",
        designation: "Graphic Team Lead",
        bio: "A passionate tech enthusiast skilled in React.js, problem-solving in C++, and exploring the realms of AI and ML.Driven to innovate, learn, and contribute to the tech community through impactful projects and solutions.",
        image: "/team/default.png",
        connect: "https://www.linkedin.com/in/cloudmukul?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        name: "Bhargav Reddy",
        expertise: "Web Development",
        designation: "Web Team",
        bio: "I’m Bijjam Madhana Bhargav Reddy, a third-year Computer Science Engineering student at Chandigarh University and a Core Team Member of the D4 Community since September 2023. As a web developer, I specialize in creating user-centric and innovative web solutions using the MERN stack and modern design tools.",
        image: "/team/bhargav.png",
        connect: "https://www.linkedin.com/in/bijjam-madhana-bhargav-reddy-087806249"
    },
    {
        name: "Devishi Aggarwal ",
        expertise: "",
        designation: "Campus Lead CU",
        bio: "Campus lead of D4 community , CU",
        image: "/team/devishi.png",
        connect: "https://www.linkedin.com/in/devishiaggarwal"
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
                            Core Team
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
                            <div className="relative h-28 w-28 mx-auto mb-4 rounded-full overflow-hidden dark:border-squidTeal border-squidPink">
                                <Image
                                    src={team.image}
                                    alt={team.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-center">{team.name}</h3>
                            <p className="text-squidPink text-center">{team.designation}</p>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {selectedTeam && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
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
                                <div className="relative md:min-h-24 md:min-w-24 min-h-[100px] min-w-[100px] rounded-full overflow-hidden">
                                    <Image
                                        src={selectedTeam.image}
                                        alt={selectedTeam.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Details */}
                                <div>
                                    <h3 className="md:text-2xl text-md font-bold">{selectedTeam.name}</h3>
                                    <p className="text-gray-600 text-sm">{selectedTeam.designation} | {selectedTeam.expertise}</p>
                                    <a
                                        href={selectedTeam.connect}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline inline-flex items-center mt-2 text-sm"
                                    >
                                        Connect
                                    </a>
                                </div>
                            </div>

                            {/* Bio */}
                            <p className="mt-6 text-gray-700 text-[16px]">{selectedTeam.bio}</p>

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