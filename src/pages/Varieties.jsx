import React from "react";
import { Helmet } from "react-helmet-async";
import "../styles/styles.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "components/footer";
import Navbar from "components/Navbar";
import Header from "components/Header";
import Flavours from "components/Flavours";
import AccordionFlush from "components/accordion";
import CTA from "components/CTA";

function Varieties() {
  return (
    <div>
      <Helmet>
        <title>SoyJoy | Sip Pure Joy with Soy </title>
        <meta
          name="description"
          content="SoyJoy offers delicious, plant-based soy milk options for a healthy and joyful lifestyle."
        />
        <link rel="canonical" href="https://soy-joy.vercel.app/" />
      </Helmet>

      <Navbar />

      {/* <section className="heroTwo hero">
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
      </section> */}

      <Header
        title="SOYJOY"
        subtitle=" Flavors"
        text="Experience our rich and luxurious blends."
      />
      <Flavours />
      <AccordionFlush />
      <CTA />

      <Footer />
    </div>
  );
}

export default Varieties;
