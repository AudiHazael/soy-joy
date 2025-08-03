import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import FAQItem from "./FaqItem";

const faqs = [
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
  // { question: "", answer: "" },
];

export default function AccordionFlush() {
  return (
    <section className="pt-4 md:pt-10">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
        <div className="mt-8">
          <a
            href="/FAQ"
            className="text-indigo-600 font-semibold hover:underline"
          >
            See All Questions →
          </a>
        </div>
      </div>
    </section>
  );
}
