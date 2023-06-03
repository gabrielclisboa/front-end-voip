import { Injectable, EventEmitter } from '@angular/core';
import { LoginService } from './login.service';

import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  constructor(private loginService: LoginService) { }

  authenticate(username: string, password: string): boolean {
    // Lógica de autenticação (exemplo simplificado)
    if (true) {
      // Salva as informações de login no serviço de login
      this.loginService.saveLoginInfo(username, password);
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    // Chama o método de logout do serviço de login
    this.loginService.logout();
  }
}
