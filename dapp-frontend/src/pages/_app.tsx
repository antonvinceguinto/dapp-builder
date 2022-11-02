import React from 'react';
import 'tailwindcss/tailwind.css';
import '../../styles/globals.css';
import Web3Provider from '@/components/Web3Provider';

function App({ Component, pageProps }) {
  return (
    <Web3Provider>
      <Component {...pageProps} />
    </Web3Provider>
  );
}

export default App;
