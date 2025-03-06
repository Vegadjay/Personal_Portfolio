import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Heading from '../components/Heading';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from 'emailjs-com';

export const Page7 = () => {
    const [resultMessage, setResultMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Load environment variables
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_USER_ID;

        // Debug: Log environment variables
        console.log("Service ID:", serviceId);
        console.log("Template ID:", templateId);
        console.log("Public Key:", publicKey);

        if (!serviceId || !templateId || !publicKey) {
            console.error("Missing EmailJS environment variables.");
            toast.error("EmailJS configuration is missing!");
            setIsSubmitting(false);
            return;
        }

        emailjs.sendForm(serviceId, templateId, e.target, publicKey)
            .then((response) => {
                console.log('Email sent successfully:', response);
                setResultMessage("Thank you for reaching out! We'll get back to you soon.");
                toast.success("Message sent successfully!");
                e.target.reset();
            })
            .catch((error) => {
                console.error('EmailJS Error:', error);
                setResultMessage("Failed to send your message. Please try again.");
                toast.error("Failed to send message.");
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="container mx-auto px-4 py-10 md:py-16 lg:py-20"
        >
            <ToastContainer />
            <div className="flex flex-col items-center">
                <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-10 text-center w-full"
                >
                    <Heading Heading={"Let's Talk"} />
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-10 w-full">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        className="w-full lg:w-2/3 mx-auto"
                    >
                        <form onSubmit={sendEmail} className="w-full">
                            <motion.div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 md:p-8 shadow-xl border border-white/10">
                                {/* Name & Email Fields */}
                                <div className="flex flex-col md:flex-row gap-4 mb-6">
                                    <div className="w-full md:w-1/2">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            placeholder="Enter your name"
                                            required
                                            className="w-full rounded-lg p-3 bg-gray-800/80 text-white placeholder-gray-400 
                                            focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all border border-gray-700"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            required
                                            className="w-full rounded-lg p-3 bg-gray-800/80 text-white placeholder-gray-400 
                                            focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all border border-gray-700"
                                        />
                                    </div>
                                </div>

                                {/* Subject Field */}
                                <div className="mb-6">
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        id="subject"
                                        type="text"
                                        name="subject"
                                        placeholder="What's this about?"
                                        required
                                        className="w-full rounded-lg p-3 bg-gray-800/80 text-white placeholder-gray-400 
                                        focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all border border-gray-700"
                                    />
                                </div>

                                {/* Message Field */}
                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Write your message here..."
                                        required
                                        className="w-full h-40 rounded-lg p-3 bg-gray-800/80 text-white placeholder-gray-400 
                                        focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all border border-gray-700"
                                    ></textarea>
                                </div>

                                {/* Result Message */}
                                {resultMessage && (
                                    <div className={`mt-4 text-center p-4 rounded-lg ${resultMessage.includes("Thank you")
                                        ? "bg-green-500/20 text-green-300 border border-green-500/30"
                                        : "bg-red-500/20 text-red-300 border border-red-500/30"
                                        }`}
                                    >
                                        <p className="font-medium">{resultMessage}</p>
                                    </div>
                                )}

                                {/* Submit Button */}
                                <div className="mt-6 flex justify-center">
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 
                                        text-white font-semibold rounded-lg shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>Send Message</>
                                        )}
                                    </motion.button>
                                </div>
                            </motion.div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Page7;
