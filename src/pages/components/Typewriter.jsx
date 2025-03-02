import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Typewriter = () => {
    const texts = ["Hello, World!", "Welcome to My Portfolio", "React Developer", "Frontend Developer"];
    const [currentText, setCurrentText] = useState(texts[0]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 4500);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setCurrentText(texts[index]);
    }, [index]);

    return (
        <div className="flex p-4">
            <motion.div
                className="font-mono font-bold text-green-400 text-xl md:text-2xl lg:text-3xl tracking-wider overflow-hidden whitespace-nowrap max-w-full drop-shadow-lg"
                style={{
                    textShadow: "0 0 10px rgba(74, 222, 128, 0.8), 0 0 20px rgba(74, 222, 128, 0.5)"
                }}
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{
                    duration: 2,
                    ease: "easeInOut"
                }}
                key={currentText}
            >
                {currentText}
                <motion.span
                    className="inline-block w-1 h-8 bg-green-300 ml-1"
                    style={{
                        boxShadow: "0 0 10px rgba(134, 239, 172, 0.8), 0 0 20px rgba(134, 239, 172, 0.5)"
                    }}
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        repeatType: "loop"
                    }}
                />
            </motion.div>
        </div>
    );
};

export default Typewriter;