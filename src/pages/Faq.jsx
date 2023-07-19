import React, { useState } from 'react';
import './Faq.css';

function FaqPage() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    if (selectedQuestion === index) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(index);
    }
  };

  const questions = [
    {
      id: 1,
      question: 'How long will it take to receive my order?',
      answer: 'The delivery time depends on your location and the shipping method chosen. Typically, orders are delivered within 3-7 business days.',
    },
    {
      id: 2,
      question: 'Can I track my order?',
      answer: 'Yes, you can track your order by logging into your account and going to the Order Tracking section. There, you will find the tracking information and the current status of your order.',
    },
    {
      id: 3,
      question: 'What if Im not available at the time of delivery?',
      answer: 'If you are not available at the time of delivery, the courier will usually leave a notification or attempt delivery again later. You can also contact the courier service to arrange an alternative delivery time.',
    },
    {
      id: 4,
      question: 'What if Im not available at the time of delivery?',
      answer: 'If you are not available at the time of delivery, the courier will usually leave a notification or attempt delivery again later. You can also contact the courier service to arrange an alternative delivery time.',
    },
    {
      id: 5,
      question: 'What if Im not available at the time of delivery?',
      answer: 'If you are not available at the time of delivery, the courier will usually leave a notification or attempt delivery again later. You can also contact the courier service to arrange an alternative delivery time.',
    },
   
  ];

  return (
    <div className="faq-page">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {questions.map((q, index) => (
          <div
            key={q.id}
            className={`faq-item ${selectedQuestion === index ? 'active' : ''}`}
            onClick={() => handleQuestionClick(index)}
          >
            <div className="question">
              <h3>{q.question}</h3>
              <span className="icon">{selectedQuestion === index ? '-' : '+'}</span>
            </div>
            {selectedQuestion === index && (
              <div className="answer">
                <p>{q.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaqPage;
