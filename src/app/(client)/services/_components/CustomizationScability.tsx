import Image from 'next/image'
import React from 'react'

const CustomizationScability = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text Content */}
        <div className="flex-1">
          <div className="mb-2 text-sm font-semibold text-red-600">
            CUSTOMIZATION AND SCALABILITY
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Crafting Solutions<br />Just for You
          </h1>
          <p className="text-gray-700 text-base md:text-lg">
            Discover how we personalize your experience with customized features and effortlessly scale your system to match your growing needs. Our approach ensures that your software is uniquely tailored to fit your business, allowing you to adapt easily and efficiently. Explore simplicity and adaptability in our Customization and Scalability.
          </p>
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/assets/photo.png" // Place your illustration in /public
            alt="Customization and Scalability Illustration"
            width={400}
            height={400}
            className="w-full max-w-md h-auto"
            priority
          />
        </div>
      </div>
    </main>
  )
}

export default CustomizationScability