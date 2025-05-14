
export default function TechStackSection() {
  return (
    <section className="py-16 bg-white text-center">
      {/* Subtitle */}
      <div className="text-red-600 font-semibold mb-2 text-sm">TECH STACK</div>
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-[#16205b] mb-4">
        Technology we behold
      </h2>
      {/* Description */}
      <p className="text-gray-500 max-w-2xl mx-auto mb-10">
        Discover how we personalize your experience with customized features and effortlessly scale your system to match your growing needs.
      </p>
      {/* Tech Icons Row */}
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
        {/* HTML5 */}
        <div className="flex items-center gap-2">
          <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
            <path fill="#E44D26" d="M8 4l4 36 12 4 12-4 4-36z"/>
            <path fill="#F16529" d="M24 42V8h16l-3.6 32.7z"/>
            <path fill="#EBEBEB" d="M24 17.5h-6.7l.4 4.5H24v4.5h-5.6l.3 3.5H24v4.5l-5.2-1.5-.2-2.5H13l.3 3.5 10.7 3.2V17.5z"/>
            <path fill="#FFF" d="M24 17.5v4.5h5.7l-.4 4.5H24v4.5h5.2l-.2 2.5-5 1.5v4.5l10.7-3.2.3-3.5h-3.2l-.2 2.5-5.2 1.5z"/>
          </svg>
          <span className="font-medium text-lg">HTML</span>
        </div>
        {/* MySQL */}
        <div className="flex items-center gap-2">
          <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
            <path d="M8 38c0-7.732 7.163-14 16-14s16 6.268 16 14" stroke="#00618A" strokeWidth="2" fill="none"/>
            <path d="M24 24c-8.837 0-16 6.268-16 14h32c0-7.732-7.163-14-16-14z" fill="#00758F"/>
            <ellipse cx="24" cy="38" rx="16" ry="4" fill="#fff"/>
          </svg>
          <span className="font-medium text-lg">MySQL</span>
        </div>
        {/* AWS */}
        <div className="flex items-center gap-2">
          <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
            <path d="M10 34c6 4 22 4 28 0" stroke="#FF9900" strokeWidth="2" fill="none"/>
            <text x="10" y="28" fontSize="13" fill="#FF9900" fontWeight="bold">AWS</text>
          </svg>
          <span className="font-medium text-lg">AWS</span>
        </div>
        {/* SaaS (Sass) */}
        <div className="flex items-center gap-2">
          <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
            <text x="0" y="28" fontSize="24" fill="#CF649A" fontWeight="bold" fontFamily="cursive">Sass</text>
          </svg>
          <span className="font-medium text-lg">SaaS</span>
        </div>
        {/* Vue */}
        <div className="flex items-center gap-2">
          <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
            <path d="M24 8l16 28h-8l-8-14-8 14h-8z" fill="#41B883"/>
            <path d="M24 8l8 14 8-14z" fill="#34495E"/>
          </svg>
          <span className="font-medium text-lg">Vue</span>
        </div>
        {/* Docker */}
        <div className="flex items-center gap-2">
          <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
            <rect x="10" y="24" width="28" height="10" rx="2" fill="#2496ED"/>
            <rect x="14" y="20" width="6" height="4" rx="1" fill="#2496ED"/>
            <rect x="22" y="20" width="6" height="4" rx="1" fill="#2496ED"/>
            <rect x="30" y="20" width="6" height="4" rx="1" fill="#2496ED"/>
          </svg>
          <span className="font-medium text-lg">Docker</span>
        </div>
        {/* Kubernetes */}
        <div className="flex items-center gap-2">
          <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="18" fill="#fff" stroke="#222" strokeWidth="2"/>
            <path d="M24 12v12l8 4" stroke="#222" strokeWidth="2" fill="none"/>
          </svg>
          <span className="font-medium text-lg">Ku</span>
        </div>
      </div>
    </section>
  );
}