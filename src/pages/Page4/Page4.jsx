import React from 'react';
import { motion, useAnimationControls } from 'framer-motion';
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
                staggerChildren: 0.08,
                delayChildren: 0.2
            }
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 lg:-mt-12">
            <motion.div
                className="mb-12 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <Heading Heading="Skills:- " />
                <motion.div
                    className="h-1 w-24 mx-auto mt-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-600"
                    initial={{ width: 0 }}
                    animate={{ width: 96 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                />
            </motion.div>

            <motion.div
                className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.logoName}
                        className="w-full max-w-[140px]"
                        variants={{
                            hidden: {
                                opacity: 0,
                                scale: 0.8,
                                y: 20
                            },
                            show: {
                                opacity: 1,
                                scale: 1,
                                y: 0,
                                transition: {
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 12
                                }
                            }
                        }}
                    >
                        <Skilldiv logoName={skill.logoName} logo={skill.logo} index={index} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

const Skilldiv = ({ logoName, logo, index }) => {
    const controls = useAnimationControls();

    return (
        <motion.div
            className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-4 
                       border border-white/10 hover:border-white/30
                       transition-all duration-300 h-full w-full"
            whileHover={{
                y: -5,
                transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                }
            }}
        >
            <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
                }}
            />

            <motion.div
                className="relative flex items-center justify-center mb-3"
                animate={{
                    y: [0, -6, 0],
                }}
                transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.1
                }}
            >
                <div className="relative p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                    <motion.img
                        src={logo}
                        alt={logoName}
                        className="w-8 h-8 md:w-10 md:h-10 object-contain relative z-10"
                        whileHover={{
                            rotate: [0, -90, 90, 0],
                            transition: {
                                duration: 0.4,
                                ease: "easeInOut"
                            }
                        }}
                    />
                    <motion.div
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                            background: "radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.2), transparent 70%)",
                            filter: "blur(4px)",
                        }}
                    />
                </div>
            </motion.div>

            <motion.p
                className="text-sm font-medium text-center text-white/70 group-hover:text-white
                          transition-colors duration-300"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
            >
                {logoName}
            </motion.p>
        </motion.div>
    );
};

