import React from "react";
import "../styles/styles.scss";

const AccordionFlush = () => {
  return (
    <section className="faq pt-4 pb-4">
      <div className="container">
        <h4 className="text-left mb-4">Frequently Asked Questions</h4>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          {/* Item 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne">
                What is soy milk?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                Soy milk is a plant-based drink made from soybeans, often used
                as a dairy milk alternative due to its rich nutritional content
                and creamy texture.
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo">
                Is soy milk suitable for people with lactose intolerance?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                Yes, soy milk is lactose-free and is a great option for
                individuals with lactose intolerance or those looking to avoid
                dairy products.
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree">
                What are the health benefits of soy milk?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                Soy milk is rich in protein, low in saturated fat, and contains
                essential vitamins and minerals.
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour">
                Is prior experience needed?
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFour"
              data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                No, you can start with zero experience. Our training is
                structured for all levels.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccordionFlush;
