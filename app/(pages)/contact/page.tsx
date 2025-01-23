import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      {/* <h1 className="text-4xl font-bold text-squidPink mb-12 text-center">Contact VIPs</h1> */}

      {/* Header */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          <span className="bg-gradient-to-r from-squidPink via-purple-500 to-squidTeal bg-clip-text text-transparent">
            Contact VIPs
          </span>
        </h1>
        <div className="h-1 w-32 mx-auto mt-4 bg-gradient-to-r from-squidPink to-squidTeal rounded-full"></div>
      </div>

      <div className="max-w-2xl mx-auto">
        <ContactForm />
      </div>
    </main>
  )
}