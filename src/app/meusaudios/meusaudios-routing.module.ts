import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeusaudiosComponent } from './meusaudios/meusaudios.component';

const routes: Routes = [
  {path:'',component:MeusaudiosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeusaudiosRoutingModule { }
