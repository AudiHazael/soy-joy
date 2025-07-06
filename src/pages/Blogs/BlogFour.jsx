import React from "react";
import { Helmet } from "react-helmet-async";
import "../../styles/styles.scss";
import "../../styles/blogstyle.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "components/footer";
import Navbar from "components/Navbar";

function BlogFour() {
  return (
    <div>
      <Helmet>
        <title>SoyJoy | Sip Pure Joy with Soy </title>
        <meta name="description" content="" />
        <link rel="canonical" href="https://soy-joy.vercel.app/.../" />
      </Helmet>

      <Navbar />

      <section className="hero heroTwo">
        <div className="container  d-flex flex-column justify-content-center align-items-center">
          <h1 data-aos="fade-down" data-aos-duration="1000">
            Unlock the Power of SoyJoy: Revolutionize Your Daily Nutrition!
          </h1>

          {/* <HeroButton /> */}
        </div>
      </section>

      <section className="blog-content mt-5 mb-5">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-10 col-12">
              <p>
                Are you ready to supercharge your diet with a delicious and
                nutritious twist? Look no further than SoyJoy milk! Packed with
                an impressive array of essential nutrients, SoyJoy is the
                ultimate game-changer for your daily nutrition.
              </p>
              <h3>The Powerhouse Nutrients of SoyJoy</h3>
              <img src="" alt="blog image" />

              <ul>
                <li>
                  <strong> Powerhouse Protein:</strong> SoyJoy milk is rich in
                  high-quality protein that supports muscle health, satiety, and
                  overall well-being.
                </li>
                <li>
                  <strong>Brain-Boosting B Vitamins:</strong> Our milk is
                  fortified with B vitamins that support cognitive function,
                  energy production, and a healthy nervous system.
                </li>
                <li>
                  <strong>Bone-Strengthening Minerals:</strong> SoyJoy milk
                  contains calcium, magnesium, and potassium – essential
                  minerals that support strong bones and teeth.
                </li>
                <li>
                  <strong>Immune Support:</strong> With vitamin D, SoyJoy milk
                  helps support immune function and overall health
                </li>
              </ul>
              <h3>Why Choose SoyJoy? </h3>
              <ul>
                <li>
                  Dairy-Free Upgrade: Perfect for those with lactose intolerance
                  or a vegan lifestyle.
                </li>
                <li>
                  Delicious and Versatile: Enjoy SoyJoy milk on its own, in
                  smoothies, or as a dairy substitute in your favorite recipes.
                </li>
                <li>
                  Nutritious and Wholesome: Made with high-quality soybeans and
                  fortified with essential nutrients.
                </li>
              </ul>
              <p>
                <strong>Upgrade Your Nutrition with SoyJoy</strong> <br />
                Ready to experience the benefits of SoyJoy milk for yourself?
                Join the SoyJoy family today and discover a world of creamy
                bliss and nutritious goodness!
                <br />
                <br />
                <strong>Get Your SoyJoy Fix Today!</strong> <br />
                Find SoyJoy near you in convenient bottles and sachets, and
                start enjoying the delicious taste and incredible health
                benefits of our soy milk. Your body (and taste buds) will thank
                you!
              </p>
              <h6>Sip, savor, and thrive with SoyJoy!</h6>
            </div>
            <div className="col-md-2 col-12">
              <h4></h4>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BlogFour;
