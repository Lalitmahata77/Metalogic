export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#0B2241] to-[#08305c] text-white pt-28 pb-8 px-4 ">
      {/* Floating Stats Card */}
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-full max-w-xl">
        {/* <div className="bg-white rounded-xl shadow-lg flex justify-center items-center gap-12 py-6 px-8">
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold text-[#19B2C2] tracking-widest">313</span>
            <span className="text-gray-600 mt-1 text-sm">Kilometers of code written</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold text-[#19B2C2] tracking-widest">210</span>
            <span className="text-gray-600 mt-1 text-sm">Liters of Coffee Drank</span>
          </div>
        </div> */}
      </div>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 mt-16">
        {/* Logo & Address */}
        <div className="col-span-2 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-full p-2">
              {/* Replace with your logo */}
              <svg className="w-8 h-8 text-[#E74C3C]" viewBox="0 0 32 32" fill="currentColor">
                <circle cx="16" cy="16" r="16" />
                <text x="8" y="22" fontSize="16" fill="#fff" fontFamily="Arial">M</text>
              </svg>
            </div>
            <div>
              <span className="font-bold text-xl">MetaLogic</span>
              <div className="text-xs font-light text-gray-300">Software Private Limited</div>
            </div>
          </div>
          <div className="text-sm flex flex-col gap-1 text-gray-300">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243A8 8 0 1112 20a7.963 7.963 0 01-4.243-1.243z" />
              </svg>
              Saptakhel, Lalitpur (Head office)
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                <path d="M16 3v4a1 1 0 001 1h4" />
              </svg>
              +977 9851353599
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M16 12H8m8 0a8 8 0 11-16 0 8 8 0 0116 0z" />
              </svg>
              info@metalogic.com.np
            </span>
          </div>
          <div className="text-xs text-gray-400 mt-4">
            © Copyright 2024 MetaLogic. All rights reserved.
          </div>
        </div>
        {/* Company */}
        <div>
          <div className="font-bold mb-2 text-gray-100">Company</div>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">Feedback</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Partnership</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms and Conditions</a></li>
          </ul>
        </div>
        {/* Services */}
        <div>
          <div className="font-bold mb-2 text-gray-100">Services</div>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Custom Software Development</li>
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>Cloud Computing Services</li>
            <li>Quality Assurance and Testing</li>
            <li>UI/UX Designing</li>
            <li>Maintenance and Support</li>
            <li>Dev Ops</li>
            <li>Blockchain Solutions</li>
          </ul>
        </div>
        {/* Join & Social */}
        <div>
          <div className="font-bold mb-2 text-gray-100">Join</div>
          <ul className="space-y-1 text-sm text-gray-300 mb-4">
            <li><a href="#" className="hover:text-white transition-colors">Careers at MetaLogic</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Internships</a></li>
          </ul>
          <div className="font-bold mb-2 text-gray-100">Join us on Social Media</div>
          <div className="flex gap-3 mt-2">
            {/* WhatsApp */}
            <a href="#" className="rounded-full border border-gray-400 p-2 hover:bg-white/10 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M16.72 13.06a6.5 6.5 0 10-11.09 2.13L3 21l5.93-2.12a6.5 6.5 0 007.79-5.82z" />
                <path d="M8.29 11.71a4.5 4.5 0 005.42 5.42" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className="rounded-full border border-gray-400 p-2 hover:bg-white/10 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="rounded-full border border-gray-400 p-2 hover:bg-white/10 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17" cy="7" r="1" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="rounded-full border border-gray-400 p-2 hover:bg-white/10 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6z" />
                <rect x="6" y="10" width="4" height="8" />
                <circle cx="8" cy="8" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}