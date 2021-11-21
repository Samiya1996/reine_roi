import React from 'react';
import { Switch, Route, Redirect} from 'react-router';
import './App.css';
import HomePage from './pages/homepage/homepage.componet';

import ShopPage from './pages/shop/shop.component';
import SigninAndSignupPage from './pages/signin-and-signup-page/signin-and-signup-page.component'
import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils' ;
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.action'



class App extends React.Component {
    unsubscribeFromAuth = null;
  
    componentDidMount() {
      const { setCurrentUser } = this.props;
  
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
  
          userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
        }
  
        setCurrentUser(userAuth);
      });
    }
  
    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }
  
    render() {
      return (
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route
              exact
              path='/signin'
              render={() =>
                this.props.currentUser ? (
                  <Redirect to='/' />
                ) : (
                  <SigninAndSignupPage />
                )
              }
            />
          </Switch>
        </div>
      );
    }
  }
  
  const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
  });
  
  const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);