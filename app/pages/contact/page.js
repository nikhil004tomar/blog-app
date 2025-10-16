'use client';

import { useState } from 'react';

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setSubmitted(true);
            setLoading(false);
        }, 1500); // Simulate API call
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-700">
            <div className="max-w-4xl w-full bg-white/80 dark:bg-gray-800/80 rounded-3xl shadow-2xl p-10 grid grid-cols-1 md:grid-cols-2 gap-10 backdrop-blur-md animate-fade-in">
                {/* Contact Info */}
                <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left animate-slide-in-left">
                    <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-300 dark:to-pink-400 mb-4 drop-shadow-lg animate-gradient-x">
                        Contact Us
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
                        Have a question or want to work together? Fill out the form and we’ll get back to you soon!
                    </p>
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 animate-bounce">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path d="M16 12H8m0 0l4-4m-4 4l4 4" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                            <a href="mailto:hello@example.com" className="text-blue-600 dark:text-blue-400 hover:underline font-medium transition-colors duration-300">
                                hello@example.com
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 animate-pulse">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.516 2.064A2 2 0 0011.72 8.485l-2.064.516A2 2 0 018.28 11.72l.516 2.064A2 2 0 0011.72 15.72l2.064-.516A2 2 0 0015.72 11.72l-.516-2.064A2 2 0 0011.72 8.485l2.064-.516A2 2 0 0015.72 5.28l-.516-2.064A2 2 0 0011.72 2.28L9.656 2.796A2 2 0 008.28 5.28l.516 2.064A2 2 0 0011.72 8.485z" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                            <a href="tel:+1234567890" className="text-green-600 dark:text-green-400 hover:underline font-medium transition-colors duration-300">
                                +1 (234) 567-890
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300 animate-spin-slow">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path d="M17 20h5v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2h5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                            <span className="text-gray-700 dark:text-gray-200 font-medium">
                                123 Main St, City, Country
                            </span>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="animate-slide-in-right">
                    {submitted ? (
                        <div className="flex flex-col items-center justify-center h-full animate-fade-in">
                            <svg className="w-20 h-20 text-green-500 mb-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Thank you!</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-center">
                                Your message has been sent. We’ll get back to you soon.
                            </p>
                        </div>
                    ) : (
                        <form className="space-y-8" onSubmit={handleSubmit}>
                            <div className="relative group">
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1 transition-colors duration-300">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    value={form.name}
                                    onChange={handleChange}
                                    className="peer mt-1 block w-full rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-900/60 text-gray-900 dark:text-white shadow-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 transition-all duration-300 outline-none px-4 py-3"
                                    placeholder="Your Name"
                                />
                                <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-blue-400 to-pink-400 transition-all duration-500 peer-focus:w-full rounded-xl"></span>
                            </div>
                            <div className="relative group">
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1 transition-colors duration-300">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    value={form.email}
                                    onChange={handleChange}
                                    className="peer mt-1 block w-full rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-900/60 text-gray-900 dark:text-white shadow-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:focus:ring-pink-900 transition-all duration-300 outline-none px-4 py-3"
                                    placeholder="you@example.com"
                                />
                                <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-pink-400 to-blue-400 transition-all duration-500 peer-focus:w-full rounded-xl"></span>
                            </div>
                            <div className="relative group">
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1 transition-colors duration-300">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    required
                                    value={form.message}
                                    onChange={handleChange}
                                    className="peer mt-1 block w-full rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-900/60 text-gray-900 dark:text-white shadow-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900 transition-all duration-300 outline-none px-4 py-3 resize-none"
                                    placeholder="How can we help you?"
                                />
                                <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-500 peer-focus:w-full rounded-xl"></span>
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full py-3 px-6 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-blue-600 text-white font-bold rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 flex items-center justify-center gap-2 ${
                                    loading ? 'opacity-60 cursor-not-allowed' : ''
                                }`}
                            >
                                {loading ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    <>Send Message</>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
            {/* Animations */}
            <style jsx global>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: scale(0.98);}
                    to { opacity: 1; transform: scale(1);}
                }
                .animate-fade-in {
                    animation: fade-in 1s cubic-bezier(.4,0,.2,1) both;
                }
                @keyframes slide-in-left {
                    from { opacity: 0; transform: translateX(-40px);}
                    to { opacity: 1; transform: translateX(0);}
                }
                .animate-slide-in-left {
                    animation: slide-in-left 1s 0.2s cubic-bezier(.4,0,.2,1) both;
                }
                @keyframes slide-in-right {
                    from { opacity: 0; transform: translateX(40px);}
                    to { opacity: 1; transform: translateX(0);}
                }
                .animate-slide-in-right {
                    animation: slide-in-right 1s 0.2s cubic-bezier(.4,0,.2,1) both;
                }
                @keyframes gradient-x {
                    0%, 100% { background-position: 0% 50%;}
                    50% { background-position: 100% 50%;}
                }
                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient-x 4s ease-in-out infinite;
                }
                @keyframes spin-slow {
                    0% { transform: rotate(0deg);}
                    100% { transform: rotate(360deg);}
                }
                .animate-spin-slow {
                    animation: spin-slow 6s linear infinite;
                }
            `}</style>
        </main>
    );
}