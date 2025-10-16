'use client';

import Image from "next/image";
import Link from "next/link";

const blogs = [
  // ... (use the blogs array from above)
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Blog Posts
        </h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-48">
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                  {blog.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>{blog.author}</span>
                  <span>{new Date(blog.date).toLocaleDateString()}</span>
                </div>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="inline-block mt-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 text-center font-medium"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}