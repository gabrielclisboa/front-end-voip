import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { HttpClient,HttpParams  } from '@angular/common/http';
import { Response } from '../models/login.models';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { Pagamento } from '../historicopagamentos/models/historicopagamentos.models';
@Injectable({
  providedIn: 'root'
})
export class HistoricoPagamentosService  {

  constructor(private http: HttpClient) { }
  
  searchPagamentos(userId: string): Observable<Pagamento[]> {
    const url = 'http://localhost:5000/api/search_payment';
    const params = new HttpParams().set('id_user', userId);
    return this.http.get<Pagamento[]>(url, { params });
  }

}

