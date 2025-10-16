"use client";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="py-12">
        <div className="relative px-4 sm:px-6 lg:px-8 mx-auto grid grid-cols-1 xl:grid-cols-2 container">
          {/* Left Content */}
          <div className="relative z-10 pb-8 max-w-3xl lg:pb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Latest
                </span>
              </div>
              <div className="h-4 w-px bg-gray-300 dark:bg-gray-600"></div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  Tailwind CSS v4.1.0
                </span>
              </div>
            </div>
            <h1 className="mt-10 text-4xl font-extrabold text-blue-950 dark:text-white lg:text-4xl xl:text-5xl font-sans leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400">
                Beautiful
              </span>
              <span className="sm:block sm:mt-2"> Tailwind CSS Components</span>
              <span className="sm:block text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-600 dark:text-gray-300 mt-1">
                That Just Work.
              </span>
            </h1>
            <p className="mt-8 text-lg text-gray-600 lg:mt-10 lg:text-xl dark:text-gray-300 leading-relaxed max-w-2xl">
              Build stunning, responsive interfaces with our premium collection
              of Tailwind CSS components. Designed for modern web development
              with RTL support, elegant dark mode, and pixel-perfect attention
              to detail.
            </p>
            <div className="items-center mt-10 gap-4 flex flex-col sm:flex-row lg:gap-6 lg:mt-12">
              <a
                href="/components"
                className="relative inline-block w-full p-px rounded-xl sm:w-auto group h-12 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 dark:from-purple-500 dark:via-blue-500 dark:to-indigo-500 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-400 before:via-blue-400 before:to-indigo-400 dark:before:from-purple-400 dark:before:via-blue-400 dark:before:to-indigo-400 before:scale-75 before:opacity-50 before:rounded-xl before:blur-lg before:transition before:duration-300 active:before:scale-90 focus:before:scale-90 focus:before:opacity-75 hover:before:scale-100 hover:before:opacity-100 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <p className="relative flex justify-center h-full text-sm font-semibold items-center text-white tracking-wide bg-gray-950 px-8 rounded-[calc(0.75rem-1px)] group-hover:bg-gray-900 transition duration-300">
                  Check out Blog
                  <svg
                    className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </p>
              </a>
            </div>
          </div>
          {/* Right Content */}
          <div className="xl:flex items-end justify-end hidden">
            <div className="lg:flex justify-end mr-0 lg:mr-20">
              <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-md dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-md sm:w-full sm:p-6">
                <div>
                  <Image
                    className="object-cover w-full h-48 rounded-md"
                    src="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60"
                    alt="Dashboard"
                    width={400}
                    height={192}
                    priority
                  />
                  <div className="mt-4 text-center">
                    <h3
                      className="font-medium leading-6 text-gray-800 capitalize dark:text-white"
                      id="modal-title"
                    >
                      Welcome to your dashboard
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Aspernatur dolorum aliquam ea, ratione deleniti porro
                      officia? Explicabo maiores suscipit.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-4">
                  <button className="w-2 h-2 focus:outline-none mx-1.5 bg-blue-500 rounded-full"></button>
                  <button className="w-2 h-2 focus:outline-none mx-1.5 bg-blue-100 dark:bg-gray-700 rounded-full"></button>
                  <button className="w-2 h-2 focus:outline-none mx-1.5 bg-blue-100 dark:bg-gray-700 rounded-full"></button>
                  <button className="w-2 h-2 focus:outline-none mx-1.5 bg-blue-100 dark:bg-gray-700 rounded-full"></button>
                </div>
                <div className="mt-5 sm:flex sm:items-center sm:-mx-2">
                  <button className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                    Skip
                  </button>
                  <button className="w-full px-4 py-2 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 dark:text-white mb-8 animate-fade-in-down">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Clients
            </span>
          </h2>
          <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12 animate-fade-in-up">
            Trusted by innovative teams at companies of all sizes
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 animate-slide-in">
            {/* Example client logos */}
            {[
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                alt: "React",
              },
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg",
                alt: "React2",
              },
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
                alt: "JavaScript",
              },
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
                alt: "Tailwind CSS",
              },
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
                alt: "Express",
              },
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
                alt: "Sass",
              },
            ].map((logo, idx) => (
              <div
                key={logo.alt}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 flex items-center justify-center w-32 h-20 hover:scale-105 hover:shadow-2xl transition-transform duration-300 animate-bounce-in"
                style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={100}
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Animations using Tailwind CSS and custom keyframes */}
        <style jsx>{`
          @keyframes fade-in-down {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fade-in-up {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes slide-in {
            0% {
              opacity: 0;
              transform: translateX(-40px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes bounce-in {
            0% {
              opacity: 0;
              transform: scale(0.8);
            }
            60% {
              opacity: 1;
              transform: scale(1.05);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          .animate-fade-in-down {
            animation: fade-in-down 0.7s both;
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.7s both;
          }
          .animate-slide-in {
            animation: slide-in 0.7s both;
          }
          .animate-bounce-in {
            animation: bounce-in 0.7s both;
          }
        `}</style>
      </section>
    </>
  );
}
