import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Youtube, Instagram } from 'lucide-react';
import { useMotionValue, useTransform, motion } from 'framer-motion';
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

    const handleMouseEnter = () => {
        setWindowOffset({
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight
        });
        setMouseMove(true);
    };

    const handleMouseLeave = () => {
        setMouseMove(false);
    };

    const { innerWidth, innerHeight } = windowOffset;
    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;

    const adjustedRotateX = useTransform(y, [0, innerHeight], [25, -25]);
    const adjustedRotateY = useTransform(x, [0, innerWidth], [-25, 25]);

    return (
        <div
            className="h-screen w-screen flex flex-col justify-center items-center"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className="flex flex-col items-center p-8"
                style={{
                    rotateX: mouseMove ? adjustedRotateX : 0,
                    rotateY: mouseMove ? adjustedRotateY : 0,
                    transition: 'all 0.15s ease',
                    transformStyle: 'preserve-3d',
                    perspective: '1000px',
                    transformOrigin: 'center center'
                }}
            >
                <div className="md:p-6 transform-gpu">
                    <img
                        src={BoyImage}
                        alt="boy model"
                        className="h-[28rem] w-[28rem] drop-shadow-2xl object-contain"
                    />
                </div>
            </motion.div>

            <div className="mt-8 transform-gpu">
                <span className="text-center text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold leading-relaxed block bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 text-transparent bg-clip-text drop-shadow-lg">
                    Building immersive digital experiences with <span className="text-indigo-600 font-dynapuff italic underline decoration-teal-400">innovative code</span>,
                    <span className="text-indigo-600 font-dynapuff italic underline decoration-teal-400"> creative design</span>,
                    and a <span className="text-indigo-600 font-dynapuff italic underline decoration-teal-400">passion for users</span>.
                </span>
            </div>


            <div className="mt-6 w-full max-w-md transform-gpu">
                <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text drop-shadow-lg mb-6">
                    Connect With Me:
                </h1>

                <div className="flex justify-between px-10">
                    <a
                        href="https://github.com/vegadjay"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transform hover:scale-110 transition-transform"
                    >
                        <Github className="cursor-pointer-c w-10 h-10 text-white hover:text-purple-500 transition-colors" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/vegadjay/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transform hover:scale-110 transition-transform"
                    >
                        <Linkedin className="cursor-pointer-c w-10 h-10 text-white hover:text-blue-500 transition-colors" />
                    </a>
                    <a
                        href="https://www.youtube.com/@JAY_VEGAD"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transform hover:scale-110 transition-transform"
                    >
                        <Youtube className="cursor-pointer-c w-10 h-10 text-white hover:text-red-500 transition-colors" />
                    </a>
                    <a
                        href="https://instagram.com/jay_vegad_1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transform hover:scale-110 transition-transform"
                    >
                        <Instagram className="cursor-pointer-c w-10 h-10 text-white hover:text-red-400 transition-colors" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Page1;
