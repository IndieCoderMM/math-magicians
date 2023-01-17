import React from 'react';
import { NavLink } from 'react-router-dom';
import { TbMathSymbols } from 'react-icons/tb';

const Navbar = () => {
  const links = [
    {
      id: 1,
      text: 'Home',
      path: '/',
    },
    {
      id: 2,
      text: 'Calculator',
      path: '/calculator',
    },
    {
      id: 3,
      text: 'Quote',
      path: '/quote',
    },
  ];
  return (
    <header className="main-header">
      <h1>
        <TbMathSymbols />
        <span className="title">MathMagicians</span>
      </h1>
      <nav>
        <ul className="nav-list">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} className="nav-link">
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
