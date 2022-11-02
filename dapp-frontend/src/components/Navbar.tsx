import { ConnectKitButton } from 'connectkit';
import React from 'react';

function Navbar() {
  return (
    <div className='w-full flex'>
      <div className='w-full text-white flex justify-between items-center'>
        {/* <h1 className="font-bold text-4xl lg:text-5xl">Dapp Builder</h1> */}
        <ConnectKitButton />
      </div>
    </div>
  );
}

export default Navbar;
