import React from "react";
import { Link } from "react-router-dom";
import { CalendarDaysIcon, UserIcon } from "@heroicons/react/24/outline";

// Utility to generate a slug from the title
const slugify = (title) =>
  title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // remove special characters
    .trim()
    .replace(/\s+/g, "-"); // replace spaces with -

const blogs = [
  {
    title: "Unlocking the Natural Benefits of SoyJoy",
    author: "Elmond Isaiah",
    date: "August 1, 2025",
    excerpt:
      "Are you ready to revolutionize your health and wellbeing? Look no further than SoyJoy,...!",
    image: "/blogimg1.jpg",
  },
  {
    title: "Why Partner with SoyJoy: Unlocking Growth and Impact",
    author: "Elmond Isaiah",
    date: "July 18, 2025",
    excerpt:
      "Are you looking for a partner that shares your values and commitment to health and wellness?...",
    image: "blogimg3.jpg",
  },
  {
    title: "Unlock the Power of SoyJoy: Revolutionize Your Daily Nutrition!",
    author: "Elmond Isaiah",
    date: "July 10, 2025",
    excerpt:
      "Are you ready to supercharge your diet with a delicious and nutritious twist? Look no further than SoyJoy milk!...",
    image: "blogimg2.jpg",
  },
  {
    title: "Go Green with SoyJoy: The Planet-Friendly Choice",
    author: "Elmond Isaiah",
    date: "June 29, 2025",
    excerpt:
      "As we strive to live more sustainably, every choice we make counts – including what we put in our bodies. Did you know...",
    image: "blogimg4.jpg",
  },
  {
    title: "The Birth of SoyJoy: A Journey of Compassion and Purpose",
    author: "Elmond Isaiah",
    date: "June 14, 2025",
    excerpt:
      "As I saw the impact of debilitating diseases like obesity, cancer, and cognitive decline, as well as struggles ...",
    image: "blogimg5.jpg",
  },
  {
    title:
      "Unlock the Power of Soy: Discover the Amazing Health Benefits of SoyJoy",
    author: "Elmond Isaiah",
    date: "May 30, 2025",
    excerpt:
      "Are you ready to revolutionize your health and wellbeing? Look no further than SoyJoy,...",
    image: "blogimg6.jpg",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Our Blog & Insights
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Dive into our latest updates, recipes, and plant-based discoveries.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => {
          const slug = slugify(blog.title);
          return (
            <Link
              key={index}
              to={`/blogs/${slug}`}
              className="bg-white rounded-sm shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 hover:shadow-xl"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">{blog.excerpt}</p>

                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <UserIcon className="h-4 w-4" />
                    {blog.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <CalendarDaysIcon className="h-4 w-4" />
                    {blog.date}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
