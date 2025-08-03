import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Flavors from "../Components/Flavors";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";

function Varieties() {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <Hero
        title="SOYJOY"
        subtitle="Flavors"
        text="Experience our rich and luxurious blends."
      />

      {/* Flavor Options */}
      <Flavors />

      {/* Call to Action */}
      <CTA />

      <Footer />
    </div>
  );
}

export default Varieties;
