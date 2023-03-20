import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FashionlistComponent } from './fashionlist/fashionlist.component';
import { RouterModule } from '@angular/router';
import { UtilityModule } from 'src/app/shared/utility/utility.module';
import { MensfashionComponent } from './mensfashion/mensfashion.component';
import { GirlsfashionComponent } from './girlsfashion/girlsfashion.component';
import { JewellaryComponent } from './jewellary/jewellary.component';
import { WatchesComponent } from './watches/watches.component';



@NgModule({
  declarations: [FashionlistComponent, MensfashionComponent, GirlsfashionComponent, JewellaryComponent, WatchesComponent],
  imports: [
    CommonModule,
    RouterModule,
    UtilityModule
  ]
})
export class FashionModule { }
