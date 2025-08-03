import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Mary Spencer",
    image: "https://img.daisyui.com/images/profile/demo/superperson@192.webp",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repudiandae nam excepturi odit earum illo sit incidunt perspiciatis illum.",
  },
  {
    name: "John Doe",
    image: "https://img.daisyui.com/images/profile/demo/superperson@192.webp",
    message:
      "Doloribus voluptas hic, quae placeat molestiae nemo nisi, consequatur ipsa eveniet quos libero beatae exercitationem adipisci?",
  },
  {
    name: "Lisa Ray",
    image: "https://img.daisyui.com/images/profile/demo/superperson@192.webp",
    message:
      "Magnam velit repellendus sunt sequi excepturi. Id molestiae harum quaerat ipsa maiores ad natus.",
  },
];

export default function Testimonials() {
  return (
    <section className="md:p-6 ">
      <div
        className="max-w-6xl mx-auto "
        data-aos="fade"
        data-aos-easing="ease-in-out"
        data-aos-delay="500"
      >
        <h3 className="text-2xl font-bold mb-8 text-gray-800">Our Customers</h3>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000 }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          className="w-full custom-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="w-full max-w-3xl mx-auto bg-white rounded-sm shadow-lg text-left transition-transform transform hover:scale-105 duration-300 h-1/2">
                <div className="flex items-start gap-4 px-6 py-12 w-fit">
                  <div className="w-16 h-16">
                    <img
                      src={testimonial.image}
                      alt={`Avatar of ${testimonial.name}`}
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-gray-700 mb-3 text-sm">
                      {testimonial.message}
                    </p>
                    <h5 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
