
//import here all the reducers

import { combineReducers } from 'redux';
import { loginReducer } from '../reducers/login_reducers';
import { listReducer } from '../reducers/list_reducers';
export const rootReducer = 

  combineReducers({
    loginData: loginReducer,
    friend_list:listReducer
  })

// ); 