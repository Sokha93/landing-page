import React from 'react';
import './App.scss';
import Header from './components/header';
import Routers from './routes/route';
import  LanguageProvider  from './context/multipleLanguages/provider';
import StickyHeader from './components/stickyHeader';

const  App = () => {
  return (
      <LanguageProvider>
          <div className='header'>
            <Header />
            <StickyHeader />
            <Routers />
        </div>
      </LanguageProvider>
  );
}

export default App;
