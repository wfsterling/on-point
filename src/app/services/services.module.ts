import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ChineseMedicineComponent } from './chinese-medicine/chinese-medicine.component';
import { CosmeticTattoosComponent } from './cosmetic-tattoos/cosmetic-tattoos.component';
import { CustomTattoosComponent } from './custom-tattoos/custom-tattoos.component';

@NgModule({
  imports: [
    CommonModule,
    ServicesRoutingModule
  ],
  declarations: [ChineseMedicineComponent, CosmeticTattoosComponent,CustomTattoosComponent]
})
export class ServicesModule { }
