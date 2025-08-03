import React from "react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

function ContactComponent() {
  return (
    <div>
      <section className="mt-10 mb-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-center gap-10">
            {/* Contact Info */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="flex items-start gap-4">
                <MapPinIcon className="w-8 h-8 text-gray-800" />
                <p className="text-gray-700">
                  Plot 15, Jesus Avenue, Simawa, Lukosi, <br /> Sagamu, Ogun
                  State
                </p>
              </div>
              <div className="flex items-start gap-4">
                <PhoneIcon className="w-8 h-8 text-gray-800" />
                <p className="pt-1 text-gray-700">+234 703 940 4909</p>
              </div>
              <div className="flex items-start gap-4">
                <EnvelopeIcon className="w-8 h-8 text-gray-800" />
                <p className="pt-1 text-gray-700">hazaeldevs@gmail.com</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full md:w-1/2">
              <form className="bg-white p-6 rounded shadow-md w-full max-w-xl mx-auto space-y-4">
                <div>
                  <label htmlFor="name" className="block font-semibold mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-semibold mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-semibold mb-1">
                    Phone No.
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+234 80 XXX XX XXX"
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block font-semibold mb-1">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-semibold mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Type your message"
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  ></textarea>
                </div>

                <div className="flex items-start gap-2">
                  <input
                    id="terms"
                    type="checkbox"
                    className="mt-1 accent-amber-500"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    Agree to Privacy Policy and Terms and Conditions of service
                  </label>
                </div>

                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactComponent;
