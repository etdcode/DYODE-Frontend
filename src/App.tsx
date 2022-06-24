import React from 'react';
import Header from './components/Header';
import PromoBar from './components/PromoBar';

const App: React.FC = () => {
  return (
    <div>
      <PromoBar />
      <Header />
    </div>
  );
}

export default App;