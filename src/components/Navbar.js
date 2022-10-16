import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { update } from '../redux/navbarSearch';
import '../styles/Navbar.css';

export default function Navigation() {
  const [state, updateState] = useState(true);
  const [inDetailsPage, setInDetailsPage] = useState(false);
  const dispatch = useDispatch();

  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === '/details') {
      updateState(true);
    } else {
      updateState(!state);
      dispatch(update('[a-z]'));
    }
  };

  const handleChange = (e) => {
    const filter = e.target.value;
    dispatch(update(filter));
  };
  const exitSearch = () => {
    dispatch(update('[a-z]'));
    handleClick();
  };

  useEffect(() => {
    if (location.pathname === '/details') {
      setInDetailsPage(true);
      updateState(true);
    } else {
      setInDetailsPage(false);
    }
  }, [inDetailsPage, location]);

  return (
    <header>
      <nav>
        <span className="logo-holder">
          <img src={logo} alt="eye" className="logo" />
          <h1 className="hText">Guess The Blur</h1>
        </span>
        {(state && !inDetailsPage) && (
          <NavLink to="/" onClick={() => handleClick()}>Search Mode</NavLink>
        )}
        {(inDetailsPage) && (
          <NavLink to="/" onClick={() => handleClick()}>Home</NavLink>
        )}
        {(!state) && (
          <NavLink to="/" onClick={() => exitSearch()}>Exit 🔍</NavLink>
        )}
      </nav>
      {!inDetailsPage && (
        <p style={{ display: 'flex', justifyContent: 'center' }}>
          {!state && (
          <label htmlFor="search" style={{ margin: 'auto' }}>
            <input onChange={(e) => handleChange(e)} id="search" type="text" placeholder="Search by author" />
          </label>
          )}
        </p>
      )}
    </header>
  );
}
