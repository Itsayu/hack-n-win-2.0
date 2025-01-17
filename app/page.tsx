export default function Home() {
  return (
    <main className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center py-20">
          <h1 className="text-5xl md:text-7xl font-bold text-squidPink mb-6">
            HACK-N-WIN 2.0
          </h1>
          {/* <p className="text-xl md:text-2xl text-white mb-8">
            Will you survive the ultimate coding challenge?
          </p> */}
          <p className="text-xl md:text-2xl dark:text-white light:text-black mb-8">
            Will you survive the ultimate coding challenge?
          </p>

          <div className="space-x-4">
            <a
              href="/teams"
              className="bg-squidPink text-white px-8 py-3 rounded-lg hover:bg-pink-700"
            >
              Join Game
            </a>
            <a
              href="/agenda"
              className="border-2 border-squidTeal text-squidTeal px-8 py-3 rounded-lg hover:bg-squidTeal hover:text-white"
            >
              View Schedule
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 py-16">
          <div className="bg-[#249f9c] p-6 rounded-lg">
            <h3 className="text-white text-xl font-bold mb-4">
              ₩45,600,000
            </h3>
            <p className="text-squidTeal">Worth of prizes to be won</p>
          </div>
          <div className="bg-[#249f9c] p-6 rounded-lg">
            <h3 className="text-white text-xl font-bold mb-4">456</h3>
            <p className="text-squidTeal">Participating developers</p>
          </div>
          <div className="bg-[#249f9c] p-6 rounded-lg">
            <h3 className="text-white text-xl font-bold mb-4">6</h3>
            <p className="text-squidTeal">Challenging rounds</p>
          </div>
        </div>
      </div>
    </main>
  );
}
