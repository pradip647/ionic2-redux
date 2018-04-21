import { LoginActions } from '../actions/login_action';
import { Action } from 'redux';
import {LoginData } from '../core/login_session';

const INITIAL_STATE: LoginData = {
  user: null,
  loading: false,
  error: "",
};

type Payload=any;
type Error=any;

export interface ActionWithPayload<T,E> extends Action {
  payload?: T;
  error?:E;
} 

export function loginReducer(state: LoginData = INITIAL_STATE, action: ActionWithPayload<Payload,Error>): LoginData {
  switch (action.type) {
    case LoginActions.LOGIN_USER:
      return {
        ...state,
        user: null,
        loading: true,
        error: null,
      };
    case LoginActions.LOGIN_USER_SUCCESS:
    //console.log(action.payload);
      return {
        ...state,
        user:action.payload,
        loading: false,
        error: null,
      };
    case LoginActions.LOGIN_USER_ERROR:
    console.log(action.error);
      return {
        ...state,
        user: null,
        loading: false,
        error: action.error
      };
  }

  return state;
}
