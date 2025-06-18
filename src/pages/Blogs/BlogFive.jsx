import React from 'react';
import { Helmet } from "react-helmet-async";
import "../../styles/styles.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "../../components/footer";
import Navbar from "../../components/Navbar";

function BlogFive() {
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
            Go Green with SoyJoy: The Planet-Friendly Choice
          </h1>

          {/* <HeroButton /> */}
        </div>
      </section>

      <section className="blog-content mt-5 mb-5">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-10 col-12">
              {/* <h2>
                <i>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Asperiores, beatae quia. Voluptates perferendis ipsam nulla
                  sapiente aliquam amet voluptatem corporis!
                </i>
              </h2> */}
              <p>
                As we strive to live more sustainably, every choice we make
                counts – including what we put in our bodies. Did you know that
                SoyJoy is a planet-friendly alternative to dairy milk? Let's
                explore the environmental benefits of choosing SoyJoy:
              </p>
              <h3>The Environmental Impact of Dairy Milk</h3>
              <ul>
                <li>
                  <strong>Water Usage:</strong> Dairy milk production requires
                  significant amounts of water, contributing to water scarcity
                  and depletion.
                </li>
                <li>
                  <strong>Land Use:</strong> Large areas of land are dedicated
                  to dairy farming, leading to deforestation and habitat loss.
                </li>
                <li>
                  <strong>Greenhouse Gas Emissions:</strong> Dairy farming is a
                  notable source of greenhouse gas emissions, contributing to
                  climate change.
                </li>
              </ul>
              <img src="" alt="blog image" />
              <h4>The Sustainable Benefits of SoyJoy</h4>
              <ul>
                <li>
                  Lower Water Footprint: Soybean cultivation requires less water
                  compared to dairy farming, making SoyJoy a more
                  water-efficient choice.
                </li>
                <li>
                  Reduced Land Use: Soybeans can be grown on existing
                  agricultural land, reducing the need for additional land
                  conversion and preserving natural habitats.
                </li>
                <li>
                  Lower Greenhouse Gas Emissions: SoyJoy production generates
                  fewer greenhouse gas emissions than dairy milk, supporting a
                  cleaner environment.
                </li>
              </ul>

              <h4>Make the Switch to SoyJoy</h4>
              <p>
                By choosing SoyJoy, you're not only nourishing your body but
                also contributing to a more sustainable future. Join the
                movement towards a greener tomorrow:
              </p>
              <ul>
                <li>
                  <strong>Delicious and Nutritious</strong> : Enjoy SoyJoy's
                  range of flavors and reap the benefits of its high-quality
                  protein and essential nutrients.
                </li>
                <li>
                  <strong>Planet-Friendly:</strong> Support sustainable
                  agriculture and reduce your environmental footprint with
                  SoyJoy.
                </li>
              </ul>

              <p>
                <strong>Join the SoyJoy Family</strong> <br />
                Ready to make a positive impact on the planet? Choose SoyJoy for
                a greener future and a healthier you!
                <br /> <br />
                <strong>Get Your SoyJoy Fix Today!</strong> <br />
                Find SoyJoy near you in convenient bottles and sachets, and
                start enjoying the delicious taste and environmental benefits of
                our soy milk. Together, let's create a more sustainable future!
              </p>
              <h6>
                Sip, savor, and thrive with SoyJoy – the planet-friendly choice!
              </h6>
            </div>
            <div className="col-md-2 col-12">
              <h4></h4>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default BlogFive