import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../core/store_modal';
import { LoginData } from '../core/login_session';

@Injectable()
export class LoginActions {

  static LOGIN_USER = 'LOGIN_USER';
  static LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
  static LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';

  constructor(private ngRedux: NgRedux<IAppState>) {}

  loginUser(credentials) {
    this.ngRedux.dispatch({
      type: LoginActions.LOGIN_USER,
      payload: credentials,
    });
  };

  // loginSucceeded(payload:LoginData) {
  //   this.ngRedux.dispatch({
  //     type: LoginActions.LOGIN_USER_SUCCESS,
  //     payload: payload,
  //   });
  // };

  // loginFailed(error) {
  //   this.ngRedux.dispatch({
  //     type: LoginActions.LOGIN_USER_ERROR,
  //     error:error
  //   });
  // };


}