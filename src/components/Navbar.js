import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { update } from '../redux/navbarSearch';
import '../styles/Navbar.css';

export default function Navigation() {
  const [state, updateState] = useState(true);
  const dispatch = useDispatch();

  const handleClick = () => {
    updateState(!state);
  };

  const handleChange = (e) => {
    const filter = e.target.value;
    dispatch(update(filter));
  };

  return (
    <nav>
      <span>☰</span>
      <span className="logo-holder">
        <img src={logo} alt="eye" className="logo" />
        <h1 className="hText">Guess The Blur</h1>
      </span>
      <span>🎲</span>
      <button type="button" onClick={() => handleClick()}>🔍</button>

      {state && (
      <NavLink to="/">Home</NavLink>
      )}

      {!state && (
      <label htmlFor="search">
        <input onChange={(e) => handleChange(e)} id="search" type="text" />
      </label>
      )}
    </nav>
  );
}
