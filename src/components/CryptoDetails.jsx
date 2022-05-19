import HTMLReactParser from 'html-react-parser';
import { useParams, Link } from 'react-router-dom';
import millify from 'millify';
import {
  Col, Typography, Space,
} from 'antd';
import {
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined,
  LeftOutlined, AudioFilled, SearchOutlined,
} from '@ant-design/icons';
import { useGetCryptoDetailsQuery } from '../services/cryptoApi';
import Loader from './Loader';

const { Title, Text } = Typography;

const CryptoDetails = () => {
  const { coinId } = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const cryptoDetails = data?.data?.coin;

  if (isFetching) return <Loader />;

  const stats = [
    {
      id: 1,
      title: 'Price to USD',
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <DollarCircleOutlined />,
    },
    {
      id: 2,
      title: 'Rank',
      value: cryptoDetails?.rank,
      icon: <NumberOutlined />,
    },
    {
      id: 3,
      title: 'Market Cap',
      value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`,
      icon: <DollarCircleOutlined />,
    },
    {
      id: 4,
      title: 'All-time-high(daily avg.)',
      value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      id: 1,
      title: 'Number Of Markets',
      value: cryptoDetails?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      id: 2,
      title: 'Approved Supply',
      value: cryptoDetails?.supply?.confirmed ? <CheckOutlined />
        : <StopOutlined />,
      icon: <ExclamationCircleOutlined />,
    },
    {
      id: 3,
      title: 'Total Supply',
      value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      id: 4,
      title: 'Circulating Supply',
      value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  return (
    <Col className="coin-detail-container">
      <Col className="coin-heading-container">
        <div className="back-button">
          <div className="left-outlined-container">
            <Link className="left-outlined-back" to="/">
              <LeftOutlined />
            </Link>
          </div>
        </div>
        <Title level={2} className="coin-name">
          {data?.data?.coin.name}
          (
          {data?.data?.coin.symbol}
          ) Price
        </Title>
        <div className="audio-search-container">
          <Space className="space-adjust">
            <AudioFilled className="audio-icon" />
            <SearchOutlined />
          </Space>
        </div>
      </Col>
      <p>
        { cryptoDetails.name }
        {' '}
        price in US Dollar (USD). View value statistics, market cap and supply.
      </p>
      <Col className="stats-container">
        <ul className="coin-value-statistics">
          <li className="coin-value-statistics-heading">
            <Title level={3} className="coin-details-heading">
              {cryptoDetails.name}
              Value Statistics
            </Title>
            <p>
              An overview showing the statistics of
              {cryptoDetails.name}
              , such as the base and quote currency, the rank, and trading volume.
            </p>
          </li>
          {stats.map(({
            icon, title, value, id,
          }) => (
            <li className="coin-stats" key={id}>
              <h4 className="coin-stats-name">
                <Text key={stats.title}>{icon}</Text>
                <Text key={stats.title}>{title}</Text>
              </h4>
              <Text className="stats">{value}</Text>
            </li>
          ))}
        </ul>
        <ul className="other-stats-info striped-list">
          <li className="coin-value-statistics-heading">
            <Title level={3} className="coin-details-heading">Other Stats Info</Title>
            <p>
              An overview showing the statistics of
              {cryptoDetails.name}
              , such as the base and quote currency, the rank, and trading volume.
            </p>
          </li>
          {genericStats.map(({
            icon, title, value, id,
          }) => (
            <li className="coin-stats" key={id}>
              <h4 className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </h4>
              <Text className="stats">{value}</Text>
            </li>
          ))}
        </ul>
      </Col>
      <ul className="coin-desc-link">
        <li className="coin-desc">
          <Title level={2} className="coin-details-heading coin-dls-hd-title">
            What is
            {cryptoDetails.name}
            ?
          </Title>
          {HTMLReactParser(cryptoDetails.description)}
        </li>
      </ul>
    </Col>
  );
};

export default CryptoDetails;
