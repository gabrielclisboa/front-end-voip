import {MenuItem, PrimeNGConfig} from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../modals/login/login.service';
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
  isLogado = false;

  constructor(private primengConfig: PrimeNGConfig,private authService: AuthService) {}

  ngOnInit() {
    this.authService.getLoginStatus().subscribe((status: boolean) => {
      this.isLogado = status;
    });


    this.primengConfig.ripple = true;
    this.items = [{
      label: 'Áudios',
      items: [{
          label: 'Meus áudios',
          icon: 'pi pi-play',
          routerLink: ['/meusaudios']
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
    return windowWidth < 900; // Defina a largura de acordo com a resolução desejada para dispositivos móveis
  }

}
