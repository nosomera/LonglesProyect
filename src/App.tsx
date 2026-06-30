// src/App.tsx
import React from 'react';
import './App.css';

const App: React.FC = () => {
  // Video 1 - Longlegs
  const videoUrl1: string = "https://firebasestorage.googleapis.com/v0/b/loveuts-7a90a.firebasestorage.app/o/Longlegs.2024.1080p-dual-lat-cinecalidad.ro.mp4?alt=media&token=3c9476f2-a20b-462f-b440-5e80b7ea4f3e";

  // Video 2 - PEGA AQUÍ TU NUEVA URL DE FIREBASE
  const videoUrl2: string = "https://firebasestorage.googleapis.com/v0/b/loveuts-7a90a.firebasestorage.app/o/Prisoners.2013.bluray.latino-e-ingles-subt.mp4?alt=media&token=cf1739ae-f7fe-4768-bcb7-018e5821080b";

  return (
    <div className="terror-container">
      {/* SECCIÓN 1 */}
      <section className="terror-section">
        <header className="terror-header">
          <h1>LongLegs</h1>
        </header>
        <main className="terror-main">
          <div className="video-wrapper">
            <video src={videoUrl1} controls controlsList="nodownload" preload="metadata">
              Tu navegador no soporta el video.
            </video>
          </div>
        </main>
      </section>

      {/* DIVISOR SINIESTRO */}
      <div className="horror-divider"></div>

      {/* SECCIÓN 2 */}
      <section className="terror-section">
        <header className="terror-header">
          <h1>Prisioners</h1> {/* Puedes cambiar este título */}
        </header>
        <main className="terror-main">
          <div className="video-wrapper">
            <video src={videoUrl2} controls controlsList="nodownload" preload="metadata">
              Tu navegador no soporta el video.
            </video>
          </div>
        </main>
      </section>


    </div>
  );
};

export default App;