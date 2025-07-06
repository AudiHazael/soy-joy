import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/styles.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Header from "../components/Header";

function Contact() {
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
            Contact Us
          </h2>
          <p
            data-aos="fade-right"
            data-aos-delay="1000"
            data-aos-duration="800">
            Reach Out to Us
          </p>
          <Link
            to="./Shop"
            target=""
            rel="noopener noreferrer"
            className="btn-primary btn-info text-white fw-bold px-4 me-4"
            data-aos="fade"
            data-aos-easing="ease-in-out"
            data-aos-delay="1500"
            data-aos-duration="1000">
            Shop Now !
          </Link>
        </div>
      </section> */}

      <Header
        title=""
        subtitle="Contact Us"
        text="Reach Out to Us"
        showContact={false}
      />

      <section className="contacts mt-5 mb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-12 justify-content-center contact-info">
              <div className="d-flex">
                <FaMapMarkerAlt
                  fontSize="2.25rem"
                  color="#181717"
                  className="pe-3"
                />
                <p>
                  Plot 15, Jesus Avenue, Simawa, Lukosi, <br /> Sagamu, Ogun
                  State
                </p>
              </div>
              <div className="d-flex">
                <FaPhoneAlt
                  fontSize="2.25rem"
                  color="#181717"
                  className="pe-3"
                />
                <p className="pt-2">+234 703 940 4909</p>
              </div>
              <div className="d-flex">
                <FaEnvelope
                  fontSize="2.25rem"
                  color="#181717"
                  className="pe-3"
                />
                <p className="pt-2">hazaeldevs@gmail.com</p>
              </div>
            </div>
            <div className="col-md-6">
              <form
                className="container my-5 text-white"
                style={{ maxWidth: "600px" }}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="John Doe"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="example@email.com"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone No.
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="+234 80 XXX XX XXX"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input type="text" className="form-control" id="subject" />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Type your message"></textarea>
                </div>

                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="terms"
                  />
                  <label className="form-check-label" htmlFor="terms">
                    Agree to Privacy Policy and Terms and Condition of service
                  </label>
                </div>

                <button type="submit" className="btn btn-primary px-4">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="cta pt-4 pb-4">
        <div className="container">
          <div
            className="row justify-content-center subscribe pt-4 pb-4"
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-delay="500"
            data-aos-duration="1000">
            <div className="col-md-12 pt-5 pb-5">
              <div className="row justify-content-center align-items-center">
                <div className="col-md-4 text-md-start text-center mb-3 mb-md-0">
                  <h3>Subscribe to our Newsletter</h3>
                </div>
                <div className="col-md-6">
                  <form className="d-flex">
                    <input
                      type="email"
                      className="form-control me-2"
                      placeholder="Your email"
                      required
                    />
                    <button type="submit" className="btn btn-primary">
                      Subscribe
                    </button>
                  </form>
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

export default Contact;
