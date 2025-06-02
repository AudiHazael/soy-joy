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
                What is SoyJoy?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                SoyJoy is a delicious and nutritious soymilk beverage made from
                high-quality soybeans. It's a great alternative to traditional
                dairy milk, offering a range of benefits for those looking for a
                plant-based diet. SoyJoy is naturally lactose-free, low in
                saturated fat, and rich in nutrients, making it an excellent
                choice for health-conscious individuals..
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
                What is Soy Milk?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                Soymilk is a plant-based beverage made from soybeans and water.
                It's a popular dairy milk alternative, often fortified with
                nutrients like calcium, vitamins, and minerals to match the
                nutritional profile of traditional milk. Soymilk is naturally
                lactose-free, cholesterol-free, and low in saturated fat, making
                it a great option for those with dietary restrictions or
                preferences.
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
                Is soy milk suitable for people with lactose intolerance?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                Yes, soy milk is an excellent option for people with lactose
                intolerance. Since soy milk is naturally lactose-free, it
                doesn't contain the lactose sugar found in dairy milk that can
                cause digestive issues for those with lactose intolerance. Soy
                milk provides a delicious and comfortable alternative, allowing
                individuals with lactose intolerance to enjoy a milk-like
                beverage without the discomfort.
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
                What are the health benefits of soymilk?
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFour"
              data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                Soymilk offers several health benefits, including:
                <ul>
                  <li>
                    Lactose-free, making it suitable for those with lactose
                    intolerance
                  </li>
                  <li>Low in saturated fat, supporting heart health</li>
                  <li>
                    High in protein, helping with muscle growth and repair
                  </li>
                  <li>
                    Rich in isoflavones, which may help support bone health
                  </li>
                  <li>
                    Often fortified with calcium, vitamins, and minerals to
                    match the nutritional profile of dairy milk
                  </li>
                  <li>May help lower cholesterol levels</li>
                  <li>
                    Supports weight management due to its high protein and fiber
                    content
                  </li>
                  <li>
                    May help reduce the risk of certain cancers, such as
                    prostate and breast cancer
                  </li>
                  <li>
                    Supports healthy digestion due to its prebiotic properties
                  </li>
                  <li>Can help promote healthy skin and hair</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Item 5 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive">
                Is SoyJoy suitable for vegans?
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFive"
              data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                Yes, SoyJoy is suitable for vegans! As a plant-based soymilk
                beverage, SoyJoy is made from soybeans and does not contain any
                animal-derived ingredients, making it a great option for those
                following a vegan lifestyle.
              </div>
            </div>
          </div>

          {/* Item 6 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSix"
                aria-expanded="false"
                aria-controls="flush-collapseSix">
                Does SoyJoy contain any artificial preservatives or additives?
              </button>
            </h2>
            <div
              id="flush-collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingSix"
              data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                No, SoyJoy is made with high-quality, all-natural ingredients
                and does not contain any artificial preservatives, flavors, or
                additives. We're committed to providing a wholesome and
                delicious beverage that fits into a healthy lifestyle.
              </div>
            </div>
          </div>

          {/* Item 7 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingSeven">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSeven"
                aria-expanded="false"
                aria-controls="flush-collapseSeven">
                What is the shelf life of SoyJoy?
              </button>
            </h2>
            <div
              id="flush-collapseSeven"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingSeven"
              data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                <div>
                  <h6>POWDERED SOYJOY:</h6> <br /> <strong>Sealed:</strong>
                  SoyJoy powder typically lasts for 6-12 months when stored in a
                  cool, dry place, away from direct sunlight and moisture. Check
                  the packaging for the "Best By" date or SoyJoy's guidelines.
                  <br />
                  <strong>Opened:</strong>Once opened, store SoyJoy powder in an
                  airtight container to maintain freshness. It can last for 1-3
                  months when stored properly, but it's recommended to use
                  within a month for optimal flavor and nutrition.
                </div>
                <div>
                  <h6>LIQUID SOYJOY:</h6> <br /> <strong>Sealed:</strong>
                  SoyJoy liquid typically lasts for several months when stored
                  in the refrigerator, usually around 7-10 days past the "Best
                  By" date, or as indicated by SoyJoy. Some UHT processed SoyJoy
                  can have a longer shelf life (up to 6-9 months) when stored at
                  room temperature; check the packaging for specific guidelines.
                  <br />
                  <strong>Opened:</strong>Once opened, consume SoyJoy liquid
                  within 3-5 days when stored in the refrigerator at a
                  consistent temperature below 40°F (4°C). Always check the
                  product for any visible signs of spoilage before consumption,
                  such as off smells, slimy texture, or mold.
                </div>
              </div>
            </div>
          </div>

          {/* Item 8 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingEight">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseEight"
                aria-expanded="false"
                aria-controls="flush-collapseEight">
                Can I use SoyJoy in cooking and baking?
              </button>
            </h2>
            <div
              id="flush-collapseEight"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingEight"
              data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                SoyJoy's neutral flavor and versatility make it an excellent
                choice for various culinary applications. Get creative and enjoy
                experimenting with SoyJoy in your favorite recipes! These ideas
                should inspire you to get creative with SoyJoy in your kitchen.
                You can check out some recipee suggestions
              </div>
            </div>
          </div>

          {/* Item 9 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingNine">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseNine"
                aria-expanded="false"
                aria-controls="flush-collapseNine">
                Is SoyJoy gluten-free?
              </button>
            </h2>
            <div
              id="flush-collapseNine"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingNine"
              data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                Yes, SoyJoy is gluten-free! SoyJoy products are made from
                high-quality soybeans and do not contain any gluten-containing
                ingredients, making them a great option for those with gluten
                intolerance or celiac disease who want to enjoy the nutritional
                benefits of SoyJoy. Always check the packaging for the latest
                certification or contact SoyJoy directly for more information.
              </div>
            </div>
          </div>

          {/* Item 10 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTen">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTen"
                aria-expanded="false"
                aria-controls="flush-collapseTen">
                How do I store SoyJoy after opening?
              </button>
            </h2>
            <div
              id="flush-collapseTen"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTen"
              data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                To maintain the quality and freshness of SoyJoy after opening,
                store it in the refrigerator at a consistent temperature below
                40°F (4°C). Make sure to:
                <ul>
                  <li>Seal the container tightly after each use</li>
                  <li>Keep it away from direct sunlight and heat sources</li>
                  <li>
                    Consume it within the recommended timeframe (usually 3-5
                    days)
                  </li>
                  <li>
                    Check for any visible signs of spoilage before consumption
                  </li>
                </ul>
                If you don't have access to refrigeration, consider the
                following alternatives:
                <ul>
                  <li>Consume SoyJoy immediately after opening</li>
                  <li>
                    Use aseptic containers that can withstand room temperature
                  </li>
                  <li>
                    Opt for Ultra-High Temperature (UHT) processed SoyJoy that
                    can be stored at room temperature
                  </li>
                </ul>
                By following these storage tips, you can enjoy your SoyJoy while
                maintaining its nutritional value and delicious taste!
              </div>
            </div>
          </div>

          {/* Item 11 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingEleven">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseEleven"
                aria-expanded="false"
                aria-controls="flush-collapseEleven">
                Can I consume SoyJoy if I'm allergic to soy?
              </button>
            </h2>
            <div
              id="flush-collapseEleven"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingEleven"
              data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                No, it's not recommended to consume SoyJoy if you're allergic to
                soy. SoyJoy is made from soybeans, and soy allergy sufferers may
                experience adverse reactions. Even though SoyJoy is carefully
                processed to minimize the beany flavor and aroma that some
                people might find off-putting, the soy protein remains a
                potential allergen. If you have a soy allergy, consider
                alternative products that are soy-free. Always consult with a
                healthcare professional or registered dietitian for personalized
                advice.
              </div>
            </div>
          </div>

          {/* Item 12 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwelve">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwelve"
                aria-expanded="false"
                aria-controls="flush-collapseTwelve">
                What are the different flavors of SoyJoy available?
              </button>
            </h2>
            <div
              id="flush-collapseTwelve"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwelve"
              data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                SoyJoy comes in a variety of delicious flavors! Some popular
                options include:
                <ul>
                  <li>Classic</li>
                  <li>Vanilla</li>
                  <li>Chocolate</li>
                  <li>Coconut</li>
                  <li>Strawbery</li>
                  <li>Peach</li>
                  <li>Almond</li>
                  <li>Hazelnut</li>
                  <li>Mango</li>
                  <li>And more!</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Item 13 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThirteen">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThirteen"
                aria-expanded="false"
                aria-controls="flush-collapseThirteen">
                Is SoyJoy fortified with calcium and vitamins?
              </button>
            </h2>
            <div
              id="flush-collapseThirteen"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThirteen"
              data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                Yes, SoyJoy is often fortified with essential nutrients like
                calcium, vitamins D, B12, and other vital vitamins and minerals
                such as vitamin A, vitamin E, iron, zinc, and more. These added
                nutrients can help support overall health and wellness, making
                SoyJoy a great option for those looking for a nutritious
                beverage. Check the label for specific details on fortification
                and the exact nutrients included.
              </div>
            </div>
          </div>

          {/* Item 14 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFourteen">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFourteen"
                aria-expanded="false"
                aria-controls="flush-collapseFourteen">
                Can children and pregnant women consume SoyJoy?
              </button>
            </h2>
            <div
              id="flush-collapseFourteen"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFourteen"
              data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                Yes, SoyJoy can be a nutritious option for children and pregnant
                women, providing essential nutrients like protein, calcium, and
                vitamins. However, it's always recommended to consult with a
                healthcare professional or registered dietitian before making
                any significant changes to their diet. They can help determine
                the best way to incorporate SoyJoy into their individual
                nutritional plans.
              </div>
            </div>
          </div>

          {/* Item 15 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFifteen">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFifteen"
                aria-expanded="false"
                aria-controls="flush-collapseFifteen">
                Can children and pregnant women consume SoyJoy?
              </button>
            </h2>
            <div
              id="flush-collapseFifteen"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFifteen"
              data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                Yes, SoyJoy can be a nutritious option for children and pregnant
                women, providing essential nutrients like protein, calcium, and
                vitamins. However, it's always recommended to consult with a
                healthcare professional or registered dietitian before making
                any significant changes to their diet. They can help determine
                the best way to incorporate SoyJoy into their individual
                nutritional plans.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccordionFlush;
