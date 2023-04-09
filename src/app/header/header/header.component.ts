import {MenuItem, PrimeNGConfig} from 'primeng/api';
import { Component } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  items: MenuItem[] = [];
  showMenu: boolean = false;


  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.items = [{
      label: 'Áudios',
      items: [{
          label: 'Meus áudios',
          icon: 'pi pi-play'
      },
      {
          label: 'Recursos utilizados',
          icon: 'pi pi-briefcase'
      }
      ]},
      {
          label: 'Pagamentos',
          items: [{
              label: 'Histórico de compras',
              icon: 'pi pi-book',
          },
          {
              label: 'Formas de Pagamento',
              icon: 'pi pi-credit-card'
          }
      ]},
      {
        label: 'Conta',
        items: [{
            label: 'Alterar Senha',
            icon: 'pi pi-lock',
        }
    ]}
  ];
  }

}