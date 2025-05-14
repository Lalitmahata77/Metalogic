import { Mail } from "lucide-react";

export default function NewsletterSection() {
  return (
    <div className="bg-gray-200 py-16 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-2 text-center text-gray-700">
        Subscribe to our News Letters
      </h2>
      <p className="text-gray-600 mb-8 text-center max-w-xl">
        Stay informed, inspired, and equipped with the latest trends and breakthroughs in your field.
      </p>
      <form
        className="flex flex-col sm:flex-row items-center w-full max-w-xl"
      >
        <input
          type="email"
          placeholder="Please Enter Your Email"
          className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-200 text-gray-700 mb-4 sm:mb-0 sm:mr-2"
          required
        />
        <button
          type="submit"
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 transition text-white font-medium px-6 py-3 rounded-md"
        >
          <Mail className="w-5 h-5" />
          Subscribe
        </button>
      </form>
    </div>
  );
}