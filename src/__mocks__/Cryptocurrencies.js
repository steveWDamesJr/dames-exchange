/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Logo from '../images/full-logo.png';

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

  if (isFetching) return <div />;

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
          <div><a to="/">Home</a></div>
        </div>
        {!simplified && (
        <div className="search-crypto">
          <input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
        )}
      </div>
      <div gutter={[0, 0]} className="crypto-div-container">
        {cryptos?.map((currency) => (
          <div
            xs={12}
            sm={12}
            lg={6}
            className="crypto-div"
            key={currency.uuid}
          >

            <a className="crypto-div-a" key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <div
                className="crypto-div-body"
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
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cryptocurrencies;
