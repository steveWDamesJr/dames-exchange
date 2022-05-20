import React from 'react';
import millify from 'millify';
import { useGetCryptosQuery } from '../services/cryptoApi';

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <div />;

  return (
    <div>
      <div className="global-stats">
        <div className="audio-search-container">
          <div className="left-outlined-container">
            <p>2015</p>
          </div>
        </div>
        <div level={2} className="heading">Global Crypto Stats</div>
        <div className="audio-search-container">
          <div className="div-adjust">
            <div className="audio-icon" />
            <div />
          </div>
        </div>
      </div>
      <div className="gl-cry-stats-div" gutter={[24, 24]}>
        <div className="global-stats-body" span={12}><div div="Total Cryptocurrencies" value={globalStats.total} /></div>
        <div span={12}><div div="Total Exchanges" value={millify(globalStats.totalExchanges)} /></div>
        <div span={12}><div div="Total Market Cap:" value={`${millify(globalStats.totalMarketCap)}`} /></div>
        <div span={12}><div div="Total 24h Volume" value={`${millify(globalStats.total24hVolume)}`} /></div>
        <div span={12}><div div="Total Cryptocurrencies" value={globalStats.total} /></div>
        <div span={12}><div div="Total Markets" value={millify(globalStats.totalMarkets)} /></div>
      </div>
      <div className="home-heading-container">
        <div level={2} className="home-div">Top Cryptos In The World</div>
      </div>
      <div />
    </div>
  );
};

export default Homepage;
