import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import GithubSvg from '/icons3/Github.svg';
import InstagramSvg from '/icons3/Instagram.svg';
import LinkdinSvg from '/icons3/Linkdin.svg';
import YoutubeSvg from '/icons3/Youtube.svg';
import BoyImage from './Boy.png';

export const Page1 = () => {
    const [windowOffset, setWindowOffset] = useState({ innerWidth: window.innerWidth, innerHeight: window.innerHeight });
    const [mouseMove, setMouseMove] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        x.set(clientX);
        y.set(clientY);
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowOffset({ innerWidth: window.innerWidth, innerHeight: window.innerHeight });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const { innerWidth, innerHeight } = windowOffset;
    const adjustedRotateX = useTransform(y, [0, innerHeight], [20, -20]);
    const adjustedRotateY = useTransform(x, [0, innerWidth], [-20, 20]);

    return (
        <div
            className="h-screen w-screen flex flex-col justify-center items-center relative overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setMouseMove(true)}
            onMouseLeave={() => setMouseMove(false)}
        >
            <motion.div
                className="flex items-center justify-center relative w-[800px] h-[800px]"
                style={{
                    rotateX: mouseMove ? adjustedRotateX : 0,
                    rotateY: mouseMove ? adjustedRotateY : 0,
                    transition: 'all 0.15s ease',
                    transformStyle: 'preserve-3d',
                    perspective: '1000px',
                    transformOrigin: 'center center',
                }}
            >
                <motion.div
                    className="absolute inset-0 flex items-center justify-center z-10"
                    animate={{
                        scale: mouseMove ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                >
                    <img
                        src={BoyImage}
                        alt="boy model"
                        className="h-[28rem] w-[28rem] drop-shadow-2xl object-contain"
                    />
                </motion.div>
            </motion.div>

            <div className="flex justify-center items-center space-x-4 mt-8">
                <a
                    href="https://github.com/vegadjay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 rounded-full bg-gray-800 shadow-lg flex items-center justify-center transition-colors duration-300 hover:bg-purple-500" // Unique color for GitHub
                >
                    <img
                        src={GithubSvg}
                        alt="GitHub"
                        className="w-10 h-10 filter text-black transition-colors duration-300"
                    />
                </a>

                <a
                    href="https://www.linkedin.com/in/vegadjay/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 rounded-full bg-gray-800 shadow-lg flex items-center justify-center transition-colors duration-300 hover:bg-blue-600"
                >
                    <img
                        src={LinkdinSvg}
                        alt="LinkedIn"
                        className="w-10 h-10 filter text-black transition-colors duration-300"
                    />
                </a>

                <a
                    href="https://www.youtube.com/@JAY_VEGAD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 rounded-full bg-gray-800 shadow-lg flex items-center justify-center transition-colors duration-300 hover:bg-red-600"
                >
                    <img
                        src={YoutubeSvg}
                        alt="YouTube"
                        className="w-10 h-10 filter text-black transition-colors duration-300"
                    />
                </a>

                <a
                    href="https://www.instagram.com/jay_vegad_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 rounded-full bg-gray-800 shadow-lg flex items-center justify-center transition-colors duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500" // Gradient for Instagram
                >
                    <img
                        src={InstagramSvg}
                        alt="Instagram"
                        className="w-10 h-10 filter text-black transition-colors duration-300"
                    />
                </a>
            </div>

            <div className="mt-8 transform-gpu text-center">
                <span className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold leading-relaxed block bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 text-transparent bg-clip-text drop-shadow-lg">
                    Building immersive digital experiences with{' '}
                    <span className="text-indigo-600 font-dynapuff italic underline decoration-teal-400">innovative code</span>,
                    <span className="text-indigo-600 font-dynapuff italic underline decoration-teal-400"> creative design</span>,
                    and a{' '}
                    <span className="text-indigo-600 font-dynapuff italic underline decoration-teal-400">passion for users</span>.
                </span>
            </div>
        </div>
    );
};
