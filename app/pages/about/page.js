"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
export default function AboutPage() {
    const teamImgRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        // Animate section fade-in
        if (sectionRef.current) {
            sectionRef.current.style.opacity = 0;
            sectionRef.current.style.transform = "translateY(40px)";
            setTimeout(() => {
                sectionRef.current.style.transition = "opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)";
                sectionRef.current.style.opacity = 1;
                sectionRef.current.style.transform = "translateY(0)";
            }, 100);
        }
        // Animate image floating
        let frame;
        let t = 0;
        function animate() {
            if (teamImgRef.current) {
                teamImgRef.current.style.transform = `translateY(${Math.sin(t) * 10}px) scale(1.04)`;
            }
            t += 0.04;
            frame = requestAnimationFrame(animate);
        }
        animate();
        return () => cancelAnimationFrame(frame);
    }, []);

    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center py-12 px-4 overflow-x-hidden">
            <section
                ref={sectionRef}
                className="max-w-3xl w-full bg-white/80 dark:bg-gray-800/80 rounded-3xl shadow-2xl p-8 md:p-12 backdrop-blur-md border border-blue-100 dark:border-gray-700 relative"
                style={{ opacity: 0 }}
            >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-t-3xl animate-pulse" />
                <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-300 dark:via-purple-300 dark:to-pink-300 mb-6 text-center drop-shadow-lg animate-fade-in-down">
                    About Us
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center animate-fade-in-up">
                    Welcome to <span className="font-semibold text-blue-600 dark:text-blue-300">MyBlog</span>! We are passionate about sharing knowledge, stories, and inspiration with the world.
                </p>
                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Animated team image */}
                    <Image
                        ref={teamImgRef}
                        src="https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
                        alt="Our Team"
                        className="w-40 h-40 object-cover rounded-full shadow-xl mx-auto md:mx-0 border-4 border-blue-200 dark:border-blue-500 transition-transform duration-500"
                        style={{ willChange: "transform" }}
                    />
                    <div>
                        <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-2 animate-fade-in-right">
                            Our Mission
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 animate-fade-in-right delay-100">
                            Our mission is to empower readers with insightful articles, practical tips, and engaging stories. Whether you’re here to learn, explore, or be inspired, we’re glad to have you!
                        </p>
                        <h2 className="text-2xl font-bold text-pink-700 dark:text-pink-300 mb-2 animate-fade-in-right delay-200">
                            Meet the Team
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 animate-fade-in-right delay-300">
                            We are a group of writers, developers, and creators who love to share our experiences and expertise. Thank you for being part of our community!
                        </p>
                    </div>
                </div>
                <div className="absolute bottom-4 right-8 animate-bounce">
                    <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="16" stroke="#a78bfa" strokeWidth="4" fill="#f3e8ff" />
                        <path d="M18 10v12m0 0l-5-5m5 5l5-5" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </section>
            <style jsx global>{`
                @keyframes fade-in-down {
                    from { opacity: 0; transform: translateY(-30px);}
                    to { opacity: 1; transform: translateY(0);}
                }
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(30px);}
                    to { opacity: 1; transform: translateY(0);}
                }
                @keyframes fade-in-right {
                    from { opacity: 0; transform: translateX(-30px);}
                    to { opacity: 1; transform: translateX(0);}
                }
                .animate-fade-in-down { animation: fade-in-down 0.8s both; }
                .animate-fade-in-up { animation: fade-in-up 0.8s both; }
                .animate-fade-in-right { animation: fade-in-right 0.8s both; }
                .delay-100 { animation-delay: 0.1s; }
                .delay-200 { animation-delay: 0.2s; }
                .delay-300 { animation-delay: 0.3s; }
            `}</style>
        </main>
    );
}