'use client';

import { useState } from "react";
import Image from "next/image";
import { Calendar, Clock, Eye, Search } from "lucide-react";

const categories = ["All", "Technology", "Business", "Marketing"];

const blogs = [
  {
    id: 1,
    title: "Revolutionizing Software Development: Exploring Innovative Uses of Blockchain",
    date: "2024-01-07",
    readTime: "12 mins",
    views: 544,
    image: "/assets/evolution.png",
    category: "Technology",
  },
  {
    id: 2,
    title: "Navigating the Software Development Landscape: Common Mistakes to Avoid in...",
    date: "2024-01-07",
    readTime: "11 mins",
    views: 303,
    image: "/assets/evolution.png",
    category: "Business",
  },
  {
    id: 3,
    title: "The ABCs of Safe Software: Easy Steps for Developers",
    date: "2024-01-06",
    readTime: "8 mins",
    views: 244,
    image: "/assets/evolution.png",
    category: "Technology",
  },
];

export default function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredBlogs = blogs.filter(blog => {
    const matchCategory = selectedCategory === "All" || blog.category === selectedCategory;
    const matchSearch = blog.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <section className="w-full min-h-[80vh] flex flex-col items-center py-8 bg-white">
      {/* Search Bar */}
      <div className="w-full max-w-xl mb-8">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700">
            <Search size={22} />
          </span>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search..."
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100 text-lg"
          />
        </div>
      </div>
      {/* Category Tabs */}
      <div className="flex gap-5 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-full font-medium transition ${
              selectedCategory === cat
                ? "bg-[#0a174e] text-white shadow"
                : "bg-transparent text-[#0a174e] hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Blog Cards */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredBlogs.map(blog => (
          <div key={blog.id} className="flex flex-col">
            <div className="rounded-xl overflow-hidden shadow-md mb-3">
              <Image
                src={blog.image}
                alt={blog.title}
                width={420}
                height={240}
                className="w-full h-[200px] object-cover"
              />
            </div>
            <div className="flex items-center gap-4 text-gray-500 text-sm mb-2">
              <div className="flex items-center gap-1">
                <Calendar size={16} /> {blog.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock size={16} /> {blog.readTime}
              </div>
              <div className="flex items-center gap-1">
                <Eye size={16} /> {blog.views}
              </div>
            </div>
            <h3 className="font-semibold text-lg text-[#0a174e] hover:underline cursor-pointer">
              {blog.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}