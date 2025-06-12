import React, { useState } from "react";

export const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        {isPlaying ? (
          <video
            className="w-full h-full object-cover"
            src="/src/assets/video/carento.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        ) : (
          <div
            className="w-full h-full bg-cover bg-center cursor-pointer"
            style={{
              backgroundImage:
                "url('/src/assets/img/banners/banners-3/banner2.png')",
            }}
            onClick={togglePlay}
          />
        )}
      </div>

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-white px-4">
        <div className="max-w-4xl text-center">
          {!isPlaying && (
            <>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 ml-0 text-center">
                Descubre Nuestra Experiencia
              </h2>
              <p className="text-lg md:text-xl mb-8 text-white/90 text-center">
                Explora nuestra colección de vehículos de lujo y encuentra el
                perfecto para ti
              </p>
              <button
                onClick={togglePlay}
                className="group flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Reproducir video</span>
              </button>
            </>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
    </section>
  );
};

export default Video;
