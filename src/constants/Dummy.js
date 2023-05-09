export const Portfolio = {
  balance: '32761.64',
  changes: '+20%',
};

export const Coins = [
  {
    id: 1,
    currency: 'Bitcoin',
    symbol: 'BTC',
    image: require('../assets/icons/bitcoin.png'),
    amount: '65.75893',
    changes: '+20%',
    type: 'I', // I for Increase and D for Decrease
    wallet: {
      value: '4525.11',
      crypto: '0.025',
    },
  },
  {
    id: 2,
    currency: 'Binance',
    symbol: 'BNC',
    image: require('../assets/icons/binance.png'),
    amount: '20.3214',
    changes: '-40%',
    type: 'D', // I for Increase and D for Decrease
    wallet: {
      value: '52122.9',
      crypto: '1.895',
    },
  },
  {
    id: 3,
    currency: 'Ethereum',
    symbol: 'ETH',
    image: require('../assets/icons/ethereum.png'),
    amount: '895.24141',
    changes: '+10%',
    type: 'I', // I for Increase and D for Decrease
    wallet: {
      value: '7443.43',
      crypto: '0.025',
    },
  },
  {
    id: 3,
    currency: 'Bitcoin',
    symbol: 'BTC',
    image: require('../assets/icons/xrp.png'),
    amount: '1.25',
    changes: '+15%',
    type: 'I', // I for Increase and D for Decrease
    wallet: {
      value: '37.1831',
      crypto: '19.25',
    },
  },
];

const dummyData = {Portfolio, Coins};

export default dummyData;
