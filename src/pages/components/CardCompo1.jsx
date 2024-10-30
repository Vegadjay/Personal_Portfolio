import { motion } from 'framer-motion';
import React from 'react';

const CardCompo1 = ({ title, description, year }) => {
  return (
    <div className="relative flex flex-col sm:flex-row sm:justify-end w-full max-w-lg p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute -right-[5.3rem] hidden lg:block md:block sm:hidden top-1/2 transform -translate-y-1/2 h-20 w-20 justify-center rounded-full bg-slate-200 border border-black text-slate-900 font-bold shadow-lg"
      >
        <span className='grid place-content-center h-full w-full'>
          {year}
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col justify-between text-white rounded-lg shadow-lg p-6 w-full max-w-md"
      >
        <div className="border border-gray-300 rounded-md shadow-sm">
          <div className="bg-gray-100 px-4 py-3 border-b border-gray-300 rounded-t-md">
            <h3 className="text-lg font-medium text-slate-900">{title}</h3>
          </div>
          <div className="p-4">
            <p>{description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CardCompo1;
