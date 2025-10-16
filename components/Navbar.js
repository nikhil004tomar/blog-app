"use client";
import React, { useState } from 'react';
import { ModeToggle } from './ui/togglebtn';
import Link from 'next/link';

const Navbar = () => {
const [menuOpen, setMenuOpen] = useState(false);

return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">MyBlog</Link>
                </div>
                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Home</Link>
                    <Link href="/pages/blog" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Blog</Link>
                    <Link href="/pages/about" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">About</Link>
                    <Link href="/pages/contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Contact</Link>
                </div>
                {/* Theme Toggle Button */}
                <div>
                    <ModeToggle />
                </div>
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        type="button"
                        className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
                        aria-label="Open menu"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden mt-2 space-y-2 px-2 pb-3">
                    <Link href="/" className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Home</Link>
                    <Link href="/pages/blog" className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Blog</Link>
                    <Link href="/pages/about" className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">About</Link>
                    <Link href="/pages/contact" className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Contact</Link>
                </div>
            )}
        </div>
    </nav>
)
}

export default Navbar