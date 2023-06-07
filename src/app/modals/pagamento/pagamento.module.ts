import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    PagamentoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  exports:[PagamentoComponent]
})
export class PagamentoModule { }
