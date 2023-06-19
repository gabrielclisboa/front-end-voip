import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoricopagamentosRoutingModule } from './historicopagamentos-routing.module';
import { HistoricopagamentosComponent } from './historicopagamentos/historicopagamentos.component';
import { HistoricoPagamentosService } from '../service/historicopagamentos.service';


@NgModule({
  declarations: [
    HistoricopagamentosComponent
  ],
  imports: [
    CommonModule,
    HistoricopagamentosRoutingModule
  ],
  providers:[HistoricoPagamentosService]
})
export class HistoricopagamentosModule { }
