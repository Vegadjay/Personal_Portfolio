import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import GithubSvg from '/icons3/Github.svg';
import InstagramSvg from '/icons3/Instagram.svg';
import LinkdinSvg from '/icons3/Linkdin.svg';
import YoutubeSvg from '/icons3/Youtube.svg';
import XSvg from '/icons3/X.svg';
import Texthovereffect from '../components/Hoverrevel';
import Maintext from '../components/Glow';
import Typewriter from '../components/Typewriter';
import GitHubStreakTable from '../../components/Streak-component/Streak-Component';
import './styles.css';

export const Page1 = () => {
    const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
    const [isHovering, setIsHovering] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useTransform(mouseY, [0, windowSize.height], [25, -25]);
    const rotateY = useTransform(mouseX, [0, windowSize.width], [-25, 25]);

    const skills = ['Next js', 'React js', 'Framer Motion', 'JavaScript', 'Tailwind CSS', "GSAP", 'UI/UX'];

    const handleMouseMove = (e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const socialLinks = [
        { href: "https://x.com/JAY_VEGAD_", icon: XSvg, alt: "YouTube", hoverColor: "hover:bg-slate-400" },
        { href: "https://github.com/vegadjay", icon: GithubSvg, alt: "GitHub", hoverColor: "hover:bg-purple-500" },
        { href: "https://www.linkedin.com/in/vegadjay/", icon: LinkdinSvg, alt: "LinkedIn", hoverColor: "hover:bg-blue-600" },
        { href: "https://www.youtube.com/@JAY_VEGAD", icon: YoutubeSvg, alt: "YouTube", hoverColor: "hover:bg-red-600" },
        { href: "https://www.instagram.com/jay_vegad_1/", icon: InstagramSvg, alt: "Instagram", hoverColor: "hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500" }
    ];

    return (
        <div className="min-h-screen w-full bg-gradient-to-b text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="transform transition-all duration-500 hover:scale-105">
                            <Maintext className="cursor-pointer" />
                        </div>

                        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl backdrop-blur-sm border border-gray-700">
                            <Typewriter text="Welcome to my digital portfolio. I'm a developer passionate about creating seamless user experiences." />
                            <p className="mt-4 text-gray-300 leading-relaxed">
                                I specialize in building modern web applications with React, leveraging animation libraries
                                and interactive design principles to create engaging digital experiences.
                            </p>
                            <a href="#projects">
                                <motion.button
                                    className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Explore My Work
                                </motion.button>
                            </a>
                        </div>

                        <div className="p-4 space-y-20">
                            <h3 className="text-xl font-semibold text-indigo-300">My GitHub Activity</h3>
                            <GitHubStreakTable />
                        </div>
                    </div>

                    <div className="space-y-10">
                        <div
                            className="h-96 flex items-center justify-center relative overflow-hidden"
                            onMouseMove={handleMouseMove}
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                        >
                            <motion.div
                                className="relative w-80 h-80 perspective-1000"
                                style={{
                                    rotateX: isHovering ? rotateX : 0,
                                    rotateY: isHovering ? rotateY : 0,
                                    transformStyle: 'preserve-3d',
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative">
                                        <div className="w-full max-w-[18rem] sm:max-w-[20rem] md:max-w-[22rem] aspect-square mx-auto rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 shadow-lg shadow-indigo-500/50">
                                            <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 border-4 border-gray-800">
                                                <img
                                                    src="/Hero/Photo.png"
                                                    alt="Jay Vegad's Profile"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>

                                        <motion.div
                                            className="absolute -top-4 -right-4 w-16 h-16 bg-indigo-600 rounded-full opacity-70 blur-sm"
                                            animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                        />
                                        <motion.div
                                            className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-600 rounded-full opacity-70 blur-sm"
                                            animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            className="flex flex-wrap justify-center gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-14 h-14 rounded-full bg-gray-800 shadow-lg flex items-center justify-center transition-all duration-300 ${link.hoverColor} ${link.iconImageColor} hover:shadow-xl`}
                                    whileHover={{ scale: 1.15, rotate: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index + 0.4 }}
                                >
                                    <img
                                        src={link.icon}
                                        alt={link.alt}
                                        className={`w-8 h-8 transition-transform ${link.iconImageColor}`}
                                    />
                                </motion.a>
                            ))}
                        </motion.div>

                        <div className="bg-gray-800 bg-opacity-60 p-6 rounded-xl backdrop-blur-sm">
                            <h3 className="text-xl font-semibold mb-4 text-indigo-300">Technical Skills</h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, i) => (
                                    <motion.span
                                        key={i}
                                        className="px-4 py-2 bg-gray-700 rounded-full text-sm font-medium"
                                        whileHover={{ scale: 1.1, backgroundColor: '#4f46e5' }}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};