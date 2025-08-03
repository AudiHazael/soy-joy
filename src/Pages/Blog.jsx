import React from "react";
import Navbar from "../Components/Navbar";
import BlogSection from "../Components/BlogSection";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";

function Blog() {
  return (
    <div>
      <Navbar />
      <Hero
        title="Blog"
        subtitle="Insights & Updates"
        text="Stay updated with our latest blog posts."
      />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default Blog;
