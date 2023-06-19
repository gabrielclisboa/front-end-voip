import { Component, OnInit } from '@angular/core';
import { HistoricoPagamentosService } from 'src/app/service/historicopagamentos.service';
import { LoginService } from 'src/app/service/login.service';
import { Pagamento } from '../models/historicopagamentos.models';

@Component({
  selector: 'app-historicopagamentos',
  templateUrl: './historicopagamentos.component.html',
  styleUrls: ['./historicopagamentos.component.scss']
})
export class HistoricopagamentosComponent implements OnInit {


  pagamentos:Pagamento[] = [];

  constructor(private historicoPagamentosService : HistoricoPagamentosService,private loginService:LoginService){}

  ngOnInit(): void {
    this.getAudios(); 
  }  

  getAudios() {
    const userId = this.loginService.getLoggedInUsername();
    this.historicoPagamentosService.searchPagamentos(userId).subscribe(
      async (items: Pagamento[]) => {
        this.pagamentos = items;
      },
      (error: any) => {
        console.error('Ocorreu um erro ao obter os áudios:', error);
      }
    );
  }

   obterFormaPagamento(id: number): string {
    switch (id) {
      case 1:
        return "Pix";
      case 2:
        return "Boleto";
      case 3:
        return "Cartão de Crédito";
      case 4:
        return "Paypal";
      default:
        return "Forma de pagamento inválida";
    }
  }

}
