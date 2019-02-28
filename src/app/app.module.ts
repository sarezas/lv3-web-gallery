import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DatabaseService } from './services/database.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShopComponent } from './shop/shop.component';
import { FooterComponent } from './footer/footer.component';
import { PillowsComponent } from './shop/pillows/pillows.component';
import { CartComponent } from './shop/cart/cart.component';
import { NewItemsComponent } from './shop/new-items/new-items.component';
import { PuffsComponent } from './shop/puffs/puffs.component';
import { TentsComponent } from './shop/tents/tents.component';
import { BabyExComponent } from './shop/baby-ex/baby-ex.component';
import { MattsComponent } from './shop/matts/matts.component';
import { TBoxesComponent } from './shop/t-boxes/t-boxes.component';
import { CarouselComponent } from './shop/carousel/carousel.component';
import { ShopReducer } from './store/shop.reducers';
import { ShopEffects } from './effects/shop.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopComponent,
    FooterComponent,
    PillowsComponent,
    CartComponent,
    NewItemsComponent,
    PuffsComponent,
    TentsComponent,
    BabyExComponent,
    MattsComponent,
    TBoxesComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    EffectsModule.forRoot([ShopEffects]),
    StoreModule.forRoot({shop: ShopReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [DatabaseService, AngularFirestore, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
