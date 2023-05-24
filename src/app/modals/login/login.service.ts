import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService  {
  private loginStatusSubject: Subject<boolean> = new Subject<boolean>();

  login() {
    // Lógica de autenticação do usuário

    // Emite o status de login
    this.loginStatusSubject.next(true);
  }

  getLoginStatus() {
    return this.loginStatusSubject.asObservable();
  }
}