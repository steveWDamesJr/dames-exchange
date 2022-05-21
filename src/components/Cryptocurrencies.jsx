/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import {
  Card, Row, Col, Input,
} from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Logo from '../images/full-logo.png';
import Loader from './Loader';

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 100 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter(
      (item) => item.name.toLowerCase().includes(searchTerm),
    );

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <Loader />;

  return (
    <>
      <img
        className="dames-ex-logo"
        src={Logo}
        alt="logo"
        style={{
          width: '200px', height: '200px', marginLeft: 'auto', marginRight: 'auto',
        }}
      />
      <div className="back-button">
        <div className="left-outlined-container">
          <LeftOutlined><Link to="/">Home</Link></LeftOutlined>
        </div>
        {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
        )}
      </div>
      <Row gutter={[0, 0]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            xs={12}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >

            <Link className="crypto-card-link" key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <Card
                className="crypto-card-body"
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" alt="crypto" src={currency.iconUrl} />}
                hoverable
              >
                <p>
                  Price:
                  {millify(currency.price)}
                </p>
                <p>
                  Market Cap:
                  {millify(currency.marketCap)}
                </p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
