// Converted CTA.jsx to Tailwind CSS
import React from "react";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="pt-4 pb-4 bg-[#f5ead8a1]">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
        {/* Newsletter Subscription Section */}
        <div className="flex flex-col items-center justify-center py-12 px-4 my-12 bg-[#f4dcb5] shadow-sm border-amber-500 transition transition-discrete hover: duration-300">
          <div className="w-full flex flex-col md:flex-row md:items-center gap-6 md:px-12">
            <div className="w-full md:w-1/3">
              <h3 className="text-xl md:text-2xl font-semibold text-center md:text-left">
                Subscribe to our Newsletter
              </h3>
            </div>
            <div className="w-full md:w-2/3">
              <form className="w-full flex items-center gap-3">
                <input
                  type="email"
                  className="w-full flex-grow px-4 py-2 bg-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your email"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-amber-500 text-white font-bold rounded-sm hover:bg-amber-600 transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Distributor Call-to-Action Section */}
        <div className="text-center bg-transparent shadow-sm border border-[#f4dcb5] rounded-lg  py-10 px-6">
          <h3 className="text-xl md:text-3xl font-bold mb-2">
            Become a Distributor of SoyJoy
          </h3>
          <p className="mb-4 text-gray-600">
            Join our growing network of distributors and bring the goodness of
            soy milk to homes everywhere
          </p>
          <Link
            to="/Contact"
            className="inline-block bg-amber-500 text-white font-bold px-6 py-2 rounded-sm hover:bg-amber-600 transition duration-300"
          >
            Contact Us !
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTA;
