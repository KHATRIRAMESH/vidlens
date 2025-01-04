import React from 'react';
import Header from '../Components/header';
import Footer from '../Components/footer';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-400 via-yellow-500 to-green-600 text-white relative overflow-hidden">
      <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-md text-gray-800 space-y-6 z-10">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-center">
          Contact <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">Vidlens</span>
        </h1>
        <p className="text-lg leading-relaxed">
          We would love to hear from you! Whether you have a question about our services, need assistance, or just want to provide feedback, feel free to reach out to us.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" rows="4"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
            Send Message
          </button>
        </form>
      </div>
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-blue-300 rounded-full blur-2xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-green-300 rounded-full blur-3xl opacity-30 animate-bounce"></div>
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-yellow-300 rounded-full blur-2xl opacity-40 animate-spin-slow"></div>
      <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-red-300 rounded-full blur-2xl opacity-40 animate-ping"></div>
    </div>
  );
}

export default Contact;
