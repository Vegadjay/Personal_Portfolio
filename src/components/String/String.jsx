import React, { useRef, useEffect } from 'react';
import './style.css';
import { setupEventListeners } from './index.js';

const String = () => {
    const bounceRef = useRef(null);

    useEffect(() => {
        setupEventListeners(bounceRef.current);
    }, []);

    return (
        <div
            ref={bounceRef}
            id="bounce"
            className="flex justify-center items-center py-4 md:py-6 lg:py-8"
        >
            <svg
                className="w-full max-w-screen-lg h-auto"
                viewBox="0 0 1000 200"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M 10 100 Q 500 100 990 100" stroke="white" fill="transparent" />
            </svg>
        </div>
    );
};

export default String;
