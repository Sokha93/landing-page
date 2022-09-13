import React from 'react';
import './App.scss';
import Header from './components/header';
import Routers from './routes/route';

const  App = () => {
  return (
      <>
        <div className='header'>
          <Header />
          <Routers />
        </div>
      </>
  );
}

export default App;
