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
    <div className="flex flex-wrap gap-3">
      {showShop && (
        <Link
          to={shopLink}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded transition duration-300"
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
          className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-2 rounded transition duration-300"
          data-aos="fade"
          data-aos-easing="ease-in-out"
          data-aos-delay="2000"
          data-aos-duration="1000"
        >
          {contactText}
        </Link>
      )}
    </div>
  );
}

export default HeroButton;
