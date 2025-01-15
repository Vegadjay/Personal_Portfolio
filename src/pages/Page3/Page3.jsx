import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronRight, BookOpen, Briefcase, GraduationCap } from 'lucide-react';
import Heading from '../components/Heading';

const TimelineCard = ({ year, title, description, align = "left", index, icon: Icon }) => {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "center center"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.7], [0.8, 1]);

    // Updated class for year badge positioning
    const yearBadgeClass = align === 'left'
        ? 'absolute -right-16 top-8'
        : 'absolute -left-16 top-8';

    return (
        <motion.div
            ref={cardRef}
            style={{ y, opacity, scale }}
            className={`w-full md:w-[calc(100%-8rem)] ${align === 'left' ? 'md:mr-auto' : 'md:ml-auto'} relative`}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <div className={`
                relative backdrop-blur-sm rounded-xl p-8
                border border-white/10 transition-all duration-300
                hover:border-blue-500/30 group cursor-pointer
            `}>
                {/* Year Badge with fixed positioning */}
                <motion.div
                    className={`${yearBadgeClass} hidden md:flex flex-col items-center gap-2 z-10 min-w-[100px]`}
                    whileHover={{ scale: 1.1 }}
                >
                    <motion.div
                        className="backdrop-blur-md border border-blue-500/50 rounded-full p-4
                                 flex items-center justify-center relative overflow-hidden w-16 h-16"
                        whileHover={{ scale: 1.1 }}
                    >
                        <span className="text-blue-200 font-bold text-lg">{year}</span>
                        <motion.div
                            className="absolute inset-0 bg-blue-400/20"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0, 0.2, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>
                    <motion.div
                        className="p-2 rounded-full border border-blue-500/30"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Icon size={20} className="text-blue-200" />
                    </motion.div>
                </motion.div>

                {/* Content */}
                <div className="space-y-4">
                    <motion.div
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: align === 'left' ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                            {title}
                        </h3>
                        <motion.div
                            animate={{ x: isHovered ? 10 : 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <ChevronRight className="text-blue-400" />
                        </motion.div>
                    </motion.div>

                    <motion.p
                        className="text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {description}
                    </motion.p>

                    <motion.div
                        className="flex gap-4 pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.span
                            className="text-sm text-blue-400/80 border border-blue-500/20 rounded-full px-4 py-1
                                     hover:bg-blue-500/10 transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                        >
                            Details
                        </motion.span>
                    </motion.div>
                </div>

                {/* Decorative Corner Accents */}
                {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((position) => (
                    <motion.div
                        key={position}
                        className={`absolute w-8 h-8 border-2 border-transparent
                                  group-hover:border-blue-500/30 transition-colors duration-300
                                  ${position.includes('top') ? 'top-0' : 'bottom-0'}
                                  ${position.includes('left') ? 'left-0' : 'right-0'}`}
                        style={{
                            borderTop: position.includes('top') ? undefined : 'none',
                            borderBottom: position.includes('bottom') ? undefined : 'none',
                            borderLeft: position.includes('left') ? undefined : 'none',
                            borderRight: position.includes('right') ? undefined : 'none',
                            borderRadius: '0.75rem',
                        }}
                    />
                ))}
            </div>
        </motion.div>
    );
};

// Rest of the code remains the same...
export const Page3 = () => {
    // Previous code remains the same...
    const mainRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(null);

    const { scrollYProgress } = useScroll({
        target: mainRef,
        offset: ['start start', 'end end'],
    });

    const scaleProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
        mass: 1
    });

    const lineHeight = useTransform(
        scaleProgress,
        [0, 1],
        ["0%", "100%"]
    );

    const timelineData = [
        {
            year: 2022,
            title: "Higher Secondary Studies",
            description: "Completed Higher Secondary Education with a focus on Science and Mathematics, emphasizing courses in Computer Science, Mathematics, and Art/Design. Gained foundational knowledge in web development through personal projects, primarily using HTML and CSS.",
            align: "left",
            icon: BookOpen
        },
        {
            year: 2023,
            title: "Transition to Higher Education",
            description: "Enrolled in B.Tech in Computer Science Engineering. Developed practical skills by creating websites and applications for family and friends, enhancing my understanding of web technologies.",
            align: "right",
            icon: GraduationCap
        },
        {
            year: 2024,
            title: "Current Academic Pursuits",
            description: "Currently pursuing a Bachelor's degree in Computer Science at Darshan University. Now in the second year of my studies, I am focused on enhancing my programming skills and exploring advanced topics in software development.",
            align: "left",
            icon: Briefcase
        }
    ];

    return (
        <div className="min-h-screen w-full flex flex-col items-center py-12 md:mt-[0rem] lg:mt-0">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="text-center mb-16">
                    <Heading Heading="Education & Experience" />
                    <motion.div
                        className="h-1 w-24 mx-auto mt-4 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600"
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{ duration: 0.8 }}
                    />
                </div>

                <div ref={mainRef} className="relative max-w-6xl mx-auto px-8">
                    {/* Timeline line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full hidden md:block">
                        <motion.div
                            className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 via-purple-500 to-blue-600"
                            style={{ height: lineHeight }}
                        >
                            <motion.div
                                className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-400"
                                style={{
                                    boxShadow: "0 0 10px 2px rgba(96, 165, 250, 0.5)",
                                    y: lineHeight
                                }}
                            />
                        </motion.div>
                    </div>

                    <div className="space-y-16 md:space-y-24">
                        {timelineData.map((item, index) => (
                            <TimelineCard
                                key={item.year}
                                {...item}
                                index={index}
                                isActive={activeIndex === index}
                                onHover={() => setActiveIndex(index)}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Page3;