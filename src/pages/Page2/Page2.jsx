import React, { useEffect, useState } from 'react';
import Heading from '../components/Heading';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export const Page2 = () => {
  const [githubData, setGithubData] = useState({
    repos: [],
    userInfo: null,
    loading: true,
    error: null
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const fetchGithubData = async () => {
    setGithubData(prev => ({ ...prev, loading: true, error: null }));

    try {
      const userResponse = await axios.get("https://api.github.com/users/Vegadjay");
      const reposResponse = await axios.get("https://api.github.com/users/Vegadjay/repos");

      setGithubData({
        repos: reposResponse.data,
        userInfo: userResponse.data,
        loading: false,
        error: null
      });
    } catch (error) {
      setGithubData(prev => ({
        ...prev,
        loading: false,
        error: error.response?.data?.message || "Failed to fetch GitHub data"
      }));
    }
  };

  useEffect(() => {
    fetchGithubData();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container w-screen min-h-screen py-8 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-8 w-full max-w-[1400px] mx-auto"
      >
        <Heading Heading="About Me" />

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div className="w-full p-8 bg-black/30 backdrop-blur-lg rounded-lg border border-gray-800 flex flex-col h-full">
            <p className="text-lg text-gray-300 mb-6">
              Full Stack Developer skilled in React.js, Next.js, and TypeScript. Grand Winner at Build & Brand Challenge Hackathon 2025. Currently pursuing B.Tech in Computer Science Engineering at Darshan University.
            </p>
            <h3 className="text-white font-semibold text-lg mb-2">Technical Skills</h3>
            <p className="text-gray-300">Frontend: Next.js, TypeScript, Tailwind CSS, Framer Motion</p>
            <p className="text-gray-300">Backend: Node.js, Express.js, REST APIs</p>
            <p className="text-gray-300">Database: MongoDB, PostgreSQL, Firebase</p>

            <h3 className="text-white font-semibold text-lg mt-4 mb-2">Projects</h3>
            <ul className="text-gray-300 list-disc pl-5">
              <li><a href="https://rajwadiposhak.vercel.app" className="text-blue-400">Rajwadi Poshak</a> - AI-powered e-commerce platform</li>
              <li><a href="https://github.com/Vegadjay/YTHUBSTARTUP" className="text-blue-400">YT Hub</a> - Startup showcase platform</li>
              <li><a href="https://dukan-radt.onrender.com" className="text-blue-400">SnapShop(Full backend)</a> - Multi-vendor e-commerce</li>
            </ul>

            <h3 className="text-white font-semibold text-lg mt-4 mb-2">Achievements & Certifications</h3>
            <p className="text-gray-300">Grand Winner - Build & Brand Challenge Hackathon 2024</p>
            <p className="text-gray-300">HackerRank Certifications: JavaScript, React, Node.js</p>
          </motion.div>

          <motion.div className="w-full bg-black/30 backdrop-blur-lg rounded-lg border border-gray-800 overflow-hidden">
            {isMobile ? (
              <div className="flex flex-col items-center justify-center p-8 h-full">
                <p className="text-gray-300 text-center mb-4">
                  For better viewing experience, please download the resume
                </p>
                <a
                  href="/Resume/Resume.pdf"
                  download
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <Download size={20} />
                  Download Resume
                </a>
              </div>
            ) : (
              <div className="h-[800px]">
                <iframe
                  src="/Resume/Resume.pdf"
                  className="w-full h-full"
                  title="Resume PDF"
                ></iframe>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Page2;