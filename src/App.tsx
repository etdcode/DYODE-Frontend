import Category from 'components/Category';
import Sale from 'components/Sale';
import React from 'react';
import Header from './components/Header';
import PromoBar from './components/PromoBar';

const App: React.FC = () => {
  return (
    <div>
      <PromoBar />
      <Header />
      <Category />
      <Sale />
    </div>
  );
}

export default App;