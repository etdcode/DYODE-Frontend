import React from 'react';
import Header from 'components/Header';
import PromoBar from 'components/PromoBar';
import Category from 'components/Category';
import Sale from 'components/Sale';
import Subscribe from 'components/Subscribe';

const App: React.FC = () => {
  return (
    <div>
      <PromoBar />
      <Header />
      <Category />
      <Sale />
      <Subscribe />
    </div>
  );
}

export default App;