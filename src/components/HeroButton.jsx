import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/styles.scss";
import { Link } from "react-router-dom";

function HeroButton({
  showShop = true,
  showContact = true,
  shopText = "Shop Now !",
  contactText = "Contact Us",
  shopLink = "/Shop2",
  contactLink = "/Contact",
}) {
  return (
    <div className="d-flex flex-wrap gap-3">
      {showShop && (
        <Link
          to={shopLink}
          className="btn-primary btn-info text-white fw-bold px-4"
          data-aos="fade"
          data-aos-easing="ease-in-out"
          data-aos-delay="1500"
          data-aos-duration="1000">
          {shopText}
        </Link>
      )}

      {showContact && (
        <Link
          to={contactLink}
          className="btn-secondary btn-info text-white fw-bold px-4"
          data-aos="fade"
          data-aos-easing="ease-in-out"
          data-aos-delay="2000"
          data-aos-duration="1000">
          {contactText}
        </Link>
      )}
    </div>
  );
}

export default HeroButton;
