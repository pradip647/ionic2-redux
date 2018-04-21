import { LoginActions } from '../actions/login_action';
import { Action } from 'redux';
import { Friend_List } from '../core/list_session';
import { ListActions } from '../actions/list_action';
// import {LoginData } from '../core/login_session';

const INITIAL_STATE: Friend_List = {
    friends:{},
    loading:false,
    error:''
};

type Payload=any;
type Error=any;

export interface ActionWithPayload<T,E> extends Action {
  payload?: T;
  error?:E;
} 

export function listReducer(state: Friend_List = INITIAL_STATE, action: ActionWithPayload<Payload,Error>): Friend_List {
  switch (action.type) {
    case ListActions.SEARCH_LIST:
      return {
        ...state,
        friends:null,
        loading:true,
        error:null
      };
    case ListActions.SEARCH_SUCCESS:
      return {
        ...state,
        friends:action.payload,
        loading:false,
        error:null
      };
    case ListActions.SEARCH_FAILED:
      return {
        ...state,
        friends:null,
        loading:false,
        error:action.error
      };
  }


  return state;
}