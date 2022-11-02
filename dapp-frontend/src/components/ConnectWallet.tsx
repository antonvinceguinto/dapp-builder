import React from 'react';
import { useAccount } from 'wagmi';
import { ConnectKitButton } from 'connectkit';

type Visibility = 'always' | 'connected' | 'not_connected';

function ConnectWallet(show: Visibility) {
  const { isConnected } = useAccount();

  if ((show === 'connected' && !isConnected) || (show === 'not_connected' && isConnected)) return null;

  return <ConnectKitButton />;
}

export default ConnectWallet;
