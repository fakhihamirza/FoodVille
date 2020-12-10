import React, { Component } from 'react'
import logo from '../logo.jpg'
import {Validate_User} from '../redux/ActionCreators/LoginActionCreator'
import {connect} from 'react-redux'
//binding to this
const mapdispatchtoprops = dispatch => ({   //saray calls r returned
    Validate_User : (values) =>    //validate_user ko call krunge to use dispatch
    {
        dispatch (Validate_User(values))   //sending values to the actioncreator wala validate_user
    }  
}) 

const mapstatetoprops = state => {
    return {
        Login_State : state.Login  // This is my Loginreducer ka state
    }
}

class Login extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            username : '',
            pass : ''
        };
        this.onSubmit= this.onSubmit.bind(this);
        this.handleUNChange = this.handleUNChange.bind(this);
        this.handlePChange = this.handlePChange.bind(this);
    }

    onSubmit(event){
        console.log('Current State is: ' + this.state.username + this.state.pass);
        this.props.Validate_User(this.state);
        console.log('LOGINNN' + this.props.Login_State)
        event.preventDefault();
    }

    handleUNChange(event){
        this.setState({
            username : event.target.value
        })
    }

    handlePChange(event){
        this.setState({
            pass : event.target.value
        })
    }

    render() {
        return (
            <div className = 'Grid2'>
                <div className= 'col1'>
                </div>
                <div className= 'col2'>
                    <div>
                    <img src={logo} alt="logo" align = 'left' style={{width:150}}></img>
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <label><b>Username</b></label>

                        <input 
                        type="text" 
                        placeholder="Enter Username"  
                        value = {this.state.username} 
                        onChange = {this.handleUNChange}
                        />

                        <label><b>Password</b></label>

                        <input 
                        type="password" 
                        placeholder="Enter Password"
                        value = {this.state.pass} 
                        onChange = {this.handlePChange}
                        />

                        <button 
                        type="submit">Login</button>

                        <label>
                            <input type="checkbox"/> Remember me
                        </label>

                        <p></p>
                        <label> Don't have and account?</label>
                        <button type="button" onClick={this.onClick}>Register</button>   
                        {/* //link /register  */}
                        
                    </form>
                </div>

            </div>
            
        )
    }
}



export default connect (mapstatetoprops,mapdispatchtoprops)(Login) 

//connect connects to store (state , dispatch-actions)
