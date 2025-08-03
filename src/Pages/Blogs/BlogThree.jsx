import React from "react";
import { Link } from "react-router-dom";
import {
  CalendarDaysIcon,
  UserIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

export default function BlogThree() {
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
            src="/blogimg3.jpg"
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body */}
        <section className="py-8 bg-white">
          <div className="prose prose-lg max-w-none text-gray-700 py-8">
            {/* <p>
              Are you looking for a partner that shares your values and
              commitment to health and wellness? Look no further than{" "}
              <strong>SoyJoy</strong>! As a leading brand in the soy milk
              industry, we’re dedicated to nourishing bodies and delighting
              taste buds. Here's why partnering with us can be a game-changer
              for your business:
            </p>

            <h3 className="text-xl font-semibold text-gray-900">
              Why Invest in SoyJoy?
            </h3>

            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>
                <strong>Growing Demand:</strong> The plant-based market is
                booming, and soy milk is at the forefront of this trend. By
                partnering with SoyJoy, you'll tap into a growing customer base
                seeking healthy and sustainable options.
              </li>
              <li>
                <strong>Innovative Products:</strong> Our expertly crafted soy
                milk products are designed to meet the evolving needs of
                health-conscious consumers. With a range of delicious flavors,
                you'll find something to please every palate.
              </li>
              <li>
                <strong>Strong Brand Identity:</strong> SoyJoy is built on a
                foundation of quality, care, and passion. Our brand resonates
                with customers seeking wholesome products that align with their
                values.
              </li>
              <li>
                <strong>Business Growth Opportunities:</strong> By partnering
                with SoyJoy, you'll gain access to new markets, distribution
                channels, and business opportunities that can drive growth and
                expansion.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900">
              Benefits of Partnership
            </h3>

            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>
                <strong>Increased Brand Visibility:</strong> Partnering with
                SoyJoy will elevate your brand’s visibility and credibility in
                the market.
              </li>
              <li>
                <strong>Access to New Markets:</strong> Our established
                distribution networks and market presence will help you reach
                new customers and expand your business.
              </li>
              <li>
                <strong>Innovative Marketing Strategies:</strong> We’ll work
                together to develop targeted marketing campaigns that drive
                engagement and sales.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900">
              Join the SoyJoy Family
            </h3>
            <p>
              Ready to unlock growth and impact with SoyJoy? Let’s explore
              partnership opportunities that benefit both our businesses.
              Contact us today to discuss how we can work together to achieve
              success!
            </p>

            <h3 className=" font-semibold italic mt-8">
              Invest in SoyJoy and discover a world of creamy bliss and business
              growth!
            </h3> */}
            <p className="mb-6">
              Are you ready to supercharge your diet with a delicious and
              nutritious twist? Look no further than SoyJoy milk! Packed with an
              impressive array of essential nutrients, SoyJoy is the ultimate
              game-changer for your daily nutrition.
            </p>

            <h3 className="text-xl font-semibold mb-2">
              The Powerhouse Nutrients of SoyJoy
            </h3>

            <img
              src="/path-to-your-image.jpg"
              alt="SoyJoy nutrition benefits"
              className="w-full h-auto rounded-lg mb-6"
            />

            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>
                <strong>Powerhouse Protein:</strong> SoyJoy milk is rich in
                high-quality protein that supports muscle health, satiety, and
                overall well-being.
              </li>
              <li>
                <strong>Brain-Boosting B Vitamins:</strong> Our milk is
                fortified with B vitamins that support cognitive function,
                energy production, and a healthy nervous system.
              </li>
              <li>
                <strong>Bone-Strengthening Minerals:</strong> SoyJoy milk
                contains calcium, magnesium, and potassium – essential minerals
                that support strong bones and teeth.
              </li>
              <li>
                <strong>Immune Support:</strong> With vitamin D, SoyJoy milk
                helps support immune function and overall health.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Why Choose SoyJoy?</h3>

            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>
                <strong>Dairy-Free Upgrade:</strong> Perfect for those with
                lactose intolerance or a vegan lifestyle.
              </li>
              <li>
                <strong>Delicious and Versatile:</strong> Enjoy SoyJoy milk on
                its own, in smoothies, or as a dairy substitute in your favorite
                recipes.
              </li>
              <li>
                <strong>Nutritious and Wholesome:</strong> Made with
                high-quality soybeans and fortified with essential nutrients.
              </li>
            </ul>

            <p className="mb-6">
              <strong>Upgrade Your Nutrition with SoyJoy</strong>
              <br />
              Ready to experience the benefits of SoyJoy milk for yourself? Join
              the SoyJoy family today and discover a world of creamy bliss and
              nutritious goodness!
            </p>

            <p className="mb-6">
              <strong>Get Your SoyJoy Fix Today!</strong>
              <br />
              Find SoyJoy near you in convenient bottles and sachets, and start
              enjoying the delicious taste and incredible health benefits of our
              soy milk. Your body (and taste buds) will thank you!
            </p>

            <h3 className="text-lg italic mt-6">
              Sip, savor, and thrive with SoyJoy!
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
