// Converted Flavours.jsx from Bootstrap to Tailwind CSS
import React from "react";

function Flavours() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-2">
          Our Delicious Varieties
        </h2>
        <p className="text-center text-gray-600 mb-10">
          From creamy classics to exciting flavors, we have something for
          everyone!
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card: Classic Soy Milk */}
          <div className="bg-white rounded-sm shadow-md overflow-hidden">
            <img
              src="/sojoy-classic.png"
              alt="Classic Soy Milk"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-md font-semibold mb-2">SoyJoy Classic</h3>
              <p className="text-gray-600 text-sm">
                The rich, creamy soy goodness for everyday delight.
              </p>
            </div>
          </div>

          {/* Card: Vanilla Soy Milk */}
          <div className="bg-white rounded-sm shadow-md overflow-hidden">
            <img
              src="/soyjoy-vanilla2.png"
              alt="Vanilla Soy Milk"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-md font-semibold mb-2">SoyJoy Vanilla</h3>
              <p className="text-gray-600 text-sm">
                A sweet and aromatic twist for a smooth, delightful experience.
              </p>
            </div>
          </div>

          {/* Card: Chocolate Soy Milk */}
          <div className="bg-white rounded-sm shadow-md overflow-hidden">
            <img
              src="/soyjoy-chocolate.png"
              alt="Chocolate Soy Milk"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-md font-semibold mb-2">SoyJoy Chocolate</h3>
              <p className="text-gray-600 text-sm">
                Rich chocolate meets nutritious soy milk - indulge with SoyJoy
                Chocolate!
              </p>
            </div>
          </div>

          {/* Card: SoyJoy Coconut */}
          <div className="bg-white rounded-sm shadow-md overflow-hidden">
            <img
              src="/soyjoy-coconut.png"
              alt="Coconut Soy Milk"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-md font-semibold mb-2">SoyJoy Coconut</h3>
              <p className="text-gray-600 text-sm">
                Refreshing coconut flavor in nutritious soy milk
              </p>
            </div>
          </div>

          {/* Card: SoyJoy Peach */}
          <div className="bg-white rounded-sm shadow-md overflow-hidden">
            <img
              src="/soyjoy-peach.png"
              alt="Peach Soy Milk"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-md font-semibold mb-2">SoyJoy Peach</h3>
              <p className="text-gray-600 text-sm">
                Sweet peach flavor in refreshing soy milk.
              </p>
            </div>
          </div>

          {/* Card: SoyJoy Strawberry */}
          <div className="bg-white rounded-sm shadow-md overflow-hidden">
            <img
              src="/soyjoy-strawberry2.png"
              alt="Strawberry Soy Milk"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-md font-semibold mb-2">SoyJoy Strawberry</h3>
              <p className="text-gray-600 text-sm">
                Berry delightful, sweet & fruity flavor in soy milk.
              </p>
            </div>
          </div>

          {/* Card: SoyJoy Almond */}
          <div className="bg-white rounded-sm shadow-md overflow-hidden">
            <img
              src="/soyjoy-almond.png"
              alt="Almond Soy Milk"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-md font-semibold mb-2">SoyJoy Almond</h3>
              <p className="text-gray-600 text-sm">
                Smooth nutty goodness in soy milk.
              </p>
            </div>
          </div>

          {/* Card: SoyJoy Hazelnut */}
          <div className="bg-white rounded-sm shadow-md overflow-hidden">
            <img
              src="/soyjoy-hazelnut.png"
              alt="Hazelnut Soy Milk"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-md font-semibold mb-2">SoyJoy Hazelnut</h3>
              <p className="text-gray-600 text-sm">
                Nutty perfection, rich hazelnut flavor in soy milk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Flavours;
