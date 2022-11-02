import React from 'react';
import { APP_NAME } from '@/lib/consts';
import { createClient, WagmiConfig } from 'wagmi';
import { ConnectKitProvider, getDefaultClient } from 'connectkit';

const client = createClient(
  getDefaultClient({
    appName: APP_NAME,
    autoConnect: true,
    alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_ID,
  }),
);

function Web3Provider({ children }) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider theme='retro' mode='light'>
        {children}
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default Web3Provider;
