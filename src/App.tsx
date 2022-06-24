import Category from 'components/Category';
import React from 'react';
import Header from './components/Header';
import PromoBar from './components/PromoBar';

const App: React.FC = () => {
  return (
    <div>
      <PromoBar />
      <Header />
      <Category />
    </div>
  );
}

export default App;