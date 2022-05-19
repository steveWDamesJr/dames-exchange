import React from 'react';
import millify from 'millify';
import {
  Typography, Row, Col, Statistic, Space,
} from 'antd';
import { SearchOutlined, AudioFilled } from '@ant-design/icons';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import Loader from './Loader';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <div>
      <div className="global-stats">
        <div className="audio-search-container">
          <div className="left-outlined-container">
            <p>2015</p>
          </div>
        </div>
        <Title level={2} className="heading">Global Crypto Stats</Title>
        <div className="audio-search-container">
          <Space className="space-adjust">
            <AudioFilled className="audio-icon" />
            <SearchOutlined />
          </Space>
        </div>
      </div>
      <Row className="gl-cry-stats-row" gutter={[24, 24]}>
        <Col className="global-stats-body" span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap:" value={`${millify(globalStats.totalMarketCap)}`} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={`${millify(globalStats.total24hVolume)}`} /></Col>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top Cryptos In The World</Title>
      </div>
      <Cryptocurrencies />
    </div>
  );
};

export default Homepage;
