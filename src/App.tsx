// src/App.tsx
import React from 'react';
import './App.css';

const App: React.FC = () => {

  const videoUrl4: string = "https://firebasestorage.googleapis.com/v0/b/loveuts-7a90a.firebasestorage.app/o/%5BAnimeOnlineNinja%5D_Chainsmoker_Cat_01.mp4?alt=media&token=977d5d44-0f1a-4e52-8d90-22c89acd33c9";
  
  const videoUrl6: string = "https://firebasestorage.googleapis.com/v0/b/loveuts-7a90a.firebasestorage.app/o/V3RMG2D_5958_87229_3_y4n1-n3k0.mp4?alt=media&token=38d5becc-e096-46c7-b9e1-814452980593";

  const videoUrl5: string = "";

  const videoUrl7: string = "https://firebasestorage.googleapis.com/v0/b/loveuts-7a90a.firebasestorage.app/o/V3RMG2D_5958_87302_4_y4n1-n3k0.mp4?alt=media&token=3b6d15ff-3962-4874-aa19-9f2511088440";

  return (
    <div className="terror-container">
      
      {/* DIVISOR SINIESTRO */}
      <div className="horror-divider"></div>    

      <section className="terror-section">
        <header className="terror-header">
          <h1>Gata fumona 1</h1> {/* Puedes cambiar este título */}
        </header>
        <main className="terror-main">
          <div className="video-wrapper">
            <video src={videoUrl4} controls controlsList="nodownload" preload="metadata">
              Tu navegador no soporta el video.
            </video>
          </div>
        </main>
      </section>

      <div className="horror-divider"></div>

      <section className="terror-section">
        <header className="terror-header">
          <h1>Gata fumona 2</h1> {/* Puedes cambiar este título */}
        </header>
        <main className="terror-main">
          <div className="video-wrapper">
            <video src={videoUrl5} controls controlsList="nodownload" preload="metadata">
              Tu navegador no soporta el video.
            </video>
          </div>
        </main>
      </section>

      <div className="horror-divider"></div>
      
      <section className="terror-section">
        <header className="terror-header">
          <h1>Gata fumona 3</h1> {/* Puedes cambiar este título */}
        </header>
        <main className="terror-main">
          <div className="video-wrapper">
            <video src={videoUrl6} controls controlsList="nodownload" preload="metadata">
              Tu navegador no soporta el video.
            </video>
          </div>
        </main>
      </section>

      <div className="horror-divider"></div>
      
      <section className="terror-section">
        <header className="terror-header">
          <h1>Gata fumona 4</h1> {/* Puedes cambiar este título */}
        </header>
        <main className="terror-main">
          <div className="video-wrapper">
            <video src={videoUrl7} controls controlsList="nodownload" preload="metadata">
              Tu navegador no soporta el video.
            </video>
          </div>
        </main>
      </section>


    </div>
  );
};

export default App;