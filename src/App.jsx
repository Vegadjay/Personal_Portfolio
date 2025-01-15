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
import Navbar from './components/Navbar/Navbar';
import { TextAnimation } from './components/TextFolder/TextAnimation';
import { useMediaQuery } from 'react';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive breakpoints
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Only update cursor on non-touch devices
      if (window.matchMedia('(pointer: fine)').matches) {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      }
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
      className="min-h-screen relative overflow-x-hidden"
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
      {/* Responsive Navbar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 w-full flex justify-center pb-4 px-4">
        <Navbar />
      </div>

      {/* Custom cursor - only show on non-touch devices */}
      {!isMobile && (
        <div
          style={{
            top: cursorPosition.y,
            left: cursorPosition.x,
            transform: 'translate(-50%, -50%)',
          }}
          className="pointer-events-none fixed w-6 h-6 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full opacity-80 transition-transform duration-150 ease-out"
        />
      )}

      <div className="flex flex-col space-y-4 md:space-y-8 relative z-10">
        {/* Homepage */}
        <section id="homepage" className="flex justify-center items-center min-h-screen p-4">
          <Page1 />
        </section>

        <String />

        {/* About Me */}
        <section id="aboutme" className="flex justify-center items-center min-h-[400px] md:min-h-screen p-4">
          <Page2 />
        </section>

        <String />

        {/* Education */}
        <section id="edu" className="flex justify-center items-center min-h-[1200px] sm:min-h-[1400px] md:min-h-[1600px] lg:min-h-[1100px] p-4">
          <Page3 />
        </section>

        <String />

        {/* Skills */}
        <section id="skills" className="flex justify-center items-center min-h-[800px] sm:min-h-[1000px] md:min-h-[700px] lg:min-h-[600px] p-4">
          <Page4 />
        </section>

        <String />

        {/* Page5 - Only visible on larger screens */}
        <section className="hidden lg:flex justify-center items-center min-h-screen p-4">
          <Page5 />
        </section>

        <div className="hidden lg:block">
          <String />
        </div>

        {/* Projects */}
        <section id="projects" className="flex justify-center items-center min-h-[2000px] md:min-h-[1800px] lg:min-h-[1390px] p-4">
          <Page6 />
        </section>

        <TextAnimation />

        {/* Contact */}
        <section id="contact" className="flex justify-center items-center min-h-[1000px] md:min-h-[1200px] lg:min-h-[1000px] p-4">
          <Page7 />
        </section>
      </div>
    </div>
  );
}

export default App;