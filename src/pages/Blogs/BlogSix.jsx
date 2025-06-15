import React from "react";
import { Helmet } from "react-helmet-async";
import "../../styles/styles.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "../../components/footer";
import Navbar from "../../components/Navbar";

function BlogSix() {
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
            𝗧𝗵𝗲 𝗕𝗶𝗿𝘁𝗵 𝗼𝗳 𝗦𝗼𝘆𝗝𝗼𝘆: 𝗔 𝗝𝗼𝘂𝗿𝗻𝗲𝘆 𝗼𝗳 𝗖𝗼𝗺𝗽𝗮𝘀𝘀𝗶𝗼𝗻 𝗮𝗻𝗱 𝗣𝘂𝗿𝗽𝗼𝘀𝗲
          </h1>

          {/* <HeroButton /> */}
        </div>
      </section>

      <section className="blog-content mt-5 mb-5">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-10 col-12">
              <h2>
                <i>
                  SoyJoy offers a range of soy milk products, including
                  delicious flavors like vanilla, chocolate, coconut, and
                  strawberry, and more, empowering people to make informed
                  choices about their health.
                </i>
              </h2>
              <p>
                As I saw the impact of debilitating diseases like obesity,
                cancer, and cognitive decline, as well as struggles with weight
                management, digestive health issues, and other health concerns,
                on individuals and communities, I felt an overwhelming sense of
                responsibility to make a difference. I had initially aspired to
                study medicine, but fate led me down a different path.
                <br />
                <br />
                During my NYSC days, I encountered a lady, a fellow corps member
                from Benue State, Nigeria, who sold powdered soy milk. Her story
                of being wronged by a business partner sparked an idea. I
                realized the potential of soy milk, in both powdered and liquid
                forms, to transform lives. Its numerous health benefits
                resonated deeply:
              </p>

              <ul>
                <li>Weight management </li>
                <li>Cancer prevention (breast, prostate, colon)</li>
                <li>Improved cognitive function</li>
                <li>Enhanced immune system</li>
                <li>Heart health</li>
                <li>Digestive health</li>
                <li>Menopause relief</li>
                <li>Obesity management, amongst others</li>
              </ul>
              <div className="row">
                <div className="col-md-6">
                  <img src="" alt="blog image" />
                </div>
                <div className="col-md-6">
                  {/* <p>
                    <strong>
                      Our promise is simple: Sip Pure Joy With Soy.
                    </strong>
                  </p> */}
                </div>
              </div>
              <p>
                These benefits fueled my passion. In 2017, my journey with what
                would become SoyJoy began. Initially named Elmond Soy Milk, this
                venture was driven by a deep desire to help people struggling
                with various health issues. That same year, I applied for the
                YouWin Connect grant, beating odds among 2.2 million applicants.
                Although I didn't receive the funding, my determination remained
                unwavering.
                <br />
                <br />
                I continued to reflect, seek guidance, and stay determined.
                Years later, in 2024, my business partners and shareholders,
                Jovita Sheppard and Juanita Francis, suggested the name
                "SoyJoy," reflecting the joy and nourishment our products bring.
                <br />
                <br />
                Today, SoyJoy offers a range of soy milk products, including
                delicious flavors like vanilla, chocolate, coconut, and
                strawberry, and more, empowering people to make informed choices
                about their health. Our promise is simple: Sip Pure Joy With
                Soy. My journey has been guided by compassion, perseverance, and
                a commitment to making a difference. SoyJoy is more than just a
                business – it's a mission to empower people with nutritious,
                wholesome products.
              </p>
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

export default BlogSix;
