import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to WikiSure™</h1>
      <nav>
        <Link href="/demo">Go to Demo</Link>
        <Link href="/mvp-demo">Go to MVP Demo</Link>
      </nav>
    </div>
  );
};

export default Home;
// trigger deploy
