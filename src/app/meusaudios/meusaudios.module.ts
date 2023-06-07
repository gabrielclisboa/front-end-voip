import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeusaudiosRoutingModule } from './meusaudios-routing.module';
import { MeusaudiosComponent } from './meusaudios/meusaudios.component';
import { TableModule } from 'primeng/table';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    MeusaudiosComponent
  ],
  imports: [
    CommonModule,
    MeusaudiosRoutingModule,
    TableModule,
    BsDatepickerModule.forRoot()
  ]
})
export class MeusaudiosModule { }
