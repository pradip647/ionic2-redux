import { Injectable } from '@angular/core';
import { ActionsObservable } from 'redux-observable';
import { LoginActions } from '../actions/login_action';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http } from '@angular/http';



@Injectable()
export class LoginEpics {
  constructor(private http: Http) {}

 
  login = (action$: ActionsObservable<any>) => {
    return action$.ofType(LoginActions.LOGIN_USER)
      .mergeMap(({payload}) => {

        return this.http.post('http://www.mocky.io/v2/5ad9e9312f00005e00cfe010', payload,)})
          .map(result => ({
            type: LoginActions.LOGIN_USER_SUCCESS,
            payload: result.json()
          }))
          .catch(error => Observable.of({
            type: LoginActions.LOGIN_USER_ERROR,
            error: "Incorrect Username or Password"
          }));
  }
}