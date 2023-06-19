import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { HttpClient,HttpParams  } from '@angular/common/http';
import { Observable, catchError, map, of, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PagamentoService  {

  constructor(private http: HttpClient) { }
  
  registerPagamento(valor:number,id_user:number,id_audio:number,id_type:number): Observable<string> {

    const url = 'http://localhost:5000/api/register_payment';
    const body={
        valor:valor,
        id_user:id_user,
        id_audio:id_audio,
        id_type:id_type
    }
    return this.http.post<any>(url, body).pipe(
        map((response: any) => {
          if (response.success) {
            const result = response.result;
            // Perform further actions with the audio file as needed
            return result;
          } else {
            console.error('Registration failed:', response.error);
            throw new Error('Registration failed');
          }
        }),
        catchError((error: any) => {
          // Handle request errors
          console.error('An error occurred during the request:', error);
          return of<string>(''); // Return an empty string or handle the error as needed
        })
      );
  }

}

