import React from 'react';
import { NavLink } from 'react-router-dom';
import { Typography, Space } from 'antd';

function Footer() {
  return (
    <div className="footer">
      <Typography.Title className="copyright-info" level={5} style={{ color: 'white', textAlign: 'center' }}>
        Copyright © 2022 -
        {' '}
        <Space />
        <NavLink to="/">
          Dames Exchange Inc.
        </NavLink>
        <br />
        All Rights Reserved.
      </Typography.Title>
      <Space>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cryptocurrencies">Cryptocurrencies</NavLink>
      </Space>
    </div>
  );
}

export default Footer;
