import * as UserLogin from '../actions/UserLogin'

const initialState = {
        loggedIn:false,
        user : null,
        Id: null,
        error : true
};

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserLogin.LOGIN_SUCCESS:
      console.log('YE PAYLOAD IN REDUCER ' + action.payload.ErrorMessage)
      if (action.payload.ErrorMessage) 
      {
        return {
          ...state,
          loggedIn: false,
          user: action.payload.user,  //fetched data action 
          Id : action.payload.ID,
          error : action.payload.ErrorMessage  //ye backend wala error hai T/F
        };
      }
      else 
      {
        return {
          ...state,
          loggedIn: true,
          user: action.payload.user,  //fetched data action 
          Id : action.payload.ID,
          error : action.payload.ErrorMessage  //ye backend wala error hai T/F
        };
      }
    case UserLogin.LOGIN_FAILURE:
      return {
        ...state,
        loggedIn : false,
        user : null,
        Id: null,
        error : action.payload.errmess //ye fetch wala error hai 
      };
    default:
      return state
  }
}
export default LoginReducer;