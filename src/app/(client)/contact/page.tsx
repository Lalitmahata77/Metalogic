"use client";

import { useState } from "react";
import { Headphones, Heart } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    company: "",
    location: "",
    description: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value, type } = target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (target as HTMLInputElement).checked : value,
    }));
  }

  async function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    setLoading(true);
    // Handle form submission (API call or similar)
    setTimeout(() => setLoading(false), 1000);
  }

  return (
    <div className="min-h-screen bg-[#eaeaea] py-12 px-2 flex items-center justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10">
        {/* Left Side */}
        <div className="flex flex-col justify-center">
          <div className="text-red-600 font-semibold mb-2">GET IN TOUCH</div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a2341] mb-4 leading-tight">
            Let is Kickstart Your Project
          </h1>
          <p className="text-gray-700 mb-6 max-w-md">
            Ready to take the next step? Fill out the form to schedule a consultation with our experts.
          </p>
          <div className="bg-white rounded-xl shadow p-6 mb-6 max-w-md">
            <div className="flex items-start gap-3 mb-5">
              <div className="bg-blue-100 rounded-full p-2">
                <Headphones className="text-blue-600" size={24} />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Customer Support</div>
                <div className="text-gray-600 text-sm">
                  Need a technical Assistance?{" "}
                  <a href="#" className="text-blue-600 underline">Contact Support</a>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 rounded-full p-2">
                <Heart className="text-blue-600" size={24} />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Partnerships</div>
                <div className="text-gray-600 text-sm">
                  Want to offer MetaLogic to your client?{" "}
                  <a href="#" className="text-blue-600 underline">Become a Partner</a>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 max-w-md border-gray-300" />
          <div className="text-gray-700 max-w-md">
            Or you can directly send a message in whatsapp
          </div>
          <a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block w-full max-w-md bg-[#1a2341] text-white font-semibold rounded-lg py-3 text-center hover:bg-[#11182e] transition"
          >
            Whatsapp
          </a>
        </div>

        {/* Right Side - Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-4 max-w-xl w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <label className="block font-medium mb-1">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                name="name"
                type="text"
                required
                placeholder="Eg: Ram Bahadur Thapa"
                className="w-full rounded-md bg-gray-100 border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block font-medium mb-1">
                Contact<span className="text-red-500">*</span>
              </label>
              <input
                name="contact"
                type="text"
                required
                placeholder="Eg: 98xxxxxxxx"
                className="w-full rounded-md bg-gray-100 border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                value={form.contact}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block font-medium mb-1">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="Eg: ram@mail.com"
                className="w-full rounded-md bg-gray-100 border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Company Location</label>
              <input
                name="location"
                type="text"
                placeholder="Eg: Lalitpur, Nepal"
                className="w-full rounded-md bg-gray-100 border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                value={form.location}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className=" text-gray-700">
            <label className="block font-medium mb-1">Company Name</label>
            <input
              name="company"
              type="text"
              placeholder="Eg : Metalogic Pvt Ltd"
              className="w-full rounded-md bg-gray-100 border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
              value={form.company}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block font-medium mb-1 text-gray-700">
              Description<span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              required
              placeholder="Anything particular we should know ?"
              className="w-full text-gray-700 rounded-md bg-gray-100 border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
              rows={4}
              value={form.description}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="agree"
              required
              checked={form.agree}
              onChange={handleChange}
              className="mt-1"
            />
            <label className="text-sm text-gray-700">
              I agree to Metalogic sending me marketing communications, as described in the{" "}
              <a href="#" className="text-blue-600 underline">
                Website and Cookie Policy
              </a>
              .
            </label>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1a2341] text-white font-semibold rounded-lg py-3 mt-2 hover:bg-[#11182e] transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "submit"}
          </button>
        </form>
      </div>
    </div>
  );
}