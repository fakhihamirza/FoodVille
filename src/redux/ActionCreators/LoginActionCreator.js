import * as UserLogin from '../actions/UserLogin'
import React from "react"

const baseUrl='http://localhost:3003/'

export const Validate_User = (values) => (dispatch) => {

    console.log('YE AARAHA HAI ' + values.username);

    return fetch(baseUrl + 'validate', {
        method : 'POST', headers : {'Content-Type':'application/json'} ,
        body : JSON.stringify(values)
    })
        .then(response =>{
            if(response.ok)
            {
                console.log("response ok");
                console.log(response);
                return response;    //fetched data??
            }
            else
            {
                var error = new Error('Error '+ response.status + ': ' + response.statusText);
                console.log('Error '+ response.status + ': ' + response.statusText);
                error.response=response;
                throw error;
            }
        },error =>{
            var errmess= new Error(error.message);
            throw errmess;
        })
        .then(response => /*{console.log(response.json()) ; return*/ response.json())   //json mai convert
        .then((data)=> {dispatch(Login_Success(data))})   ///data will have return of response.json
        .catch(error => dispatch(Login_Failure(error.message)));
};

export const Login_Success= (data)=>
(   
    console.log('INSIDE LOGIN SUCCESS'+ data),
    {
    type: UserLogin.LOGIN_SUCCESS,
    payload : data
});

export const Login_Failure= (errmess)=>
({
    type: UserLogin.LOGIN_FAILURE,
    payload: errmess
});