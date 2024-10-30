import React, { useState, useEffect } from 'react';
import LodingGif from '/Loding/Loding.gif'
import { Loading } from './pages/components/Loading';
import { Page1 } from './pages/Page1/Page1';
import { Page2 } from './pages/Page2/Page2';
import { Page3 } from './pages/Page3/Page3';
import { Page4 } from './pages/Page4/Page4';
import { Page5 } from './pages/Page5/Page5';
import { Page6 } from './pages/Page6/Page6';
import { Page7 } from './pages/Page7/Page7';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const loadingTimeout = setTimeout(() => setLoading(false), 2000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(loadingTimeout);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white text-2xl">
        <Loading />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-700 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1)_5%,_transparent_20%)] bg-[length:200px_200px] opacity-10 animate-slow-pulse pointer-events-none"></div>
      <div
        style={{
          top: cursorPosition.y,
          left: cursorPosition.x,
          transform: 'translate(-50%, -50%)',
        }}
        className="pointer-events-none fixed w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-70 transition-transform duration-150 ease-out"
      ></div>

      <div className="flex flex-col space-y-8 relative z-10">
        <div className="flex justify-center items-center h-screen min-h-[900px] p-4 sm:p-6 lg:p-8 border border-gray-700 rounded-lg shadow-lg bg-opacity-20 backdrop-blur-lg bg-black/30">
          <Page1 />
        </div>
        <div className="h-1 mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 w-1/2 rounded-full shadow-md"></div>

        <div className="flex justify-center items-center h-screen min-h-[1000px] p-4 sm:p-6 lg:p-8 border border-gray-700 rounded-lg shadow-lg bg-opacity-20 backdrop-blur-lg bg-black/30">
          <Page2 />
        </div>
        <div className="h-1 mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 w-1/2 rounded-full shadow-md"></div>

        <div className="flex justify-center items-center h-screen sm:min-h-[1400px] md:min-h-[1900px] lg:min-h-[1300px] min-h-[1800px] p-4 sm:p-6 lg:p-8 border border-gray-700 rounded-lg shadow-lg bg-opacity-20 backdrop-blur-lg bg-black/30">
          <Page3 />
        </div>
        <div className="h-1 mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 w-1/2 rounded-full shadow-md"></div>

        <div className="flex justify-center items-center h-screen sm:min-h-[1400px] min-h-[1200px] md:min-h-[1100px] p-4 sm:p-6 lg:p-2 border border-gray-700 rounded-lg shadow-lg bg-opacity-20 backdrop-blur-lg bg-black/30 lg:min-h-[1000px]">
          <Page4 />
        </div>
        <div className="h-1 mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 w-1/2 rounded-full shadow-md"></div>

        <div className="flex justify-center items-center hidden lg:block h-screen min-h-[900px] p-4 sm:p-6 lg:p-8 border border-gray-700 rounded-lg shadow-lg bg-opacity-20 backdrop-blur-lg bg-black/30">
          <Page5 />
        </div>
        <div className="h-1 mx-auto hidden lg:block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 w-1/2 rounded-full shadow-md"></div>

        <div className="flex justify-center items-center h-screen min-h-[2760px] md:min-h-[1800px] lg:min-h-[1390px] p-4 sm:p-6 lg:p-8 border border-gray-700 rounded-lg shadow-lg bg-opacity-20 backdrop-blur-lg bg-black/30">
          <Page6 />
        </div>
        <div className="h-1 mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 w-1/2 rounded-full shadow-md"></div>

        <div className="flex justify-center items-center h-screen min-h-[1300px] lg:min-h-[1000px] sm:min-h-[1200px] md:min-h-[1500px] p-4 sm:p-6 lg:p-8 border border-gray-700 rounded-lg shadow-lg bg-opacity-20 backdrop-blur-lg bg-black/30">
          <Page7 />
        </div>
      </div>
    </div>
  );
}

export default App;
