import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { CarrierComponent } from './carrier/carrier.component';
import { CodeComponent } from './code/code.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path: 'add', component: AddComponent},
  {path:'list', component:ListComponent},
  {path: 'code', component:CodeComponent},
  {path:'route',component: CarrierComponent},
  {path: '**', redirectTo: '/list', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
