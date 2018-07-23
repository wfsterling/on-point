import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services.component';
import { ChineseMedicineComponent } from './chinese-medicine/chinese-medicine.component';
import { CosmeticTattoosComponent } from './cosmetic-tattoos/cosmetic-tattoos.component';
import { CustomTattoosComponent } from './custom-tattoos/custom-tattoos.component';


const routes: Routes = [
  {
    path: 'services',
    component: ServicesComponent,
    children: [
      {
        path: 'chinese',
        component: ChineseMedicineComponent
      },
      {
          path: 'cosmetic',
          component: CosmeticTattoosComponent
      },
      {
          path: 'custom',
          component: CustomTattoosComponent
      },
      {
        path: '**',
        redirectTo: 'cosmetic'
    },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
