import { Component, Output, Input, EventEmitter } from '@angular/core';
import { PagamentoService } from 'src/app/service/pagamento.service';
import { tap } from 'rxjs/operators';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss']
})
export class PagamentoComponent {
  paymentForm: FormGroup; // FormGroup para o formulário

  @Input() idAudio!: number;
  @Input() idUsuario!: number;
  @Input() valorCompra!: number;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  selectedPaymentOption: string;
  recordingValue: number;
  recordingFormat: string;
  totalValue: number;

  constructor(private pagamentoService: PagamentoService) {
    // Inicialize os valores do resumo do pagamento
    this.visible = false;
    this.selectedPaymentOption = "USD$ " + this.valorCompra + ",00"
    this.recordingValue = this.valorCompra; // Valor da gravação do áudio
    this.recordingFormat = '.WAV'; // Formato da gravação do áudio
    this.totalValue = this.valorCompra; // Valor total em reais

    // Inicialize o FormGroup e os FormControl
    this.paymentForm = new FormGroup({
      paymentOption: new FormControl()
    });
  }

  onPaymentMethodChange(paymentMethod: string) {
    this.selectedPaymentOption = paymentMethod;
  }

  proceedToPayment() {
    // Lógica para prosseguir com o pagamento
    console.log('Opção de pagamento selecionada:', this.selectedPaymentOption);
    console.log('Valor total a ser pago:', this.totalValue);
    // Faça qualquer ação necessária para prosseguir com o pagamento
  }
  onSubmit() {
    const valor = this.valorCompra;
    const id_user = this.idUsuario;
    const id_audio = this.idAudio;
    const id_type = this.paymentForm.controls['paymentOption'].value;
    this.pagamentoService.registerPagamento(valor, id_user, id_audio, id_type).pipe(
      tap((result: any) => {
        this.hide();
      })
    ).subscribe({
      error: (error: any) => {
        // Handle the registration error
        console.error('Registration failed:', error);
        // Perform error handling or display an error message to the user
      }
    });
  }

  hide() {
    this.visibleChange.emit(false);
  }
}
