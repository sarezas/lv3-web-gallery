import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DatabaseService } from './services/database.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreModule, FirestoreSettingsToken} from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShopComponent } from './shop/shop.component';
import { FooterComponent } from './footer/footer.component';
import { PillowsComponent } from './shop/pillows/pillows.component';
import { CartComponent } from './shop/cart/cart.component';
import { SearchComponent } from './shop/search/search.component';
import { PuffsComponent } from './shop/puffs/puffs.component';
import { TentsComponent } from './shop/tents/tents.component';
import { BabyExComponent } from './shop/baby-ex/baby-ex.component';
import { MattsComponent } from './shop/matts/matts.component';
import { TBoxesComponent } from './shop/t-boxes/t-boxes.component';
import { CarouselComponent } from './shop/carousel/carousel.component';
import { ShopReducer } from './store/shop.reducers';
import { ShopEffects } from './effects/shop.effects';
import { FilterPipe } from './shop/filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarDirective } from './header/navbar.directive';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { AutofocusDirective } from './shop/autofocus.directive';

const notifierDefaultOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'left',
      distance: 12
    },
    vertical: {
      position: 'bottom',
      distance: 12,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 3000,
    onClick: false,
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopComponent,
    FooterComponent,
    PillowsComponent,
    CartComponent,
    PuffsComponent,
    TentsComponent,
    BabyExComponent,
    MattsComponent,
    TBoxesComponent,
    CarouselComponent,
    SearchComponent,
    FilterPipe,
    NavbarDirective,
    AutofocusDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(), // remove if problematic. adds offline capabilities
    EffectsModule.forRoot([ShopEffects]),
    StoreModule.forRoot({shop: ShopReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    BrowserAnimationsModule,
    NotifierModule.withConfig(notifierDefaultOptions)
  ],
  providers: [
    DatabaseService,
    AngularFirestore,
    AngularFireDatabase,
    { provide: FirestoreSettingsToken, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
