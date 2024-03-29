import React from 'react';
import './App.scss';
import Header from './components/header';
import Routers from './routes/route';
import  LanguageProvider  from './context/multipleLanguages/provider';
import StickyHeader from './components/stickyHeader';
import Footer from './components/footer';

const  App = () => {
  return (
      <LanguageProvider>
          <div className='header'>
            <Header />
          </div>
            {/* <StickyHeader /> */}
          <Routers />
          {/* <Footer /> */}
      </LanguageProvider>
  );
}

export default App;
