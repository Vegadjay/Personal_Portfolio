import React, { useState } from 'react';
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

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const userId = import.meta.env.VITE_EMAILJS_USER_ID;

        emailjs.sendForm(serviceId, templateId, e.target, userId)
            .then((response) => {
                console.log('Email sent:', response.text);
                setResultMessage("Thank you for reaching out! We'll get back to you soon.");
                toast.success("Message sent successfully!");
                setIsSubmitting(false);
                e.target.reset();
            })
            .catch((error) => {
                console.error('Error:', error.text);
                setResultMessage("Failed to send your message. Please try again.");
                toast.error("Failed to send message.");
                setIsSubmitting(false);
            });
    };

    return (
        <div className="container mx-auto px-4 py-10 md:py-16 lg:py-20">
            <ToastContainer />
            <div className="flex flex-col items-center">
                <div className="mb-10 text-center w-full">
                    <Heading Heading={"Let's Talk"} />
                </div>

                <div className="flex flex-col lg:flex-row gap-10 w-full">
                    {/* Left Section: Image */}
                    <div className="flex justify-center items-start w-full lg:w-1/3">
                        <img
                            src="/gif/Mypic.png"
                            alt="Contact Gif"
                            className="w-64 h-64 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-lg object-cover shadow-lg"
                        />
                    </div>

                    {/* Right Section: Form */}
                    <div className="w-full lg:w-2/3">
                        <form onSubmit={sendEmail} className="w-full">
                            <div className="bg-white/10 rounded-lg p-6 md:p-8 shadow-lg">
                                {/* Name & Email Fields */}
                                <div className="flex flex-col md:flex-row gap-4">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter Name"
                                        required
                                        className="w-full md:w-1/2 rounded-md p-3 font-poppins bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter Email"
                                        required
                                        className="w-full md:w-1/2 rounded-md p-3 font-poppins bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500"
                                    />
                                </div>

                                {/* Subject Field */}
                                <div className="mt-4">
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        required
                                        className="w-full rounded-md p-3 font-poppins bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500"
                                    />
                                </div>

                                {/* Message Field */}
                                <div className="mt-4">
                                    <textarea
                                        name="message"
                                        placeholder="Write your message here"
                                        required
                                        className="w-full h-40 rounded-md p-3 font-poppins bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500"
                                    ></textarea>
                                </div>

                                {/* Result Message */}
                                {resultMessage && (
                                    <div
                                        className={`mt-4 text-center p-3 rounded-md ${resultMessage.includes("Thank you")
                                            ? "bg-green-500/10 text-green-400"
                                            : "bg-red-500/10 text-red-400"
                                            }`}
                                    >
                                        {resultMessage}
                                    </div>
                                )}

                                {/* Submit Button */}
                                <div className="mt-6 flex justify-center">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex items-center justify-center px-6 py-3 bg-gradient-to-br from-blue-600 to-blue-500 text-white font-semibold rounded-md shadow-lg transition-transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page7;
