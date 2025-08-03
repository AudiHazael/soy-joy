import Navbar from "../Components/Navbar";
import FAQItem from "../Components/FaqItem";
import Footer from "../Components/Footer";

const allFaqs = [
  {
    question: "What is SoyJoy?",
    answer:
      "SoyJoy is a delicious and nutritious soymilk beverage made from high-quality soybeans. It's a great alternative to traditional dairy milk, offering a range of benefits for those looking for a plant-based diet. SoyJoy is naturally lactose-free, low in saturated fat, and rich in nutrients, making it an excellent choice for health-conscious individuals.",
  },
  {
    question: "What is Soy Milk?",
    answer:
      "Soymilk is a plant-based beverage made from soybeans and water. It's a popular dairy milk alternative, often fortified with nutrients like calcium, vitamins, and minerals to match the nutritional profile of traditional milk. Soymilk is naturally lactose-free, cholesterol-free, and low in saturated fat, making it a great option for those with dietary restrictions or preferences.",
  },
  {
    question: "Is soy milk suitable for people with lactose intolerance?",
    answer:
      "Yes, soy milk is an excellent option for people with lactose intolerance. Since soy milk is naturally lactose-free, it doesn't contain the lactose sugar found in dairy milk that can cause digestive issues for those with lactose intolerance. Soy milk provides a delicious and comfortable alternative, allowing individuals with lactose intolerance to enjoy a milk-like beverage without the discomfort.",
  },
  {
    question: "What are the health benefits of soymilk?",
    answer: (
      <ul className="list-disc pl-5">
        <li>
          Lactose-free, making it suitable for those with lactose intolerance
        </li>
        <li>Low in saturated fat, supporting heart health</li>
        <li>High in protein, helping with muscle growth and repair</li>
        <li>Rich in isoflavones, which may help support bone health</li>
        <li>
          Often fortified with calcium, vitamins, and minerals to match the
          nutritional profile of dairy milk
        </li>
        <li>May help lower cholesterol levels</li>
        <li>
          Supports weight management due to its high protein and fiber content
        </li>
        <li>
          May help reduce the risk of certain cancers, such as prostate and
          breast cancer
        </li>
        <li>Supports healthy digestion due to its prebiotic properties</li>
        <li>Can help promote healthy skin and hair</li>
      </ul>
    ),
  },
  {
    question: "Is SoyJoy suitable for vegans?",
    answer:
      "Yes, SoyJoy is suitable for vegans! As a plant-based soymilk beverage, SoyJoy is made from soybeans and does not contain any animal-derived ingredients, making it a great option for those following a vegan lifestyle.",
  },
  {
    question: "Does SoyJoy contain any artificial preservatives or additives?",
    answer:
      "No, SoyJoy is made with high-quality, all-natural ingredients and does not contain any artificial preservatives, flavors, or additives. We're committed to providing a wholesome and delicious beverage that fits into a healthy lifestyle.",
  },
  {
    question: "What is the shelf life of SoyJoy?",
    answer: (
      <div className="space-y-4">
        <div>
          <h6 className="font-semibold">POWDERED SOYJOY:</h6>
          <p>
            <strong>Sealed:</strong> SoyJoy powder typically lasts for 6–12
            months when stored in a cool, dry place, away from direct sunlight
            and moisture. Check the packaging for the "Best By" date or SoyJoy's
            guidelines.
          </p>
          <p>
            <strong>Opened:</strong> Once opened, store SoyJoy powder in an
            airtight container to maintain freshness. It can last for 1–3 months
            when stored properly, but it's recommended to use within a month for
            optimal flavor and nutrition.
          </p>
        </div>
        <div>
          <h6 className="font-semibold">LIQUID SOYJOY:</h6>
          <p>
            <strong>Sealed:</strong> SoyJoy liquid typically lasts for several
            months when stored in the refrigerator, usually around 7–10 days
            past the "Best By" date, or as indicated by SoyJoy. Some UHT
            processed SoyJoy can have a longer shelf life (up to 6–9 months)
            when stored at room temperature; check the packaging for specific
            guidelines.
          </p>
          <p>
            <strong>Opened:</strong> Once opened, consume SoyJoy liquid within
            3–5 days when stored in the refrigerator at a consistent temperature
            below 40°F (4°C). Always check the product for any visible signs of
            spoilage before consumption, such as off smells, slimy texture, or
            mold.
          </p>
        </div>
      </div>
    ),
  },
  {
    question: "Can I use SoyJoy in cooking and baking?",
    answer:
      "SoyJoy's neutral flavor and versatility make it an excellent choice for various culinary applications. Get creative and enjoy experimenting with SoyJoy in your favorite recipes! These ideas should inspire you to get creative with SoyJoy in your kitchen. You can check out some recipe suggestions.",
  },
  {
    question: " Is SoyJoy gluten-free?",
    answer:
      "Yes, SoyJoy is gluten-free! SoyJoy products are made from high-quality soybeans and do not contain any gluten-containing ingredients, making them a great option for those with gluten intolerance or celiac disease who want to enjoy the nutritional benefits of SoyJoy. Always check the packaging for the latest certification or contact SoyJoy directly for more information.",
  },
  {
    question: "How do I store SoyJoy after opening?",
    answer: (
      <div>
        <p>
          To maintain the quality and freshness of SoyJoy after opening, store
          it in the refrigerator at a consistent temperature below 40°F (4°C).
          Make sure to:
        </p>
        <ul>
          <li>Seal the container tightly after each use</li>
          <li>Keep it away from direct sunlight and heat sources</li>
          <li>
            Consume it within the recommended timeframe (usually 3–5 days)
          </li>
          <li>Check for any visible signs of spoilage before consumption</li>
        </ul>
        <p>
          If you don't have access to refrigeration, consider the following
          alternatives:
        </p>
        <ul>
          <li>Consume SoyJoy immediately after opening</li>
          <li>Use aseptic containers that can withstand room temperature</li>
          <li>
            Opt for Ultra-High Temperature (UHT) processed SoyJoy that can be
            stored at room temperature
          </li>
        </ul>
        <p>
          By following these storage tips, you can enjoy your SoyJoy while
          maintaining its nutritional value and delicious taste!
        </p>
      </div>
    ),
  },
  {
    question: "Can I consume SoyJoy if I'm allergic to soy?",
    answer:
      " No, it's not recommended to consume SoyJoy if you're allergic to soy. SoyJoy is made from soybeans, and soy allergy sufferers may experience adverse reactions. Even though SoyJoy is carefully processed to minimize the beany flavor and aroma that some people might find off-putting, the soy protein remains a potential allergen. If you have a soy allergy, consider alternative products that are soy-free. Always consult with a healthcare professional or registered dietitian for personalized advice.",
  },
  {
    question: "Is SoyJoy fortified with calcium and vitamins?",
    answer:
      " Yes, SoyJoy is often fortified with essential nutrients like calcium, vitamins D, B12, and other vital vitamins and minerals such as vitamin A, vitamin E, iron, zinc, and more. These added nutrients can help support overall health and wellness, making SoyJoy a great option for those looking for a nutritious beverage. Check the label for specific details on fortification and the exact nutrients included.",
  },
  {
    question: " Can children and pregnant women consume SoyJoy?",
    answer:
      "  Yes, SoyJoy can be a nutritious option for children and pregnant women, providing essential nutrients like protein, calcium, and vitamins. However, it's always recommended to consult with a healthcare professional or registered dietitian before making any significant changes to their diet. They can help determine the best way to incorporate SoyJoy into their individual nutritional plans.",
  },
  // { question: "", answer: "" },
];

export default function FAQ() {
  return (
    <main className="bg-white">
      <Navbar />
      <div className="max-w-4xl mx-auto py-24">
        <h1 className="text-4xl font-bold mb-12">All FAQs</h1>
        <div className="space-y-6">
          {allFaqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
