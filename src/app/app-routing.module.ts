import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BabyExComponent } from './shop/baby-ex/baby-ex.component';
import { CartComponent } from './shop/cart/cart.component';
import { MattsComponent } from './shop/matts/matts.component';
import { NewItemsComponent } from './shop/new-items/new-items.component';
import { PillowsComponent } from './shop/pillows/pillows.component';
import { PuffsComponent } from './shop/puffs/puffs.component';
import { TBoxesComponent } from './shop/t-boxes/t-boxes.component';
import { TentsComponent } from './shop/tents/tents.component';
import { ShopComponent } from './shop/shop.component';
import { CarouselComponent } from './shop/carousel/carousel.component';

const routes: Routes = [
  { path: '', component: CarouselComponent },
  { path: 'baby-ex', component: BabyExComponent },
  { path: 'cart', component: CartComponent },
  { path: 'matts', component: MattsComponent },
  { path: 'new-items', component: NewItemsComponent },
  { path: 'pillows', component: PillowsComponent },
  { path: 'puffs', component: PuffsComponent },
  { path: 't-boxes', component: TBoxesComponent },
  { path: 'tents', component: TentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
