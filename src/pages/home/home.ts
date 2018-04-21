import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Credential, LoginData} from '../../core/login_session';
import {LoginActions} from '../../actions/login_action';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @select(['loginData', 'user'])
  readonly user$: Observable<LoginData>;

  @select(['loginData', 'loading'])
  readonly loading$: Observable<boolean>;

  @select(['loginData', 'error'])
  readonly error$: Observable<string>;


credential={
  username:'',
  password:''
}

  constructor(public navCtrl: NavController,public loginactions:LoginActions) {
    let x = this.user$.subscribe((res) => {
        if(res!=null){
          if(res[0].token){
            this.navCtrl.push(ListPage)
            //x.unsubscribe();
          }
        }
    });
  }

  loginSubmit(){
    console.log(this.credential);
    this.loginactions.loginUser({email:this.credential.username,password:this.credential.password});
  }

}
