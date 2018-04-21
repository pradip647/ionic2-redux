import { Injectable } from '@angular/core';
import { ActionsObservable } from 'redux-observable';
import { LoginActions } from '../actions/login_action';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http } from '@angular/http';
import { ListActions } from '../actions/list_action';



@Injectable()
export class ListEpics {
  constructor(private http: Http) {}

 
  list = (action$: ActionsObservable<any>) => {
    return action$.ofType(ListActions.SEARCH_LIST)
      .mergeMap(({}) => {

        return this.http.get('http://www.mocky.io/v2/5ad987012f00002b00cfdd78?mocky-delay=1000ms')})
          .map(result => ({
            type: ListActions.SEARCH_SUCCESS,
            payload: result.json()
          }))
          .catch(error => Observable.of({
            type: ListActions.SEARCH_FAILED,
            error: "List not found"
          }));
        }
    }