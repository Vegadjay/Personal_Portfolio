import React from 'react';

const Heading = ({ Heading }) => {
    return (
        <div className="flex justify-center flex-col items-center w-full">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-600 text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
                {Heading} :-
            </h1>
            <div className="w-full max-w-[200px] sm:max-w-[300px] md:max-w-[400px] h-8">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 400 50"
                    className="w-full h-full"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <path
                        d="M10 25 
                           C 30 10, 50 40, 70 25 
                           C 90 10, 110 40, 130 25 
                           C 150 10, 170 40, 190 25 
                           C 210 10, 230 40, 250 25 
                           C 270 10, 290 40, 310 25 
                           C 330 10, 350 40, 370 25 
                           C 390 10, 410 40, 430 25"
                        stroke="#800080"
                        strokeWidth="7"
                        fill="none"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Heading;