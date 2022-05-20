import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { useGetCryptoDetailsQuery } from '../services/cryptoApi';

const CryptoDetails = () => {
  const { coinId } = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const cryptoDetails = data?.data?.coin;

  if (isFetching) return '$';

  const stats = [
    {
      id: 1,
      div: 'Price to USD',
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: '$',
    },
    {
      id: 2,
      div: 'Rank',
      value: cryptoDetails?.rank,
      icon: '$',
    },
    {
      id: 3,
      div: 'Market Cap',
      value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`,
      icon: '$',
    },
    {
      id: 4,
      div: 'All-time-high(daily avg.)',
      value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`,
      icon: '$',
    },
  ];

  const genericStats = [
    {
      id: 1,
      div: 'Number Of Markets',
      value: cryptoDetails?.numberOfMarkets,
      icon: '$',
    },
    {
      id: 2,
      div: 'Approved Supply',
      value: cryptoDetails?.supply?.confirmed ? '$'
        : '$',
      icon: '$',
    },
    {
      id: 3,
      div: 'Total Supply',
      value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`,
      icon: '$',
    },
    {
      id: 4,
      div: 'Circulating Supply',
      value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`,
      icon: '$',
    },
  ];

  return (
    <div className="coin-detail-container">
      <div className="coin-heading-container">
        <div className="back-button">
          <div className="left-outlined-container">
            <a className="left-outlined-back" to="/">
              $
            </a>
          </div>
        </div>
        <div level={2} className="coin-name">
          {data?.data?.coin.name}
          (
          {data?.data?.coin.symbol}
          ) Price
        </div>
        <div className="audio-search-container">
          <div className="div-adjust">
            <div className="audio-icon" />
            $
          </div>
        </div>
      </div>
      <p>
        { cryptoDetails.name }
        {' '}
        price in US Dollar (USD). View value statistics, market cap and supply.
      </p>
      <div className="stats-container">
        <ul className="coin-value-statistics">
          <li className="coin-value-statistics-heading">
            <div level={3} className="coin-details-heading">
              {cryptoDetails.name}
              Value Statistics
            </div>
            <p>
              An overview showing the statistics of
              {cryptoDetails.name}
              , such as the base and quote currency, the rank, and trading volume.
            </p>
          </li>
          {stats.map(({
            icon, div, value, id,
          }) => (
            <li className="coin-stats" key={id}>
              <h4 className="coin-stats-name">
                <div key={stats.div}>{icon}</div>
                <div key={stats.div}>{div}</div>
              </h4>
              <div className="stats">{value}</div>
            </li>
          ))}
        </ul>
        <ul className="other-stats-info striped-list">
          <li className="coin-value-statistics-heading">
            <div level={3} className="coin-details-heading">Other Stats Info</div>
            <p>
              An overview showing the statistics of
              {cryptoDetails.name}
              , such as the base and quote currency, the rank, and trading volume.
            </p>
          </li>
          {genericStats.map(({
            icon, div, value, id,
          }) => (
            <li className="coin-stats" key={id}>
              <h4 className="coin-stats-name">
                <div>{icon}</div>
                <div>{div}</div>
              </h4>
              <div className="stats">{value}</div>
            </li>
          ))}
        </ul>
      </div>
      <ul className="coin-desc-a">
        <li className="coin-desc">
          <div level={2} className="coin-details-heading coin-dls-hd-div">
            What is
            {cryptoDetails.name}
            ?
          </div>
          {HTMLReactParser(cryptoDetails.description)}
        </li>
      </ul>
    </div>
  );
};

export default CryptoDetails;
