import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import HomePage from './pages/homepage/homepage.componet';

import ShopPage from './pages/shop/shop.component';
import signinAndSignupPage from './pages/signin-and-signup-page/signin-and-signup-page.component';
import Header from './components/header/header.component';
import {auth} from './firebase/firebase.utils' ;


class App extends React.Component{

    constructor(){
        super()
        this.state = {
            currentUser : null
        }
    }

    unsubscribeFromAuth = null
    componentDidMount(){
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {this.setState({currentUser : user})
        })
    }
    componentWillUnmount(){
        this.unsubscribeFromAuth()
    }

    render(){
        return( 
        <div > 
        <Header currentUser = {this.state.currentUser}/>
        <switch>
            <Route exact path = '/' component = {HomePage}/>
            <Route exact path = '/shop' component = {ShopPage}/>
            <Route exact path = '/signin' component = {signinAndSignupPage}/>
        </switch>
    </div>
        )
    }
       
    
    
 
}

export default App;
