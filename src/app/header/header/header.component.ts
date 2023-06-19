import {MenuItem, PrimeNGConfig} from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
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

  constructor(private primengConfig: PrimeNGConfig,private loginService: LoginService) {
    this.isLogado = this.loginService.isLoggedIn();
  }

  ngOnInit() {
    this.loginService.loginStatusChanged.subscribe((status: boolean) => {
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
      ]},
      {
          label: 'Pagamentos',
          items: [{
              label: 'Histórico de compras',
              icon: 'pi pi-book',
              routerLink: ['/historicopagamentos']
          },
          {
              label: 'Contratar pacotes',
              icon: 'pi pi-credit-card'
          }
      ]},
      {
        label: 'Conta',
        items: [{
            label: 'Alterar Senha',
            icon: 'pi pi-lock',
        },
        {
          label:'Logout',
          icon:'pi pi-sign-out',
          command:(() => this.loginService.logout())
        }
    ]},
  ]
  this.mobileMode = this.isMobile();
  }

  isMobile(): boolean {
    const windowWidth = window.innerWidth;
    return windowWidth < 900; // Defina a largura de acordo com a resolução desejada para dispositivos móveis
  }

}
