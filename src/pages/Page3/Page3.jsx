import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BookOpen, Briefcase, GraduationCap } from 'lucide-react';

const TimelineCard = ({ data, index }) => {
    const cardRef = useRef(null);
    const isEven = index % 2 === 0;

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "center center"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);

    return (
        <div className="relative flex w-full items-center justify-center">
            <motion.div
                ref={cardRef}
                style={{ y, opacity }}
                className={`w-full md:w-[40%] ${isEven ? 'md:text-right md:mr-auto' : 'md:ml-auto'}`}
            >
                <div className="relative rounded-lg border border-blue-500/20 bg-white/5 p-6 backdrop-blur-sm
                            hover:border-blue-500/40 transition-all duration-300">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 
                                bg-blue-500/10 px-4 py-1 backdrop-blur-md">
                        <span className="text-blue-200 font-semibold">{data.year}</span>
                        <data.icon size={16} className="text-blue-200" />
                    </div>

                    <h3 className="mb-3 text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                        {data.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-white/70">
                        {data.description}
                    </p>

                    {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((position) => (
                        <div
                            key={position}
                            className={`absolute w-6 h-6 border-2 border-blue-500/20
                                      ${position.includes('top') ? 'top-0' : 'bottom-0'}
                                      ${position.includes('left') ? 'left-0' : 'right-0'}`}
                            style={{
                                borderTop: position.includes('top') ? undefined : 'none',
                                borderBottom: position.includes('bottom') ? undefined : 'none',
                                borderLeft: position.includes('left') ? undefined : 'none',
                                borderRight: position.includes('right') ? undefined : 'none',
                                borderRadius: '0.5rem',
                            }}
                        />
                    ))}
                </div>
            </motion.div>

            <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
                <div className="w-4 h-4 rounded-full bg-blue-500/50 border-2 border-blue-400 
                            shadow-[0_0_12px_rgba(59,130,246,0.5)]" />
            </div>
        </div>
    );
};

const Timeline = () => {
    const timelineData = [
        {
            year: 2022,
            title: "Higher Secondary Studies",
            description: "Completed Higher Secondary Education with a focus on Science and Mathematics, emphasizing courses in Computer Science, Mathematics, and Art/Design.",
            icon: BookOpen
        },
        {
            year: 2023,
            title: "Transition to Higher Education",
            description: "Enrolled in B.Tech in Computer Science Engineering. Developed practical skills through various web development projects.",
            icon: GraduationCap
        },
        {
            year: 2024,
            title: "Current Academic Pursuits",
            description: "Currently pursuing Bachelor's in Computer Science at Darshan University, focusing on advanced software development topics.",
            icon: Briefcase
        }
    ];

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div className="min-h-screen w-full py-20">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Qualification</h2>
                    <motion.div
                        className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{ duration: 0.8 }}
                    />
                </motion.div>

                <div ref={containerRef} className="relative">
                    <div className="absolute left-1/2 top-8 bottom-8 w-px -translate-x-1/2 hidden md:block">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-600"
                            style={{ height: lineHeight }}
                        />
                    </div>

                    <div className="space-y-16">
                        {timelineData.map((data, index) => (
                            <TimelineCard
                                key={data.year}
                                data={data}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;