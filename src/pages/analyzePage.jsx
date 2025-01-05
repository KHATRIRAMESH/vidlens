import React, { useState } from "react";
import VideoPlayer from "../Components/videoplayer";

const AnalyzePage = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const [file, setFile] = useState(null);
  const [mood, setMood] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("video/")) {
      setFile(selectedFile);
      setError(null);
    } else {
      setError("Please select a valid video file");
      setFile(null);
    }
  };

  const handleMoodChange = (e) => {
    setMood(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !mood) {
      setError("Please provide a valid video file and mood.");
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("mood", mood);

    try {
      setIsAnalyzing(true);

      const response = await fetch(`http://localhost:8000/analyze-video/`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to analyze video. Please try again.");
      }

      const data = await response.json();
      setAnalysisResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsAnalyzing(false);
      setLoading(false);
    }
  };

  const fileUrl = file instanceof Blob ? URL.createObjectURL(file) : file;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500">
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium pb-3">
              Enter Mood:
            </label>
            <input
              type="text"
              value={mood}
              onChange={handleMoodChange}
              placeholder="Enter mood (e.g., horror, happy)"
              className="w-full p-2 border rounded bg-gray-50 text-gray-800"
            />
          </div>
          <div>
            <label className="block text-sm font-medium pb-3">
              Upload Video File:
            </label>
            <input
              type="file"
              accept="video/*"
              onChange={handleFileChange}
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
          <button
            type="submit"
            disabled={!file || isAnalyzing}
            className={`w-full py-2 px-4 rounded-full font-semibold shadow-lg transition duration-300 ${
              isAnalyzing
                ? "bg-gray-400 text-gray-700"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            {isAnalyzing ? "Analyzing..." : "Analyze Video"}
          </button>
        </form>

        {error && (
          <div className="text-red-500 mt-4">
            <strong>Error:</strong> {error}
          </div>
        )}

        {analysisResult && (
          <div className="space-y-8 mt-8">
            <section className="space-y-2">
              <h2 className="text-xl font-semibold">
                {analysisResult.summary.title}
              </h2>
              <p>{analysisResult.summary.content}</p>
            </section>
            <section className="space-y-2">
              <h2 className="text-xl font-semibold">
                {analysisResult.transcript.title}
              </h2>
              <div className="bg-gray-50 p-4 rounded">
                <p className="whitespace-pre-wrap">
                  {analysisResult.transcript.content}
                </p>
              </div>
            </section>
            <section className="space-y-2">
              <h2 className="text-xl font-semibold">
                {analysisResult.storytelling.title}
              </h2>
              <div className="bg-gray-50 p-4 rounded">
                <p className="whitespace-pre-wrap">
                  {analysisResult.storytelling.content}
                </p>
              </div>
            </section>
            <section className="space-y-2">
              <h2 className="text-xl font-semibold">
                {analysisResult.scenes.title}
              </h2>
              <div className="bg-gray-50 p-4 rounded">
                <p className="whitespace-pre-wrap">
                  {analysisResult.scenes.content}
                </p>
              </div>
            </section>
          </div>
        )}

        {file && <VideoPlayer url={fileUrl} />}
      </div>
    </div>
  );
};

export default AnalyzePage;
