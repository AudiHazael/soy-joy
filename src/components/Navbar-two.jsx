import React from "react";
import "../styles/nav2.css";

function NavbarTwo() {
  const toggleNavBar = () => {
    var bar = document.querySelector(".bar");
    var navBar = document.getElementById("navbar");

    bar.classList.toggle("roller");
    bar.classList.toggle("active");
    navBar.classList.toggle("navigation");
    console.log("Toggle navbar clicked");
  };

  return (
    <div className="pt-2 pb-2 nav-two">
      <div className="header_sub_two container">
        <div className="input_box">
          <input type="text" placeholder="Search For Item" />
          <button>
            <i className="bx bx-search-alt-2"></i>
          </button>
        </div>

        <div className="icon_box">
          <div className="bar" onClick={toggleNavBar}>
            <span className="bar_sub"></span>
            <span className="bar_sub"></span>
            <span className="bar_sub"></span>
          </div>

          <a href="#">
            <i className="bx bx-heart" id="heart_icon" data-quantity="3"></i>
          </a>

          <a href="cart.html">
            <i
              className="bx bx-shopping-bag Cart_icon"
              id="Cart_icon"
              data-quantity="0"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavbarTwo;
