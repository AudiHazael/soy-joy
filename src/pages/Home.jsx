import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../styles/styles.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import AccordionFlush from "../components/accordion";
import HeroButton from "../components/HeroButton";

function Home() {
  return (
    <div>
      <Helmet>
        <title>SoyJoy | Sip Pure Joy with Soy </title>
        <meta
          name="description"
          content="Master the EBC Forex Strategy with WealthWave Global Network and achieve financial freedom."
        />
        <link rel="canonical" href="https://your-website.com/wealthwave" />
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
          <HeroButton />
        </div>
      </section>

      <section className="facts pt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-md-3 d-flex"
              data-aos="fade"
              data-aos-easing="ease-in-out"
              data-aos-delay="2000"
              data-aos-duration="1000">
              <h3>
                Did you <br />
                know?
              </h3>
              <img
                className="ms-5"
                src="/Assets/Images/pgdivider.png"
                alt="pg divider"
              />
            </div>
            <div
              className="col-md-8"
              data-aos="fade"
              data-aos-easing="ease-in-out"
              data-aos-delay="2000"
              data-aos-duration="1000">
              <p>
                SoyJoy milk is a great source of high-quality plant-based
                protein, essential vitamins like B-complex, and minerals such as
                calcium, magnesium, and potassium. It’s often fortified with
                additional calcium and vitamin D, making it a nutritious
                alternative to dairy milk.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 varieties">
        <div
          className="container text-center"
          data-aos="fade"
          data-aos-easing="ease-in-out"
          data-aos-delay="2500"
          data-aos-duration="1000">
          <h2 className="mb-4">Discover Our Delicious Varieties</h2>
          <p className="mb-5">
            From creamy classics to exciting flavors, we have something for
            everyone!
          </p>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4 justify-content-center">
            {/* Card: Classic Soy Milk */}
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="..."
                  className="card-img-top"
                  alt="Classic Soy Milk"
                />
                <div className="card-body text-center">
                  <h3 className="card-title mb-3">SoyJoy Classic</h3>
                  <p className="card-text">
                    The rich and creamy original soy milk for everyday
                    enjoyment.
                  </p>
                </div>
              </div>
            </div>

            {/* Card: Vanilla Soy Milk */}
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="..."
                  className="card-img-top"
                  alt="Vanilla Soy Milk"
                />
                <div className="card-body text-center">
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
                  src="..."
                  className="card-img-top"
                  alt="Chocolate Soy Milk"
                />
                <div className="card-body text-center">
                  <h3 className="card-title mb-3">SoyJoy Chocolate</h3>
                  <p className="card-text">
                    Indulge in the rich taste of chocolate blended with
                    nutritious soy milk.
                  </p>
                </div>
              </div>
            </div>

            {/* Card: Unsweetened Soy Milk */}
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="..."
                  className="card-img-top"
                  alt="Unsweetened Soy Milk"
                />
                <div className="card-body text-center">
                  <h3 className="card-title mb-3">SoyJoy Unsweetened</h3>
                  <p className="card-text">
                    Pure soy goodness with no added sugars – perfect for
                    health-conscious choices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 d-flex justify-content-end">
            <a href="..." className="btn btn-primary">
              See More
            </a>
          </div>
        </div>
      </section>

      <section
        className="nudgets p-4"
        data-aos="zoom"
        data-aos-easing="ease-in-out"
        data-aos-delay="1000">
        <div className="container d-flex justify-content-center pt-4">
          <h2 className="text-center">PLANT BASED MILK FOR EVERYONE</h2>
        </div>
      </section>

      <section
        className="py-5 shopping"
        data-aos="fade"
        data-aos-easing="ease-in-out"
        data-aos-delay="1500">
        <div className="container text-center">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4 justify-content-center">
            {/* Classic Soy Milk */}
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="..."
                  className="card-img-top"
                  alt="Classic Soy Milk"
                />
              </div>
            </div>

            {/* Vanilla Soy Milk */}
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="..."
                  className="card-img-top"
                  alt="Vanilla Soy Milk"
                />
              </div>
            </div>

            {/* Chocolate Soy Milk */}
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="..."
                  className="card-img-top"
                  alt="Chocolate Soy Milk"
                />
              </div>
            </div>

            {/* Unsweetened Soy Milk */}
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="..."
                  className="card-img-top"
                  alt="Unsweetened Soy Milk"
                />
              </div>
            </div>
          </div>

          <div className="mt-4 d-flex justify-content-end">
            <a href="/Web Pages/shop.html" className="btn btn-primary">
              Go Shopping
            </a>
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
              data-aos-delay="2000"
              data-aos-duration="1000">
              <h4>
                Did <br />
                you know?
              </h4>
              <img
                className="ms-5"
                src="/Assets/Images/pgdivider.png"
                alt="pg divider"
              />
            </div>
            <div
              className="col-md-8"
              data-aos="fade"
              data-aos-easing="ease-in-out"
              data-aos-delay="2000"
              data-aos-duration="1000">
              <p>
                SoyJoy is naturally lactose-free, making it an excellent choice
                for people with lactose intolerance or those following a vegan
                lifestyle. It’s also low in saturated fat, promoting heart
                health.
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
          data-aos-delay="800">
          <div className="row g-4 justify-content-center align-items-center">
            <h3>Our Customers</h3>
            <div className="col-md-4 images">
              <div className="row g-4 justify-content-center align-items-center">
                <div className="col-md-6">
                  <img
                    src="./Assets/Images/Frame 499 (1).png"
                    className=""
                    alt="client 1"
                  />
                </div>
                <div className="col-md-6">
                  <img
                    src="./Assets/Images/Frame 499 (1).png"
                    className=""
                    alt="client 2"
                  />
                </div>
                <div className="col-md-6">
                  <img
                    src="./Assets/Images/Frame 499 (1).png"
                    className=""
                    alt="client 3"
                  />
                </div>
                <div className="col-md-6">
                  <img
                    src="./Assets/Images/Frame 499 (1).png"
                    className=""
                    alt="client 4"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                id="carouselExampleSlidesOnly"
                className="carousel slide"
                data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="d-flex flex-column align-items-start text-center text-md-start">
                      <img
                        src="..."
                        alt="Avatar 1"
                        className="avatar me-md-4 mb-3 mb-md-0"
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                      />
                      <p className="m-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequuntur repudiandae nam excepturi odit earum illo
                        sit incidunt perspiciatis illum, fugiat distinctio
                        recusandae. Facilis, provident magnam.
                      </p>
                      <h5>Jonh Dow</h5>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="d-flex flex-column align-items-start text-center text-md-start">
                      <img
                        src="..."
                        alt="Avatar 2"
                        className="avatar me-md-4 mb-3 mb-md-0"
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                      />
                      <p className="m-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequuntur repudiandae nam excepturi odit earum illo
                        sit incidunt perspiciatis illum, fugiat distinctio
                        recusandae. Facilis, provident magnam.
                      </p>
                      <h5>Jonh Dow</h5>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="d-flex flex-column align-items-start text-center text-md-start">
                      <img
                        src="..."
                        alt="Avatar 3"
                        className="avatar me-md-4 mb-3 mb-md-0"
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                      />
                      <p className="m-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequuntur repudiandae nam excepturi odit earum illo
                        sit incidunt perspiciatis illum, fugiat distinctio
                        recusandae. Facilis, provident magnam.
                      </p>
                      <h5>Jonh Dow</h5>
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
              data-aos-delay="2000"
              data-aos-duration="1000">
              <h4>
                Did <br />
                you know?
              </h4>
              <img
                className="ms-5"
                src="/Assets/Images/pgdivider.png"
                alt="pg divider"
              />
            </div>
            <div
              className="col-md-8"
              data-aos="fade"
              data-aos-easing="ease-in-out"
              data-aos-delay="2000"
              data-aos-duration="1000">
              <p>
                Producing SoyJoy has a smaller environmental footprint compared
                to dairy milk. It requires less water and land and emits fewer
                greenhouse gases, making it an eco-conscious beverage option.
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
          data-aos-delay="2000"
          data-aos-duration="1000">
          <h3>Our Insta Shots</h3>
          <div className="row g-4 justify-content-center mt-2">
            <div className="col-md-3 ">
              <img src="./Assets/Images/Insta.png" alt="insta shot" />
            </div>
            <div className="col-md-3 ">
              <img src="./Assets/Images/Insta.png" alt="insta shot" />
            </div>
            <div className="col-md-3 ">
              <img src="./Assets/Images/Insta.png" alt="insta shot" />
            </div>
            <div className="col-md-3 ">
              <img src="./Assets/Images/Insta.png" alt="insta shot" />
            </div>
          </div>
          <div className="handle">
            <p>
              Follow us
              <span>
                <a href=""> @SoyJoy</a>
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="cta pt-4 pb-4">
        <div className="container">
          <div
            className="row justify-content-center subscribe pt-4 pb-4"
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-delay="1500"
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

          <div
            className="row justify-content-center distributor"
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-delay="2000"
            data-aos-duration="1000">
            <div className="col-md-12 text-center">
              <h3>Become a Distributor of SoyJoy</h3>
              <p>
                Join our growing network of distributors and bring the goodness
                of soy milk to homes everywhere
              </p>
              <Link
                className="btn-primary btn-info text-white fw-bold px-4"
                to="/...">
                Contact Us !
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
