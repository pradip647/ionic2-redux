import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListActions } from '../../actions/list_action';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { Friend_List } from '../../core/list_session';
import { DetailsPage } from '../details/details';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  @select(['friend_list', 'friends'])
  readonly friends$: Observable<Friend_List>;

  @select(['friend_list', 'loading'])
  readonly loading$: Observable<boolean>;

  @select(['friend_list', 'error'])
  readonly error$: Observable<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public listactions:ListActions) {
    this.listactions.searchList();
  }

//go to details page with params
gotoDetails(data){
  this.navCtrl.push(DetailsPage,{data:data})
}

}
