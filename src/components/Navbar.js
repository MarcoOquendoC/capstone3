import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/Navbar.css';

export default function Navigation() {
  return (
    <nav>
      <div className="logo-holder">
        <img src={logo} alt="eye" className="logo" />
        <h1 className="hText">Guess The Blur</h1>
      </div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/home"
          >
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
