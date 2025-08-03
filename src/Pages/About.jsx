import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";

function About() {
  return (
    <div>
      <Navbar />

      <Hero
        className="overflow-hidden"
        title="SOYJOY"
        subtitle="About Us"
        text="Know more about us and what we do"
      />

      <section className="mt-5 mb-5">
        <div className="max-w-7xl mx-auto px-4 container d-flex flex-column justify-content-center align-items-center text-center">
          <h4>A Wide Variety of Plant-Based Milk</h4>
          <p>
            Plant based milk is rich in vitamins and minerals, and low in
            cholesterol. It is also advised to people who have a slow digestive
            system.
          </p>
        </div>
      </section>

      <section className="pt-5 pb-5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="w-full md:w-1/3">
              <img src="..." alt="about us image" className="w-full h-auto" />
            </div>
            <div className="w-full md:w-2/3">
              <h4 className="text-xl font-semibold mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h4>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis dolores ipsa nihil voluptates voluptatibus eos
                aspernatur repellat quibusdam ullam quae, dicta quod, molestias
                distinctio dolorum adipisci ex eum vel ipsum blanditiis nemo
                natus officiis sunt assumenda. Laboriosam aspernatur, possimus
                earum omnis odio magnam! Repudiandae, debitis. Pariatur maxime
                quod deserunt tempore.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
            <div className="w-full lg:w-5/12">
              <img src="" alt="Image" className="w-full h-auto object-cover" />
            </div>

            <div className="w-full lg:w-5/12 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
                SoyJoy Milk <br /> Multi-Flavour, Plant-Based Milk
              </h2>
              <p className="mt-4 text-base md:text-lg">
                The Perfect Choice for Everyone <br />
                <strong>Sip Pure Joy with Soy</strong>
              </p>

              <div className="mt-6 flex justify-center items-center gap-6 flex-wrap">
                <div className="bg-white shadow-sm rounded-lg p-10 w-40 h-40"></div>
                <div className="bg-white shadow-sm rounded-lg p-10 w-40 h-40"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}

export default About;
