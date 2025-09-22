import React from "react";
import { Link } from "react-router-dom";

export default function Hero({
  title,
  subtitle,
  text,
  showShop = true,
  showContact = true,
  shopText = "Shop Now !",
  contactText = "Contact Us",
  shopLink = "/Shop2",
  contactLink = "/Contact",
}) {
  return (
    <section className="flex items-center w-full min-h-[75vh] px-4 md:px-20 text-white bg-[url('/bgimg.png')] bg-cover bg-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Column */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{title}</h1>
            <h2 className="text-3xl font-semibold text-amber-500 mb-2">
              {subtitle}
            </h2>
            <p className="text-2xl text-gray-950 font-semibold mb-6">{text}</p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-4">
              {showShop && (
                <Link
                  to={shopLink}
                  className="bg-amber-500 text-white font-bold px-6 py-2 rounded-lg hover:bg-amber-400 transition"
                >
                  {shopText}
                </Link>
              )}

              {showContact && (
                <Link
                  to={contactLink}
                  className="bg-none border-2 border-amber-500  text-gray-800 font-bold px-6 py-2 rounded-lg hover:bg-amber-400 transition"
                  data-aos-delay="2000"
                >
                  {contactText}
                </Link>
              )}
            </div>
          </div>

          {/* Image Column */}
          {/* <div data-aos="zoom-in" data-aos-duration="1000">
            <img src="/images/hero-image.png" alt="Hero" className="w-full h-auto object-contain" />
          </div> */}
        </div>
      </div>
    </section>
  );
}
