import React from "react";
import { Helmet } from "react-helmet-async";

import "../styles/styles.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import HeroButton from "../components/HeroButton";

function Blog() {
  return (
    <div>
      <Helmet>
        <title>SoyJoy | Sip Pure Joy with Soy </title>
        <meta
          name="description"
          content="Master the EBC Forex Strategy with WealthWave Global Network and achieve financial freedom."
        />
        <link rel="canonical" href="https://your-website.com/wealthwave" />
      </Helmet>

      <Navbar />

      <section className="hero">
        <div className="container">
          <h2 data-aos="fade-up" data-aos-duration="1000">
            Blog
          </h2>
          <p
            data-aos="fade-right"
            data-aos-delay="1000"
            data-aos-duration="800">
            Reach Out to Us
          </p>
          <HeroButton />
        </div>
      </section>

      <section className="blog">
        <div className="container"></div>
      </section>

      <Footer />
    </div>
  );
}

export default Blog;
