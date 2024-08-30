# XRPL EVM Sidechain RainbowKit Next.js (React) Template 🌈

This is a quickstart template for creating a Next.js application with RainbowKit wallet integration, pre-configured for the XRPL EVM Sidechain Devnet.

## Features

- Next.js for efficient React-based web development
- RainbowKit for seamless wallet connection
- Wagmi hooks for Ethereum interactions
- Pre-configured for XRPL EVM Sidechain Devnet
- Bqsic account information display (network, address, balance)
- Direct link to XRPL EVM Bridge Faucet

## Getting Started

1. Clone this repository
2. Install dependencies: `npm install` or `yarn install`
3. Run the development server: `npm run dev` or `yarn dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Configuration

The template is pre-configured for the XRPL EVM Sidechain Devnet. You can modify the chain configuration in `src/pages/_app.tsx` and add more chains as needed. Visit the Rainbowkit documentation to learn how to configure your app.

```tsx
const xrpl_evm_sidechain_devnet = {
  id: 1440002,
  name: 'XRPL EVM Sidechain Devnet',
  iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png',
  iconBackground: '#fff',
  nativeCurrency: { name: 'XRP', symbol: 'XRP', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://rpc-evm-sidechain.xrpl.org'] },
  },
  blockExplorers: {
    default: { name: 'xrpl-evm-explorer-devnet', url: 'https://evm-sidechain.xrpl.org' },
  }
} as const satisfies Chain;
```

## Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [RainbowKit Documentation](https://www.rainbowkit.com/docs)
- [Wagmi Documentation](https://wagmi.sh/)
- [XRPL EVM Sidechain Documentation](https://www.xrplevm.org/)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

