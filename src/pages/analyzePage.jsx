import React, { useState } from 'react';
import VideoPlayer from '../Components/videoplayer';
import Header from '../Components/header';
import Footer from '../Components/footer';
// import './AnalyzePage.css';

const AnalyzePage = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleAnalyze = async () => {
    setIsAnalyzing(true);

    // Mock API call
    setTimeout(() => {
      setAnalysisResult("Analysis complete for: " + videoUrl);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md space-y-6">
        <div className="input-container">
          <input 
            type="file"
            accept="video/*"
            onChange={(e) => setVideoUrl(URL.createObjectURL(e.target.files[0]))}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          <button 
            onClick={handleAnalyze} 
            disabled={!videoUrl || isAnalyzing}
            className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
          >
            {isAnalyzing ? "Analyzing..." : "Analyze Video"}
          </button>
        </div>
        {/* Video Player Section */}
        {videoUrl && <VideoPlayer url={videoUrl} />}
        {/* Analysis Result */}
        {analysisResult && <div className="result bg-green-100 text-green-800 p-4 rounded-lg">{analysisResult}</div>}
      </div>
    </div>
  );
}

export default AnalyzePage;