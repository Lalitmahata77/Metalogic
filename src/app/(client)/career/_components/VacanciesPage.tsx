import { Search } from "lucide-react";

const jobs = [
  {
    title: "MERN Stack Intern",
    type: "Full Time",
    location: "Kathmandu",
    status: "Closed",
  },
  {
    title: "UI/UX Designer",
    type: "Full Time",
    location: "Kathmandu",
    status: "Apply",
  },
  {
    title: "Frontend Developer",
    type: "Full Time",
    location: "Kathmandu",
    status: "Closed",
  },
  {
    title: "Frontend Developer",
    type: "Full Time",
    location: "Lalitpur",
    status: "Closed",
  },
];

export default function VacanciesPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-12 px-4">
      {/* Heading */}
      <div className="text-center mb-8">
        <div className="text-yellow-500 font-semibold text-lg mb-1">Opportunities</div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#0B2241] mb-6">Available Vacancies</h1>
      </div>

      {/* Search & Filter */}
      <div className="w-full max-w-3xl flex flex-col md:flex-row gap-3 mb-8">
        <input
          type="text"
          placeholder="Job Title/Keyword"
          className="flex-1 rounded-lg border border-gray-200 px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-200"
        />
        <select className="rounded-lg border border-gray-200 px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-200">
          <option>Level</option>
          <option>Intern</option>
          <option>Junior</option>
          <option>Mid</option>
          <option>Senior</option>
        </select>
        <button className="bg-red-500 hover:bg-red-600 transition-colors text-white rounded-lg px-4 py-3 flex items-center justify-center">
          <Search size={20} />
        </button>
      </div>

      {/* Job Offers */}
      <div className="w-full max-w-3xl">
        <div className="text-lg font-semibold mb-4">12 Job Offers</div>
        <div className="divide-y divide-gray-100">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row md:items-center justify-between py-3"
            >
              <div className="flex-1 flex flex-col md:flex-row md:items-center gap-2">
                <span className="font-medium text-[#0B2241]">{job.title}</span>
                <span className="hidden md:inline mx-2 text-gray-400">|</span>
                <span className="text-gray-600 text-sm">{job.type}</span>
                <span className="hidden md:inline mx-2 text-gray-400">|</span>
                <span className="text-gray-600 text-sm">{job.location}</span>
              </div>
              <div className="mt-2 md:mt-0">
                {job.status === "Apply" ? (
                  <button className="border border-red-400 text-red-500 px-5 py-1.5 rounded-full font-medium hover:bg-red-50 transition">
                    Apply
                  </button>
                ) : (
                  <span className="inline-flex items-center bg-red-100 text-red-500 px-4 py-1.5 rounded-full font-medium text-sm">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="#f87171" />
                      <path d="M15 9l-6 6M9 9l6 6" stroke="#f87171" strokeLinecap="round" />
                    </svg>
                    Closed
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}