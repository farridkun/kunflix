import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 1) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img
        src="https://fontmeme.com/permalink/201106/d078f4dc0a74ac4f9014372d8f3119ee.png"
        alt="Kunflix Logo"
        className="nav__logo"
      />

      <img
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="Kunflix Avatar"
        className="nav__avatar"
      />
    </div>
  );
}

export default Nav;
