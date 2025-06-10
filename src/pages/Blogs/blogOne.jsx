import React from "react";
import { Helmet } from "react-helmet-async";
// import { Link } from "react-router-dom";
import "../../styles/styles.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "../../components/footer";
import Navbar from "../../components/Navbar";

function blogone() {
  return (
    <div>
      <Helmet>
        <title>SoyJoy | Sip Pure Joy with Soy </title>
        <meta name="description" content="" />
        <link rel="canonical" href="https://soy-joy.vercel.app/.../" />
      </Helmet>

      <Navbar />

      <section className="hero">
        <div className="container text-center d-flex flex-column justify-content-center align-items-center">
          <h1 data-aos="fade-down" data-aos-duration="1000">
            Unlock the Power of Soy: Discover the Amazing Health Benefits of
            SoyJoy
          </h1>

          <HeroButton />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default blogone;
