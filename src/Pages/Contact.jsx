import React from "react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import ContactComponent from "../Components/ContactComponent";
import Footer from "../Components/Footer";

function Contact() {
  return (
    <div>
      <Navbar />
      <Hero
        title="Contact Us"
        subtitle="Get in Touch"
        text="We'd love to hear from you!"
        showContact={false}
      />

      <ContactComponent />

      <section className="pt-4 pb-4 bg-[#f5ead8a1]">
        <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
          {/* Newsletter Subscription Section */}
          <div
            className="flex flex-col items-center justify-center py-12 px-4 my-12 bg-[#f4dcb5] shadow-sm border-amber-500"
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
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
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
