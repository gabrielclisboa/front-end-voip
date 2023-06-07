import { Component,Output,Input,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss']
})
export class PagamentoComponent {

  @Input() visible : boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  selectedPaymentOption: string;
  recordingValue : number;
  recordingFormat: string;
  totalValue: number;

  constructor() {
    // Inicialize os valores do resumo do pagamento
    this.visible= false;
    this.selectedPaymentOption="R$ 500,00"
    this.recordingValue  = 50; // Valor da gravação do áudio
    this.recordingFormat = 'MP3'; // Formato da gravação do áudio
    this.totalValue = 50; // Valor total em reais
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
  

  hide() {
    this.visibleChange.emit(false);
  }

}
