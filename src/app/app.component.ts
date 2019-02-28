import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ShopState } from './shared/shop.state';
import * as shopActions from '../app/store/shop.actions';
import * as shopReducer from '../app/store/shop.reducers';
import { ShopItem } from './shared/shop-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'laukinukas v3';
  constructor() {}
  // dispatch the AppLoaded action here or in the constructor?
}
