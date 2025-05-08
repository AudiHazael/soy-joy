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

      <section className="flavors pt-5 pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img src="https://via.placeholder.com/150" alt="flavor image 1" />
            </div>
            <div className="col-md-6">
              <h5>Lorem ipsum.</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate nesciunt veritatis omnis nulla suscipit iste id
                dolorum distinctio minus at sapiente, temporibus dignissimos
                culpa ipsam fuga fugiat quos, est iure.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img src="https://via.placeholder.com/150" alt="flavor image 1" />
            </div>
            <div className="col-md-6">
              <h5>Lorem ipsum.</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate nesciunt veritatis omnis nulla suscipit iste id
                dolorum distinctio minus at sapiente, temporibus dignissimos
                culpa ipsam fuga fugiat quos, est iure.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img src="https://via.placeholder.com/150" alt="flavor image 1" />
            </div>
            <div className="col-md-6">
              <h5>Lorem ipsum.</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate nesciunt veritatis omnis nulla suscipit iste id
                dolorum distinctio minus at sapiente, temporibus dignissimos
                culpa ipsam fuga fugiat quos, est iure.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img src="https://via.placeholder.com/150" alt="flavor image 1" />
            </div>
            <div className="col-md-6">
              <h5>Lorem ipsum.</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate nesciunt veritatis omnis nulla suscipit iste id
                dolorum distinctio minus at sapiente, temporibus dignissimos
                culpa ipsam fuga fugiat quos, est iure.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img src="https://via.placeholder.com/150" alt="flavor image 1" />
            </div>
            <div className="col-md-6">
              <h5>Lorem ipsum.</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate nesciunt veritatis omnis nulla suscipit iste id
                dolorum distinctio minus at sapiente, temporibus dignissimos
                culpa ipsam fuga fugiat quos, est iure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Varieties;
