import { motion } from 'framer-motion';
import React from 'react';

const CardCompo2 = ({ title, description, year }) => {
    return (
        <div className="relative flex justify-start w-full max-w-lg p-6 ">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -left-[3.3rem] hidden lg:block md:block sm:hidden top-1/2 transform -translate-y-1/2 h-20 w-20 flex items-center justify-center rounded-full bg-slate-200 border border-black text-slate-900 font-bold shadow-lg"
            >
                <span className='h-full w-full grid place-content-center'>
                    {year}
                </span>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 flex flex-col justify-between text-white rounded-lg shadow-lg p-6 w-full max-w-md ml-8 "
            >
                <div className="border border-gray-300 rounded-md shadow-sm">
                    <div className="bg-gray-100 px-4 py-3 border-b border-gray-300 rounded-t-md">
                        <h3 className="text-lg font-medium text-slate-900">{title}</h3>
                    </div>
                    <div className="p-4  text-white">
                        <p>{description}</p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -right-[5.6rem] hidden sm:block lg:hidden md:hidden top-1/2 transform -translate-y-1/2 h-20 w-20 rounded-full bg-slate-200 border border-black text-slate-900 font-bold shadow-lg"
            >
                <span className='h-full w-full grid place-content-center'>
                    {year}
                </span>
            </motion.div>
        </div>
    );
};

export default CardCompo2;