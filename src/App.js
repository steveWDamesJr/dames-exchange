import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import {
  Homepage, Cryptocurrencies, CryptoDetails, Navbar,
} from './components';
import Footer from './components/Footer';
import './CSS/index.css';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
          </Routes>
        </div>
      </Layout>
      <Footer />
    </div>
  </div>
);

export default App;
