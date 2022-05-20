import { rest } from 'msw';

const Handler = [
  rest.get('https://coinranking1.p.rapidapi.com', (res, ctx) => res(
    ctx.json([{
      status: 'success',
      data: {
        coin: {
          uuid: 'Qwsogvtv82FCd',
          symbol: 'BTC',
          name: 'Bitcoin',
          description: 'Bitcoin is the first decentralized digital currency.',
          color: '#f7931A',
          iconUrl: 'https://cdn.coinranking.com/Sy33Krudb/btc.svg',
          websiteUrl: 'https://bitcoin.org',
        },
      },
    },
    ]),
  )),
];

export default Handler;
