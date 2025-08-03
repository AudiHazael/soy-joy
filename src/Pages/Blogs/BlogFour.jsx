import React from "react";
import { Link } from "react-router-dom";
import {
  CalendarDaysIcon,
  UserIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

export default function BlogFour() {
  return (
    <div className="min-h-screen text-gray-800">
      <Navbar />
      {/* Header with Back Button */}
      <div className="max-w-4xl mx-auto px-4 pt-28 pb-8">
        <Link
          to="/Blog"
          className="flex items-center text-md text-gray-600 hover:text-black transition"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-1" />
          Back to Blog
        </Link>
      </div>

      {/* Article Container */}
      <article className="max-w-4xl mx-auto px-4 py-6 space-y-8">
        {/* Title */}
        <h1 className="text-2xl md:text-5xl font-bold leading-tight">
          Unlock the Power of SoyJoy: Revolutionize Your Daily Nutrition!
        </h1>

        {/* Meta Info */}
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <span className="flex items-center">
            <UserIcon className="h-4 w-4 mr-1" />
            By Elmond Isaiah
          </span>
          <span className="flex items-center">
            <CalendarDaysIcon className="h-4 w-4 mr-1" />
            August 3, 2025
          </span>
        </div>

        {/* Cover Image */}
        <div className="w-full aspect-video rounded-sm overflow-hidden shadow">
          <img
            src="/blogimg4.jpg"
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body */}
        <section className="py-8 bg-white">
          <div className="prose prose-lg max-w-none text-gray-700 py-8">
            <p className="mb-6">
              As we strive to live more sustainably, every choice we make counts
              – including what we put in our bodies. Did you know that{" "}
              <strong>SoyJoy</strong> is a planet-friendly alternative to dairy
              milk? Let's explore the environmental benefits of choosing SoyJoy:
            </p>

            <h3 className="text-xl font-semibold mb-2">
              The Environmental Impact of Dairy Milk
            </h3>

            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>
                <strong>Water Usage:</strong> Dairy milk production requires
                significant amounts of water, contributing to water scarcity and
                depletion.
              </li>
              <li>
                <strong>Land Use:</strong> Large areas of land are dedicated to
                dairy farming, leading to deforestation and habitat loss.
              </li>
              <li>
                <strong>Greenhouse Gas Emissions:</strong> Dairy farming is a
                notable source of greenhouse gas emissions, contributing to
                climate change.
              </li>
            </ul>

            <img
              src="/path-to-your-blog-image.jpg"
              alt="SoyJoy sustainability benefits"
              className="w-full h-auto rounded-lg mb-6"
            />

            <h3 className="text-xl font-semibold mb-2">
              The Sustainable Benefits of SoyJoy
            </h3>

            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>
                <strong>Lower Water Footprint:</strong> Soybean cultivation
                requires less water compared to dairy farming, making SoyJoy a
                more water-efficient choice.
              </li>
              <li>
                <strong>Reduced Land Use:</strong> Soybeans can be grown on
                existing agricultural land, reducing the need for additional
                land conversion and preserving natural habitats.
              </li>
              <li>
                <strong>Lower Greenhouse Gas Emissions:</strong> SoyJoy
                production generates fewer greenhouse gas emissions than dairy
                milk, supporting a cleaner environment.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">
              Make the Switch to SoyJoy
            </h3>

            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>
                <strong>Delicious and Nutritious:</strong> Enjoy SoyJoy's range
                of flavors and reap the benefits of its high-quality protein and
                essential nutrients.
              </li>
              <li>
                <strong>Planet-Friendly:</strong> Support sustainable
                agriculture and reduce your environmental footprint with SoyJoy.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">
              Join the SoyJoy Family
            </h3>

            <p className="mb-6">
              Ready to make a positive impact on the planet? Choose SoyJoy for a
              greener future and a healthier you!
            </p>

            <h3 className="text-xl font-semibold mb-2">
              Get Your SoyJoy Fix Today!
            </h3>

            <p className="mb-6">
              Find SoyJoy near you in convenient bottles and sachets, and start
              enjoying the delicious taste and environmental benefits of our soy
              milk. Together, let's create a more sustainable future!
            </p>

            <h3 className="text-lg italic">
              Sip, savor, and thrive with SoyJoy – the planet-friendly choice!
            </h3>
          </div>
        </section>

        {/* Tags */}
        <div className="pt-2">
          <h4 className="text-lg font-semibold mb-2">Tags</h4>
          <div className="flex flex-wrap gap-2">
            {["Plant-based", "Wellness", "Nutrition", "Healthy Living"].map(
              (tag) => (
                <span
                  key={tag}
                  className="text-sm bg-amber-100 text-amber-700 px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              )
            )}
          </div>
        </div>

        {/* Backlinks / Related Posts */}
        <div className="pt-8 border-t">
          <h4 className="text-lg font-semibold mb-4">Related Posts</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/Blogs/the-surprising-benefits-of-soy-milk-for-your-digestion"
                className="text-blue-600 hover:underline"
              >
                The Surprising Benefits of Soy Milk for Your Digestion
              </Link>
            </li>
            <li>
              <Link
                to="/blogs/why-plant-based-milk-is-taking-over-dairy"
                className="text-blue-600 hover:underline"
              >
                Why Plant-Based Milk Is Taking Over Dairy
              </Link>
            </li>
            <li>
              <Link
                to="/blogs/eco-friendly-packaging-what-were-doing-better"
                className="text-blue-600 hover:underline"
              >
                Eco-Friendly Packaging: What We’re Doing Better
              </Link>
            </li>
          </ul>
        </div>
      </article>
      <Footer />
    </div>
  );
}
