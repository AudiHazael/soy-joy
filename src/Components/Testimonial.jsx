import React from "react";
import reviews from "./Review";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonials() {
  const total = reviews.length;
  const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / total;

  // JSON-LD Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SoyJoy",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avgRating.toFixed(1),
      reviewCount: total,
    },
    review: reviews.slice(0, 5).map((r) => ({
      "@type": "Review",
      author: r.author,
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
      },
      reviewBody: r.body,
    })),
  };

  return (
    <section className="mx-auto py-8 px-4">
      <motion.h2
        className="text-2xl font-bold mb-6 text-zinc-950"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        What Clients Say
      </motion.h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          768: { slidesPerView: 1 },
        }}
        className="pb-8"
      >
        {reviews.map((r, i) => (
          <SwiperSlide key={i}>
            <motion.div
              className="p-6 flex flex-col w-full h-auto bg-white rounded-sm shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 hover:shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <p className="text-yellow-500 text-lg mb-2">
                {"★".repeat(r.rating)}
                {"☆".repeat(5 - r.rating)}
              </p>
              <p className="text-zinc-950 flex-grow">“{r.body}”</p>

              {/* Avatar + Author */}
              <div className="flex items-center mt-4">
                {r.avatar && (
                  <img
                    src={r.avatar}
                    alt={r.author}
                    className="w-10 h-10 rounded-full object-cover mr-3 border border-white/20"
                  />
                )}
                <span className="text-sm text-zinc-950">– {r.author}</span>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}
