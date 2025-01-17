import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24 relative">
      <h1 className="text-4xl font-bold text-squidPink mb-12 text-center">Contact VIPs</h1>
      
      <div className="max-w-2xl mx-auto">
        <ContactForm />
      </div>
    </main>
  )
}