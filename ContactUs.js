import React from 'react';

export default function ContactUs({ onLogout }) {
  return (
    <div className="max-w-lg mx-auto space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <button onClick={onLogout} className="text-sm text-red-600">
          Logout
        </button>
      </div>
      <p>We’d love to hear from you! Fill out the form below to get in touch.</p>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Your Email" className="w-full border p-2 rounded" />
        <textarea placeholder="Your Message" rows="4" className="w-full border p-2 rounded" />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Send Message
        </button>
      </form>
    </div>
  );
}
