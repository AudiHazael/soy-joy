import React from "react";
import { Helmet } from "react-helmet-async";
import "../../styles/styles.scss";
import '../../styles/blogstyle.scss';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "../../components/footer";
import Navbar from "../../components/Navbar";

function BlogTwo() {
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
            Unlocking the Natural Benefits of SoyJoy
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
                At SoyJoy, we're passionate about sharing the goodness of soy
                milk with our community. One of the many reasons we love SoyJoy
                is its incredible natural benefits. Let's dive into some of the
                amazing advantages of choosing SoyJoy:
              </p>
              <h3>Lactose-Free Delight</h3>
              <p>
                SoyJoy is naturally lactose-free, making it the perfect fit for:
              </p>
              <img src="" alt="blog image" />

              <ul>
                <li>
                  <strong>Lactose Intolerant Individuals:</strong> Say goodbye
                  to discomfort and hello to delicious, creamy soy milk.
                </li>
                <li>
                  <strong>Vegans: </strong> Enjoy a plant-based alternative
                  that's free from animal products.
                </li>
              </ul>
              <p>
                <strong>Heart-Healthy Choice</strong> <br />
                SoyJoy is also low in saturated fat, which means you can:
                <ul>
                  <li>
                    Sip with Confidence: Enjoy your favorite SoyJoy flavors
                    without worrying about compromising your heart health.
                  </li>
                  <li>
                    Support a Healthier Heart: Make SoyJoy a part of your
                    balanced diet and lifestyle.
                  </li>
                </ul>
                <br />
                <strong>More Reasons to Love SoyJoy </strong>
                <ul>
                  <li>
                    <strong>Rich in Protein:</strong>
                    SoyJoy is an excellent source of plant-based protein to keep
                    you energized and satisfied.
                  </li>
                  <li>
                    <strong>Delicious Flavors:</strong> From classic vanilla to
                    decadent chocolate, our flavors will tantalize your taste
                    buds.
                  </li>
                </ul>
              </p>
              <p>
                <strong>Join the SoyJoy Family </strong>
                Ready to experience the natural benefits of SoyJoy for yourself?
                Join our community today and discover a world of creamy bliss!{" "}
                <br />
                <br />
                <strong>Get Your SoyJoy Fix Today!</strong>
                Find SoyJoy near you in convenient bottles and sachets, and
                start enjoying the delicious taste and incredible health
                benefits of our soy milk. Your body (and taste buds) will thank
                you!
              </p>
              <h5>Sip Pure Joy with Soy!</h5>
              <h6>𝑬𝒍𝒎𝒐𝒏𝒅 𝑰𝒔𝒂𝒊𝒂𝒉, 𝑪𝑬𝑶 𝑺𝒐𝒚𝑱𝒐𝒚</h6>
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

export default BlogTwo;
