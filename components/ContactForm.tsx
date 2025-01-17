'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 relative">
      <div>
        <label htmlFor="name" className="block dark:text-white light:text-black mb-2">Name</label>
        <input
          type="text"
          id="name"
          className="w-full bg-[#e2e2e2] dark:text-white light:text-black rounded-lg p-3 border border-gray-700 focus:border-squidTeal focus:ring-1 focus:ring-squidTeal"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block dark:text-white light:text-black mb-2">Email</label>
        <input
          type="email"
          id="email"
          className="w-full bg-[#e2e2e2] dark:text-white light:text-black rounded-lg p-3 border border-gray-700 focus:border-squidTeal focus:ring-1 focus:ring-squidTeal"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block dark:text-white light:text-black mb-2">Message</label>
        <textarea
          id="message"
          rows={5}
          className="w-full bg-[#e2e2e2] dark:text-white light:text-black rounded-lg p-3 border border-gray-700 focus:border-squidTeal focus:ring-1 focus:ring-squidTeal"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-squidPink text-white py-3 rounded-lg hover:bg-pink-700"
      >
        Send Message
      </button>
    </form>
  )
}