import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';
import { Response } from '../models/login.models';
import { Observable, catchError, map, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  constructor(private loginService: LoginService,private http: HttpClient) { }
  
  authenticate(username: string, password: string): Observable<boolean> {
    const url = 'http://localhost:5000/api/verify_login';
    const body = {
      login: username,
      senha: password,
    };
  
    return this.http.post<Response>(url, body).pipe(
      map((response: Response) => {
        console.log(response);
        // Lógica para tratar a resposta do servidor
        if (response.success) {
          this.loginService.saveLoginInfo(username, password);
          return true; // Requisição bem-sucedida
        } else {
          return false; // Login inválido
        }
      }),
      catchError((error: any) => {
        // Tratar erros na requisição
        console.error(error);
        return of<boolean>(false); // Erro na requisição
      })
    );
  }

  register(companyName: string, email: string, phone: string, password: string): Observable<boolean> {
    const url = 'http://localhost:5000/api/register_user'; // Substitua pela URL real de registro
    
    const body = {
      usuario: companyName,
      telefone: phone,
      login: email,
      senha: password
    };
    
    return this.http.post<Response>(url, body).pipe(
      map((response: Response) => {
        console.log(response);
        // Lógica para tratar a resposta do servidor
        if (response.success) {
          return true; // Registro bem-sucedido
        } else {
          return false; // Registro inválido
        }
      }),
      catchError((error: any) => {
        // Tratar erros na requisição
        console.error(error);
        return of<boolean>(false); // Erro na requisição
      })
    );
  }
  

  logout(): void {
    // Chama o método de logout do serviço de login
    this.loginService.logout();
  }
}

