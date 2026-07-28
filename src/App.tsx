// src/App.tsx
import React from 'react';
import './App.css';

const App: React.FC = () => {

  const videoUrl4: string = "https://firebasestorage.googleapis.com/v0/b/loveuts-7a90a.firebasestorage.app/o/%5BAnimeOnlineNinja%5D_Chainsmoker_Cat_01.mp4?alt=media&token=977d5d44-0f1a-4e52-8d90-22c89acd33c9";
  
  const videoUrl6: string = "https://firebasestorage.googleapis.com/v0/b/loveuts-7a90a.firebasestorage.app/o/V3RMG2D_5958_87229_3_y4n1-n3k0.mp4?alt=media&token=38d5becc-e096-46c7-b9e1-814452980593";

  const videoUrl5: string = "";

  const videoUrl7: string = "https://firebasestorage.googleapis.com/v0/b/loveuts-7a90a.firebasestorage.app/o/V3RMG2D_5958_87302_4_y4n1-n3k0.mp4?alt=media&token=3b6d15ff-3962-4874-aa19-9f2511088440";

//--------------------------------------------------------------//
  const fantasma1: string = "https://firebasestorage.googleapis.com/v0/b/loveuts-7a90a.firebasestorage.app/o/Ushiro%20no%20shonen%20kamui-san%20%2001.mp4?alt=media&token=33211a77-045f-47f0-b8a6-deefce6c3e2c";
  const fantasma2: string = "https://firebasestorage.googleapis.com/v0/b/loveuts-7a90a.firebasestorage.app/o/Ushiro%20no%20shonen%20kamui-san%20%2002.mp4?alt=media&token=34659e24-1929-4657-ba5d-7fd03577840d";
  const fantasma3: string = "https://firebasestorage.googleapis.com/v0/b/loveuts-7a90a.firebasestorage.app/o/Ushiro%20no%20shonen%20kamui-san%20%2003.mp4?alt=media&token=bde004b1-c89c-49ba-b294-555a643457de";
  const fantasma4: string = "https://firebasestorage.googleapis.com/v0/b/loveuts-7a90a.firebasestorage.app/o/Ushiro%20no%20shonen%20kamui-san%20%2004.mp4?alt=media&token=8dbba634-ce28-45ae-a797-8a8f081b899f";
  const fantasma5: string = "";
  const fantasma6: string = "";
  const fantasma7: string = "";


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







    <section className="terror-section">
        <header className="terror-header">
          <h1>Ushiro no shonen Kamui/san 01</h1> {/* Puedes cambiar este título */}
        </header>
        <main className="terror-main">
          <div className="video-wrapper">
            <video src={fantasma1} controls controlsList="nodownload" preload="metadata">
              Tu navegador no soporta el video.
            </video>
          </div>
        </main>
      </section>

      <section className="terror-section">
        <header className="terror-header">
          <h1>Ushiro no shonen Kamui/san 02</h1> {/* Puedes cambiar este título */}
        </header>
        <main className="terror-main">
          <div className="video-wrapper">
            <video src={fantasma2} controls controlsList="nodownload" preload="metadata">
              Tu navegador no soporta el video.
            </video>
          </div>
        </main>
      </section>

      <section className="terror-section">
        <header className="terror-header">
          <h1>Ushiro no shonen Kamui/san 03</h1> {/* Puedes cambiar este título */}
        </header>
        <main className="terror-main">
          <div className="video-wrapper">
            <video src={fantasma3} controls controlsList="nodownload" preload="metadata">
              Tu navegador no soporta el video.
            </video>
          </div>
        </main>
      </section>

      <section className="terror-section">
        <header className="terror-header">
          <h1>Ushiro no shonen Kamui/san 04</h1> {/* Puedes cambiar este título */}
        </header>
        <main className="terror-main">
          <div className="video-wrapper">
            <video src={fantasma4} controls controlsList="nodownload" preload="metadata">
              Tu navegador no soporta el video.
            </video>
          </div>
        </main>
      </section>

    </div>
  );
};

export default App;