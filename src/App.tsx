// src/App.tsx
import React from 'react';
import './App.css';

const App: React.FC = () => {
  // Video 1 - Longlegs
  const videoUrl1: string = "https://firebasestorage.googleapis.com/v0/b/loveuts-7a90a.firebasestorage.app/o/Longlegs.2024.1080p-dual-lat-cinecalidad.ro.mp4?alt=media&token=3c9476f2-a20b-462f-b440-5e80b7ea4f3e";

  // Video 2 - PEGA AQUÍ TU NUEVA URL DE FIREBASE
  const videoUrl2: string = "https://firebasestorage.googleapis.com/v0/b/loveuts-7a90a.firebasestorage.app/o/Prisoners.2013.bluray.latino-e-ingles-subt.mp4?alt=media&token=cf1739ae-f7fe-4768-bcb7-018e5821080b";
// Video 3 - PEGA AQUÍ TU NUEVA URL DE FIREBASE
  const videoUrl3: string = "https://firebasestorage.googleapis.com/v0/b/loveuts-7a90a.firebasestorage.app/o/Looper.2012.latino-e-ingles-subt.mp4?alt=media&token=1261d3b3-b0dc-43fd-a872-4891ba9cca76";
  
  const videoUrl4: string = "https://firebasestorage.googleapis.com/v0/b/loveuts-7a90a.firebasestorage.app/o/%5BAnimeOnlineNinja%5D_Chainsmoker_Cat_01.mp4?alt=media&token=977d5d44-0f1a-4e52-8d90-22c89acd33c9";
  
  const videoUrl5: string = "https://firebasestorage.googleapis.com/v0/b/loveuts-7a90a.firebasestorage.app/o/V3RMG2D_5958_87158_2_y4n1-n3k0.mp4?alt=media&token=0b65809d-7130-4132-9f0b-bb9bad6b91a8";

  const videoUrl6: string = "";

  return (
    <div className="terror-container">
      {/* SECCIÓN 1 */}
      <section className="terror-section">
        <header className="terror-header">
          <h1>Hereditary</h1>
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

      <section className="terror-section">
        <header className="terror-header">
          <h1>Looper</h1> {/* Puedes cambiar este título */}
        </header>
        <main className="terror-main">
          <div className="video-wrapper">
            <video src={videoUrl3} controls controlsList="nodownload" preload="metadata">
              Tu navegador no soporta el video.
            </video>
          </div>
        </main>
      </section>

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
      
      <section className="terror-section">
        <header className="terror-header">
          <h1>the hunt</h1> {/* Puedes cambiar este título */}
        </header>
        <main className="terror-main">
          <div className="video-wrapper">
            <video src={videoUrl6} controls controlsList="nodownload" preload="metadata">
              Tu navegador no soporta el video.
            </video>
          </div>
        </main>
      </section>


    </div>
  );
};

export default App;