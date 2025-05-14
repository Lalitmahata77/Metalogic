import React from 'react'

const sectionPage = () => {
  return (
<section className="bg-white w-full py-12">
  <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0 md:space-x-8">
    <div className="text-center">
      <h2 className="text-3xl font-bold text-teal-700">32+</h2>
      <p className="text-gray-600 mt-1">Projects Completed</p>
    </div>
    <div className="text-center">
      <h2 className="text-3xl font-bold text-teal-700">50+</h2>
      <p className="text-gray-600 mt-1">Satisfied Clients</p>
    </div>
    <div className="text-center">
      <h2 className="text-3xl font-bold text-teal-700">18+</h2>
      <p className="text-gray-600 mt-1">Experts</p>
    </div>
  </div>
</section>
  )
}

export default sectionPage