"use client"

import Image from "next/image";
import { useState } from "react";

export default function Explore() {
  const [tab, setTab] = useState("Banshwali");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
        Explore Our Products
      </h1>
      {/* Tab Switcher */}
      <div className="flex space-x-4 mb-10">
        <button
          className={`px-6 py-2 rounded-full border transition-all duration-300 ${
            tab === "Banshwali"
              ? "bg-white border-gray-300 text-black shadow-md hover:shadow-lg"
              : "bg-gray-100 border-transparent text-gray-500 hover:bg-gray-200"
          }`}
          onClick={() => setTab("Banshwali")}
        >
          Banshwali
        </button>
        <button
          className={`px-6 py-2 rounded-full border transition-all duration-300 ${
            tab === "Digital Khata"
              ? "bg-white border-gray-300 text-black shadow-md hover:shadow-lg"
              : "bg-gray-100 border-transparent text-gray-500 hover:bg-gray-200"
          }`}
          onClick={() => setTab("Digital Khata")}
        >
          Digital Khata
        </button>
      </div>

      {/* Card */}
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden max-w-4xl w-full">
        {/* Left: Image and gradient */}
        <div className="md:w-1/2 flex flex-col justify-center items-center bg-gradient-to-br from-green-200 via-green-100 to-white p-8 relative">
          <Image
            src={
              tab === "Banshwali"
                ? "/assets/mobile.png"
                : "/assets/mobile2.png"
            }
            alt={tab}
            className="w-60 mx-auto mb-6 drop-shadow-lg"
            style={{ maxWidth: "250px" }}
            width={250}
            height={250}
          />
          <p className="text-gray-600 text-center text-sm mt-auto leading-relaxed">
            {tab === "Banshwali"
              ? "Trace the footsteps of your ancestors and discover your family tree's story."
              : "Where Finances unify for business and personal success"}
          </p>
        </div>

        {/* Right: Features */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Features</h2>
          {tab === "Banshwali" ? (
            <>
              <div className="font-semibold text-gray-700 mb-3">
                View full Banshawali chart digitally.
              </div>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>View your Banshaj information all in one place.</li>
                <li>
                  Bring all generations together under one roof creates a unique
                  opportunity for shared experiences, mutual learning, and the
                  strengthening of family bonds.
                </li>
                <li>Manage and learn about events nearby you.</li>
              </ul>
            </>
          ) : (
            <>
              <div className="font-semibold text-gray-700 mb-3">
                Powerful POS system
              </div>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Efficient personal finance management</li>
                <li>Accurate interest calculator</li>
                <li>Timely reminders and alerts</li>
                <li>Streamlined record-keeping</li>
                <li>Robust data security and many more</li>
              </ul>
            </>
          )}
          <button className="self-start px-5 py-2 border border-red-300 rounded-lg text-red-500 hover:bg-red-50 hover:border-red-400 transition-all duration-300 flex items-center space-x-2">
            <span>Learn more</span>
            <svg
              className="w-4 h-4 text-red-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}