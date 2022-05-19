import React from 'react';
import { Spin } from 'antd';

const Loader = () => (
  <div className="loader">
    <Spin tip="Dames Exchange Loading..." />
  </div>
);

export default Loader;
