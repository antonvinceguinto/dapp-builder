import React from 'react';
import { ConnectKitButton } from 'connectkit';

function PageWrapper({ children, className }: { children?: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

function MainPage() {
  return (
    <section id='main'>
      <div className='min-h-screen centered'>
        <ConnectKitButton />
      </div>
    </section>
  );
}

export default MainPage;
