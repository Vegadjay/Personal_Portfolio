import React, { useEffect, useState } from 'react';
import Heading from '../components/Heading';
import axios from 'axios';

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
        <div className="bg-slate-800 p-7 rounded-lg w-full max-w-2xl">
          <div className="text-white text-center">Loading GitHub stats...</div>
        </div>
      );
    }

    if (githubData.error) {
      return (
        <div className="bg-slate-800 p-7 rounded-lg w-full max-w-2xl">
          <div className="text-red-400 text-center">{githubData.error}</div>
        </div>
      );
    }

    return (
      <div className="bg-slate-800 flex flex-col w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-7 rounded-lg">
        <div className="mb-4 sm:mb-6">
          <Heading Heading="Github Stats:- " />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="flex flex-col items-center justify-center bg-slate-700 p-4 rounded-md">
            <span className="text-white font-semibold text-sm sm:text-base">Public Repos</span>
            <span className="text-white text-lg sm:text-xl mt-2">{totalRepos}</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-slate-700 p-4 rounded-md">
            <span className="text-white font-semibold text-sm sm:text-base">Followers</span>
            <span className="text-white text-lg sm:text-xl mt-2">{githubData.userInfo?.followers || 0}</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-slate-700 p-4 rounded-md">
            <span className="text-white font-semibold text-sm sm:text-base">Following</span>
            <span className="text-white text-lg sm:text-xl mt-2">{githubData.userInfo?.following || 0}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container grid place-items-center w-screen h-screen">
      <div className="flex flex-col items-center p-6 md:p-8 lg:p-10">
        <Heading Heading="About Me:- " />
        <div className="max-w-lg md:max-w-3xl p-7 bg-slate-900 rounded-lg flex flex-col items-center text-center">
          <p className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white mb-4">
            Hi! I'm Jay Vegad, a B.Tech student in Computer Science, driven by a passion for creating interactive web applications. Skilled in frontend (React, HTML, CSS, JavaScript) and backend (Node.js, Express) technologies, I enjoy building efficient, user-friendly digital experiences. Let's connect and make something amazing!
          </p>
          <a href="/Resume/Resume.pdf" download>
            <button
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="font-bold">Download CV</span>
            </button>
          </a>
        </div>
      </div>
      {renderGithubStats()}
    </div>
  );
};

export default Page2;
