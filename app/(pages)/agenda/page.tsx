
import React from 'react';
import { Clock, Calendar, ArrowRight } from 'lucide-react';

type AgendaItem = {
  time: string;
  date: string;
  miniTitle: string;
  event: string;
  description: string;
};

const agenda: AgendaItem[] = [
  {
    time: "08:30AM",
    date: "March 1, 2025",
    miniTitle: "Registration",
    event: "Registration Start",
    description: ""
  },
  {
    time: "10:00AM",
    date: "March 1, 2025",
    miniTitle: "Registration",
    event: "Registration Closed",
    description: ""
  },
  {
    time: "10:00AM To 10:30AM ",
    date: "March 1, 2025",
    miniTitle: "Opening Ceremony",
    event: "Inauguration",
    description: ""
  },
  {
    time: "11:00AM To 12:30PM",
    date: "March 1, 2025",
    miniTitle: "1 Mentoring Round",
    event: "Mentoring Round",
    description: ""
  },
  {
    time: "1:00PM To 2:00PM",
    date: "March 1, 2025",
    miniTitle: "Break",
    event: "Lunch",
    description: ""
  },
  {
    time: "2:00PM To 8:00PM",
    date: "March 1, 2025",
    miniTitle: "Hack",
    event: "Hack",
    description: ""
  },
  {
    time: "8:00PM To 9:00",
    date: "March 1, 2025",
    miniTitle: "Break",
    event: "Dinner",
    description: ""
  },
  {
    time: "12:00AM",
    date: "March 2, 2025",
    miniTitle: "Evaluation Round",
    event: "Mentor Evaluation Round",
    description: ""
  },
  {
    time: "1:30AM",
    date: "March 2, 2025",
    miniTitle: "Break",
    event: "Refreshment",
    description: ""
  },
  {
    time: "8:00AM To 9:00PM",
    date: "March 2, 2025",
    miniTitle: "Break",
    event: "Breakfast",
    description: ""
  },
  {
    time: "10:30AM To 1:00PM",
    date: "March 2, 2025",
    miniTitle: "Auditorium Shortlisting",
    event: "Final Round",
    description: ""
  },
  {
    time: "1:30PM",
    date: "March 2, 2025",
    miniTitle: "Result",
    event: "Result Decleration ",
    description: " "
  },
  
];

function TimelineCard({ time, date, miniTitle, event, description, isLeft }: AgendaItem & { isLeft: boolean }) {
  return (
    <div className={`group relative flex w-full md:w-1/2 ${isLeft ? 'md:justify-end md:pr-8' : 'md:ml-auto md:pl-8'}`}>
      {/* Card Content */}
      <div className={`w-full transform transition-all duration-300 group-hover:scale-105 ${isLeft ? 'md:text-right' : ''}`}>
        <div className="bg-white/5 backdrop-blur-lg rounded-xl border dark:border-squidTeal/50 border-squidPink/50 p-6 hover:border-squidPink/50 transition-colors duration-300">
          {/* Header */}
          <div className={`flex flex-wrap gap-4 mb-4 ${isLeft ? 'md:justify-end' : ''}`}>
            <div className="flex items-center space-x-2 dark:text-squidTeal text-black">
              <Clock className="w-5 h-5 animate-pulse" />
              <span className="font-mono">{time}</span>
            </div>
            <div className="flex items-center space-x-2 text-squidPink">
              <Calendar className="w-5 h-5" />
              <span className="font-mono">{date}</span>
            </div>
          </div>

          {/* Title Section */}
          <div className={`space-y-2 ${isLeft ? 'md:flex md:flex-col md:items-end' : ''}`}>
            <div className="inline-block px-3 py-1 rounded-full bg-squidPink/20 text-squidPink text-sm font-medium">
              {miniTitle}
            </div>
            <h3 className="text-2xl font-bold text-squidPink transition-colors duration-300">
              {event}
            </h3>
          </div>

          {/* Description */}
          <div className="mt-4">
            <p className="dark:text-gray-300 text-black leading-relaxed">{description}</p>
          </div>

          {/* Hover Arrow */}
          {/* <div className={`absolute top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300
            ${isLeft ? 'left-4' : 'right-4'}`}>
            <ArrowRight className={`w-6 h-6 text-squidPink transform ${isLeft && 'rotate-180'}`} />
          </div> */}
        </div>
      </div>

      {/* Timeline dot */}
      {/* <div className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-squidPink 
           group-hover:scale-125 transition-transform duration-300
           md:left-auto md:right-0 "
           style={{ [isLeft ? 'right' : 'left']: '-12px' }}>
      </div> */}
      <div 
  className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-squidPink 
             group-hover:scale-125 transition-transform duration-300
             hidden md:block md:left-auto md:right-0`}
  style={{ [isLeft ? 'right' : 'left']: '-12px' }}>
</div>

    </div>
  );
}

export default function AgendaPage() {
  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            <span className="bg-gradient-to-r from-squidPink via-purple-500 to-squidTeal bg-clip-text text-transparent">
              Game Schedule
            </span>
          </h1>
          <div className="h-1 w-32 mx-auto mt-4 bg-gradient-to-r from-squidPink to-squidTeal rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line - visible only on md and up */}
          <div className="hidden md:block absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-squidPink via-squidTeal to-squidPink transform -translate-x-1/2"></div>

          {/* Mobile line - visible only below md */}
          <div className="md:hidden absolute left-4 top-0 w-0.5 h-full bg-gradient-to-b from-squidPink via-squidTeal to-squidPink"></div>

          {/* Cards */}
          <div className="space-y-8 relative">
            {agenda.map((item, index) => (
              <TimelineCard 
                key={index} 
                {...item} 
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}