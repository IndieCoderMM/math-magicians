import React from 'react';

const QuotePage = () => {
  const quotes = [
    {
      text: 'Mathematics is the language in which God has written the universe.',
      author: 'Galileo Galilei',
    },
    {
      text: 'Pure mathematics is in its way, the poetry of logical ideas.',
      author: 'Albert Einstein',
    },
    {
      text: 'Math is not about knowing the answer; it shows us how to get there.',
      author: 'Sol LeWitt',
    },
    {
      text: 'The beauty of mathematics only shows itself to more patient followers.',
      author: 'Aristotle',
    },
  ];
  const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <section className="page quote-page">
      <p className="quote">{selectedQuote.text}</p>
      <p className="author">{selectedQuote.author}</p>
    </section>
  );
};

export default QuotePage;
