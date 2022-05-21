import React, { useState, useEffect } from 'react';
import {
  Button, Typography,
} from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined, FundOutlined, MenuOutlined, DollarOutlined,
} from '@ant-design/icons';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
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
        <DollarOutlined className="logo-dollar" size="large" />
        <Typography.Title level={5} className="logo"><Link to="/">Welcome Cryptonians!</Link></Typography.Title>
        <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
      </div>
      {activeMenu && (
      <ul className="menu-theme" theme="dark">
        <li key="1" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </li>
        <li key="2" icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </li>
      </ul>
      )}
    </div>
  );
};

export default Navbar;
