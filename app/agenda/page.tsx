import { AgendaItem } from '@/types'

const agenda: AgendaItem[] = [
  {
    time: "09:00",
    event: "Red Light, Green Light",
    description: "Opening ceremony and team formation"
  },
  // Add more agenda items
]

export default function AgendaPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24 relative">
      <h1 className="text-4xl font-bold text-squidPink mb-12 text-center">Game Schedule</h1>
      
      <div className="space-y-6">
        {agenda.map((item, index) => (
          <div key={index} className="bg-[#249f9c] rounded-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="text-squidTeal font-mono text-xl mb-2 md:mb-0">{item.time}</div>
              <div className="flex-grow md:ml-6">
                <h3 className="text-xl font-bold text-white">{item.event}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
