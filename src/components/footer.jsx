import React from "react";
import "../styles/styles.scss";

function Footer() {
  return (
    <section className="footer p-4">
      <div className="container pt-4">
        <div className="row justify-content-center">
          {/* Logo column */}
          <div className="col-md-3 col-12 mb-4">
            <a className="navbar-brand" href="index.html">
              <img src="/Images/Logo-Image.png" alt="Logo" className="logo" />
            </a>
            <h3>SoyJoy Milk</h3>
            <p>
              Experience the rich, creamy taste of health and happiness in every
              sip.
            </p>
          </div>

          {/* Links and contact column */}
          <div className="col-md-6 col-12 mb-4">
            <div className="row ">
              {/* First link set */}
              <div className="col-3">
                <ul className="list-unstyled d-flex flex-column justify-content-start align-items-start">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/faqs">FAQs</a>
                  </li>
                  <li>
                    <a href="/gallery">Gallery</a>
                  </li>
                  <li>
                    <a href="/careers">Careers</a>
                  </li>
                  <li>
                    <a href="/shop">Shop</a>
                  </li>
                </ul>
              </div>

              {/* Second link set */}
              <div className="col-3">
                <ul className="list-unstyled d-flex flex-column justify-content-start align-items-start">
                  <li>
                    <a href="/amazon-store">Amazon Store</a>
                  </li>
                  <li>
                    <a href="/jumia-store">Jumia Store</a>
                  </li>
                  {/* Add more links here */}
                </ul>
              </div>

              {/* Contact info */}
              <div className="col-4 col-12 contact-info">
                <p>132 Dartmouth Street, Boston, MA 02156, USA</p>
                <p>+1 012 3456 789</p>
                <p>demo@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="col-12 text-center">
            <p className="mb-0">
              © 2025 SoyJoy | Designed by{" "}
              <a
                href="https://wa.link/8k0f7s"
                target="_blank"
                rel="nofollow noopener">
                Hazael Audi
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
