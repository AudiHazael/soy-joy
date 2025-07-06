import React from "react";
import Header from "components/Header";
import Navbar from "components/Navbar";
import CTA from "components/CTA";
import Footer from "components/footer";
import "../styles/shop-styles.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Shop2() {
  return (
    <div>
      <Navbar />

      <Header
        title="SOYJOY"
        subtitle=" Sip Pure Joy with Soy"
        text="Experience the rich, creamy taste of health and happiness in
                every sip."
        showShop={false}
      />

      <section className="categories pt-5 pb-5">
        <div className="container">
          <h2 className="mb-4">Popular Categories</h2>
          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            spaceBetween={20}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}>
            <SwiperSlide>
              <div className="card h-100 shadow-sm">
                <img
                  src="/images/shop-peach.jpeg"
                  className="card-img-top"
                  alt="soyjoy peach"
                />
                <div className="card-body">
                  <div className="card-title">
                    <div className="d-flex justify-content-between align-itens center mt-2">
                      <h5 className="card-title">Peach SoyJoy</h5>
                      <p>
                        <span>$97.99</span>
                      </p>
                    </div>
                  </div>
                  <div className="card-text">
                    <div className="card_text_icon">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                    </div>
                    <div class="add_to_cart d-flex justify-content-between align-items-center">
                      <div class="cart_tag">
                        <span>Add to cart</span>
                        <div class="point"></div>
                      </div>
                      <i class="bx bxs-shopping-bag add_cart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card h-100 shadow-sm">
                <img
                  src="/images/shop-almond.jpeg"
                  className="card-img-top"
                  alt="soyjoy almond"
                />
                <div className="card-body">
                  <div className="card-title">
                    <div className="d-flex justify-content-between align-itens center mt-2">
                      <h5 className="card-title">Peach SoyJoy</h5>
                      <p>
                        <span>$97.99</span>
                      </p>
                    </div>
                  </div>
                  <div className="card-text">
                    <div className="card_text_icon">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                    </div>
                    <div class="add_to_cart d-flex justify-content-between align-items-center">
                      <div class="cart_tag">
                        <span>Add to cart</span>
                        <div class="point"></div>
                      </div>
                      <i class="bx bxs-shopping-bag add_cart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card h-100 shadow-sm">
                <img
                  src="/images/shop-chocolate.jpeg"
                  className="card-img-top"
                  alt="soyjoy chocolate"
                />
                <div className="card-body">
                  <div className="card-title">
                    <div className="d-flex justify-content-between align-itens center mt-2">
                      <h5 className="card-title">Peach SoyJoy</h5>
                      <p>
                        <span>$97.99</span>
                      </p>
                    </div>
                  </div>
                  <div className="card-text">
                    <div className="card_text_icon">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                    </div>
                    <div class="add_to_cart d-flex justify-content-between align-items-center">
                      <div class="cart_tag">
                        <span>Add to cart</span>
                        <div class="point"></div>
                      </div>
                      <i class="bx bxs-shopping-bag add_cart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card h-100 shadow-sm">
                <img
                  src="/images/soyjoy-strawberry3.png"
                  className="card-img-top"
                  alt="soyjoy strawberry"
                />
                <div className="card-body">
                  <div className="card-title">
                    <div className="d-flex justify-content-between align-itens center mt-2">
                      <h5 className="card-title">Peach SoyJoy</h5>
                      <p>
                        <span>$97.99</span>
                      </p>
                    </div>
                  </div>
                  <div className="card-text">
                    <div className="card_text_icon">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                    </div>
                    <div class="add_to_cart d-flex justify-content-between align-items-center">
                      <div class="cart_tag">
                        <span>Add to cart</span>
                        <div class="point"></div>
                      </div>
                      <i class="bx bxs-shopping-bag add_cart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card h-100 shadow-sm">
                <img
                  src="/images/shop-peach.jpeg"
                  className="card-img-top"
                  alt="soyjoy peach"
                />
                <div className="card-body">
                  <div className="card-title">
                    <div className="d-flex justify-content-between align-itens center mt-2">
                      <h5 className="card-title">Peach SoyJoy</h5>
                      <p>
                        <span>$97.99</span>
                      </p>
                    </div>
                  </div>
                  <div className="card-text">
                    <div className="card_text_icon">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                    </div>
                    <div class="add_to_cart d-flex justify-content-between align-items-center">
                      <div class="cart_tag">
                        <span>Add to cart</span>
                        <div class="point"></div>
                      </div>
                      <i class="bx bxs-shopping-bag add_cart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="products pb-5 pt-5">
        <div className="container">
          <h3 className="pb-2">All Products</h3>
          <div className="row row-cols-1 row row-cols-2 row-cols-md-2 row-cols-lg-4 g-4 justify-content-center">
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="/images/shop-peach.jpeg"
                  className="card-img-top"
                  alt="soyjoy peach"
                />
                <div className="card-body">
                  <div className="card-title">
                    <div className="d-flex justify-content-between align-itens center mt-2">
                      <h5 className="card-title">Peach SoyJoy</h5>
                      <p>
                        <span>$97.99</span>
                      </p>
                    </div>
                  </div>
                  <div className="card-text">
                    <div className="card_text_icon">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                    </div>
                    <div class="add_to_cart d-flex justify-content-between align-items-center">
                      <div class="cart_tag">
                        <span>Add to cart</span>
                        <div class="point"></div>
                      </div>
                      <i class="bx bxs-shopping-bag add_cart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="/images/shop-almond.jpeg"
                  className="card-img-top"
                  alt="soyjoy almond"
                />
                <div className="card-body">
                  <div className="card-title">
                    <div className="d-flex justify-content-between align-itens center mt-2">
                      <h5 className="card-title">Peach SoyJoy</h5>
                      <p>
                        <span>$97.99</span>
                      </p>
                    </div>
                  </div>
                  <div className="card-text">
                    <div className="card_text_icon">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                    </div>
                    <div class="add_to_cart d-flex justify-content-between align-items-center">
                      <div class="cart_tag">
                        <span>Add to cart</span>
                        <div class="point"></div>
                      </div>
                      <i class="bx bxs-shopping-bag add_cart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="/images/shop-chocolate.jpeg"
                  className="card-img-top"
                  alt="soyjoy chocolate"
                />
                <div className="card-body">
                  <div className="card-title">
                    <div className="d-flex justify-content-between align-itens center mt-2">
                      <h5 className="card-title">Peach SoyJoy</h5>
                      <p>
                        <span>$97.99</span>
                      </p>
                    </div>
                  </div>
                  <div className="card-text">
                    <div className="card_text_icon">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                    </div>
                    <div class="add_to_cart d-flex justify-content-between align-items-center">
                      <div class="cart_tag">
                        <span>Add to cart</span>
                        <div class="point"></div>
                      </div>
                      <i class="bx bxs-shopping-bag add_cart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="/images/soyjoy-strawberry3.png"
                  className="card-img-top"
                  alt="soyjoy strawberry"
                />
                <div className="card-body">
                  <div className="card-title">
                    <div className="d-flex justify-content-between align-itens center mt-2">
                      <h5 className="card-title">Peach SoyJoy</h5>
                      <p>
                        <span>$97.99</span>
                      </p>
                    </div>
                  </div>
                  <div className="card-text">
                    <div className="card_text_icon">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                    </div>
                    <div class="add_to_cart d-flex justify-content-between align-items-center">
                      <div class="cart_tag">
                        <span>Add to cart</span>
                        <div class="point"></div>
                      </div>
                      <i class="bx bxs-shopping-bag add_cart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="/images/shop-peach.jpeg"
                  className="card-img-top"
                  alt="soyjoy peach"
                />
                <div className="card-body">
                  <div className="card-title">
                    <div className="d-flex justify-content-between align-itens center mt-2">
                      <h5 className="card-title">Peach SoyJoy</h5>
                      <p>
                        <span>$97.99</span>
                      </p>
                    </div>
                  </div>
                  <div className="card-text">
                    <div className="card_text_icon">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                    </div>
                    <div class="add_to_cart d-flex justify-content-between align-items-center">
                      <div class="cart_tag">
                        <span>Add to cart</span>
                        <div class="point"></div>
                      </div>
                      <i class="bx bxs-shopping-bag add_cart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="/images/shop-almond.jpeg"
                  className="card-img-top"
                  alt="soyjoy almond"
                />
                <div className="card-body">
                  <div className="card-title">
                    <div className="d-flex justify-content-between align-itens center mt-2">
                      <h5 className="card-title">Peach SoyJoy</h5>
                      <p>
                        <span>$97.99</span>
                      </p>
                    </div>
                  </div>
                  <div className="card-text">
                    <div className="card_text_icon">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                    </div>
                    <div class="add_to_cart d-flex justify-content-between align-items-center">
                      <div class="cart_tag">
                        <span>Add to cart</span>
                        <div class="point"></div>
                      </div>
                      <i class="bx bxs-shopping-bag add_cart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="/images/shop-chocolate.jpeg"
                  className="card-img-top"
                  alt="soyjoy chocolate"
                />
                <div className="card-body">
                  <div className="card-title">
                    <div className="d-flex justify-content-between align-itens center mt-2">
                      <h5 className="card-title">Peach SoyJoy</h5>
                      <p>
                        <span>$97.99</span>
                      </p>
                    </div>
                  </div>
                  <div className="card-text">
                    <div className="card_text_icon">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                    </div>
                    <div class="add_to_cart d-flex justify-content-between align-items-center">
                      <div class="cart_tag">
                        <span>Add to cart</span>
                        <div class="point"></div>
                      </div>
                      <i class="bx bxs-shopping-bag add_cart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="/images/soyjoy-strawberry3.png"
                  className="card-img-top"
                  alt="soyjoy strawberry"
                />
                <div className="card-body">
                  <div className="card-title">
                    <div className="d-flex justify-content-between align-itens center mt-2">
                      <h5 className="card-title">Peach SoyJoy</h5>
                      <p>
                        <span>$97.99</span>
                      </p>
                    </div>
                  </div>
                  <div className="card-text">
                    <div className="card_text_icon">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                    </div>
                    <div class="add_to_cart d-flex justify-content-between align-items-center">
                      <div class="cart_tag">
                        <span>Add to cart</span>
                        <div class="point"></div>
                      </div>
                      <i class="bx bxs-shopping-bag add_cart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="img-gallery pt-5 pb-5">
        <div className="container p-0 m-0">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 col-12">
              <img src="/images/pro-images/1.png" alt="" />
            </div>
            <div className="col-md-6 col-12">
              <div className="row row-cols-1 row row-cols-2 row-cols-md-2 row-cols-lg-4 g-4 justify-content-center">
                <div className="col-8">
                  <img src="/images/pro-images/2.png" alt="" />
                </div>
                <div className="col-4">
                  <img src="/images/pro-images/3.png" alt="" />
                </div>
              </div>
              <div className="row row-cols-1 row row-cols-2 row-cols-md-2 row-cols-lg-4 g-4 justify-content-center">
                <div className="col-4">
                  <img src="/images/pro-images/4.png" alt="" />
                </div>
                <div className="col-8">
                  <img src="/images/pro-images/5.png" alt="" />
                  <img src="/images/pro-images/6.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <CTA />

      <Footer />
    </div>
  );
}

export default Shop2;
