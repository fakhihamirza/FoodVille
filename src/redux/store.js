import { createStore , applyMiddleware} from 'redux';
import All_Reducer from './reducers/LoginReducer'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';



 const Configstore = () =>{ 
     const store = createStore(All_Reducer 
    , composeWithDevTools(applyMiddleware(thunk,logger)));
    return store;
    }

// const store = createStore (LoginReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default Configstore;
