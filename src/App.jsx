import React, { useState, useEffect } from 'react';
import { Loading } from './pages/components/Loading';
import String from '../src/components/String/String';
import { Page1 } from './pages/Page1/Page1';
import { Page2 } from './pages/Page2/Page2';
import { Page3 } from './pages/Page3/Page3';
import { Page4 } from './pages/Page4/Page4';
import { Page5 } from './pages/Page5/Page5';
import { Page6 } from './pages/Page6/Page6';
import { Page7 } from './pages/Page7/Page7';
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar'
import { TextAnimation } from './components/TextFolder/TextAnimation';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoading(false);
    };

    fetchData();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white text-2xl">
        <Loader />
      </div>
    );
  }

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: `
            repeating-linear-gradient(0deg, rgb(41, 41, 41) 0px, rgb(41, 41, 41) 1px, transparent 1px, transparent 21px),
            repeating-linear-gradient(90deg, rgb(41, 41, 41) 0px, rgb(41, 41, 41) 1px, transparent 1px, transparent 21px),
            linear-gradient(90deg, hsl(87,0%,9%), hsl(87,0%,9%))
          `,
        backgroundAttachment: 'fixed',
        backgroundSize: '21px 21px, 21px 21px, 100% 100%',
      }}
    >
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 w-full flex justify-center pb-4">
        <Navbar />
      </div>
      <div
        style={{
          top: cursorPosition.y,
          left: cursorPosition.x,
          transform: 'translate(-50%, -50%)',
        }}
        className="pointer-events-none fixed w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full opacity-80 transition-transform duration-150 ease-out"
      ></div>

      <div className="flex flex-col space-y-8 relative z-10">
        <div id='homepage' className="flex justify-center items-center h-screen min-h-[900px] p-4 sm:p-6 lg:p-8 ">
          <Page1 />
        </div>

        <String />

        <div id='aboutme' className="flex justify-center items-center h-screen min-h-[1000px] md:min-h-[400px] p-4 sm:p-6 lg:p-8 ">
          <Page2 />
        </div>

        <String />

        <div id='edu' className="flex justify-center items-center h-screen sm:min-h-[1400px] md:min-h-[1600px] lg:min-h-[1100px] min-h-[1800px] p-4 sm:p-6 lg:p-8 ">
          <Page3 />
        </div>

        <String />

        <div id='skills' className="flex justify-center items-center h-screen sm:min-h-[1400px] min-h-[1200px] md:min-h-[700px] p-4 sm:p-6 lg:p-2 lg:min-h-[600px]">
          <Page4 />
        </div>

        <String />

        <div className="flex justify-center items-center hidden lg:block h-screen min-h-[900px] p-4 sm:p-6 lg:p-8 ">
          <Page5 />
        </div>

        <div className='hidden lg:block md:hidden'>
          <String />
        </div>

        <div id='projects' className="flex justify-center items-center h-screen min-h-[3360px] md:min-h-[2100px] lg:min-h-[1390px] p-4 sm:p-6 lg:p-8 ">
          <Page6 />
        </div>

        <TextAnimation />

        <div id='contact' className="flex justify-center items-center h-screen min-h-[1300px] lg:min-h-[1000px] sm:min-h-[1200px] md:min-h-[1200px] p-4 sm:p-6 lg:p-8 ">
          <Page7 />
        </div>
      </div>
    </div>
  );
}

export default App;
