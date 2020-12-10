import React, { Component } from 'react';
import Header from './header';
import Footer from './footercomp';
import logo from '../logo.svg';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Noob from './noob';
import Noober from './noober';
import Login from './Login'
import { MainPage } from './MainPage';


class Main extends Component {
    render(){
        return(
            <div>
               <Header/>
                <Switch location={this.props.location}>
                <Route path="/noober" component={Noober}/>
                <Route exact path="/noob" component={Noob}/>
                <Route exact path="/login" component={Login}/> 
                
                <Route exact path="/" component={MainPage}/>
                </Switch>
                <Footer/>
            </div>
            
        );
    }
}


export default Main;