import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/styles.scss";

export default function Header({
  title,
  subtitle,
  text,
  showShop = true,
  showContact = true,
  shopText = "Shop Now !",
  contactText = "Contact Us",
  shopLink = "/Shop2",
  contactLink = "/Contact",
}) {
  return (
    <section className="hero">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {/* Text Column */}
          <div className="col-md-6">
            <h1
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              {title}
            </h1>
            <h2
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              {subtitle}
            </h2>
            <p
              data-aos="fade-right"
              data-aos-delay="1000"
              data-aos-duration="800"
            >
              {text}
            </p>

            {/* Buttons */}
            <div className="d-flex flex-wrap gap-3 mt-4">
              {showShop && (
                <Link
                  to={shopLink}
                  className="btn-primary btn-info text-white fw-bold px-4"
                  data-aos="fade"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="1500"
                  data-aos-duration="1000"
                >
                  {shopText}
                </Link>
              )}

              {showContact && (
                <Link
                  to={contactLink}
                  className="btn-secondary btn-info text-dark fw-bold px-4"
                  data-aos="fade"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="2000"
                  data-aos-duration="1000"
                >
                  {contactText}
                </Link>
              )}
            </div>
          </div>

          {/* Image Column */}
          <div className="col-md-6">
            <img src="/images/hero-image.png" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}
