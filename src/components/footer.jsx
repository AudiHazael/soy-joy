import React from "react";
import "../styles/styles.scss";

function Footer() {
  return (
    <section className="footer pt-4">
      <div className="container pt-4 d-flex flex-column justify-content-between align-items-center">
        <div
          className="socials"
          data-aos="fade-in"
          data-aos-easing="ease-in-out"
          data-aos-delay="1000"></div>

        <div className="row d-flex justify-content-between">
          <div className="col-md-4 col-12 p-4 m-0 footHero">
            <a className="navbar-brand" href="index.html">
              <img src="https://via.placeholder.com/150" alt="Logo" className="logo" />
            </a>
            <h3>SoyJoy Milk</h3>
            <p>
              Experience the creamy taste of health and happiness in every sip.
            </p>
          </div>

          <div
            className="col-md-4 mb-4 links"
            data-aos="fade-in"
            data-aos-easing="ease-in-out"
            data-aos-delay="1500">
            <div className="row">
              <ul className="list-unstyled">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/flavors">Flavors</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/shop">Shop</a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="col-md-4 col-12 contact-info P-4"
            data-aos="fade-in"
            data-aos-easing="ease-in-out"
            data-aos-delay="2000">
            <p>
              132 Dartmouth Street Boston, Massachusetts 02156 United States
            </p>
            <p>+1012 3456 789</p>
            <p>demo@gmail.com</p>
          </div>
        </div>

        <div className="copyright p-0 m-0 d-flex justify-content-center">
          <p className="pt-2">
            © Copyrights 2025 SoyJoy | Designed by{" "}
            <a href="https://wa.link/8k0f7s" target="_blank" rel="nofollow">
              Hazael Audi
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
