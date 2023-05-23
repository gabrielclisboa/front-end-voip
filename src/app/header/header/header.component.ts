import {MenuItem, PrimeNGConfig} from 'primeng/api';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];
  showMenu = false;
  mobileMode=false;
  sidebarVisible = false;

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
  ]
  this.mobileMode = this.isMobile();
  }

  isMobile(): boolean {
    const windowWidth = window.innerWidth;

    console.log(windowWidth)
    return windowWidth < 900; // Defina a largura de acordo com a resolução desejada para dispositivos móveis
  }

}
