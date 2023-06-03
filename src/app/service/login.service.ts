import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly USERNAME_KEY = 'username';
  private readonly PASSWORD_KEY = 'password';

  loginStatusChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  saveLoginInfo(username: string, password: string): void {
    localStorage.setItem(this.USERNAME_KEY, username);
    localStorage.setItem(this.PASSWORD_KEY, password);
    this.loginStatusChanged.emit(true); // Emitir evento de login bem-sucedido
  }

  getLoggedInUsername(): any {
    return localStorage.getItem(this.USERNAME_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.getLoggedInUsername();
  }

  logout(): void {
    localStorage.removeItem(this.USERNAME_KEY);
    localStorage.removeItem(this.PASSWORD_KEY);
    this.loginStatusChanged.emit(false); // Emitir evento de logout
  }
}
