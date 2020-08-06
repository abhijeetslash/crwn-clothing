import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homePage';
import ShopPage from './pages/shopPage/shopPage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
      
      {/* <HomePage/> */}
    </div>
  );
}

export default App;
