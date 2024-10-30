import React from 'react';
import Heading from '../components/Heading';
import CardCompo1 from '../components/CardCompo1';
import CardCompo2 from '../components/CardCompo2';
import { useScroll, useSpring, motion } from 'framer-motion';
import { useRef } from 'react';

export const Page3 = () => {
    const mainRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: mainRef,
        offset: ['start end', 'end end'],
    });

    const scaleProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div className="min-h-screen w-full flex flex-col items-center py-12 md:mt-[0rem] lg:mt-0">
            <Heading Heading="Education & Experience" />
            <div className="relative flex flex-col items-start justify-center mt-10 w-full">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full hidden lg:block md:block">
                    <div className="absolute top-0 left-0 w-full h-full bg-white hidden" />
                    <motion.div
                        style={{
                            scaleY: scaleProgress,
                            transformOrigin: 'top',
                        }}
                        className="absolute top-0 left-0 w-full bg-gray-600 h-full"
                    />
                </div>

                <div ref={mainRef} className="relative w-full max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-8 px-4 md:px-0">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col items-end md:pr-8 lg:mr-0"
                        >
                            <CardCompo1
                                title="Higher Secondary Studies"
                                description="Completed Higher Secondary Education with a focus on Science and Mathematics, emphasizing courses in Computer Science, Mathematics, and Art/Design. Gained foundational knowledge in web development through personal projects, primarily using HTML and CSS."
                                year={2022}
                            />
                        </motion.div>

                        <div className="hidden md:block" />

                        <div className="hidden md:block" />

                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col items-start md:pl-8 -ml-[2.3rem]"
                        >
                            <CardCompo2
                                title="Transition to Higher Education"
                                description="Enrolled in B.Tech in Computer Science Engineering. Developed practical skills by creating websites and applications for family and friends, enhancing my understanding of web technologies."
                                year={2023}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col items-end md:pr-8 lg:mr-0 "
                        >
                            <CardCompo1
                                title="Current Academic Pursuits"
                                description="Currently pursuing a Bachelor's degree in Computer Science at Darshan University. Now in the second year of my studies, I am focused on enhancing my programming skills and exploring advanced topics in software development."
                                year={2024}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page3;
