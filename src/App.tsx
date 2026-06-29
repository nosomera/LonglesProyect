// src/App.tsx
import React from 'react';
import './App.css';

const App: React.FC = () => {
  const videoUrl: string = "https://firebasestorage.googleapis.com/v0/b/loveuts-7a90a.firebasestorage.app/o/Longlegs.2024.1080p-dual-lat-cinecalidad.ro.mp4?alt=media&token=3c9476f2-a20b-462f-b440-5e80b7ea4f3e";

  return (
    <div className="terror-container">
      <header className="terror-header">
        <h1>LongLegs</h1>
      </header>

      <main className="terror-main">
        <div className="video-wrapper">
          <video 
            src={videoUrl} 
            controls 
            controlsList="nodownload" 
            preload="metadata"
          >
            Tu navegador no soporta la reproducción de este video.
          </video>
        </div>
      </main>
    </div>
  );
};

export default App;