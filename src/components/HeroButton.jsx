import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/styles.scss";
import { Link } from "react-router-dom";

function HeroButton() {
  return (
    <div>
      <div className="d-flex">
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

        <Link
          to="./Contact"
          target=""
          rel="noopener noreferrer"
          className="btn-secondary btn-info text-white fw-bold px-4"
          data-aos="fade"
          data-aos-easing="ease-in-out"
          data-aos-delay="2000"
          data-aos-duration="1000">
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default HeroButton;
