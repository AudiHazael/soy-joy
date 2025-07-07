import React from "react";
import AccordionFlush from "components/accordion";
import Navbar from "components/Navbar";
import Header from "components/Header";
import Footer from "components/footer";

function Faq() {
  return (
    <div>
      <Navbar />
      <Header title="SOYJOY" subtitle=" Frequently Asked Questions" text="" />
      <AccordionFlush />
      <Footer />
    </div>
  );
}

export default Faq;
