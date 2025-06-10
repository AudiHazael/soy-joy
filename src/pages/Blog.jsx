import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  // FaEnvelope,
  // FaPhoneAlt,
  // FaMapMarkerAlt,
  // FaReact,
  // FaSass,
  // FaBootstrap,
  // FaFigma,
  // FaGithub,
} from "react-icons/fa";

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
          content="SoyJoy offers delicious, plant-based soy milk options for a healthy and joyful lifestyle."
        />
        <link rel="canonical" href="https://soy-joy.vercel.app/" />
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <HeroButton />
        </div>
      </section>

      <section className="blog-cards">
        <div className="container pb-5 pt-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-10 col-12 cards">
              <div className="row justify-content-start align-items-center p-2">
                <div className="text">
                  <h3>Lorem, ipsum dolor.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto suscipit perferendis laboriosam dicta veritatis quam?
                  </p>
                </div>
                <div className="col-md-4 col- m-2 card h-100 shadow-sm">
                  <img src="" className="card-img-top" alt="Vanilla Soy Milk" />
                  <div className="card-body">
                    <h5 className="card-title mb-3">
                      Unlock the Power of Soy: Discover the Amazing Health
                      Benefits of SoyJoy
                    </h5>
                    <Link className=" card-text blog-link " to="/blogOne">
                      <FaArrowRight
                        fontSize="2.25rem"
                        color="#181717"
                        className="pe-3"
                      />
                      click to read more!
                    </Link>
                  </div>
                </div>

                <div className="col-md-4 col- m-2 card h-100 shadow-sm">
                  <img src="" className="card-img-top" alt="Vanilla Soy Milk" />
                  <div className="card-body">
                    <h5 className="card-title mb-3">
                      Unlocking the Natural Benefits of SoyJoy
                    </h5>
                    <Link className=" card-text blog-link " to="/blogTwo">
                      <FaArrowRight
                        fontSize="2.25rem"
                        color="#181717"
                        className="pe-3"
                      />
                      click to read more!
                    </Link>
                  </div>
                </div>

                <div className="col-md-4 col- m-2 card h-100 shadow-sm">
                  <img src="" className="card-img-top" alt="Vanilla Soy Milk" />
                  <div className="card-body">
                    <h5 className="card-title mb-3">
                      Why Partner with SoyJoy: Unlocking Growth and Impact
                    </h5>
                    <Link className=" card-text blog-link " to="/blogThree">
                      <FaArrowRight
                        fontSize="2.25rem"
                        color="#181717"
                        className="pe-3"
                      />
                      click to read more!
                    </Link>
                  </div>
                </div>

                <div className="col-md-4 col- m-2 card h-100 shadow-sm">
                  <img src="" className="card-img-top" alt="Vanilla Soy Milk" />
                  <div className="card-body">
                    <h5 className="card-title mb-3">
                      Unlock the Power of SoyJoy: Revolutionize Your Daily
                      Nutrition!
                    </h5>
                    <Link className=" card-text blog-link " to="/blogFour">
                      <FaArrowRight
                        fontSize="2.25rem"
                        color="#181717"
                        className="pe-3"
                      />
                      click to read more!
                    </Link>
                  </div>
                </div>

                <div className="col-md-4 col- m-2 card h-100 shadow-sm">
                  <img src="" className="card-img-top" alt="Vanilla Soy Milk" />
                  <div className="card-body">
                    <h5 className="card-title mb-3">
                      Go Green with SoyJoy: The Planet-Friendly Choice
                    </h5>
                    <Link className=" card-text blog-link " to="/blogFive">
                      <FaArrowRight
                        fontSize="2.25rem"
                        color="#181717"
                        className="pe-3"
                      />
                      click to read more!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 quick-links"></div>
          </div>
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
