import React from 'react';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

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
  {
    text: 'Mathematics is not about numbers, equations, computations or algorithms: it is about understanding.',
    author: 'William Paul Thurston',
  },
  {
    text: 'The goal of mathematics is to extend our understanding of the world and this can only be achieved by the constant invention and sharpening of new tools.',
    author: 'Andrew Wiles',
  },
];

const QuotePage = () => {
  const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <section className="page quote-page">
      <div className="quote-box">
        <ImQuotesLeft className="open-quote" />
        <p className="quote-text">{selectedQuote.text}</p>
        <p className="author">{'-'.concat(selectedQuote.author)}</p>
        <ImQuotesRight className="close-quote" />
      </div>
    </section>
  );
};

export default QuotePage;
