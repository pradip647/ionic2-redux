//Import here all Epics and Reducer_module from store and epic_module and Actions import

import { NgModule } from '@angular/core';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';;
import { createLogger } from 'redux-logger';
import { IAppState } from '../core/store_modal';
import { LoginActions } from '../actions/login_action';
import { RootEpics } from './epic_module';
import { rootReducer } from './reducer_module';
import { LoginEpics } from '../epics/login_epic';
import { ListActions } from '../actions/list_action';
import { ListEpics } from '../epics/list_epic';


@NgModule({
  providers: [
    LoginActions,
    RootEpics,
    LoginEpics,
    ListActions,
    ListEpics
  ]
})

export class StoreModule {
  
  constructor(
    public store: NgRedux<IAppState>,
    devTools: DevToolsExtension,
    rootEpics: RootEpics,
  ) {
    store.configureStore(
      rootReducer,
      {},
      [ createLogger(), ...rootEpics.createEpics() ],
      devTools.isEnabled() ? [ devTools.enhancer() ] : []);
  }
}