import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/analyze");

  return (
    <div className="flex flex-col items-center justify-center  min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 text-white relative overflow-hidden">
      <div className="text-center p-6 md:p-12 lg:p-24 space-y-6 z-10">
        {/* Animated Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 animate-pulse">
          Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">Vidlens</span>
        </h1>
        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl mb-6 opacity-90">
          Analyze your videos effortlessly with the power of AI.
        </p>
        {/* Call-to-Action Button */}
        <button
          className="bg-white text-blue-500 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-200 hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
          onClick={handleClick}
        >
          Get Started
        </button>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-pink-300 rounded-full blur-2xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 bg-blue-300 rounded-full blur-3xl opacity-30 animate-bounce"></div>
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-purple-300 rounded-full blur-2xl opacity-40 animate-spin-slow"></div>
      <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-yellow-300 rounded-full blur-2xl opacity-40 animate-ping"></div>
    </div>
  );
}

export default LandingPage;
