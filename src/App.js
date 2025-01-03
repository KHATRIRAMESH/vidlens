import React, { useState } from 'react';
import './App.css';
import VideoPlayer from './Components/videoplayer';
import Header from './Components/header';
import Footer from './Components/footer';

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
      <Header/>
      <div className="hero">
        <h1>Welcome to Vidlens</h1>
        <p>Analyze your videos effortlessly with AI technology.</p>
        <button className="cta-button">Get Started</button>
      </div>

      <div className="input-container">
        <input
          type="file"
          accept="video/*"
          onChange={(e) => setVideoUrl(URL.createObjectURL(e.target.files[0]))}
        />
        <button onClick={handleAnalyze} disabled={!videoUrl || isAnalyzing}>
          {isAnalyzing ? "Analyzing..." : "Analyze Video"}
        </button>
    </div>
    {/* Video Player Section */}
    {videoUrl && <VideoPlayer url={videoUrl} />}

{/* Analysis Result */}
{analysisResult && <div className="result">{analysisResult}</div>}
<Footer />
</div>


  );
}
export default App;
