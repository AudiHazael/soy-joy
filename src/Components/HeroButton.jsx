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
        >
          {shopText}
        </Link>
      )}

      {showContact && (
        <Link
          to={contactLink}
          className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-2 rounded transition duration-300"
        >
          {contactText}
        </Link>
      )}
    </div>
  );
}

export default HeroButton;
