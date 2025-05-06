import React from "react";
import { Helmet } from "react-helmet-async";
import "../styles/styles.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import HeroButton from "../components/HeroButton";

function Varieties() {
  return (
    <div>
      <Helmet>
        <title>SOyJoy | Sip Pure Joy with Soy </title>
        <meta name="description" content="" />
        <link rel="canonical" href="https://your-website.com/wealthwave" />
      </Helmet>

      <Navbar />

      <section className="hero">
        <div className="container">
          <h2 data-aos="fade-up" data-aos-duration="1000">
            Flavors
          </h2>
          <p
            data-aos="fade-right"
            data-aos-delay="1000"
            data-aos-duration="800">
            Experience our rich and luxurious blends
          </p>
          <HeroButton />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Varieties;
