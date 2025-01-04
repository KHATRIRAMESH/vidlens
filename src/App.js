import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnalyzePage from './pages/analyzePage';
import LandingPage from './pages/landingPage';
import './App.css';
// import VideoPlayer from './Components/videoplayer';
import Header from './Components/header';
import Footer from './Components/footer';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  
  return (
   <Router>
    <div className='App'>
      <Header />
      <Routes>
        
        <Route path='/' element={<LandingPage />} />
        <Route path='/analyze' element={<AnalyzePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        
      </Routes>

    </div>
   </Router>
  );
}

export default App;