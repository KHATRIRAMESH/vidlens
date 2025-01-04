import React from 'react';
import Header from '../Components/header';
import Footer from '../Components/footer';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 text-white relative overflow-hidden">
      <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-md text-gray-800 space-y-6 z-10">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-center">
          About <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">Vidlens</span>
        </h1>
        <p className="text-lg leading-relaxed">
          Vidlens is an innovative platform that leverages the power of artificial intelligence to analyze videos effortlessly. Our mission is to provide users with insightful and actionable data from their video content, making it easier to understand and utilize.
        </p>
        <p className="text-lg leading-relaxed">
          Our team is composed of experts in AI, machine learning, and video processing, dedicated to delivering the best possible experience for our users. We continuously strive to improve our technology and expand our capabilities to meet the evolving needs of our audience.
        </p>
        <p className="text-lg leading-relaxed">
          Thank you for choosing Vidlens. We are excited to help you unlock the full potential of your video content.
        </p>
      </div>
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-300 rounded-full blur-2xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-purple-300 rounded-full blur-3xl opacity-30 animate-bounce"></div>
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-blue-300 rounded-full blur-2xl opacity-40 animate-spin-slow"></div>
      <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-green-300 rounded-full blur-2xl opacity-40 animate-ping"></div>
    </div>
  );
}

export default About;
