import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className="copyright-info" level={5} style={{ color: 'white', textAlign: 'center' }}>
        Copyright © 2022 -
        {' '}
        <br />
        <NavLink to="/">
          Dames Exchange Inc.
        </NavLink>
        <br />
        All Rights Reserved.
      </div>
      <br />
      <NavLink to="/">Home</NavLink>
      <NavLink to="cryptocurrencies">Cryptocurrencies</NavLink>
    </div>
  );
}

export default Footer;
