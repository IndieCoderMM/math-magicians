import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => (
  <section className="page home-page">
    <h2>Welcome to our page!</h2>
    <p>
      Welcome to Math Magicians, where calculations and inspiration come
      together. With our powerful calculator, you can do math calculations with
      ease. And our collection of famous math quotes will give you the
      motivation to keep learning and growing.
    </p>
    <p>
      Our team of experts is constantly updating our calculators with the latest
      technology to ensure you have access to the most accurate and efficient
      calculations. We also hand-pick the best math quotes from some of the most
      brilliant minds in history to keep you motivated and on track.
    </p>
    <ul className="button-group">
      <li key={1}>
        <NavLink to="/calculator" className="link-button">
          Start Calculating
        </NavLink>
      </li>
      <li key={2}>
        <NavLink to="/quote" className="link-button">
          Read Today Quote
        </NavLink>
      </li>
    </ul>
  </section>
);

export default HomePage;
