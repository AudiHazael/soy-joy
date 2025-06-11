import React from "react";
import { Helmet } from "react-helmet-async";
import "../styles/styles.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import HeroButton from "../components/HeroButton";

function About() {
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

      <section className="heroTwo hero">
        <div className="container">
          <h2 data-aos="fade-up" data-aos-duration="1000">
            About Us
          </h2>
          <p
            data-aos="fade-right"
            data-aos-delay="1000"
            data-aos-duration="800">
            Know more about us and what we do
          </p>
          <HeroButton />
        </div>
      </section>

      <section className="about-us pt-5 pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4 col-12">
              <img src="..." alt="about us image" />
            </div>
            <div className="col-md-8">
              <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis dolores ipsa nihil voluptates voluptatibus eos
                aspernatur repellat quibusdam ullam quae, dicta quod, molestias
                distinctio dolorum adipisci ex eum vel ipsum blanditiis nemo
                natus officiis sunt assumenda. Laboriosam aspernatur, possimus
                earum omnis odio magnam! Repudiandae, debitis. Pariatur maxime
                quod deserunt tempore.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
