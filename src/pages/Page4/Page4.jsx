import React from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import Heading from '../components/Heading';

export const Page4 = () => {
    const skillCategories = {
        frontend: {
            title: "Frontend Technologies",
            skills: [
                { logoName: "REACT", logo: "/icons/React-Dark.svg" },
                { logoName: "NEXTJS", logo: "/icons/NextJS.svg" },
                { logoName: "JAVASCRIPT", logo: "/icons/JavaScript.svg" },
                { logoName: "TYPESCRIPT", logo: "/icons/TypeScript.svg" },
                { logoName: "TAILWIND", logo: "/icons/TailwindCSS-Dark.svg" },
                { logoName: "SVG", logo: "/icons/SVG-Dark.svg" },
            ]
        },
        backend: {
            title: "Backend & Database",
            skills: [
                { logoName: "NODE JS", logo: "/icons/NodeJS.svg" },
                { logoName: "JAVA", logo: "/icons/Java.svg" },
                { logoName: "MONGODB", logo: "/icons/MongoDB.svg" },
                { logoName: "MYSQL", logo: "/icons/MySQL.svg" },
                { logoName: "FIREBASE", logo: "/icons/Firebase.svg" },
            ]
        },
        devOps: {
            title: "DevOps & Tools",
            skills: [
                { logoName: "DOCKER", logo: "/icons/Docker.svg" },
                { logoName: "GIT", logo: "/icons/Git.svg" },
                { logoName: "GITHUB", logo: "/icons/Github.svg" },
                { logoName: "LINUX", logo: "/icons/Linux.svg" },
                { logoName: "POWERSHELL", logo: "/icons/Powershell-Dark.svg" },
            ]
        },
        tools: {
            title: "Development Tools",
            skills: [
                { logoName: "FIGMA", logo: "/icons/Figma.svg" },
                { logoName: "POSTMAN", logo: "/icons/Postman.svg" },
                { logoName: "STACKOVERFLOW", logo: "/icons/StackOverflow-Dark.svg" },
            ]
        }
    };

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    return (
        <div className="container mx-auto px-4 py-12 lg:-mt-12">
            <motion.div
                className="mb-16 text-center"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Heading Heading="Skills" />
            </motion.div>

            <div className="space-y-16">
                {Object.entries(skillCategories).map(([key, category], categoryIndex) => (
                    <div key={key} className="mb-8">
                        <motion.h3
                            className="text-2xl font-bold mb-8 text-white/90 pl-6 border-l-4 border-blue-500
                                     relative overflow-hidden"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                        >
                            <motion.span
                                className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                            />
                            {category.title}
                        </motion.h3>

                        <motion.div
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {category.skills.map((skill, index) => (
                                <motion.div
                                    key={skill.logoName}
                                    className="w-full max-w-[160px]"
                                    variants={{
                                        hidden: {
                                            opacity: 0,
                                            scale: 0.5,
                                            y: 30
                                        },
                                        show: {
                                            opacity: 1,
                                            scale: 1,
                                            y: 0,
                                            transition: {
                                                type: "spring",
                                                stiffness: 120,
                                                damping: 10,
                                                mass: 0.8
                                            }
                                        }
                                    }}
                                >
                                    <Skilldiv logoName={skill.logoName} logo={skill.logo} index={index} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Skilldiv = ({ logoName, logo, index }) => {
    const controls = useAnimationControls();

    return (
        <motion.div
            className="group relative bg-white/[0.03] backdrop-blur-lg rounded-xl p-5 
                       border border-white/10 hover:border-blue-500/50
                       transition-all duration-500 h-full w-full
                       hover:bg-white/[0.06] hover:shadow-lg hover:shadow-blue-500/20"
            whileHover={{
                y: -8,
                transition: {
                    type: "spring",
                    stiffness: 150,
                    damping: 12
                }
            }}
        >
            <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
                }}
            />

            <motion.div
                className="relative flex items-center justify-center mb-4"
                animate={{
                    y: [0, -8, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.15
                }}
            >
                <div className="relative p-4 rounded-full bg-white/[0.07] group-hover:bg-white/[0.12] 
                              transition-colors duration-500 overflow-hidden">
                    <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100"
                        animate={{
                            background: [
                                "radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)",
                                "radial-gradient(circle at 100% 100%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)",
                                "radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)",
                            ],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                    <motion.img
                        src={logo}
                        alt={logoName}
                        className="w-10 h-10 md:w-12 md:h-12 object-contain relative z-10"
                        whileHover={{
                            scale: 1.2,
                            rotate: [0, -10, 10, 0],
                            transition: {
                                duration: 0.6,
                                ease: "easeInOut"
                            }
                        }}
                    />
                </div>
            </motion.div>

            <motion.p
                className="text-sm font-medium text-center text-white/60 group-hover:text-white
                          transition-colors duration-500"
                initial={{ opacity: 0.6 }}
                whileHover={{ opacity: 1 }}
            >
                {logoName}
            </motion.p>
        </motion.div>
    );
};

export default Page4;