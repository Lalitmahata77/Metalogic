export default function StructuredProcesses() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Structured Processes Blueprint for Success
        </h1>

        {/* Description Paragraph */}
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          We make technology, tools and IT expertise come together to orchestrate the perfect integration – adding value to your data assets
        </p>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {/* Empathize - Highlighted Step */}
          <div className="p-8 bg-blue-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-blue-200">
            <p className="text-xl font-bold text-blue-800 text-center">Empathize</p>
          </div>

          {/* Subsequent Steps */}
          {['Define', 'Ideate', 'Prototype', 'Test', 'Implement'].map((step) => (
            <div key={step} className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <p className="text-lg text-gray-700 text-center">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}