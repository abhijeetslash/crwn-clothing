import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homePage';
import ShopPage from './pages/shopPage/shopPage';
import SignInAndSignUpPage from './pages/signInAndsignUpPage/signInAndsignUpPage';
import Header from './components/header/header';
import {auth} from './firebase-utils/firebase-utils';

class App extends React.Component{

  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });

      console.log(user,'signIn user')
    });
}

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }                            

  render(){
    
      return (
          <div>
            <Header currentUser={this.state.currentUser} />
            <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route exact path='/signIn' component={SignInAndSignUpPage}/>
              <Route path='/shop' component={ShopPage}/>
            </Switch>
          </div>
  )
  }
}

export default App;
