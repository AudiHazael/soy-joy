import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../styles/styles.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "components/footer";
import Navbar from "components/Navbar";
import AccordionFlush from "components/accordion";
import CTA from "components/CTA";
import Header from "components/Header";

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

      {/* <section className="heroTwo hero">
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
      </section> */}

      <Header
        title=""
        subtitle="About Us"
        text="Know more about us and what we do"
      />

      <section className="mt-5 mb-5">
        <div className="container d-flex flex-column justify-content-center align-itms-center text-center">
          <h4>A Wide Variety of Plant-Based Milk</h4>
          <p>
            Plant based milk is rich in vitamins and minerals, and low in
            cholesterol. It is also adviced to people who have a slow digestive
            system.
          </p>
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

      <section className="mt-5 mb-5">
        <div className="container">
          <div className="row justify-contnet-center align-irems-center">
            <div className="col-md-5 col-12">
              <img src="" alt="Image" />
            </div>
            <div className="col-md-5 col-12 text-center">
              <h2 className="">
                SoyJoy Milk <br /> Multi-Flavour, Plant-Based Milk
              </h2>
              <p>
                The Perfect Choice for Everyone <br />
                <strong>Sip Pure Joy with Soy</strong>
              </p>

              <div className="row justify-content-center align-items-center">
                <div className="col-md-4 card p-5 me-4"></div>
                <div className="col-md-4 card p-5"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AccordionFlush />
      <CTA />

      <Footer />
    </div>
  );
}

export default About;
