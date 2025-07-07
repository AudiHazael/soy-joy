import React from "react";
import Navbar from "components/Navbar";
import Header from "components/Header";
import Footer from "components/footer";

function Gallery() {
  return (
    <div>
      <Navbar />
      <Header
        title="SOYJOY"
        subtitle=" Our Gallery"
        text="Moments Captured, Stories Told"
      />
      <Footer />
    </div>
  );
}

export default Gallery;
