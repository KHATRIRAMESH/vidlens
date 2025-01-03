import React, { useState } from 'react';
import './App.css';
import VideoPlayer from './Components/videoplayer';

function App() {
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
    <div>
      <h1>Vidlens Video Analyzer</h1>
      <VideoPlayer url = "https://www.example.com/video.mp4" />
    </div>
  );
}

return (
  <div className="app-container">
    <h1>Vidlens Video Analyzer</h1>
    <div className="input-container">
      <input
        type="text"
        placeholder="Enter video URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      <button onClick={handleAnalyze} disabled={!videoUrl || isAnalyzing}>
        {isAnalyzing ? "Analyzing..." : "Analyze Video"}
      </button>
    </div>
    {analysisResult && <div className="result">{analysisResult}</div>}
  </div>
);


export default App;
