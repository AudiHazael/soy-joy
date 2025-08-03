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
            src="/blogimg6.jpg"
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body */}
        <section className="py-8 bg-white">
          <div className="prose prose-lg max-w-none text-gray-700 py-8">
            <p className="mb-6">
              Are you ready to revolutionize your health and wellbeing? Look no
              further than <strong>SoyJoy</strong>, the delicious and nutritious
              soy milk that's about to become your new best friend!
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              The Soy Advantage
            </h2>
            <p className="mb-6">
              Soybeans are a superfood that packs a punch when it comes to
              nutrition. Rich in protein, fiber, and isoflavones, soybeans have
              been shown to have numerous health benefits — from heart health to
              bone density. And with SoyJoy, you can enjoy all these benefits in
              a delicious and convenient way!
            </p>

            <img
              src="/path-to-your-blog-image.jpg"
              alt="Pouring a glass of SoyJoy"
              className="w-full h-auto rounded-lg mb-6"
            />

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Top 8 Health Benefits of SoyJoy
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">1. Heart Health</h3>
                <p>
                  Soy protein has been shown to lower cholesterol levels and
                  reduce the risk of heart disease. With SoyJoy, you can enjoy a
                  delicious and healthy way to keep your heart strong!
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">2. Bone Health</h3>
                <p>
                  Soy isoflavones have been shown to improve bone density,
                  reducing the risk of osteoporosis and fractures. Drink SoyJoy
                  and give your bones the support they need!
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">3. Weight Management</h3>
                <p>
                  Soy protein is high in fiber and protein, making it the
                  perfect addition to a weight loss diet. SoyJoy will keep you
                  full and satisfied, without the guilt!
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">4. Menopause Relief</h3>
                <p>
                  Soy isoflavones have been shown to reduce hot flashes and
                  other menopause symptoms. SoyJoy is the natural way to find
                  relief and feel your best!
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">5. Glowing Skin</h3>
                <p>
                  Soy isoflavones have antioxidant properties that can help
                  protect your skin from damage and promote a healthy glow.
                  Drink SoyJoy and get ready to shine!
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">6. Cancer Prevention</h3>
                <p>
                  Research suggests that soy isoflavones may help reduce the
                  risk of certain cancers, including breast, prostate, and colon
                  cancer. Enjoy SoyJoy as part of a balanced diet and lifestyle!
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">7. Digestive Health</h3>
                <p>
                  SoyJoy is rich in fiber, which can help promote digestive
                  health, prevent constipation, and support healthy gut
                  bacteria.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">8. Brain Health</h3>
                <p>
                  Soy isoflavones may also have neuroprotective effects, which
                  can help support brain health and potentially reduce the risk
                  of age-related cognitive decline.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-12 mb-4">
              What Sets SoyJoy Apart
            </h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>
                Our soy milk is made with love and care, ensuring every bottle
                and sachet is filled with delicious and nutritious goodness.
              </li>
              <li>
                Our unique blending process gives SoyJoy a rich and velvety
                texture you'll love.
              </li>
              <li>
                From classic vanilla to decadent chocolate, our flavors will
                tantalize your taste buds and keep you coming back for more!
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-12 mb-4">
              Join the SoyJoy Family Today!
            </h2>
            <p className="mb-6">
              Ready to experience the amazing health benefits of SoyJoy for
              yourself? Join our community today and discover a world of creamy
              bliss!
            </p>

            <h3 className="text-xl font-semibold">
              Get Your SoyJoy Fix Today!
            </h3>
            <p className="mb-6">
              Find SoyJoy near you in convenient bottles and sachets, and start
              enjoying the delicious taste and incredible health benefits of our
              soy milk. Your body (and taste buds) will thank you!
            </p>

            <h3 className="text-xl italic text-center mb-6">
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
