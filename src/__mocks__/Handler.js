import { rest } from 'msw';

const Handler = [
  rest.get('https://coinranking1.p.rapidapi.com', (res, ctx) => res(
    ctx.json([{
      status: 'success',
      data: {
        stats: {
          total: 3,
          totalCoins: 10000,
          totalMarkets: 35000,
          totalExchanges: 300,
          totalMarketCap: '239393904304',
          total24hVolume: '503104376.06373006',
        },
      },
    },
    ]),
  )),
];

export default Handler;
