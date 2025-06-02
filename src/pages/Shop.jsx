import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../styles/styles.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

function Shop() {
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

      <section className="hero">
        <div className="container">
          <h1 data-aos="fade-down" data-aos-duration="1000">
            SOYJOY
          </h1>
          <h2 data-aos="fade-up" data-aos-duration="1000">
            Sip Pure Joy with Soy
          </h2>
          <p
            data-aos="fade-right"
            data-aos-delay="1000"
            data-aos-duration="800">
            Experience the creamy taste of health and happiness in every sip.
          </p>
          <div className="d-flex">
            <Link
              to="./Contact"
              target=""
              rel="noopener noreferrer"
              className="btn-secondary btn-info text-white fw-bold px-4"
              data-aos="fade"
              data-aos-easing="ease-in-out"
              data-aos-delay="2000"
              data-aos-duration="1000">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="shop pt-5 pb-5">
        <div className="container d-flex justify-content-center">
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 shopCta me-2">
              <h2>Discover Our Online Stores</h2>
              <p>
                Explore the convenience of shopping for your favorite soy milk
                products through our trusted online stores. Whether you prefer
                shopping on Jumia or Amazon, we’ve made it easy for you to
                access our delicious varieties from the comfort of your home.
                Simply click on the links below to visit our official stores and
                enjoy the pure joy of soy, delivered right to your doorstep.
                Start your journey to healthier, happier living today!
              </p>
            </div>
            <div className="col-md-4 store ms-2 d-flex flex-column justify-content-center align-items-center">
              <div className="shop-1 pb-4">
                <h3>Buy on Jumia</h3>
                <button type="button" className="btn-primary">
                  <a href="#">
                    <div className="d-flex">
                      <img
                        src="/images/jumia.png"
                        alt="jumia logo"
                        title="jumia by Kelvin Kinuthia on IconScout"
                        className="me-3"
                        width="30"
                        height="30"
                      />
                      <span>Jumia</span>
                    </div>
                  </a>
                </button>
              </div>
              <div className="shop-2">
                <h3>Buy on Amazon</h3>
                <button type="button" className="btn-primary">
                  <a href="#">
                    <div className="d-flex">
                      <img
                        src="/public/images/amazon.png"
                        alt="amazon logo"
                        title="Amazon by Pixel Icons on IconScout"
                        className="me-3"
                        width="30"
                        height="30"
                      />
                      <span>Amazon</span>
                    </div>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Shop;
