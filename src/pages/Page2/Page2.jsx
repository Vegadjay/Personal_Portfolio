import React, { useEffect, useState } from 'react';
import Heading from '../components/Heading';
import axios from 'axios';
import { motion } from 'framer-motion';

export const Page2 = () => {
  const [githubData, setGithubData] = useState({
    repos: [],
    userInfo: null,
    loading: true,
    error: null
  });

  const fetchGithubData = async () => {
    setGithubData(prev => ({ ...prev, loading: true, error: null }));

    try {
      const userResponse = await axios.get("https://api.github.com/users/Vegadjay", {
        headers: { 'Accept': 'application/vnd.github.v3+json' }
      });

      const reposResponse = await axios.get("https://api.github.com/users/Vegadjay/repos", {
        headers: { 'Accept': 'application/vnd.github.v3+json' }
      });

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

  const totalRepos = githubData.repos.length;

  const renderGithubStats = () => {
    if (githubData.loading) {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-black/30 backdrop-blur-lg p-7 rounded-lg w-full max-w-2xl border border-gray-800"
        >
          <div className="text-white text-center">Loading GitHub stats...</div>
        </motion.div>
      );
    }

    if (githubData.error) {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-black/30 backdrop-blur-lg p-7 rounded-lg w-full max-w-2xl border border-gray-800"
        >
          <div className="text-red-400 text-center">{githubData.error}</div>
        </motion.div>
      );
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-black/30 backdrop-blur-lg flex flex-col w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-7 rounded-lg border border-gray-800"
      >
        <div className="mb-4 sm:mb-6">
          <Heading Heading="Github Stats:- " />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center justify-center bg-black/40 backdrop-blur-md p-6 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors duration-300"
          >
            <span className="text-gray-300 font-semibold text-sm sm:text-base">Public Repos</span>
            <span className="text-white text-2xl sm:text-3xl mt-2 font-bold">{totalRepos}</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center justify-center bg-black/40 backdrop-blur-md p-6 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors duration-300"
          >
            <span className="text-gray-300 font-semibold text-sm sm:text-base">Followers</span>
            <span className="text-white text-2xl sm:text-3xl mt-2 font-bold">{githubData.userInfo?.followers || 0}</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center justify-center bg-black/40 backdrop-blur-md p-6 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors duration-300"
          >
            <span className="text-gray-300 font-semibold text-sm sm:text-base">Following</span>
            <span className="text-white text-2xl sm:text-3xl mt-2 font-bold">{githubData.userInfo?.following || 0}</span>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container grid place-items-center w-screen h-screen"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-8 p-6 md:p-8 lg:p-10 w-full max-w-6xl"
      >
        <Heading Heading="About Me:- " />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full p-8 bg-black/30 backdrop-blur-lg rounded-lg border border-gray-800 flex flex-col items-center text-center"
        >
          <p className="text-xs sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 leading-relaxed">
            Hi! I'm Jay Vegad, a B.Tech student in Computer Science, driven by a passion for creating interactive web applications. Skilled in frontend (React, HTML, CSS, JavaScript) and backend (Node.js, Express) technologies, I enjoy building efficient, user-friendly digital experiences. Let's connect and make something amazing!
          </p>
          <motion.a
            href="/Resume/Resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800">
              <div className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                Download CV
              </div>
            </button>
          </motion.a>
        </motion.div>
        {renderGithubStats()}
      </motion.div>
    </motion.div>
  );
};

export default Page2;
