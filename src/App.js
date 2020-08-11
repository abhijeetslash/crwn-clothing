import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homePage';
import ShopPage from './pages/shopPage/shopPage';
import SignInAndSignUpPage from './pages/signInAndsignUpPage/signInAndsignUpPage';
import Header from './components/header/header';
import {auth} from './firebase-utils/firebase-utils';
import {createUserProfileDocument} from './firebase-utils/firebase-utils';

class App extends React.Component{

  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
           currentUser:{
             id: snapshot.id,
             ...snapshot.data()
           }
          },()=>{
            console.log(this.state.currentUser,'useeeer')
          })
        });
      }else{
        this.setState({
          currentUser: userAuth
        })
      }
      

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
