
export default function IndustryExperience() {
  const industries = [
    { name: "Health Industry", icon: <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L13.657 14.828a4 4 0 11-5.656 5.656L10 13.657l-1.172 1.171a4 4 0 11-5.656-5.656L6.343 5.172z" /></svg> },
    { name: "Investment", icon: <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M3 3a1 1 0 000 2v2c-.006 1.192.493 2.348 1.356 3.177a4 4 0 01.193 2.558l-1.02 3.256a1 1 0 00.873 1.289H7v3c0 .552.447 1 1 1h6a1 1 0 001-1v-3h2.6a1 1 0 00.873-1.289l-1.02-3.256a4 4 0 01.193-2.558c.863-.829 1.362-1.985 1.356-3.177V5a1 1 0 000-2H3z" /></svg> },
    { name: "Insurance", icon: <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M4.13 12.87a3 3 0 006.74 0l4.13-4.13a3 3 0 00-6.74 0L4.13 12.87z" /></svg> },
    { name: "Manufacturing", icon: <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M3 5a2 2 0 012-2h1a1 1 0 000 2H5v12a2 2 0 01-2 2V5zM13 3a1 1 0 000 2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a1 1 0 000 2h2a4 4 0 004-4V7a4 4 0 00-4-4h-2zM7 8a2 2 0 012-2h1a1 1 0 000 2H9v8a2 2 0 01-2 2V8z" /></svg> },
    { name: "Retails", icon: <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path d="M3 5a2 2 0 012-2h1a1 1 0 000 2H5v12a2 2 0 01-2 2V5zM13 3a1 1 0 000 2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a1 1 0 000 2h2a4 4 0 004-4V7a4 4 0 00-4-4h-2zM7 8a2 2 0 012-2h1a1 1 0 000 2H9v8a2 2 0 01-2 2V8z" /></svg> },
    { name: "Professional Services", icon: <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" /></svg> },
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading and Description */}
        <div className="text-left mb-12">
          <h2 className="text-4xl font-extrabold text-[#0B2241] mb-4">
            Proven Industry Experience
          </h2>
          <p className="text-gray-500">
            Experience the advantage of partnering with a team that has honed its skills through proven industry expertise, consistently delivering excellence in every sector we touch.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 flex flex-col items-start hover:shadow-lg transition"
            >
              {/* Industry Icon */}
              <div className="mb-3">
                {industry.icon}
              </div>
              {/* Industry Name */}
              <h3 className="text-lg font-semibold text-gray-700">{industry.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
