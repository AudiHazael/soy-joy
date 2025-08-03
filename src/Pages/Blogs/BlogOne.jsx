import React from "react";
import { Link } from "react-router-dom";
import {
  CalendarDaysIcon,
  UserIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

export default function BlogOne() {
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
          Unlock the Power of Soy: Discover the Amazing Health Benefits of
          SoyJoy
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
            src="/blogimg1.jpg"
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body */}
        <section className="py-8 bg-white">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Are you ready to revolutionize your health and wellbeing? Look no
              further than <strong className="text-amber-600">SoyJoy</strong>,
              the delicious and nutritious soy milk that's about to become your
              new best friend!
            </p>

            <h2>The Soy Advantage</h2>
            <p>
              Soybeans are a superfood packed with protein, fiber, and
              isoflavones — known to support everything from heart health to
              bone strength. With SoyJoy, you get all the benefits in one
              delicious, creamy drink.
            </p>

            {/* <div className="w-full h-64 bg-gray-200 rounded-lg shadow-inner flex items-center justify-center text-gray-500">
              Blog Image Placeholder
            </div> */}

            <h2>Top 8 Health Benefits of SoyJoy</h2>
            <ul className="list-decimal ml-6 space-y-4">
              <li>
                <h3 className="font-semibold">Heart Health</h3>
                <p>
                  Soy protein can help lower cholesterol and reduce the risk of
                  heart disease. With SoyJoy, keeping your heart strong tastes
                  great too!
                </p>
              </li>
              <li>
                <h3 className="font-semibold">Bone Health</h3>
                <p>
                  Soy isoflavones improve bone density and lower the risk of
                  osteoporosis and fractures.
                </p>
              </li>
              <li>
                <h3 className="font-semibold">Weight Management</h3>
                <p>
                  High in fiber and protein, SoyJoy keeps you full longer,
                  supporting your weight loss journey.
                </p>
              </li>
              <li>
                <h3 className="font-semibold">Menopause Relief</h3>
                <p>
                  Reduce hot flashes and hormonal symptoms naturally with soy
                  isoflavones.
                </p>
              </li>
              <li>
                <h3 className="font-semibold">Glowing Skin</h3>
                <p>
                  Soy antioxidants help protect your skin and promote a healthy
                  glow.
                </p>
              </li>
              <li>
                <h3 className="font-semibold">Cancer Prevention</h3>
                <p>
                  Studies suggest soy may reduce the risk of breast, prostate,
                  and colon cancer.
                </p>
              </li>
              <li>
                <h3 className="font-semibold">Digestive Health</h3>
                <p>Rich in fiber, SoyJoy supports gut health and regularity.</p>
              </li>
              <li>
                <h3 className="font-semibold">Brain Health</h3>
                <p>
                  Isoflavones may protect against age-related cognitive decline
                  and promote brain function.
                </p>
              </li>
            </ul>

            <h2>What Sets SoyJoy Apart</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                Crafted with love and care, every bottle and sachet is packed
                with goodness.
              </li>
              <li>
                Our blending process delivers a rich, smooth texture like no
                other.
              </li>
              <li>
                Enjoy irresistible flavors — from classic vanilla to indulgent
                chocolate.
              </li>
            </ul>

            <div className="space-y-4 mt-10">
              <h3 className="text-xl font-semibold text-gray-800">
                Join the SoyJoy Family Today!
              </h3>
              <p>
                Discover creamy bliss and be part of a community that celebrates
                wellness and great taste.
              </p>

              <h3 className="text-xl font-semibold text-gray-800">
                Get Your SoyJoy Fix Today!
              </h3>
              <p>
                Find SoyJoy near you in convenient bottles and sachets. Your
                body and your taste buds will thank you!
              </p>
            </div>
          </div>
        </section>

        {/* Tags */}
        <div className="pt-4">
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
