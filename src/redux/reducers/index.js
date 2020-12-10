import { LoginReducer } from './LoginReducer'
import {combineReducers} from 'redux'


const All_Reducers = combineReducers({ Login: LoginReducer

}) 


export default All_Reducers;
