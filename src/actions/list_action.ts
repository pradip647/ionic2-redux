import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../core/store_modal';


@Injectable()
export class ListActions {

  static SEARCH_LIST = 'SEARCH_LIST';
  static SEARCH_SUCCESS = 'SEARCH_SUCCESS';
  static SEARCH_FAILED = 'SEARCH_FAILED';

  constructor(private ngRedux: NgRedux<IAppState>) {}

  searchList() {
    this.ngRedux.dispatch({
      type: ListActions.SEARCH_LIST,
      //payload: credentials,
    });
  };


}