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

      <section className="py-5 varieties">
        <div
          className="container"
          data-aos="fade"
          data-aos-easing="ease-in-out"
          data-aos-delay="500"
          data-aos-duration="1000">
          <h2 className="mb-2">Our Delicious Varieties</h2>
          <p className="mb-5">
            From creamy classics to exciting flavors, we have something for
            everyone!
          </p>

          <div className="row row-cols-1 row row-cols-2 row-cols-md-2 row-cols-lg-4 g-4 justify-content-center">
            {/* Card: Classic Soy Milk */}
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="/images/sojoy-classic.png"
                  className="card-img-top"
                  alt="Classic Soy Milk"
                />
                <div className="card-body">
                  <h3 className="card-title mb-3">SoyJoy Classic</h3>
                  <p className="card-text">
                    The rich, creamy soy goodness for everyday delight.
                  </p>
                </div>
              </div>
            </div>

            {/* Card: Vanilla Soy Milk */}
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="/images/soyjoy-vanilla2.png"
                  className="card-img-top"
                  alt="Vanilla Soy Milk"
                />
                <div className="card-body">
                  <h3 className="card-title mb-3">SoyJoy Vanilla</h3>
                  <p className="card-text">
                    A sweet and aromatic twist for a smooth, delightful
                    experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Card: Chocolate Soy Milk */}
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="/images/soyjoy-chocolate.png"
                  className="card-img-top"
                  alt="Chocolate Soy Milk"
                />
                <div className="card-body">
                  <h3 className="card-title mb-3">SoyJoy Chocolate</h3>
                  <p className="card-text">
                    Rich chocolate meets nutritious soy milk - indulge with
                    SoyJoy Chocolate!
                  </p>
                </div>
              </div>
            </div>

            {/* Card:SoyJoy Coconut */}
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="/images/soyjoy-coconut.png"
                  className="card-img-top"
                  alt="Unsweetened Soy Milk"
                />
                <div className="card-body">
                  <h3 className="card-title mb-3">SoyJoy Coconut</h3>
                  <p className="card-text">
                    Refreshing coconut flavor in nutritious soy milk
                  </p>
                </div>
              </div>
            </div>

            {/* Card:SoyJoy Peach */}
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="/images/soyjoy-peach.png"
                  className="card-img-top"
                  alt="Unsweetened Soy Milk"
                />
                <div className="card-body">
                  <h3 className="card-title mb-3">SoyJoy Peach</h3>
                  <p className="card-text">
                    Sweet peach flavor in refreshing soy milk.
                  </p>
                </div>
              </div>
            </div>

            {/* Card:SoyJoy Strawberry */}
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="/images/soyjoy-strawberry2.png"
                  className="card-img-top"
                  alt="Unsweetened Soy Milk"
                />
                <div className="card-body ">
                  <h3 className="card-title mb-3">SoyJoy Strawberry</h3>
                  <p className="card-text">
                    Berry delightful, sweet & fruity flavor in soy milk.
                  </p>
                </div>
              </div>
            </div>

            {/* Card:SoyJoy Almond */}
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="/images/soyjoy-almond.png"
                  className="card-img-top"
                  alt="Unsweetened Soy Milk"
                />
                <div className="card-body">
                  <h3 className="card-title mb-3">SoyJoy Almond</h3>
                  <p className="card-text">
                    Smooth nutty goodness in soy milk.
                  </p>
                </div>
              </div>
            </div>

            {/* Card:SoyJoy Hazaelnut */}
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="/images/soyjoy-hazelnut.png"
                  className="card-img-top"
                  alt="Unsweetened Soy Milk"
                />
                <div className="card-body ">
                  <h3 className="card-title mb-3">SoyJoy Hazelnut</h3>
                  <p className="card-text">
                    Nutty perfection, rich hazelnut flavor in soy milk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Varieties;
