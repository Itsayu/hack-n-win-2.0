import HeroSectionBread from '@/components/HeroSectionBread'
import { AgendaItem } from '@/types'
import { Clock } from 'lucide-react'

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
  },
  // Add more agenda items
]

export default function AgendaPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24 relative">
      <div className='sm:grid grid-cols-6 pt-12'>
        <h1 className="text-4xl font-bold dark:text-squidPink text-squidPink py-4 text-center col-span-2">Game Schedule /</h1>

        <div className="col-span-4">
          {/* {agenda.map((item, index) => (
          <div key={index} className="bg-[#249f9c] rounded-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="text-squidTeal font-mono text-xl mb-2 md:mb-0">{item.time}</div>
              <div className="flex-grow md:ml-6">
                <h3 className="text-xl font-bold text-white">{item.event}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          </div>
        ))} */}

          <div className='dark:text-white text-black'>
            {agenda.map((prop, i) => {
              return (
                <div key={i} className='pt-4'>
                  <ItemCard time={prop.time} date={prop.date} miniTitle={prop.miniTitle} event={prop.event} description={prop.description}/>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}


function ItemCard({ time, date, miniTitle, event, description }: AgendaItem) {
  return (
    <div className='flex flex-col md:flex-row items-start justify-evenly p-4 py-6 rounded-md dark:border-squidTeal border-squidPink border-[4px] backdrop-blur-md'>
      <div className='flex flex-col gap-1'>
        <div className='flex items-center gap-2'>
          <Clock className='dark:text-squidTeal text-black' />
          <p className='md:text-[22px] text-[18] font-mono'>{`(${time})`}<span> {date}</span></p>
        </div>
        <p className='font-light text-squidPink md:text-[20px] text-[16px]'>{miniTitle}</p>
        <h1 className='font-bold text-2xl'>{event}</h1>
      </div>
      <div className='max-w-[350px] md:pt-0 pt-2'>
        <p className='text-[#fffffff3] font-light dark:text-gray-300 text-black text-[18px]'>{description}</p>
      </div>
    </div>
  )
}