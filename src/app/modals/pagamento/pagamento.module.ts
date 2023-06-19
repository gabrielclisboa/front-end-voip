import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PagamentoService } from 'src/app/service/pagamento.service';

@NgModule({
  declarations: [
    PagamentoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    ReactiveFormsModule,
    CardModule
  ],
  exports:[PagamentoComponent],

  providers:[PagamentoService]
})
export class PagamentoModule { }
