import React, { useState } from 'react';
import Heading from '../components/Heading';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Page7 = () => {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const accessKey = import.meta.env.VITE_NEXT_PUBLIC_WEB3FORMS_KEY;

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("");

        toast.info("Submitting your message...", { autoClose: 3000 });

        try {
            const formData = new FormData(event.target);
            formData.append("access_key", accessKey);
            formData.append("from_name", "Portfolio Contact Form");

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Email sent successfully!", { autoClose: 3000 });
                event.target.reset();
            } else {
                toast.error("Something went wrong. Please try again.", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 5000,
                });
                console.error("Submission Error:", data);
            }
        } catch (error) {
            console.error("Submission Error:", error);
            toast.error("Failed to send message. Please try again later.", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000,
            });
            setResult("Failed to send message. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
            <ToastContainer />
            <div className="flex flex-col items-center">
                <div className="mb-8 w-full text-center">
                    <Heading Heading={"Let's Talk:- "} />
                </div>

                {/* Form Section */}
                <div className="w-full flex flex-col lg:flex-row gap-8">
                    <div className="w-full lg:w-1/3 flex justify-center items-start">
                        <img
                            src="/gif/Mypic.png"
                            alt="Contact Gif"
                            className="w-60 h-60 md:w-96 md:h-96 lg:w-[27rem] lg:h-[26rem] rounded-lg object-cover"
                        />
                    </div>
                    <div className="w-full lg:w-2/3">
                        <form onSubmit={onSubmit} className="w-full">
                            <div className="bg-white/5 rounded-xl p-6 md:p-8">
                                <input type="hidden" name="access_key" value={accessKey} />

                                <div className="flex flex-col md:flex-row gap-4">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter Name"
                                        required
                                        className="w-full md:w-1/2 rounded-lg p-3 font-poppins bg-white/10"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter Email"
                                        required
                                        className="w-full md:w-1/2 rounded-lg p-3 font-poppins bg-white/10"
                                    />
                                </div>

                                <div className="mt-4">
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        required
                                        className="w-full rounded-lg p-3 font-poppins bg-white/10"
                                    />
                                </div>

                                <div className="mt-4">
                                    <textarea
                                        name="message"
                                        placeholder="Write Here"
                                        required
                                        className="w-full h-36 rounded-lg p-3 font-poppins bg-white/10"
                                    />
                                </div>

                                {result && (
                                    <div
                                        className={`mt-4 text-center p-3 rounded-lg ${result.includes("thank you") ? "bg-green-500/10 text-green-300" : "bg-red-500/10 text-red-300"
                                            }`}
                                    >
                                        {result}
                                    </div>
                                )}

                                <div className="mt-6 flex justify-center">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-gradient-to-br from-slate-950 to-slate-800 px-4 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-110 focus:outline-none disabled:opacity-70"
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
