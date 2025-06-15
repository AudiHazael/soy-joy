import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/styles.scss";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <div>
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

          <div
            className="row justify-content-center distributor"
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-delay="500"
            data-aos-duration="1000">
            <div className="col-md-12 text-center">
              <h3>Become a Distributor of SoyJoy</h3>
              <p>
                Join our growing network of distributors and bring the goodness
                of soy milk to homes everywhere
              </p>
              <Link
                className="btn-primary btn-info text-white fw-bold px-4"
                to="/Contact">
                Contact Us !
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CTA;
