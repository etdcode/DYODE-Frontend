import React from 'react';
import Header from 'components/Header';
import PromoBar from 'components/PromoBar';
import Category from 'components/Category';
import Sale from 'components/Sale';
import Subscribe from 'components/Subscribe';
import Footer from 'components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <PromoBar />
      <Header />
      <Category />
      <Sale />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;