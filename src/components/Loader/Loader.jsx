import React from 'react';

const FullscreenDarkLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center w-screen h-screen bg-gray-900">
      <div className="relative flex flex-col items-center w-full max-w-7xl px-4">
        <div className="relative scale-75 sm:scale-100 lg:scale-150">
          <div className="w-20 sm:w-40 h-20 sm:h-40 rounded-full border-4 border-t-transparent border-purple-500 animate-spin 
                        shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300">
          </div>

          <div className="absolute inset-0 w-20 sm:w-40 h-20 sm:h-40">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-full rounded-full border-2 border-t-transparent border-blue-400/30"
                style={{
                  animation: 'spin 3s linear infinite',
                  animationDelay: `${i * -1}s`,
                  transform: `rotate(${i * 120}deg)`
                }}
              />
            ))}
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-12 sm:w-24 h-12 sm:h-24 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 animate-pulse">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-600/50 to-blue-500/50 blur-xl 
                            animate-ping opacity-75"></div>
            </div>
          </div>

          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-purple-400"
              style={{
                animation: 'orbitAndPulse 4s linear infinite',
                animationDelay: `${i * -0.3}s`,
                top: `${50 + 80 * Math.sin(i * Math.PI / 6)}%`,
                left: `${50 + 80 * Math.cos(i * Math.PI / 6)}%`,
              }}
            >
              <div className="w-full h-full rounded-full bg-purple-400 blur-sm animate-ping"></div>
            </div>
          ))}

          <div className="absolute -inset-8 sm:-inset-16 bg-gradient-to-r from-purple-600/20 via-transparent to-blue-600/20 rounded-full 
                        blur-2xl animate-pulse"></div>
        </div>

        <div className="mt-32 sm:mt-40 lg:mt-52 text-center w-full">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 animate-gradient">
              Welcome To Jay Vegad's World
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 opacity-30 blur-xl animate-pulse" />
          </h1>
        </div>
      </div>

      {[...Array(20)].map((_, i) => (
        <div
          key={`bg-particle-${i}`}
          className="absolute w-1 sm:w-2 h-1 sm:h-2 rounded-full bg-white/10"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `floatParticle ${5 + Math.random() * 10}s linear infinite`,
            animationDelay: `${-Math.random() * 5}s`
          }}
        />
      ))}

      <style jsx>{`
        @keyframes orbitAndPulse {
          0% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: scale(1.5) rotate(180deg);
            opacity: 0.5;
          }
          100% {
            transform: scale(1) rotate(360deg);
            opacity: 1;
          }
        }

        @keyframes floatParticle {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
          }
          25% {
            transform: translate(-20px, -20px) scale(1.5);
            opacity: 0.5;
          }
          50% {
            transform: translate(20px, -40px) scale(1);
            opacity: 1;
          }
          75% {
            transform: translate(-20px, -60px) scale(1.5);
            opacity: 0.5;
          }
          100% {
            transform: translate(0, -80px) scale(1);
            opacity: 0;
          }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default FullscreenDarkLoader;