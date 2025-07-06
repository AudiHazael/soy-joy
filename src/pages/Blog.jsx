import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "../components/Header";

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
import Header from "../components/header";

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

      {/* <section className="heroTwo hero">
        <div className="container">
          <h2 data-aos="fade-up" data-aos-duration="1000">
            Blog
          </h2>
          <p
            data-aos="fade-right"
            data-aos-delay="1000"
            data-aos-duration="800">
            Join the conversation at SoyJoy: Where curiosity meets conversation.
            Explore, learn, and grow with us!
          </p>
          <HeroButton />
        </div>
      </section> */}
      <Header
        title="SOYJOY"
        subtitle="Blog"
        text="Join the conversation at SoyJoy: Where curiosity meets conversation.
            Explore, learn, and grow with us!."
      />

      <section className="blog-cards">
        <div className="container pb-5 pt-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-10 col-12 cards">
              <div className="row justify-content-start align-items-center p-2">
                <div className="text">
                  <h3>The Soyjoy Journal</h3>
                  <p>
                    Welcome to The Soyjoy Journal, where we explore the
                    wonderful world of soy milk and soybeans. From recipes and
                    product reviews to lifestyle tips and inspiration, we'll
                    share our favorite stories and ideas about soy. Join us on
                    this journey as we discover the joy of soy!
                  </p>
                </div>
                <div className="col-md-4 col- m-2 card h-100 shadow-sm">
                  <img src="" className="card-img-top" alt="Vanilla Soy Milk" />
                  <div className="card-body">
                    <h5 className="card-title mb-3">
                      Unlock the Power of Soy: Discover the Amazing Health
                      Benefits of SoyJoy
                    </h5>
                    <Link className=" card-text blog-link " to="/BlogOne">
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
                    <Link className=" card-text blog-link " to="/BlogTwo">
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
                    <Link className=" card-text blog-link " to="/BlogThree">
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
                    <Link className=" card-text blog-link " to="/BlogFour">
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
                    <Link className=" card-text blog-link " to="/BlogFive">
                      click to read more!
                    </Link>
                  </div>
                </div>

                <div className="col-md-4 col- m-2 card h-100 shadow-sm">
                  <img src="" className="card-img-top" alt="Vanilla Soy Milk" />
                  <div className="card-body">
                    <h5 className="card-title mb-3">
                      𝗧𝗵𝗲 𝗕𝗶𝗿𝘁𝗵 𝗼𝗳 𝗦𝗼𝘆𝗝𝗼𝘆: 𝗔 𝗝𝗼𝘂𝗿𝗻𝗲𝘆 𝗼𝗳 𝗖𝗼𝗺𝗽𝗮𝘀𝘀𝗶𝗼𝗻 𝗮𝗻𝗱 𝗣𝘂𝗿𝗽𝗼𝘀𝗲
                    </h5>
                    <Link className=" card-text blog-link " to="/BlogSix">
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
