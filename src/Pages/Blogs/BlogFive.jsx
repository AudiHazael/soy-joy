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
          The Birth of SoyJoy: A Journey of Compassion and Purpose
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
            src="/blogimg5.jpg"
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body */}
        <section className="py-8 bg-white">
          <div className="prose prose-lg max-w-none text-gray-700 py-8">
            <p className="mb-6">
              As I saw the impact of debilitating diseases like obesity, cancer,
              and cognitive decline — as well as struggles with weight
              management, digestive health issues, and other health concerns —
              on individuals and communities, I felt an overwhelming sense of
              responsibility to make a difference. I had initially aspired to
              study medicine, but fate led me down a different path.
            </p>

            <p className="mb-6">
              During my NYSC days, I encountered a fellow corps member from
              Benue State, Nigeria, who sold powdered soy milk. Her story — of
              being wronged by a business partner — sparked an idea. I realized
              the potential of soy milk, in both powdered and liquid forms, to
              transform lives. Its numerous health benefits resonated deeply:
            </p>

            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Weight management</li>
              <li>Cancer prevention (breast, prostate, colon)</li>
              <li>Improved cognitive function</li>
              <li>Enhanced immune system</li>
              <li>Heart health</li>
              <li>Digestive health</li>
              <li>Menopause relief</li>
              <li>Obesity management, amongst others</li>
            </ul>

            <img
              src="/path-to-your-blog-image.jpg"
              alt="Founder’s journey with SoyJoy"
              className="w-full h-auto rounded-lg mb-6"
            />

            <p className="mb-6">
              These benefits fueled my passion. In 2017, my journey with what
              would become
              <strong> SoyJoy</strong> began. Initially named{" "}
              <strong>Elmond Soy Milk</strong>, this venture was driven by a
              deep desire to help people struggling with various health issues.
              That same year, I applied for the YouWin Connect grant, competing
              among 2.2 million applicants. Although I didn't receive the
              funding, my determination remained unwavering.
            </p>

            <p className="mb-6">
              I continued to reflect, seek guidance, and stay determined. Years
              later, in 2024, my business partners and shareholders,{" "}
              <strong>Jovita Sheppard</strong> and{" "}
              <strong>Juanita Francis</strong>, suggested the name{" "}
              <strong>SoyJoy</strong> — reflecting the joy and nourishment our
              products bring.
            </p>

            <p className="mb-6">
              Today, SoyJoy offers a range of soy milk products, including
              delicious flavors like vanilla, chocolate, coconut, strawberry,
              and more — empowering people to make informed choices about their
              health. Our promise is simple:
            </p>

            <h3 className="text-xl italic text-center mb-6">
              Sip Pure Joy With Soy.
            </h3>

            <p className="mb-6">
              My journey has been guided by compassion, perseverance, and a
              commitment to making a difference.{" "}
              <strong>
                SoyJoy is more than just a business – it's a mission
              </strong>{" "}
              to empower people with nutritious, wholesome products.
            </p>
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
