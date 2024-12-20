import React, { useState } from "react";
import "../styles/FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How do I apply for a personal loan through this app?",
      answer: "You can apply directly through the app following the simple steps provided."
    },
    {
      question: "What documentation do I need to provide for the loan application?",
      answer:
        "You won’t have to provide a lot of documents to apply for a loan from Airtel Flexi Credit. Here is the list of documents that will be needed: PAN card number, Aadhaar card number, KYC documents, bank statements of the last 3 months, salary slips of the last 3 months, and your selfie."
    },
    {
      question: "What are the eligibility criteria for obtaining a personal loan?",
      answer: "Eligibility criteria depend on your credit score, age, and income details."
    },
    {
      question: "What is the maximum loan amount I can apply for?",
      answer: "The maximum loan amount varies based on eligibility but can go up to ₹10,00,000."
    },
    {
      question: "What is the interest rate for the personal loan?",
      answer: "The interest rate depends on your creditworthiness and other factors."
    }
  ];

  return (
    <div className="faq-container">
      <h1>Personal Loan - FAQs</h1>
      <div className="faq-items">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
              <span className="faq-toggle">
                {activeIndex === index ? "▲" : "▼"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default FAQ;
