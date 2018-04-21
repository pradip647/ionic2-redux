//import here all the Epics

import { Injectable } from '@angular/core';
import { createEpicMiddleware } from 'redux-observable';
import { LoginEpics } from '../epics/login_epic';
import { ListEpics } from '../epics/list_epic';

@Injectable()
export class RootEpics {
  constructor(
      private loginepics: LoginEpics,
      private listepics: ListEpics,
  ) {}

  public createEpics() {
    return [
        createEpicMiddleware(this.loginepics.login),
        createEpicMiddleware(this.listepics.list),
    ];
  }
}