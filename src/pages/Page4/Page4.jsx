import React from 'react';
import { motion } from 'framer-motion';
import Heading from '../components/Heading';

export const Page4 = () => {
    const skills = [
        { logoName: "HTML", logo: "/icons/HTML.svg" },
        { logoName: "CSS", logo: "/icons/CSS.svg" },
        { logoName: "JAVASCRIPT", logo: "/icons/JavaScript.svg" },
        { logoName: "FIREBASE", logo: "/icons/Firebase.svg" },
        { logoName: "DOCKER", logo: "/icons/Docker.svg" },
        { logoName: "FIGMA", logo: "/icons/Figma.svg" },
        { logoName: "GIT", logo: "/icons/Git.svg" },
        { logoName: "GITHUB", logo: "/icons/Github.svg" },
        { logoName: "JAVA", logo: "/icons/Java.svg" },
        { logoName: "LINUX", logo: "/icons/Linux.svg" },
        { logoName: "MONGODB", logo: "/icons/MongoDB.svg" },
        { logoName: "MYSQL", logo: "/icons/MySQL.svg" },
        { logoName: "NEXTJS", logo: "/icons/NextJS.svg" },
        { logoName: "NODE JS", logo: "/icons/NodeJS.svg" },
        { logoName: "POSTMAN", logo: "/icons/Postman.svg" },
        { logoName: "POWERSHELL", logo: "/icons/Powershell-Dark.svg" },
        { logoName: "REACT", logo: "/icons/React-Dark.svg" },
        { logoName: "REDUX", logo: "/icons/Redux.svg" },
        { logoName: "STACKOVERFLOW", logo: "/icons/StackOverflow-Dark.svg" },
        { logoName: "SVG", logo: "/icons/SVG-Dark.svg" },
        { logoName: "TAILWIND", logo: "/icons/TailwindCSS-Dark.svg" },
        { logoName: "TYPESCRIPT", logo: "/icons/TypeScript.svg" },
        { logoName: "VS CODE", logo: "/icons/VSCode-Dark.svg" },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 lg:-mt-12">
            <motion.div
                className="mb-4 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <Heading Heading="Skills:-" />
            </motion.div>

            <motion.div
                className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 md:gap-10 lg:grid-cols-5 xl:grid-cols-6 gap-7 sm:gap-10 justify-items-center"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.logoName}
                        className={`w-full max-w-[120px] sm:max-w-[160px] ${index % 2 !== 0 ? 'transform translate-y-2 sm:translate-y-4' : ''
                            }`}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            show: {
                                opacity: 1,
                                y: index % 2 !== 0 ? 8 : 0,
                                transition: {
                                    duration: 0.5
                                }
                            }
                        }}
                    >
                        <Skilldiv logoName={skill.logoName} logo={skill.logo} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export const Skilldiv = ({ logoName, logo }) => {
    return (
        <motion.div
            className="group flex flex-col items-center justify-center bg-transperent border border-white 
            rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all duration-100 p-2 sm:p-3 h-full w-full"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div className="flex items-center justify-center bg-gray-50 rounded-full p-2 sm:p-3 mb-1 sm:mb-2 group-hover:bg-gray-100 transition-colors duration-300">
                <motion.img
                    src={logo}
                    alt={logoName}
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                />
            </div>
            <span className="text-xs sm:text-sm md:text-base font-semibold text-center line-clamp-1 sm:line-clamp-2 text-slate-200">
                {logoName}
            </span>
        </motion.div>
    );
};