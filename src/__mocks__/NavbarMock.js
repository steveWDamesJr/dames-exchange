import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <div className="logo-dollar" size="large" />
        <div><a to="/">Welcome Cryptonians!</a></div>
        <button type="button">Click me</button>
      </div>
    </div>
  );
};

export default Navbar;
