// import HeroSectionBread from '@/components/HeroSectionBread'
// import { AgendaItem } from '@/types'
// import { Clock } from 'lucide-react'

// const agenda: AgendaItem[] = [
//   {
//     time: "09:00",
//     date: "01/03/2024",
//     miniTitle: "Opening Ceremony",
//     event: "Red Light, Green Light",
//     description: "Opening ceremony and team formation"
//   },
//   {
//     time: "09:00",
//     date: "March 2, 2025",
//     miniTitle: "Opening Ceremony",
//     event: "Red Light, Green Light",
//     description: "Opening ceremony and team formation"
//   },
//   {
//     time: "09:00",
//     date: "March 2, 2025",
//     miniTitle: "Opening Ceremony",
//     event: "Red Light, Green Light",
//     description: "Opening ceremony and team formation"
//   },
//   {
//     time: "09:00",
//     date: "March 2, 2025",
//     miniTitle: "Opening Ceremony",
//     event: "Red Light, Green Light",
//     description: "Opening ceremony and team formation"
//   },
//   // Add more agenda items
// ]

// export default function AgendaPage() {
//   return (
//     <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24 relative">
//       <div className='sm:grid grid-cols-6'>
//         <h1 className="text-4xl font-bold dark:text-squidPink text-squidPink py-4 text-center col-span-2">Game Schedule /</h1>

//         <div className="col-span-4">
//           {/* {agenda.map((item, index) => (
//           <div key={index} className="bg-[#249f9c] rounded-lg p-6">
//             <div className="flex flex-col md:flex-row md:items-center justify-between">
//               <div className="text-squidTeal font-mono text-xl mb-2 md:mb-0">{item.time}</div>
//               <div className="flex-grow md:ml-6">
//                 <h3 className="text-xl font-bold text-white">{item.event}</h3>
//                 <p className="text-gray-400">{item.description}</p>
//               </div>
//             </div>
//           </div>
//         ))} */}

//           <div className='dark:text-white text-black'>
//             {agenda.map((prop, i) => {
//               return (
//                 <div key={i} className='pt-4'>
//                   <ItemCard time={prop.time} date={prop.date} miniTitle={prop.miniTitle} event={prop.event} description={prop.description}/>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }


// function ItemCard({ time, date, miniTitle, event, description }: AgendaItem) {
//   return (
//     <div className='flex flex-col md:flex-row items-start justify-evenly p-4 py-6 rounded-md dark:border-squidTeal border-squidPink border-[4px] backdrop-blur-md'>
//       <div className='flex flex-col gap-1'>
//         <div className='flex items-center gap-2'>
//           <Clock className='dark:text-squidTeal text-black' />
//           <p className='md:text-[22px] text-[18] font-mono'>{`(${time})`}<span> {date}</span></p>
//         </div>
//         <p className='font-light text-squidPink md:text-[20px] text-[16px]'>{miniTitle}</p>
//         <h1 className='font-bold text-2xl'>{event}</h1>
//       </div>
//       <div className='max-w-[350px] md:pt-0 pt-2'>
//         <p className='text-[#fffffff3] font-light dark:text-gray-300 text-black text-[18px]'>{description}</p>
//       </div>
//     </div>
//   )
// }


// import React from 'react';
// import { Clock, Calendar, ChevronRight } from 'lucide-react';

// type AgendaItem = {
//   time: string;
//   date: string;
//   miniTitle: string;
//   event: string;
//   description: string;
// };

// const agenda: AgendaItem[] = [
//   {
//     time: "09:00",
//     date: "01/03/2024",
//     miniTitle: "Opening Ceremony",
//     event: "Red Light, Green Light",
//     description: "Opening ceremony and team formation"
//   },
//   {
//     time: "09:00",
//     date: "March 2, 2025",
//     miniTitle: "Opening Ceremony",
//     event: "Red Light, Green Light",
//     description: "Opening ceremony and team formation"
//   },
//   {
//     time: "09:00",
//     date: "March 2, 2025",
//     miniTitle: "Opening Ceremony",
//     event: "Red Light, Green Light",
//     description: "Opening ceremony and team formation"
//   },
//   {
//     time: "09:00",
//     date: "March 2, 2025",
//     miniTitle: "Opening Ceremony",
//     event: "Red Light, Green Light",
//     description: "Opening ceremony and team formation"
//   }
// ];

// function ItemCard({ time, date, miniTitle, event, description }: AgendaItem) {
//   return (
//     <div className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10">
//       <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
//       <div className="relative p-6 flex flex-col md:flex-row gap-6">
//         <div className="flex-shrink-0 md:w-48">
//           <div className="flex items-center gap-2 text-purple-400">
//             <Clock size={16} className="animate-pulse" />
//             <span className="font-mono text-sm">{time}</span>
//           </div>
          
//           <div className="flex items-center gap-2 mt-2 text-pink-400">
//             <Calendar size={16} />
//             <span className="font-mono text-sm">{date}</span>
//           </div>
          
//           <div className="mt-4">
//             <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white">
//               {miniTitle}
//             </span>
//           </div>
//         </div>

//         <div className="flex-grow">
//           <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
//             {event}
//           </h3>
          
//           <p className="mt-2 text-gray-400 dark:text-gray-300 text-sm md:text-base">
//             {description}
//           </p>
//         </div>

//         <div className="flex-shrink-0 self-center">
//           <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-pink-400 transform group-hover:translate-x-1 transition-all duration-300" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function AgendaPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b to-black text-white">
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
//         <div className="relative mb-12 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold">
//             <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
//               Game Schedule
//             </span>
//           </h1>
//           <div className="mt-4 text-gray-400">Your upcoming adventures await</div>
//         </div>

//         <div className="space-y-6">
//           {agenda.map((item, index) => (
//             <div key={index} 
//                  className="transform hover:-translate-y-1 transition-all duration-300"
//                  style={{
//                    animationDelay: `${index * 150}ms`,
//                    animation: 'fadeInUp 0.5s ease-out forwards'
//                  }}>
//               <ItemCard {...item} />
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }







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
    time: "09:00",
    date: "01/03/2024",
    miniTitle: "Opening Ceremony",
    event: "Red Light, Green Light",
    description: "Opening ceremony and team formation"
  },
  {
    time: "09:00",
    date: "March 2, 2025",
    miniTitle: "Opening Ceremony",
    event: "Red Light, Green Light",
    description: "Opening ceremony and team formation"
  },
  {
    time: "09:00",
    date: "March 2, 2025",
    miniTitle: "Opening Ceremony",
    event: "Red Light, Green Light",
    description: "Opening ceremony and team formation"
  },
  {
    time: "09:00",
    date: "March 2, 2025",
    miniTitle: "Opening Ceremony",
    event: "Red Light, Green Light",
    description: "Opening ceremony and team formation"
  }
];

function TimelineCard({ time, date, miniTitle, event, description, isLeft }: AgendaItem & { isLeft: boolean }) {
  return (
    <div className={`group relative flex w-full md:w-1/2 ${isLeft ? 'md:justify-end md:pr-8' : 'md:ml-auto md:pl-8'}`}>
      {/* Card Content */}
      <div className={`w-full transform transition-all duration-300 group-hover:scale-105 ${isLeft ? 'md:text-right' : ''}`}>
        <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-squidTeal/50 p-6 hover:border-squidPink/50 transition-colors duration-300">
          {/* Header */}
          <div className={`flex flex-wrap gap-4 mb-4 ${isLeft ? 'md:justify-end' : ''}`}>
            <div className="flex items-center space-x-2 text-squidTeal">
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
            <div className="inline-block px-3 py-1 rounded-full bg-squidTeal/20 text-squidTeal text-sm font-medium">
              {miniTitle}
            </div>
            <h3 className="text-2xl font-bold text-squidPink group-hover:text-white transition-colors duration-300">
              {event}
            </h3>
          </div>

          {/* Description */}
          <div className="mt-4">
            <p className="text-gray-300 leading-relaxed">{description}</p>
          </div>

          {/* Hover Arrow */}
          <div className={`absolute top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300
            ${isLeft ? 'left-4' : 'right-4'}`}>
            <ArrowRight className={`w-6 h-6 text-squidPink transform ${isLeft && 'rotate-180'}`} />
          </div>
        </div>
      </div>

      {/* Timeline dot */}
      <div className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-squidPink 
           group-hover:scale-125 transition-transform duration-300
           md:left-auto md:right-0 md:translate-x-1/2"
           style={{ [isLeft ? 'right' : 'left']: '-12px' }}>
      </div>
    </div>
  );
}

export default function AgendaPage() {
  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
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