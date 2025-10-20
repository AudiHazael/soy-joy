import React from "react";
import { Link } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/solid"; // for filled stars
// import [ Link ] from 'react-router-dom';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import CTA from "../Components/CTA";
import AccordionFlush from "../Components/Accordion";
import Testimonials from "../Components/Testimonial";

function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar className="overflow-hidden" />
      <Hero
        className="overflow-hidden"
        title="SOYJOY"
        subtitle=" Sip Pure Joy with Soy"
        text="Experience the rich, creamy taste of health and happiness in
                every sip."
      />

      <section className="pt-5 pb-5 bg-amber-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-2 md:gap-8">
            {/* Left Column */}
            <div className="md:w-1/3 flex items-start space-x-5">
              <h3 className="text-3xl font-semibold leading-snug">
                Did you <br className="hidden md:block" />
                know?
              </h3>
              <img
                src="/pgdivider.png"
                alt="pg divider"
                className="mt-1 px-28 h-20 hidden md:block"
              />
            </div>

            {/* Right Column */}
            <div className="md:w-2/3">
              <p className="text-sm text-gray-700">
                SoyJoy milk is the ultimate game-changer for your daily
                nutrition! Packed with powerhouse protein, brain-boosting B
                vitamins, bone-strengthening calcium, magnesium, and potassium,
                plus vitamin D for immune support — it's the perfect dairy-free
                upgrade for a healthier, happier you!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Our Delicious Varieties
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            From creamy classics to exciting flavors, we have something for
            everyone!
          </p>

          {/* Card Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-sm shadow-md overflow-hidden h-full transition-transform transform hover:scale-105 duration-300">
              <img
                src="/sojoy-classic.png"
                alt="Classic Soy Milk"
                className="w-full md:h-78 object-cover bg-white"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">SoyJoy Classic</h3>
                <p className="text-gray-600 text-sm">
                  The rich, creamy soy goodness for everyday delight.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-sm shadow-md overflow-hidden h-full transition-transform transform hover:scale-105 duration-300">
              <img
                src="/soyjoy-vanilla2.png"
                alt="Vanilla Soy Milk"
                className="w-full md:h-78 object-cover bg-white"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">SoyJoy Vanilla</h3>
                <p className="text-gray-600 text-sm">
                  A sweet and aromatic twist for a smooth, delightful
                  experience.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-sm shadow-md overflow-hidden h-full transition-transform transform hover:scale-105 duration-300">
              <img
                src="/soyjoy-chocolate.png"
                alt="Chocolate Soy Milk"
                className="w-full md:h-78 object-cover bg-white"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">SoyJoy Chocolate</h3>
                <p className="text-gray-600 text-sm">
                  Rich chocolate meets nutritious soy milk.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-sm shadow-md overflow-hidden h-full transition-transform transform hover:scale-105 duration-300">
              <img
                src="/soyjoy-hazelnut.png"
                alt="Hazelnut Soy Milk"
                className="w-full md:h-78 object-cover bg-white"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">SoyJoy Hazelnut</h3>
                <p className="text-gray-600 text-sm">
                  Nutty perfection, rich hazelnut flavor in soy milk.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10 flex justify-end">
            <Link
              to="/Varieties"
              className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-6 rounded transition"
            >
              See More
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card Item */}
            {[
              { src: "/shop-peach.jpeg", alt: "Peach SoyJoy" },
              { src: "/shop-almond.jpeg", alt: "Almond SoyJoy" },
              { src: "/shop-chocolate.jpeg", alt: "Chocolate SoyJoy" },
              {
                src: "/soyjoy-strawberry3.png",
                alt: "Strawberry SoyJoy",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-sm shadow-md h-full transition-transform transform hover:scale-105 duration-300"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full md:h-78 object-cover"
                />
                <div className="p-4 flex flex-col justify-center items-start">
                  <div className="w-full flex justify-between items-center mt-2">
                    <h5 className="text-sm font-semibold">{item.alt}</h5>
                    <p className="text-gray-700 font-medium">$97.99</p>
                  </div>
                  <div className="mt-2 flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <Link
              to="/Shop2"
              target=""
              rel="noopener noreferrer"
              className="bg-orange-400 hover:bg-orange-500 text-white font-bold px-6 py-2 rounded transition"
            >
              Shop Now !
            </Link>
          </div>
        </div>
      </section>

      <section className="pt-5 pb-5 bg-amber-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-2 md:gap-8">
            {/* Left Column */}
            <div className="md:w-1/3 flex items-start space-x-5">
              <h3 className="text-3xl font-semibold leading-snug">
                Did you <br className="hidden md:block" />
                know?
              </h3>
              <img
                src="/pgdivider.png"
                alt="pg divider"
                className="mt-1 px-28 h-20 hidden md:block"
              />
            </div>

            {/* Right Column */}
            <div className="md:w-2/3">
              <p className="text-sm leading-relaxed">
                SoyJoy is more than just delicious — it's naturally
                lactose-free, making it a perfect fit for those with lactose
                intolerance or a vegan lifestyle. Plus, it's low in saturated
                fat, so you can sip with confidence and sip your way to a
                healthier heart. <br />
                <strong className="font-semibold">Sip Pure Joy with Soy</strong>
                !
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 overflow-hidden py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          <div className="md:col-span-4 items-center justify-center flex-col space-y-4">
            <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
            <img src="/faq.jpg" alt="" className="" />
          </div>
          <div className="md:col-span-8">
            <AccordionFlush />
          </div>
        </div>
      </section>

      {/* <section className="bg-stone-50  py-12 overflow-hidden justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 max-w-7xl mx-auto px-4">
          <div className="md:col-span-7 ">
            <Testimonials />
          </div>
          <div className="md:col-span-5 flex justify-center">
            <img
              src="testimonialimg.jpg"
              alt=""
              className="md:h-2/3 w-full md:w-auto rounded-sm"
            />
          </div>
        </div>
      </section> */}

      <section className="pt-5 pb-5 bg-amber-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-2 md:gap-8">
            {/* Left Column */}
            <div className="md:w-1/3 flex items-start space-x-5">
              <h3 className="text-3xl font-semibold leading-snug">
                Did you <br className="hidden md:block" />
                know?
              </h3>
              <img
                src="/pgdivider.png"
                alt="pg divider"
                className="mt-1 px-28 h-20 hidden md:block"
              />
            </div>

            {/* Right Column */}
            <div className="md:w-2/3">
              <p className="text-sm leading-relaxed">
                SoyJoy is a planet-friendly choice? Producing SoyJoy uses less
                water, land, and emits fewer greenhouse gases compared to dairy
                milk. Make the switch to SoyJoy for a greener future!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white insta">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-semibold text-center mb-4">
            Our Insta Shots
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-2 justify-items-center mt-2">
            <div>
              <img
                src="/insta1.jpg"
                alt="insta-shot-one"
                className="rounded shadow-sm h-48 w-full object-cover transition-transform transform hover:scale-105 duration-300"
              />
            </div>
            <div>
              <img
                src="/insta2.jpg"
                alt="insta-shot-two"
                className="rounded shadow-sm h-48 w-full object-cover transition-transform transform hover:scale-105 duration-300"
              />
            </div>
            <div>
              <img
                src="/insta3.jpg"
                alt="insta-shot-three"
                className="rounded shadow-sm h-48 w-full object-cover transition-transform transform hover:scale-105 duration-300"
              />
            </div>
            <div>
              <img
                src="/insta4.jpg"
                alt="insta-shot-four"
                className="rounded shadow-sm h-48 w-full object-cover transition-transform transform hover:scale-105 duration-300"
              />
            </div>
          </div>

          <div className="text-right mt-6">
            <p className="text-gray-700">
              Follow us
              <span className="ml-1 text-pink-500 hover:underline">
                <a href="">@SoyJoy</a>
              </span>
            </p>
          </div>
        </div>
      </section>

      <CTA className="overflow-hidden" />

      <Footer className="overflow-hidden" />
    </div>
  );
}

export default Home;
