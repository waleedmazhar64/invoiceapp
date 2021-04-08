import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerstatementPage } from './customerstatement.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerstatementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerstatementPageRoutingModule {}
