import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/styles.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import AccordionFlush from "../components/accordion";
import Header from "../components/Header";
import CTA from "../components/CTA";

function Home() {
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

      {/* <section className="hero One" data-aos="fade-up" data-aos-duration="1500">
        <div className="container  d-flex flex-column justify-content-center">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-12">
              <h1
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="500">
                SOYJOY
              </h1>
              <h2
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500">
                Sip Pure Joy with Soy
              </h2>
              <p
                data-aos="fade-right"
                data-aos-delay="1000"
                data-aos-duration="800">
                Experience the rich, creamy taste of health and happiness in
                every sip.
              </p>
              <HeroButton />
            </div>
          </div>
        </div>
      </section> */}
      <Header
        title="SOYJOY"
        subtitle=" Sip Pure Joy with Soy"
        text="Experience the rich, creamy taste of health and happiness in
                every sip."
      />

      <section className="facts pt-5 pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-md-3 d-flex"
              data-aos="fade"
              data-aos-easing="ease-in-out"
              data-aos-delay="500"
              data-aos-duration="1000">
              <h3>
                Did you <br />
                know?
              </h3>
              <img
                className="ms-5"
                src="/images/pgdivider.png"
                alt="pg divider"
              />
            </div>
            <div
              className="col-md-8"
              data-aos="fade"
              data-aos-easing="ease-in-out"
              data-aos-delay="500"
              data-aos-duration="1000">
              <p>
                SoyJoy milk is the ultimate game-changer for your daily
                nutrition! Packed with powerhouse protein, brain-boosting B
                vitamins, bone-strengthening calcium, magnesium, and potassium,
                plus vitamin D for immune support - it's the perfect dairy-free
                upgrade for a healthier, happier you!
              </p>
            </div>
          </div>
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

          <div className="mt-5 d-flex justify-content-end">
            <Link
              to="/Varieties"
              target=""
              rel="noopener noreferrer"
              className="btn-primary btn-info text-white fw-bold px-4 me-4"
              data-aos="fade"
              data-aos-easing="ease-in-out"
              data-aos-delay="1500"
              data-aos-duration="1000">
              See More
            </Link>
          </div>
        </div>
      </section>

      <section
        className="nudgets p-4"
        data-aos="zoom"
        data-aos-easing="ease-in-out"
        data-aos-delay="500">
        <div className="container d-flex justify-content-center pt-4">
          <h2 className="text-center">PLANT BASED MILK FOR EVERYONE</h2>
        </div>
      </section>

      <section
        className="py-5 shopping"
        data-aos="fade"
        data-aos-easing="ease-in-out"
        data-aos-delay="500">
        <div className="container text-center">
          <div className="row row-cols-1 row row-cols-2 row-cols-md-2 row-cols-lg-4 g-4 justify-content-center">
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="/images/shop-peach.jpeg"
                  className="card-img-top"
                  alt="soyjoy peach"
                />
                <div className="card-body d-flex flex-column justify-content-center  align-items-start">
                  <div className="card-title">
                    <div className="d-flex justify-content-between align-items center mt-2">
                      <h5 className="card-title">Peach SoyJoy</h5>
                      <p>
                        <span>$97.99</span>
                      </p>
                    </div>
                  </div>
                  <div className="card-text">
                    <div className="card_text_icon">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="/images/shop-almond.jpeg"
                  className="card-img-top"
                  alt="soyjoy almond"
                />
                <div className="card-body d-flex flex-column justify-content-center align-items-start justify-content-center">
                  <div className="card-title">
                    <div className="d-flex justify-content-between align-items center mt-2">
                      <h5 className="card-title">Peach SoyJoy</h5>
                      <p>
                        <span>$97.99</span>
                      </p>
                    </div>
                  </div>
                  <div className="card-text">
                    <div className="card_text_icon">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="/images/shop-chocolate.jpeg"
                  className="card-img-top"
                  alt="soyjoy chocolate"
                />
                <div className="card-body d-flex flex-column justify-content-center align-items-start justify-content-center">
                  <div className="card-title">
                    <div className="d-flex justify-content-between align-items center mt-2">
                      <h5 className="card-title">Peach SoyJoy</h5>
                      <p>
                        <span>$97.99</span>
                      </p>
                    </div>
                  </div>
                  <div className="card-text">
                    <div className="card_text_icon">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="/images/soyjoy-strawberry3.png"
                  className="card-img-top"
                  alt="soyjoy strawberry"
                />
                <div className="card-body d-flex flex-column justify-content-center align-items-start justify-content-center">
                  <div className="card-title">
                    <div className="d-flex justify-content-between align-items center mt-2">
                      <h5 className="card-title">Peach SoyJoy</h5>
                      <p>
                        <span>$97.99</span>
                      </p>
                    </div>
                  </div>
                  <div className="card-text">
                    <div className="card_text_icon">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 d-flex justify-content-end">
            <Link
              to="/Shop2"
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
        </div>
      </section>

      <section className="facts pt-4 pb-4">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-md-3 d-flex"
              data-aos="fade"
              data-aos-easing="ease-in-out"
              data-aos-delay="500"
              data-aos-duration="1000">
              <h4>
                Did <br />
                you know?
              </h4>
              <img
                className="ms-5"
                src="/images/pgdivider.png"
                alt="pg divider"
              />
            </div>
            <div
              className="col-md-8"
              data-aos="fade"
              data-aos-easing="ease-in-out"
              data-aos-delay="500"
              data-aos-duration="1000">
              <p>
                SoyJoy is more than just delicious - it's naturally
                lactose-free, making it a perfect fit for those with lactose
                intolerance or a vegan lifestyle. Plus, it's low in saturated
                fat, so you can sip with confidence and sip your way to a
                healthier heart. <br /> <strong>Sip Pure Joy with Soy</strong>!"
              </p>
            </div>
          </div>
        </div>
      </section>

      <AccordionFlush />

      <section className="testimonial pb-5">
        <div
          className="container"
          data-aos="fade"
          data-aos-easing="ease-in-out"
          data-aos-delay="500">
          <div className="row g-4 justify-content-center align-items-center">
            {/* <div className="col-md-4 images">
              <div className="row-cols-1 row row-cols-2 row-cols-md-2 row-cols-lg-4 g-4 justify-content-center justify-content-center align-items-center">
                <div className="col-md-6">
                  <img
                    src="https://via.placeholder.com/150"
                    className=""
                    alt="client 1"
                  />
                </div>
                <div className="col-md-6">
                  <img
                    src="https://via.placeholder.com/150"
                    className=""
                    alt="client 2"
                  />
                </div>
                <div className="col-md-6">
                  <img
                    src="https://via.placeholder.com/150"
                    className=""
                    alt="client 3"
                  />
                </div>
                <div className="col-md-6">
                  <img
                    src="https://via.placeholder.com/150"
                    className=""
                    alt="client 4"
                  />
                </div>
              </div>
            </div> */}
            <div className="col-md-6 COL-12">
              <h3>Our Customers</h3>
              <div
                id="carouselExampleSlidesOnly"
                className="carousel slide"
                data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Avatar 1"
                        className="avatar"
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          marginBottom: "1rem",
                        }}
                      />
                      <p className="m-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequuntur repudiandae nam excepturi odit earum illo
                        sit incidunt perspiciatis illum, fugiat distinctio
                        recusandae. Facilis, provident magnam.
                      </p>
                      <h5>Mary Spencer</h5>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Avatar 2"
                        className="avatar"
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          marginBottom: "1rem",
                        }}
                      />
                      <p className="m-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequuntur repudiandae nam excepturi odit earum illo
                        sit incidunt perspiciatis illum, fugiat distinctio
                        recusandae. Facilis, provident magnam.
                      </p>
                      <h5>John Doe</h5>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Avatar 3"
                        className="avatar"
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          marginBottom: "1rem",
                        }}
                      />
                      <p className="m-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequuntur repudiandae nam excepturi odit earum illo
                        sit incidunt perspiciatis illum, fugiat distinctio
                        recusandae. Facilis, provident magnam.
                      </p>
                      <h5>James Casidy</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="facts pt-4 pb-4">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-md-3 d-flex"
              data-aos="fade"
              data-aos-easing="ease-in-out"
              data-aos-delay="500"
              data-aos-duration="1000">
              <h4>
                Did <br />
                you know?
              </h4>
              <img
                className="ms-5"
                src="/images/pgdivider.png"
                alt="pg divider"
              />
            </div>
            <div
              className="col-md-8"
              data-aos="fade"
              data-aos-easing="ease-in-out"
              data-aos-delay="500"
              data-aos-duration="1000">
              <p>
                SoyJoy is a planet-friendly choice? Producing SoyJoy uses less
                water, land, and emits fewer greenhouse gases compared to dairy
                milk. Make the switch to SoyJoy for a greener future!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="insta pt-4">
        <div
          className="container"
          data-aos="fade"
          data-aos-easing="ease-in-out"
          data-aos-delay="500"
          data-aos-duration="1000">
          <h3>Our Insta Shots</h3>
          <div className="row-cols-1 row row-cols-2 row-cols-md-2 row-cols-lg-4 g-4 justify-content-center mt-2">
            <div className="col-md-3 ">
              <img src="https://via.placeholder.com/150" alt="insta-shot-one" />
            </div>
            <div className="col-md-3 ">
              <img src="https://via.placeholder.com/150" alt="insta-shot-two" />
            </div>
            <div className="col-md-3 ">
              <img
                src="https://via.placeholder.com/150"
                alt="insta-shot-three"
              />
            </div>
            <div className="col-md-3 ">
              <img
                src="https://via.placeholder.com/150"
                alt="insta-shot-four"
              />
            </div>
          </div>
          <div className="handle mt-4">
            <p>
              Follow us
              <span>
                <a href=""> @SoyJoy</a>
              </span>
            </p>
          </div>
        </div>
      </section>

      <CTA />

      <Footer />
    </div>
  );
}

export default Home;
